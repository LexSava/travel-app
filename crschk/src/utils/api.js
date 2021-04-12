export const url = "https://travel-app-team-52.herokuapp.com/";

export const getCountries = (lang) => {
  return fetch(`${url}countries?lang=${lang}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get countries with error", e);
    });
};

export const getCountry = (lang, ISOCode) => {
  return fetch(`${url}countries/${ISOCode}?lang=${lang}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get country with error", e);
    });
};

export const postAttractionRating = (ISOCode, attractionId, userLogin, score) => {
  return fetch(`${url}countries/${ISOCode}/${attractionId}?login=${userLogin}&score=${score}`, {
    method: "POST",
  })
    .then((response) => response.ok)
    .catch((e) => {
      console.log("cant rate with error", e);
    });
};

export const getCountryOfTheDay = (lang) => {
  return fetch(`${url}countries/countryoftheday?lang=${lang}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get country of the day with error", e);
    });
};

export const signin = (body) => {
  return fetch(`${url}signin`, { method: "POST", body: body })
    .then((res) => {
      const response = res.status === 200 ? { status: res.status, user: res.json() } : res;
      return response;
    })
    .catch((e) => console.log("cant signin with error", e));
};

export const signup = (body) => {
  return fetch(`${url}signup`, { method: "POST", body: body })
    .then((res) => {
      const response = res.status === 200 ? { status: res.status, user: res.json() } : res;
      return response;
    })
    .catch((e) => console.log("cant signup with error", e));
};

export const getLocales = () => {
  return fetch(`${url}locale/`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get country with error", e);
    });
};

export const getLocaleTxt = (lang) => {
  return fetch(`${url}locale/${lang}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get texts with error", e);
    });
};
