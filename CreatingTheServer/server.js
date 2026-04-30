const http = require('http'); // requesting the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader("Content-Type", 'text/html');

    res.write('<head><link rel ="StyleSheet" href="#"></head>')
    res.write('<p>hello,ninjas</p>');
     res.write('<p>hello again,ninjas</p>');
    res.end();
}); // creating the server
server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000")
})
