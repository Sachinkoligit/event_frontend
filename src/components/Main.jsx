import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

// export 

export default function Main() {
  const { allEvents, fetchEvents, authUser, update, admin } = useAuthUser();
  useEffect(() => {
    fetchEvents();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/event/remove/${id}`);
      fetchEvents();
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error("Deleted Failed");
    }
  };

  const navigate = useNavigate();
  const [booking, setBooking] = useState(authUser?.booking || 0);

  const handleBooking = async (id) => {
    const newBooking = booking + 1;
    setBooking(newBooking);
    try {
      const response = await axiosInstance.put(
        `/booking/book/${id}/${authUser._id}`
      );
      toast.success("Seat booked successfully");
      navigate("/book", {
        state: {
          user: { ...authUser, booking: newBooking },
          event: response.data.event,
        },
      });
    } catch (error) {
      toast.error("A user can book 2 slot for one event");
    }
  };

  return (
    <div className="min-h-[300px] flex flex-row gap-3 pl-[80px] mt-[30px] mb-[30px] flex-wrap">
      {allEvents &&
        allEvents.map((event) => {
          return (
            <div
              key={event._id}
              className="w-[30%] h-[300px] border-2 border-black rounded flex flex-col gap-2 justify-center items-start px-3"
            >
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p>{new Date(event.date).toLocaleDateString("en-IN")}</p>
              <p>{event.description}</p>
              <p>
                <span className="font-bold">Location: </span>
                {event.location}
              </p>
              <p>
                <span className="font-bold">Seats available: </span>
                {event.totalBooking}
              </p>
              <div>
                <button
                  className={`btn bg-green-500 ${admin ? "hidden" : "null"}`}
                  onClick={() => {
                    booking >= 2
                      ? toast.error("Maximum a user can Book 2 seats")
                      : handleBooking(event._id);
                  }}
                >
                  Book Seat
                </button>

                <button
                  className={`btn bg-red-500 ${!admin ? "hidden" : "null"}`}
                  onClick={() => {
                    handleDelete(event._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
