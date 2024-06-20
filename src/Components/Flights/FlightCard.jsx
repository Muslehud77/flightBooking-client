/* eslint-disable react/prop-types */

import { Button } from "../ui/button";
import { convertDate } from "./../../utils/convertDate";
import useAxios from "./../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdOutlineAirplaneTicket } from "react-icons/md";
export default function FlightCard({ flight, home, refetch }) {
  const navigate = useNavigate();
  const axios = useAxios();
    
  const {
    _id,
    flight_number,
    departure_airport,
    arrival_airport,
    departure_time,
    arrival_time,
    total_seats,
    available_seats,
    transit_time_hours,
  } = flight;

  const bookFlight = async () => {
    const bookingData = {
      flight: _id,
    };

    try {
      const result = await axios.post("/bookings", bookingData, {
        withCredentials: true,
      });
      if (result.data.success) {
        navigate("/profile");
        toast.success(result.data.message);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeBooking = async () => {
    try {
      const result = await axios.delete(`/bookings/${_id}`, {
        withCredentials: true,
      });
      console.log(result);
      if (result.data.success) {
        refetch()
        toast.success(result.data.message);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="px-6 py-5 sm:px-8 sm:py-7 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              #{flight_number}
            </h1>
            {home ? (
              <Button
                onClick={bookFlight}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Now
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Another
              </Button>
            )}
          </div>
        </div>
        <div className="px-6 py-5 sm:px-8 sm:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PlaneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Flight Number
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {flight_number}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RouteOffIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Departure Airport
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {departure_airport}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Arrival Airport
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {arrival_airport}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Departure Time
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {convertDate(departure_time)}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Arrival Time
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {convertDate(arrival_time)}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Total Seats
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {total_seats}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Available Seats
                </span>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {available_seats}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {transit_time_hours ? (
                <>
                  {" "}
                  <div className="flex items-center gap-2">
                    <MdOutlineAirplaneTicket className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-100 font-medium">
                      Transit
                    </span>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    {transit_time_hours} Hours
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          {!home && (
            <div className="flex justify-end mt-6">
              <Button
                onClick={removeBooking}
                variant="danger"
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Remove Booking
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function RouteOffIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
      <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
      <path d="m2 2 20 20" />
      <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
      <path d="M15 5h-4.3" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function TicketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}
