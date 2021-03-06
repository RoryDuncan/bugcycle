const Router = require("koa-router")
const router = new Router()

const app = require("../app")
const handle = app.getRequestHandler()

router.get("*", async ctx => {
  await app.render(ctx.req, ctx.res, "/", ctx.query)
  ctx.respond = false
});

module.exports = router;