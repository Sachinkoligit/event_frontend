import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://event-backend-q6c6.onrender.com",
  withCredentials: true,
});
