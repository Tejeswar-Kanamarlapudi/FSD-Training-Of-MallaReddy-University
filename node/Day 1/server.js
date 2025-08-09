const http = require('http')
const PORT = 3001

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.setHeader('College-Name','MRUH');
    res.end('Hello world')
})

server.listen(PORT,()=>{
    console.log('Server running at http://localhost:3001');
})