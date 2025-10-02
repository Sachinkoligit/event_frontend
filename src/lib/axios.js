import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "event-backend-gamma.vercel.app/api",
  withCredentials: true,
});
