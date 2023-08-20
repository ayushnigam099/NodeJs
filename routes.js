function handler(req,res){
    const url = req.url;
    const method = req.method;
    const fs = require('fs');
  
    if (url === '/') {
      if (method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFileSync('message.txt', message); // Write new message to the file
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
      } 
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1>');
  
        // Read the last message from the file and display it
        const lastMessage = fs.readFileSync('message.txt', 'utf8');
        res.write(`<p>${lastMessage}</p></div>`);
  
        res.write('<form action="/" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
      }
    }
}
// module.exports={
//     handlerr: handler
// };
// module.exports=handler;
// module.exports.handlerr= handler;
exports.handlerr=handler;