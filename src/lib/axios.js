import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "event-backend-gamma.vercel.app/",
  withCredentials: true,
});
