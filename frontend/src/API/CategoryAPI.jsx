import axios from "axios";

const CategoryAPI = {
  getAllCategories: async () => {
    try {
      const response = await axios.get(`/category/getcategories`); // Replace with your category/ API endpoint
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  createCategory: async (categoryData) => {
    try {
      const response = await axios.post(`/category/create`, categoryData); // Replace with your category/ API endpoint for creating a category
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },

  updateCategory: async (categoryId, categoryData) => {
    try {
      const response = await axios.put(
        `/category/update/${categoryId}`,
        categoryData
      ); // Replace with your category/ API endpoint for updating a category
      return response.data;
    } catch (error) {
      console.error("Error updating category:", error);
      throw error;
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const response = await axios.delete(`/category/delete/${categoryId}`); // Replace with your category/ API endpoint for deleting a category
      return response.data;
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  },
};

export default CategoryAPI;
