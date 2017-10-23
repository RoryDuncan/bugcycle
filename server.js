const Koa = require("koa")
const next = require("next")

const app = require("./app")
const port = parseInt(process.env.PORT, 10) || 3000


app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(require("routes/index").routes());

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})