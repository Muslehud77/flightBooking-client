import { useEffect } from "react";
import { useState } from "react";


const Counter = ({date}) => {



  const targetDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        years: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const oneYear = 31536000000; // milliseconds in a year
    const oneDay = 86400000; // milliseconds in a day
    const oneHour = 3600000; // milliseconds in an hour
    const oneMinute = 60000; // milliseconds in a minute

    const years = padWithZero(Math.floor(difference / oneYear));
    const days = padWithZero(Math.floor((difference % oneYear) / oneDay));
    const hours = padWithZero(Math.floor((difference % oneDay) / oneHour));
    const minutes = padWithZero(Math.floor((difference % oneHour) / oneMinute));
    const seconds = padWithZero(Math.floor((difference % oneMinute) / 1000));

    return { years, days, hours, minutes, seconds };
  }

  function padWithZero(value) {
    return value.toString().padStart(2, "0");
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdown);
  }, [date]);






  return (
    <div>
      {timeLeft.seconds && (
        <div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 backdrop-blur-sm bg-slate-800/50 md:w-16 justify-center items-center rounded-box text-neutral-content">
              <span className="countdown font-mono text-3xl">
                <span style={{ "--value": timeLeft.years }}></span>
              </span>
              <span className="font-nova bg-black px-1 mt-1 rounded-lg">
                years
              </span>
            </div>
            <div className="flex flex-col p-2 backdrop-blur-sm bg-slate-800/50 md:w-16 justify-center items-center rounded-box text-neutral-content">
              <span className=" font-mono text-3xl">
                <span>{timeLeft.days}</span>
              </span>
              <span className="font-nova bg-black px-1 mt-1 rounded-lg">
                days
              </span>
            </div>
            <div className="flex flex-col p-2 backdrop-blur-sm bg-slate-800/50 md:w-16 justify-center items-center rounded-box text-neutral-content">
              <span className="countdown font-mono text-3xl">
                <span style={{ "--value": timeLeft.hours }}></span>
              </span>
              <span className="font-nova bg-black px-1 mt-1 rounded-lg">
                hours
              </span>
            </div>
            <div className="flex flex-col p-2 backdrop-blur-sm bg-slate-800/50 md:w-16 justify-center items-center rounded-box text-neutral-content">
              <span className="countdown font-mono text-3xl">
                <span style={{ "--value": timeLeft.minutes }}></span>
              </span>
              <span className="font-nova bg-black px-1 mt-1 rounded-lg">
                min
              </span>
            </div>
            <div className="flex flex-col p-2 backdrop-blur-sm bg-slate-800/50 md:w-16 justify-center items-center rounded-box text-neutral-content">
              <span className="countdown font-mono text-3xl">
                <span style={{ "--value": timeLeft.seconds }}></span>
              </span>
              <span className="font-nova bg-black px-1 mt-1 rounded-lg">
                sec
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
