const fs = require('graceful-fs')
let nms = fs.readdirSync('node_modules')
let rootdir = path.resolve(".")
rootdir
let pkgjson = `${rootdir}\\package.json`
pkgjson
let pkgjsonObj = JSON.parse(fs.readFileSync(pkgjson).toString())
let deps = Object.keys(pkgjsonObj.dependencies)
deps