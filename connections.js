
function listen(io) {

  io.on("connection", (client) => {
    console.log("client connected")
  })

}


module.exports = {
  listen,
}