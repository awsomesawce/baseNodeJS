"use strict";

const fs = require('fs')
const path = require('path')
const lodash = require('lodash')
const immutable = require('immutable')

let pkgs;
pkgs = fs.readdirSync('./node_modules')
let pkgjson = require(path.resolve('./package.json'))
pkgjson
let localBin = path.resolve(path.join("node_modules", pkgs[0]))
let localBinContent = fs.readdirSync(localBin)
localBinContent
const crossSpawn = require('cross-spawn')


let files = x();
console.log(files);
let one = immutable.Map({"key": "val"});
