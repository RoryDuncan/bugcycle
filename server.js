const Koa = require("koa")
const next = require("next")
const socketio = require("socket.io")
const http = require("http")

const app = require("./app")
const port = parseInt(process.env.PORT, 10) || 3000

const koaApp = new Koa()
const server = http.createServer(koaApp.callback());
const io = socketio(server)
const connections = require("./connections.js")

app.prepare().then(() => {

  koaApp.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  // apply our routes
  koaApp.use(require("./routes/index").routes());

  // apply our websocket connection listeners
  connections.listen(io)

  server.listen(port);

})


module.exports = {
  koaApp,
  server,
  socketIO: io,
}