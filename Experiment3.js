// Create a basic HTTP server using http.createServer(), Respond with “Hello World” and return headers + status code
// 1. 200 - ok
// 2. 201 - created
// 3. 400 - bad respond 
// 4. 401 - unauthorized
// 5. 403 - forbidden
// 6. 404 - not found
// 7. 500 - internal server error
// 8. 503 - service unavailable

const  http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "content-type" : 'text/plaintext' ,
        "Server" : 'node.js'
    })
    res.end("Hello World");
});
port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});