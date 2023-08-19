const http = require('http');

const server = http.createServer((request, response) => {
    const reqq= request.url;
    switch(reqq)
    {
        case ('/'):
            {
                response.end('Welcome to my server');
                break;
            }
        case ('/home'):
        {
            response.end('Welcome home');
            break;
        }
        case ('/about'):
            {
                response.end('Welcome to About Us page');
                break;
            }
        case ('/node'):
            {
            response.end('Welcome to my Node Js project');
            break;
           }
           default:
            {
                response.end("404 Not Found!");
            }
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server started at ${port}`);
});