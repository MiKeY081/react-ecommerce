import { prisma } from "../config/prismaconfig.js";

const createOrder = async (req, res) => {
  const { id } = req.user;
  const { productId, order } = req.body;
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    const owner = await product.userId;
    console.log(owner);
    console.log(product);
    const newOrder = await prisma.order.create({
      data: {
        order,
        productId,
        requester: id,
        userId: id,
        owner,
      },
    });
    res.send({
      success: true,
      message: "Order placed successfully",
      newOrder,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { order } = req.body;
  try {
    if (id) {
      if (order === "REJECTED") {
        res.send({
          success: true,
          message: "Order rejected ",
        });
      }
      if (order === "DELIVERED") {
        res.send({
          success: true,
          message: "Order completed successfully ",
        });
        const beforeOrder = await prisma.order.delete({ where: { id } });
      }
    } else {
      res.send({
        success: false,
        message: "Order not found",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.delete({
      where: {
        id,
      },
    });
    res.send({
      success: true,
      message: "Order deleted successfully",
      order,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({ where: { id } });
    res.send({
      success: true,
      message: "Order found",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.send({
      success: true,
      message: "Orders found",
      orders,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
export { createOrder, updateOrder, deleteOrder, getOrderById, getOrders };
