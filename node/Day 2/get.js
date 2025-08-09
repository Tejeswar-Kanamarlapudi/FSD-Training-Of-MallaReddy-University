const http = require('http')

const server = http.createServer( (req,res) => {
    if(req.method==='GET' && req.url==='/home'){
        res.writeHead(200, {'content-type':'text/plain'} )
        res.end('Welcome to Home Page')
    } else{
        res.writeHead(404, {'content-type':'text/plain'} )
        res.end('Page Not Found')
    }
} )

const PORT=3000

server.listen(PORT,()=>{
    console.log('Server Running at http://localhost:3000');
})