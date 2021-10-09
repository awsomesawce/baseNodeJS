#!/usr/bin/env node
// This file simply assigns the full pathnames of each node_modules dir into
// an array.
// Working with VSCode and node

'use strict';
const fs = require('fs');
const path = require('path');
const pkgjson = require(path.resolve('./package.json'));

const deps = pkgjson["dependencies"];

const welcomeMessage = "Welcome to node";
console.log(welcomeMessage);

let notes = {};
notes.description = "Notes taken while inside repl";

let pkgs = fs.readdirSync('./node_modules');

// This should list the full paths of each dir
let fullPkgs = pkgs.forEach((v, i) => {
    console.log(path.resolve(path.join("node_modules", v)))
});

/**
 * myFullPkgs simply returns the array value instead of logging it.
 */
let myFullPkgs = () => {
    pkgs.forEach((v, i) => {
        return path.resolve(path.join('node_modules', v))
    })
}
let fullNames = myFullPkgs()
console.log(fullNames)
