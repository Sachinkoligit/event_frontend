import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "event-backend-bay.vercel.app",
  withCredentials: true,
});
