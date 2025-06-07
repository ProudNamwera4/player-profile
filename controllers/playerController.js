const player = require("../models/player");

exports.getPlayers = async (req, res) => {
  try {
    const players = await player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPlayer = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No player data provided" });
      return;
    }
    const newPlayer = new player(req.body);
    await newPlayer.save();
    res.json(newPlayer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
