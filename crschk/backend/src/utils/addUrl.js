const addUrl = (obj, prop, url) => {
  if (!obj[prop].startsWith("http")) {
    obj[prop] = url + "/" + obj[prop];
  }
};

module.exports = addUrl;
