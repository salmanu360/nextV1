import express from "express";
import connectToDataBase from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import Cors from "cors";
let cors = Cors;
dotenv.config();
let port = 5000;
connectToDataBase();
var app = express();
app.use(cors());
app.use(express.json());
//This is the path to authenticate user
app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
