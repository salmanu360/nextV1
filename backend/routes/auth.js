import express from "express";
const router = express.Router();
/** This is the dotenv package for the enviroment variables 
 * @module dotenv 
 */
import dotenv from "dotenv";
/** This is the bcrypt.js module used for the hashing of the password
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

//--------------------------------------------
/** Route to create a new user in the database
 * @param (express.Request)  -The incoming request from the user to for the creation of account 
 * @param (express.Responce) -The response to the user after the successful creation of the account
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
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      //Check the user in DataBase
      const checkUser = await prisma.user.findFirst({
        where: {
          OR: [{ email: email }, { username: username }],
        },
      });
      if (checkUser) {
        return res.status(400).json({ error: "User already exist" });
      }
      // const salt = bcrypt.getSalt(10);
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
        },
      });
      res
        .status(201)
        .json({ message: "User cretaed successfully", user: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
);
export default router;
