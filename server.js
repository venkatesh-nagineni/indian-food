const express = require('express');
const path = require('path');

const app = express();

var port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static('./dist/restraunt'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/restraunt/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function() {
  console.log("listening on port 5000")
});
