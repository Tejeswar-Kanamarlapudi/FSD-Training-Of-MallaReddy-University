const http = require('http')
const url = require('url')

const server = http.createServer( (req,res) => {
    if(req.method==='GET' && req.url.startsWith('/search')){
        const query = url.parse(req.url,true).query
        res.writeHead(200, {'content-type':'application/json'} )
        res.end(
            JSON.stringify( {message:'Query Received',query} )
        )
    } else{
        res.writeHead(404, {'content-type':'text/plain'} )
        res.end('Page Not Found')
    }
} )

const PORT=3000

server.listen(PORT,()=>{
    console.log('Server Running at http://localhost:3000');
})