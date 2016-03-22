#!/usr/bin/env node
"use strict"
require('./helper')
let path = require('path')
let fs = require('fs').promise
let co = require('co')




function* cat() {
    let val = process.argv[2] 
    let content = yield fs.readFile(val,'utf8', function (err, data) {
               if (err) {
                  return console.error(err);
                }
               return data
               })
    console.log(content)
}
module.exports = cat


