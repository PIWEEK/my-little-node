const Koa = require("koa");
const Router = require('koa-router');
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

// router

router.get('/', function (ctx) {
    ctx.body = {obj: 27, obj2: "hola"};
});

app
  .use(router.routes())
  .use(router.allowedMethods());

console.log("Listening in port 3000")
app.listen(3000);
