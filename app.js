// include packages
var express = require('express');

// create an http server
var app = express();



// listen for incoming requests
app.listen(3030, function() {
  console.log('guessMovieApp listening on port 3030');
});
