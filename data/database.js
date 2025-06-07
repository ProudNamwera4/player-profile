const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const MongoClient = require("mongodb").MongoClient;

mongoose.connect("mongodb://localhost/player-profile", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


let database;

const initDb = (callback) => {
  if (database) {
    console.log("Db is already initialized!");
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error("Database not initialized");
  }
  return database;
};

module.exports = { initDb, getDatabase, mongoose };
