/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export default function Flights({ setQueryParams, queryParams }) {
  const { register, handleSubmit, setValue, watch,reset } = useForm();

  const onSubmit = (data) => {
    const date = new Date(data?.departureDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const query = [
      data.departureDate ? `searchTerm=${formattedDate}` : "",
      data.departure ? `departure_airport=${data.departure}` : "",
      data.arrival ? `arrival_airport=${data.arrival}` : "",
      data.transit
        ? `transit_time_hours=${data.transit}`
        : "",
    ]
      .filter(Boolean)
      .join("&");

    setQueryParams(query);
  };

 
  // State to store selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Watch departure date to update the field value
  const departureDate = watch("departureDate");

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 ">
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
            <select
              id="departure"
              {...register("departure")}
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
            >
              <option value="">Select departure airport</option>
              <option value="JFK">New York, USA (JFK)</option>
              <option value="LAX">Los Angeles, USA (LAX)</option>
              <option value="ORD">Chicago, USA (ORD)</option>
              <option value="DFW">Dallas, USA (DFW)</option>
              <option value="MIA">Miami, USA (MIA)</option>
              <option value="ATL">Atlanta, USA (ATL)</option>
              <option value="BOS">Boston, USA (BOS)</option>
              <option value="SEA">Seattle, USA (SEA)</option>
              <option value="SFO">San Francisco, USA (SFO)</option>
              <option value="DEN">Denver, USA (DEN)</option>
              <option value="LAS">Las Vegas, USA (LAS)</option>
              <option value="PHX">Phoenix, USA (PHX)</option>
              <option value="IAH">Houston, USA (IAH)</option>
              <option value="CLT">Charlotte, USA (CLT)</option>
              <option value="MSP">Minneapolis, USA (MSP)</option>
              <option value="DTW">Detroit, USA (DTW)</option>
              <option value="PHL">Philadelphia, USA (PHL)</option>
              <option value="DCA">Washington D.C., USA (DCA)</option>
              <option value="MCO">Orlando, USA (MCO)</option>
              <option value="SLC">Salt Lake City, USA (SLC)</option>
              <option value="SAN">San Diego, USA (SAN)</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="arrival" className="text-sm font-medium mb-1">
              Arrival
            </label>
            <select
              id="arrival"
              {...register("arrival")}
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
            >
              <option value="">Select arrival airport</option>
              <option value="JFK">New York, USA (JFK)</option>
              <option value="LAX">Los Angeles, USA (LAX)</option>
              <option value="ORD">Chicago, USA (ORD)</option>
              <option value="DFW">Dallas, USA (DFW)</option>
              <option value="MIA">Miami, USA (MIA)</option>
              <option value="ATL">Atlanta, USA (ATL)</option>
              <option value="BOS">Boston, USA (BOS)</option>
              <option value="SEA">Seattle, USA (SEA)</option>
              <option value="SFO">San Francisco, USA (SFO)</option>
              <option value="DEN">Denver, USA (DEN)</option>
              <option value="LAS">Las Vegas, USA (LAS)</option>
              <option value="PHX">Phoenix, USA (PHX)</option>
              <option value="IAH">Houston, USA (IAH)</option>
              <option value="CLT">Charlotte, USA (CLT)</option>
              <option value="MSP">Minneapolis, USA (MSP)</option>
              <option value="DTW">Detroit, USA (DTW)</option>
              <option value="PHL">Philadelphia, USA (PHL)</option>
              <option value="DCA">Washington D.C., USA (DCA)</option>
              <option value="MCO">Orlando, USA (MCO)</option>
              <option value="SLC">Salt Lake City, USA (SLC)</option>
              <option value="SAN">San Diego, USA (SAN)</option>
            </select>
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
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5 Passengers</option>
              <option value="6">6 Passengers</option>
              <option value="7">7 Passengers</option>
              <option value="8">8 Passengers</option>
              <option value="9">9 Passengers</option>
              <option value="10">10 Passengers</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="transit" className="text-sm font-medium mb-1">
              Transit
            </label>
            <select
              id="transit"
              {...register("transit")}
              className="bg-gray-200 rounded-md py-2 px-4 w-full outline-none"
            >
              <option value="">Select transit time</option>
              <option value="3">3 Hours</option>
              <option value="4">4 Hours</option>
              <option value="5">5 Hours</option>
              <option value="6">6 Hours</option>
              <option value="7">7 Hours</option>
              <option value="8">8 Hours</option>
              <option value="9">9 Hours</option>
            </select>
          </div>
          <div className="flex gap-3 sm:col-span-2 lg:col-span-3">
            <Button type="submit" className="w-full">
              Search Flights
            </Button>
            {queryParams === "" ? (
              ""
            ) : (
              <Button
                className="w-1/4"
                onClick={() => {
                  setQueryParams("");
                  reset();
                }}
              >
                Clear Search
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
