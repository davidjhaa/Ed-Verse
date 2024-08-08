import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:8000/api/v1/auth";

export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signUp`, userData);
      
      if (response.status === 200) {
        toast.success(response.data.message);
        return response.data;
      } else {
        toast.error(response.data.message || "An unexpected error occurred.");
      }
    } 
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during registration");
      }
      throw error;
    }
  };

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    if(response.status === 200)
        toast.success(response.data.message);
    else
        toast.error(response.data.message)
    return
  } 
  catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred during login");
    }
    throw error;
  }
};
