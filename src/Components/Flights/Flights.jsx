import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export default function Flights() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // State to store selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Watch departure date to update the field value
  const departureDate = watch("departureDate");

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Find your next flight
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="flex flex-col">
            <label htmlFor="departure" className="text-sm font-medium mb-1">
              Departure
            </label>
            <Input
              id="departure"
              placeholder="Enter departure airport"
              {...register("departure", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="arrival" className="text-sm font-medium mb-1">
              Arrival
            </label>
            <Input
              id="arrival"
              placeholder="Enter arrival airport"
              {...register("arrival", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="departureDate" className="text-sm font-medium mb-1">
              Departure Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-1 h-4 w-4 -translate-x-1" />
                  {departureDate
                    ? format(new Date(departureDate), "PPP")
                    : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setValue("departureDate", date);
                  }}
                  disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="text-sm font-medium mb-1">
              Departure Time
            </label>
            <select
              id="time"
              {...register("time")}
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
            >
              <option value="">Select time</option>
              <option value="0600">6:00 AM</option>
              <option value="0700">7:00 AM</option>
              <option value="0800">8:00 AM</option>
              <option value="0900">9:00 AM</option>
              <option value="1000">10:00 AM</option>
              <option value="1100">11:00 AM</option>
              <option value="1200">12:00 PM</option>
              <option value="1300">1:00 PM</option>
              <option value="1400">2:00 PM</option>
              <option value="1500">3:00 PM</option>
              <option value="1600">4:00 PM</option>
              <option value="1700">5:00 PM</option>
              <option value="1800">6:00 PM</option>
              <option value="1900">7:00 PM</option>
              <option value="2000">8:00 PM</option>
              <option value="2100">9:00 PM</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="passengers" className="text-sm font-medium mb-1">
              Passengers
            </label>
            <select
              id="passengers"
              {...register("passengers")}
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
            >
              <option value="1">1 passenger</option>
              <option value="2">2 passengers</option>
              <option value="3">3 passengers</option>
              <option value="4">4 passengers</option>
              <option value="5">5 passengers</option>
              <option value="6">6 passengers</option>
              <option value="7">7 passengers</option>
              <option value="8">8 passengers</option>
              <option value="9">9 passengers</option>
              <option value="10">10 passengers</option>
            </select>
          </div>
          <Button
            type="submit"
            className="col-span-1 sm:col-span-2 lg:col-span-1 bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary/50"
          >
            Search Flights
          </Button>
        </form>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
