const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    const num = _.random(0,20);
    console.log(num);

    const greet =_.once(()=>{
        console.log("hello");
    })

    greet();
    greet(); // if we run it twice it will not work because we used the once method
    res.setHeader("Content-Type", 'text/html');

    let path = '../views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
   case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about')
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {  // ✅ use `path`, not hardcoded string
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);  // ✅ send the file data
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("listening for request on ports 3000");
});