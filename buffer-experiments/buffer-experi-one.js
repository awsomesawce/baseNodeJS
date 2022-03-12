const { Buffer } = require('buffer');
const fs = require('fs');
const path = require('path');

const log = console.log || require('console').log

const AUTHOR = "Carl C."

const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const bufObj = {
    buf1: buf1,
    description: `This is a js file by author: ${AUTHOR}`,
    bufFrom: Buffer.from('hello world', 'utf8'),
    // an example of using `this` on an obj.
    bufFromString: function () {
        console.log(this.bufFrom.toLocaleString())
    },
}

log(bufObj);
log(bufObj.bufFromString())
