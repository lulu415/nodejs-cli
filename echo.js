#!/usr/bin/env node
"use strict"
require('./helper')
let fs = require('fs').promise

function* echo() {
    // Use 'yield' in here
    // Your implementation here
    // console.log(yield fs.readFile(__filename, console.log))
     process.argv.forEach(function (val, index) {
        if (index>=2)
        {
          process.stdout.write(val+' ');
        }
    });
    process.stdout.write('\n')
}

module.exports = echo
