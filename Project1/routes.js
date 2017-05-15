const express = require('express');
const router = express.Router();

router.get('/boba', function(request, response) {
  response.send('<h1>Boba Stores!</h1>');
});

router.get('/greeting', function(request, response) {
  response.render('greeting', { name: 'Vivian Lee'});
});


module.exports = router;
