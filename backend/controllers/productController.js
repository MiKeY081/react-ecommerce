import { prisma } from "../config/prismaconfig.js";

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.send({
      success: true,
      message: "Product loaded",
      products,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    res.send({
      success: true,
      message: "Product loaded",
      product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(req.user);
    const {
      title,
      slug,
      description,
      price,
      discount,
      image,
      rating,
      size,
      Category,
    } = req.body;
    if (
      !title ||
      !description ||
      !price
      // || !image || !size
    ) {
      return res.send({
        success: false,
        message: "Please fill the necessary fields",
      });
    } else {
      const product = await prisma.product.create({
        data: {
          title,
          slug,
          description,
          price,
          discount,
          image,
          rating,
          size,
          Category,
          userId: id,
        },
      });
      res.send({
        success: true,
        message: "Product created successfully",
        product,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    slug,
    description,
    price,
    discount,
    image,
    rating,
    size,
    Category,
  } = req.body;
  try {
    if (!title || !description || !price || !image || !size) {
      return res.send({
        success: false,
        message: "Please fill the necessary fields",
      });
    }
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        description,
        price,
        discount,
        image,
        rating,
        size,
        Category,
      },
    });
    res.send({
      success: true,
      message: "Product updated Successfully",
      product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    res.send({
      success: true,
      message: "Product deleted Successfully",
      product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
export {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
