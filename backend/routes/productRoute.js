import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { isSignedIn } from "../middleware/userMiddleware.js";

const router = Router();

router.post("/product/create", isSignedIn, createProduct);
router.get("/product/getproducts", getProducts);
router.put("/product/update/:id", updateProduct);
router.delete("/product/delete/:id", deleteProduct);
router.get("/product/getproduct/:id", getProductById);

export { router as productRoute };
