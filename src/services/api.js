// src/services/api.js
import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};
