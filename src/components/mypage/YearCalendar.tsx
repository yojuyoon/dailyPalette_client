import React from "react";

// Example data for the calendar
const data = Array.from({ length: 365 }, () => Math.floor(Math.random() * 4)); // Random data for demonstration

const GithubCalendar: React.FC = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const getDayData = (index: number) => {
    const date = new Date(startOfYear.getTime());
    date.setDate(startOfYear.getDate() + index);
    return {
      day: date.getDay(),
      month: date.getMonth(),
      value: data[index],
    };
  };

  const weeks = Array.from({ length: 53 }, (_, weekIndex) => {
    const days = Array.from({ length: 7 }, (_, dayIndex) => {
      const index = weekIndex * 7 + dayIndex;
      if (index >= 365) return null;
      const { day, month, value } = getDayData(index);

      return (
        <div
          key={index}
          className={`w-12 h-12 bg-bgColor2 m-0.5 rounded`}
          title={`${months[month]} ${dayIndex + 1}`}
        ></div>
      );
    });
    return (
      <div key={weekIndex} className="flex flex-col">
        {days}
      </div>
    );
  });

  return (
    <div className="flex items-start mt-10">
      <div className="flex flex-col items-center mr-2 min-w-24">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="w-15 h-15 mb-1 text-xs text-center">
            {day[0]}
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto">{weeks}</div>
    </div>
  );
};

export default GithubCalendar;
