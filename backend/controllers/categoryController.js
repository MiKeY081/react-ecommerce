import { prisma } from "../config/prismaconfig.js";

const getCategories = async (req, res) => {
  const categories = await prisma.category.findMany();
  try {
    if (!categories) {
      res.send({
        success: false,
        message: "Category not found",
      });
    } else {
      res.send({
        success: true,
        message: "Categories loaded successfully",
        categories,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUnique({ where: { id } });
    res.send({
      success: true,
      message: "Category loaded",
      category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  const { type } = req.body;
  try {
    const category = await prisma.category.create({
      data: { type },
    });
    res.send({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id },
      data: { type },
    });
    res.send({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.delete({ where: { id } });
    res.send({
      success: true,
      message: "Category deleted successfully",
      category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
