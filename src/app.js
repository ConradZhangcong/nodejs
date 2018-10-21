const http = require("http")
const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
const conf = require("./config/defaultConfig")

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url)
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404
      res.setHeader("Content-Type", "text/plain")
      res.end(`${filePath} is not a directory or file`)
      return
    }
    if (stats.isFile()) {
      res.statusCode = 200
      res.setHeader = ("Content-type", "text/plain")
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        res.statusCode = 200
        res.setHeader = ("Content-type", "text/plain")
        res.end(files.join(","))
      })
    }
  })
  // res.statusCode = 200
  // res.setHeader("Content-Type", "text/html")
  // res.end(filePath)
})

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}/`
  console.log(`Server running at ${chalk.green(addr)}`)
})
