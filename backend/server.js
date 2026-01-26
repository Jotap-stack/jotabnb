import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";

const app = express();
const { PORT } = process.env;

// Conectar ao MongoDB
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use('/users', UserRoutes)

app.listen(PORT, () => {
  console.log(`server running in PORT ${PORT}`);
});
