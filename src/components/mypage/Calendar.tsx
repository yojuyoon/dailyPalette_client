import React, { useState } from "react";
import Image from "next/image";
import arrowLeft from "../../../public/svgs/Expand_left_light.svg";
import arrowRight from "../../../public/svgs/Expand_right_light.svg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const handlePrevMonth = () => {
      setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
      setCurrentDate(new Date(year, month + 1, 1));
    };

    return (
      <div className="text-darkGray flex items-center justify-between w-full border-b pb-15 mb-15">
        <button onClick={handlePrevMonth} className="px-4 py-2 rounded">
          <Image priority src={arrowLeft} alt="arrow_left" />
        </button>
        <div className="text-[22px]">{`${months[month]} ${year}`}</div>
        <button onClick={handleNextMonth} className="px-4 py-2 rounded">
          <Image priority src={arrowRight} alt="arrow_right" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 font-bold">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDates = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const startDay = startOfMonth.getDay();
    const endDate = endOfMonth.getDate();

    let dates = [];
    for (let i = 0; i < startDay; i++) {
      dates.push(<div key={`empty-${i}`} className="p-2 bg-transparent"></div>);
    }
    for (let i = 1; i <= endDate; i++) {
      dates.push(
        <div key={i} className="p-2 m-4 rounded-full h-36 w-36 bg-[#F9ECE0]" />
      );
    }

    return <div className="grid grid-cols-7">{dates}</div>;
  };

  return (
    <div className="max-w-md mx-auto mt-6 rounded">
      {renderHeader()}
      {renderDays()}
      {renderDates()}
    </div>
  );
};

export default Calendar;
