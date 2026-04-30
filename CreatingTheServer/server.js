const http = require('http'); // requesting the server
const server = http.createServer((req,res)=>{
console.log('reqeuest made')
}); // creating the server
server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000")
})
