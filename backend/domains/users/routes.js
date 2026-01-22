import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
connectDb();

router.get("/", async (req, res) => {
  try {
    const userDoc = await User.find();

    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  connectDb();

  const {email, password} = req.body
  
  try {
    const userDoc = await User.findOne({ email })

    if (userDoc) {
    const passwordCorrect = bcrypt.compareSync(password, userDoc.password)
    const {name, _id} = userDoc;


    passwordCorrect ? res.json({name, email, _id}) : res.status(400).json("Senha errada meu mano")
    } else {
      res.status(400).json("Usuário não cadastrado" )
    } 
  } catch (error) {
    res.status(500).json(error);
  }
  

})

export default router;
