import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
} from "../controllers/orderController.js";
import { isSignedIn } from "../middleware/userMiddleware.js";

const router = Router();

router.post("/order/create", isSignedIn, createOrder);
router.get("/order/orders", getOrders);
router.put("/order/update/:id", updateOrder);
router.delete("/order/delete/:id", deleteOrder);
router.get("/order/:id", getOrderById);

export { router as orderRoute };
