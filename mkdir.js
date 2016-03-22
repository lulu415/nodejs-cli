#!/usr/bin/env node
"use strict"
require('./helper')
let fs = require('fs').promise
let co = require('co')
let path = require('path')
let dir = process.argv[2]
let mkdir = co.wrap(function*(dir) {
  fs.mkdir(dir,function(err)
  {
     if (err)
     {
        console.log(err)
     }
  })
})

function* main() {
 mkdir(dir)
}

module.exports = main
