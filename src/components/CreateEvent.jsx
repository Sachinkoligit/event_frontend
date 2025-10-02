import React, { useState } from "react";
import Navbar from "./Navbar";
import { useAuthUser } from "../store/useAuthStore";

export default function CreateEvent() {
  const { create } = useAuthUser();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    totalBooking: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.date || !formData.location) {
      alert("Please fill in all required fields.");
      return;
    }
    create(formData);
    // TODO: Send to backend via fetch or axios
    console.log("Event Created:", formData);
    // alert("Event created successfully!");
    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
      totalBooking: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create New Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g. Tech Conference 2025"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g. Dehradun"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows="3"
              placeholder="Brief details about the event"
            />
          </div>

          <div>
            <label className="block font-medium">Total Seats</label>
            <input
              type="number"
              name="totalBooking"
              value={formData.totalBooking}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g. 100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </>
  );
}
