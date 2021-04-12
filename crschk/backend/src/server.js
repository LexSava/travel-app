const Koa = require("koa");
const cors = require("@koa/cors");
const { koaSwagger } = require("koa2-swagger-ui");
const router = require("./routers/router");
const serve = require("koa-static");
const path = require("path");
const port = 3000;

const startServer = async () => {
  const app = new Koa();

  app.use(cors());
  app.use(serve(path.resolve(__dirname, "../data")));
  app.use(async (ctx, next) => {
    app.use(koaSwagger({ swaggerOptions: { url: `${ctx.request.origin}/swagger` }, hideTopbar: true }));
    await next();
  });

  app.use(router.routes());

  app.listen(port).on("listening", (ctx) => console.log(`watch docs on http://localhost:${port}/docs`));
};

module.exports = startServer;
