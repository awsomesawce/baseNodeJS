#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

function ls (dir) {
if (!dir) {
console.log(fs.readdirSync("."));
} else {
return fs.readdirSync(dir);
}
}

console.log(ls());
