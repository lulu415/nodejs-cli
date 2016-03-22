#!/usr/bin/env node
"use strict"
require('./helper')
let co = require('co')
let fs = require('fs').promise

let touch = co.wrap(function* (){
     process.argv.forEach(function (val, index)
     {
        if (index>=2)
        {
            fs.access(val,fs.F_OK, (err,stats)=>
            {
                if(err)
                {
                    fs.writeFile(process.argv[2],'', (err) => 
                    {
                        throw err
                    })
                 }
                else
                {
                    fs.open(val,'r', (err,fd) =>
                    {
                        now = new Date().getTime()
                        fs.futimes(fd, now, now, (err)=>
                        {
                            throw err
                        })
                        fs.close(fd,(err) =>
                        {
                            throw err
                        })
                    })
                   
                }

            })
        }
     })
})

function* main() {
  touch()
}

module.exports = main
