import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController.js";

const router = Router();

router.post("/category/create", createCategory);
router.get("/category/:id", getCategoryById);
router.get("/category/getcategories", getCategories);
router.put("/category/update/:id", updateCategory);
router.delete("/category/delete/:id", deleteCategory);

export { router as categoryRoute };
