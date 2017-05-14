const express = require('express');
const router = express.Router();

router.get('/boba', function(request, response) {
  response.send('Boba Stores!');
});

module.exports = router;
