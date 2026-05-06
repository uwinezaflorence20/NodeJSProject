const http = require('http'); // requesting the server
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader("Content-Type", 'text/html');

    let path = '../views/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += '404.html'
            break;
    }


    // res.write('<head><link rel ="StyleSheet" href="#"></head>')
    // res.write('<p>hello,ninjas</p>');
    //  res.write('<p>hello again,ninjas</p>');
    // res.end();

    // sent an html file
    fs.readFile('../views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end();
        }

    })

}); // creating the server
server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000")
})
