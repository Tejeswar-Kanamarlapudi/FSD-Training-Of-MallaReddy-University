const http = require('http')
const fs = require('fs')

const server = http.createServer( (req,res) => {
    if(req.method==='GET' && req.url==='/'){
        fs.readFile('message.txt','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500, {'content-type':'text/plain'} )
                res.end('internal server error')
            } else{
                res.writeHead(200, {'content-type':'text/plain'} )
                res.end(data)
            }
        })
    } else{
        res.writeHead(404, {'content-type':'text/plain'} )
        res.end('Page Not Found')
    }
} )

const PORT=3000

server.listen(PORT,()=>{
    console.log('Server Running at http://localhost:3000');
})