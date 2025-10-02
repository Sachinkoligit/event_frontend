import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuthUser = create((set) => ({
  authUser: null,
  admin: null,
  allEvents: null,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null });
    }
  },
  adminCheckAuth: async () => {
    try {
      const res = await axiosInstance.get("/admin/check");
      set({ admin: res.data });
    } catch (error) {
      set({ admin: null });
    }
  },
  signup: async (data) => {
    set({ isSigninUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  },
  logout: async () => {
    try {
      await axiosInstance.get("/auth/logout");
      set({ authUser: null });
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  update: async (data) => {
    console.log(data);
    try {
      const res = await axiosInstance.put("/auth/update", data);
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in update profile");
      toast.error(error.response.data.message);
    }
  },
  create: async (data) => {
    try {
      const res = await axiosInstance.post("/event/create", data);
      // set({ authUser: res.data });
      toast.success("Event Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  adminLogin: async (data) => {
    try {
      const res = await axiosInstance.post("/admin/login", data);
      set({ admin: res.data });
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  },
  adminLogout: async () => {
    try {
      await axiosInstance.get("/admin/logout");
      set({ admin: null });
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  fetchEvents: async () => {
    try {
      const res = await axiosInstance.get("/event/events");
      set({ allEvents: res.data });
      // setEvents(res.data); // assuming res.data is an array of events
    } catch (error) {
      console.error("Error fetching events:", error.message);
    }
  },
}));
