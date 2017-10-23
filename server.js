const Koa = require("koa")
const next = require("next")
const socketio = require("socket.io")
const http = require("http")

const app = require("./app")
const port = parseInt(process.env.PORT, 10) || 3000

const koaApp = new Koa()
const server = http.createServer(koaApp.callback());
const io = socketio(server)

module.exports = {
  koaApp,
  server,
  socketIO: io,
}

app.prepare().then(() => {

  koaApp.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  koaApp.use(require("./routes/index").routes());

  server.listen(port);

})