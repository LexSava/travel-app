const path = require("path");
const fs = require("fs");
const Router = require("@koa/router");

const pathToApiJson = path.resolve(__dirname, "../openAPI/travell-app.json");

const docRouter = new Router({ prefix: "/swagger" });

docRouter.get("/", async (ctx, next) => {
  const str = fs.createReadStream(pathToApiJson);
  ctx.response.set("content-type", "application/json");
  ctx.body = str;
  await next();
});

module.exports = docRouter.routes();
