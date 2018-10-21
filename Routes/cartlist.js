const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectID;
var fs = require('fs');
const uri = "mongodb+srv://venkatesh:ivedamar.91@node-mongo-jyags.mongodb.net/test?retryWrites=true";

module.exports = {
    postShoppingListdish: async (req, res) => {
        try {
            const _id = req.body.id;
            console.log(req.body.data);
            const client = await MongoClient.connect(uri, { useNewUrlParser: true });
            const collection = client.db("shoppingCart").collection("shoppingList");
            const insertData = await collection.updateOne({ _id: new ObjectId(_id) }, { $push: {dishItems: req.body.data} });
            if (insertData) {
                res.status(200).json({ success: true, message: 'Inserted successfully' });
            }
        } catch (error) {
            res.status(400).json({ success: false, message: 'something went wrong. Insrtion failed!', error: error });
        }
    },

    postnewcategorydata: async (req, res) => {
        try {
            const client = await MongoClient.connect(uri, { useNewUrlParser: true });
            const collection = client.db("shoppingCart").collection("shoppingList");
            const insertData = await collection.insert(req.body.data);
            if (insertData) {
                res.status(200).json({ success: true, message: 'Inserted successfully' });
            }
        } catch (error) {
            res.status(400).json({ success: false, message: 'something went wrong. Insrtion failed!', error: error })
        }
    },
    getShoppingList: async (req, res) => {
        try {
            const client = await MongoClient.connect(uri, { useNewUrlParser: true });
            const collection = client.db("shoppingCart").collection("shoppingList");
            const insertData = await collection.find().toArray();
            var imgData = [];
            fs.readdirSync('./images/uploads').forEach(file => {
                var base64String = './images/uploads/'+file+'';
                var body = fs.readFileSync(base64String);
                imgData.push({data: body.toString('base64'), fileName: file});
              })
              res.status(200).json({ success: true, data: insertData, imgData: imgData});
        } catch (error) {
            res.status(400).json({ success: false, message: 'something went wrong. Insertion failed!', error: error })
        }
    }
};