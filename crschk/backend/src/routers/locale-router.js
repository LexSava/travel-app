const Router = require("@koa/router");
const fs = require("fs");
const path = require("path");
const dict_en = require('./../../data/dict_en.json')
const dict_ru = require('./../../data/dict_ru.json')
const dict_uk = require('./../../data/dict_uk.json')

const localeRouter = new Router({ prefix: "/locale" });
const pathToData = path.resolve(__dirname, "../../data/");

const languages = {
  en_US: dict_en,
  ru_RU: dict_ru,
  uk_UA: dict_uk,
}

localeRouter.get("/", async (ctx, next) => {
  ctx.body = [
    {
      lang: 'en_US',
      name: 'English'
    },
    {
      lang: 'ru_RU',
      name: 'Русский'
    },
    {
      lang: 'uk_UA',
      name: 'Українська'
    },
  ]
  await next();
});

localeRouter.get("/:lang", async (ctx, next) => {
  const lang = ctx.params.lang;
  ctx.body = languages[lang];
  await next();
});

module.exports = localeRouter.routes();
