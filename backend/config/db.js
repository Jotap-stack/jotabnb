import "dotenv/config";
import mongoose, { mongo } from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu Muito Certo GG");
  } catch (error) {
    console.log("Deu Ruim irmão", error);
  }
};
