import express from "express";
import connectToDataBase from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
dotenv.config();
let port = 3000;
connectToDataBase();
var app = express();
app.use(express.json());

console.log(`Server running on port ${port}`);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
