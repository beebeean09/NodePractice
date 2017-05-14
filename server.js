const express = require('express');
const app = express();
const http = require('http');


app.get('/', function(request, response) {
  response.send('Hello Express!');
});

app.use('/api', require('./routes/routes.js'));

app.listen(3000);

// const server = http.createServer(function(request, response) {
//   response.write('Hello Express from http!');
//   response.end();
// });

// server.listen(3000);
