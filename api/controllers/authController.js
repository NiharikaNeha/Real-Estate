import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //Hashing The Password

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //Creating A New User And Saving It In The DataBase
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Checking If The User Exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    //Checking If The Password Is Correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    //Generate Cookie Token And Send To The User

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
    const age = 1000 * 60 * 60 * 24 * 7
    res.cookie("test2", "myValue2", {
      httpOnly: true,
      // secure: true,
      maxAge: age,
    }).status(200).json({message: "Login Successful"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const logout = (req, res) => {
  //DB Operations
};
