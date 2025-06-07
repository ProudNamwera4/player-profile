const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  age: Number,
  appearance: Number,
  goals: Number,
  assists: Number,
});

const player = mongoose.model("player", playerSchema);

module.exports = player;
