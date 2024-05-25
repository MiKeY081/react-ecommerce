import matchPassword from "../bcrypt/passwordMatch.js";
import { prisma } from "../config/prismaconfig.js";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      res.send({
        success: false,
        message: "User already exists",
      });
      return;
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send({
        success: false,
        message: "Please enter all fields",
      });
      return;
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.send({
        success: false,
        message: "User does not exist",
      });
      return;
    }
    if (matchPassword(password, user.password)) {
      const token = await jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        })
        .send({
          success: true,
          message: "User logged in successfully",
          user,
        });
    } else {
      res.send({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, image, dob, address } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email, phone, image, dob, address },
    });
    res.send({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    res.send({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      image: true,
      dob: true,
      address: true,
    },
  });

  try {
    res.send({
      success: true,
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    res.send({
      success: true,
      message: "User retrieved successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  const user = req.user;
  try {
    if (user) {
      res.send({
        success: true,
        user,
      });
    } else {
      res.send({
        success: false,
        message: "You are not logged in",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export {
  registerUser,
  userLogin,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  getUserById,
};
