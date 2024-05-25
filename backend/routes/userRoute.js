import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  registerUser,
  updateUser,
  userLogin,
  getUserById,
} from "../controllers/userController.js";

const router = Router();

router.get("/user/getusers", getUsers);
router.get("/user/getuser", getUser);
router.get("/user/getuser/:id", getUserById);
router.post("/user/register", registerUser);
router.post("/user/login", userLogin);
router.put("/user/updateuser/:id", updateUser);
router.delete("/user/deleteuser/:id", deleteUser);

export { router as userRoute };
