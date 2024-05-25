import axios from "axios";

const UserAPI = {
  getUsers: async () => {
    try {
      const response = await axios.get(`/user/getusers`);
      return response.data;
    } catch (error) {
      console.error("Error getting users:", error);
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`/user/getuser`);
      return response.data;
    } catch (error) {
      console.error(`Error getting user ${userId}:`, error);
      throw error;
    }
  },
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`/user/getuser/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting user with ID ${userId}:`, error);
      throw error;
    }
  },

  registerUser: async (userData) => {
    try {
      const response = await axios.post(`/user/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  loginUser: async (userData) => {
    try {
      const response = await axios.post(`/user/login`, userData);
      return response.data;
    } catch (error) {
      console.error("Error Logging in:", error);
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`/user/updateuser/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`/user/deleteuser/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  },
};

export default UserAPI;
