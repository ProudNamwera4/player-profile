const express = require("express");
const app = express();
const { initDb } = require("./data/database");

initDb((err, database) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Database connection established");

  // Initialize Express.js middleware and routes
  app.use(express.json());
  app.use("/api", require("./routes/playerProfile"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
