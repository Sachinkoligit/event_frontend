import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://event-backend-1-dmpg.onrender.com",
  withCredentials: true,
});
