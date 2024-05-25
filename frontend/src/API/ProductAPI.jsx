import axios from "axios";

const ProductAPI = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(`/product/getproducts`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(`/product/getproduct/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  },

  createProduct: async (productData) => {
    try {
      const response = await axios.post(`/product/create`, productData);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const response = await axios.put(
        `/product/update/${productId}`,
        productData
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${productId}:`, error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`/product/delete/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  },
};

export default ProductAPI;
