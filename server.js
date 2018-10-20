const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
var cors = require('cors');
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
const app = express();
var shoppingList = require('./Routes/cartlist.js');

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

router.post('/postShoppingListdish', shoppingList.postShoppingListdish);
router.post('/postnewCategoryData', shoppingList.postnewcategorydata);
router.get('/getShoppingList', shoppingList.getShoppingList);
