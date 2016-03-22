#!/usr/bin/env node
"use strict"
require('./helper')
let fs = require('fs').promise
let co = require('co')
let path = require('path')
let recursive =false
let dir = process.argv[2]

if (process.argv[2] == '-R'){
    recursive=true
    dir=process.argv[3]
}

let ls = co.wrap(function*(rootPath,recursive) {
  let stat = yield fs.stat(rootPath)
  if (stat.isDirectory()==false) {
         process.stdout.write(path.join(rootPath,path.basename(rootPath))+'\n')
         return;
  }
  let fileNames = yield fs.readdir(rootPath)
  for (let file of fileNames) 
  {
      let filePath = path.join(rootPath, file)
      if (recursive)
      {
        ls(filePath,true)
      }
      else
      {
         let stat = yield fs.stat(filePath)
         if (stat.isDirectory()==false) {
            process.stdout.write(file+'\n')
         }
      }
  }
})

function* main() {
 ls(dir,recursive)
}

module.exports = main
