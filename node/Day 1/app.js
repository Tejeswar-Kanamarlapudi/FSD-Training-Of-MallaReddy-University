// file system module

// const fs = require('fs')

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//     } else{
//         console.log(data);
//     }
// })

// const content = "This is file created by Node"

// fs.writeFile('output.txt',content,(err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log('File Written Successfully')
// })

// fs.appendFile('output.txt','\n FS Module Completed',(err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log('Data Appended');
// })


// path module
const path = require('path')

const directory = '/user/local'
const fileName = 'example.txt'

const fullPath = path.join(directory,fileName)
console.log(fullPath)

// os module

const os = require('os')
console.log('Platform:',os.platform());
console.log('CPU Architecture:',os.arch());
console.log('Total Memory:',os.totalmem());
console.log('Free Memory:',os.freemem());

// url module

const url = require('url')
const myUrl = new URL('https://www.youtube.com/results?search_query=mahavatar+narsimha+trailer')
console.log('Host:',myUrl.host);
console.log('PathName:',myUrl.pathname);
console.log('Search Parameter:',myUrl.searchParams.get('search_query'));

// crypto module

const crypto = require('crypto')
const hash = crypto.createHash('sha256');
hash.update('mruh@1234')

console.log('Hex hash code:',hash.digest('hex'));

// custom module
const sayHello = require('./greetings')
const msg = sayHello('Eswar')
console.log(msg);

// lodash (third party module)
const lodash = require('lodash')
const arr = [1,2,3,4,5]
const reversed = lodash.reverse(arr)
console.log(arr)






