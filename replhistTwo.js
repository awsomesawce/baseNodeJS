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