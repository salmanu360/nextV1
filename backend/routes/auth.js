import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
/** This is the dotenv package for the enviroment variables 
 * @module dotenv 
 */
import dotenv from "dotenv";
/** This is the bcrypt.js module used for the hashing of  password
 * @module bcrypt 
 */
import bcrypt from "bcryptjs";
/** Import body and validationResult from express-validator 
 * @module express-validation
 */
import { validationResult, body } from "express-validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
//--------------------------------------------
/** Route to create a new user in the database
 * @param (express.Request)  
 * @param (express.Responce) 
 * @returns (Promise<void>) 
 */

router.post(
  "/createUser",
  [
    body("username")
      .isLength({ min: 6 })
      .withMessage("The username must be 6 characters long"),
    body("email").isEmail().withMessage("Enter correct email formate"),
    body("password")
      .isLength({ min: 10 })
      .withMessage("Password must be 8 characters long"),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      //Check the user in DataBase
      let user = await prisma.user.findFirst({
        where: {
          OR: [{ email: email }, { username: username }],
        },
      });
      if (user) {
        success = false;
        return res.status(400).json({ success, error: "User already exist" });
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
        },
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      console.log("this is the data of the user", data);
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.status(201).json({
        success,
        message: "User cretaed successfully  with auth token ",
        authToken,
        User: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
);
export default router;
