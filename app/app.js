const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");

const Transactor = require("./transactor");
const Events = require("./events");

const app = new Koa();
const router = new Router();

// middleware x-response-time

router.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// middleware logger

router.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// bodyparser

router.use(BodyParser());

// router

router.post('/novelty', function (ctx) {
  let evtData = ctx.request.body;
  ctx.assert(Events.validate(evtData), 400, "Invalid event");
  result = Transactor.novelty(Events.create(evtData));
  console.log(result);
  ctx.status = 200;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
