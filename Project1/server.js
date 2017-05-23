const express = require('express');
const app = express();
const http = require('http');




app.use('/api', require('./routes.js'));
// app.use('/greeting', require('./greeting.jsx'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000);

// const server = http.createServer(function(request, response) {
//   response.write('Hello Express from http!');
//   response.end();
// });

// server.listen(3000);
