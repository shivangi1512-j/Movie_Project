const express = require("express");
const dotenv = require("dotenv");

const { connectDatabase } = require("./src/db/db");
const movieRoutes = require("./src/routes/movieRoutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDatabase();

app.use("/api/v1/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Movie API is Working.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Working ${process.env.PORT}`);
});
