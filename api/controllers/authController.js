import bcrypt from "bcrypt";
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

export const login = async(req, res) => {
  const { username, password } = req.body;

  try {
    //Checking If The User Exists
    const user = await prisma.user.findUnique({
        where: {username}
    })

    if(!user) return status(404).json({message: "User Not Found"})

    //Checking If The Passwor Is Correct

    //Generate Cookie Token And Send To The User
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const logout = (req, res) => {
  //DB Operations
};
