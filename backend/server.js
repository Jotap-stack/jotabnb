import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.get("/users", async (req, res) => {
  connectDb();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/users", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password,
    });
    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`server running in PORT ${PORT}`);
});
