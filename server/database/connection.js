require('dotenv').config()
const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI;

const mongoClient = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let dbConnection;

const databaseString = "item-database";



module.exports = {
    connectToServer: function (callback) {
      mongoClient.connect(function (err, db) {
        if (err || !db) {
          return callback(err);
        }
  
        dbConnection = db.db(databaseString);
        console.log('Successfully connected to MongoDB.');
  
        return callback;
      });
    },
  
    getDb: function () {
      return dbConnection;
    },
  };