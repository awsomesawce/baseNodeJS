const fs = require('fs')
const path = require('path')
const lodash = require('lodash')
const immutable = require('immutable')
"use strict"
let pkgs;
pkgs = fs.readdirSync('./node_modules')
let pkgjson = require(path.resolve('./package.json'))
pkgjson
let localBin = path.resolve(path.join("node_modules", pkgs[0]))
let localBinContent = fs.readdirSync(localBin)
localBinContent
const crossSpawn = require('cross-spawn')
let x;
x = () => {
for (i in pkgs) {
  return path.resolve(path.join('node_modules', i))
  }
}
x()
pkgs.forEach((y) => {
console.log(y)}
)
pkgs.forEach((y, z) => {
console.log(y)
})
pkgs.forEach((y, z) => {
console.log(y, z)})
let listWithPaths = () => {