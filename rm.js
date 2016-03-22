#!/usr/bin/env node
"use strict"
require('./helper')
let ls = require('./ls')
let fs = require('fs').promise
let co = require('co')
let path = require('path')
let dir = process.argv[2]
let rm = co.wrap(function*(dir) {
     let stat = yield fs.stat(dir)
     if (stat) {
        let fileNames = yield fs.readdir(dir)  
       for (let file of fileNames ) {
           let filePath = path.join(dir, file) 
           let stat = yield fs.stat(filePath)
           if(stat.isDirectory()) { 
                rm(filePath);
             } else { 
               fs.unlink(filePath);
           }
          }
          fs.rmdir(dir)
   } 
})

function* main() {
 rm(dir)
}

module.exports = main
