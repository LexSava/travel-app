const Router = require("@koa/router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");
const addUrl = require("../utils/addUrl");

const countryRouter = new Router({ prefix: "/countries" });
const pathToData = path.resolve(__dirname, "../../data/");
const pathToAttractions = path.resolve(pathToData, "attractions.json");
const pathToCountries = path.resolve(pathToData, "countries.json");

const parseCountry = (country, lang) => {
  const { name, capitalName, description } = country.lang[lang];
  const capitalCoordinates = country.capitalCoordinates;
  delete country.capitalCoordinates;
  delete country.lang;
  country.name = name;
  country.capital = {
    timeZoneName: country.capital.timeZoneName,
    name: capitalName,
    coordinates: capitalCoordinates,
  };
  country.description = description;
  return country;
};

countryRouter.get("/", async (ctx, next) => {
  const { lang = "ru_RU" } = ctx.query;

  const countries = JSON.parse(fs.readFileSync(pathToCountries, "utf-8")).map((country) => {
    const parsedCountry = parseCountry(country, lang);
    addUrl(parsedCountry, "image", ctx.request.origin);
    delete parsedCountry.description;
    delete parsedCountry.geometry;
    return parsedCountry;
  });

  ctx.response.set("content-type", "application/json");
  ctx.body = JSON.stringify(countries);
  await next();
});

countryRouter.get("/:ISOCode", async (ctx, next) => {
  const ISOCode = ctx.params.ISOCode;

  const { lang = "ru_RU" } = ctx.query;
  const countries = JSON.parse(fs.readFileSync(pathToCountries, "utf-8"));
  const country = countries.find((country) => country.ISOCode === ISOCode);
  if (country) {
    const users = JSON.parse(fs.readFileSync(path.resolve(pathToData, "users.json"), "utf-8"));
    const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8").filter(
      (attraction) => attraction.countryISO === ISOCode
    );

    const parsedCountry = parseCountry(country, lang);
    addUrl(parsedCountry, "image", ctx.request.origin);
    parsedCountry.attractions = attractions.map((attraction) => {
      const { name, description } = attraction.lang[lang];

      delete attraction.countryISO;
      delete attraction.lang;
      addUrl(attraction, "image", ctx.request.origin);

      attraction.name = name;
      attraction.description = description;

      if (attraction.ratings) {
        attraction.ratings = [
          ...attraction.ratings.map((rating) => {
            rating.user = { ...users.find((user) => user.login === rating.userLogin) };
            delete rating.user.password;
            delete rating.userLogin;
            addUrl(rating.user, "avatar", ctx.request.origin);
            return rating;
          }),
        ];
      }
      return attraction;
    });
    ctx.body = parsedCountry;
  } else {
    ctx.status = 404;
  }
  await next();
});

countryRouter.get("/countryoftheday", async (ctx, next) => {
  const { lang = "ru_RU" } = ctx.query;

  const countries = JSON.parse(fs.readFileSync(pathToCountries, "utf-8"));
  const country = countries[new Date().getDate() % countries.length];

  ctx.response.set("content-type", "application/json");
  ctx.body = lang ? parseCountry(country, lang) : parseCountry(country, "ru_RU");
  ctx.status = 200;
  await next();
});

countryRouter.post("/:ISOCode/:attractionId", koaBody(), async (ctx, next) => {
  const { login, score } = ctx.query;
  const newRating = { userLogin: login, score };
  const { attractionId, ISOCode } = ctx.params;

  const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8");
  const attraction = attractions.find((attraction) => attraction.id === attractionId);
  if (attraction) {
    if (!attraction.ratings) {
      attraction.ratings = [];
    }
    const userIndex = attraction.ratings.findIndex((rating) => {
      return rating.userLogin === login;
    });
    userIndex !== -1
      ? (attraction.ratings[userIndex] = newRating)
      : attraction.ratings.push(newRating);
    attraction.rating = Math.floor(
      attraction.ratings.reduce((acc, rait) => acc + +rait.score, 0) / attraction.ratings.length
    );
    fs.writeFileSync(pathToAttractions, JSON.stringify(attractions));
    ctx.status = 200;
  } else {
    ctx.status = 404;
  }
  await next();
});

module.exports = countryRouter.routes();
