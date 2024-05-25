import { prisma } from "../config/prismaconfig.js";
import jwt from "jsonwebtoken";

const isSignedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id } });
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export { isSignedIn };
