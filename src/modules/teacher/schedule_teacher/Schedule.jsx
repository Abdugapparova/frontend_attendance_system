import React, { useState } from "react";
import "./schedule.css";
import "../dashboard_teacher/dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";

function Schedule() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const currentDay = daysOfWeek[currentDayIndex];
  
  const schedules = {
    Monday:
      [
      {
        time: "18:30 - 19:20",
        type: "Lecture",
        instructor: "SE-321M, SE-232M",
        location: "Main, 901",
      },
      {
        time: "19:30 - 20:20",
        type: "Lab",
        instructor: "SE-231M",
        location: "Main, 905",
      },
      {
        time: "20:30 - 21:20",
        type: "Lab",
        instructor: "Lab-231M",
        location: "Main, 905",
      },
    ],
    Tuesday: [
      {
        time: "18:30 - 19:20",
        type: "Lecture",
        instructor: "CSSE-231M, CSSE-232M",
        location: "Main, 800",
      },
      {
        time: "19:30 - 20:20",
        type: "Lab",
        instructor: "CSSE-231M",
        location: "Main, 707",
      },
      {
        time: "20:30 - 21:20",
        type: "Lab",
        instructor: "CSSE-231M",
        location: "Main, 707",
      },
    ],
    Wednesday: [
      {
        time: "18:30 - 19:20",
        type: "Lecture",
        instructor: "PM-231M, PM-232M",
        location: "Main, 700",
      },
      {
        time: "19:30 - 20:20",
        type: "Lab",
        instructor: "SE-232M",
        location: "Main, 705",
      },
      {
        time: "20:30 - 21:20",
        type: "Practice",
        instructor: "SE-232M",
        location: "Main, 705",
      },
    ],
    Thursday: [
      {
        time: "18:30 - 19:20",
        type: "Lab",
        instructor: "PM-231M",
        location: "Main, 702",
      },
      {
        time: "19:30 - 20:20",
        type: "Lab",
        instructor: "PM-231M",
        location: "Main, 702",
      },
      {
        time: "20:30 - 21:20",
        type: "Lab",
        instructor: "CSSE-232M",
        location: "Main, 700",
      },
      {
        time: "21:30 - 20:20",
        type: "Lab",
        instructor: "CSSE-232M",
        location: "Main, 700",
      },
      
    ],
    Friday: [
      {
        time: "18:30 - 19:20",
        type: "Lab",
        instructor: "PM-232M",
        location: "Main, 303",
      },
      {
        time: "19:30 - 20:20",
        type: "Lab",
        instructor: "PM-232M",
        location: "Main, 303",
      },
    ],
  };
  
  const handleDayChange = (direction) => {
    if (direction === "prev") {
      setCurrentDayIndex((prevIndex) => (prevIndex - 1 + daysOfWeek.length) % daysOfWeek.length);
    } else if (direction === "next") {
      setCurrentDayIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length);
    }
  };

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          
          <h1 className="head">Schedule</h1>
          
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <div className="navigation-arrows">
                <button onClick={() => handleDayChange("prev")} className="prev">&larr;</button>
                <div className="days-of-the-week">{currentDay}</div>
                <button onClick={() => handleDayChange("next")} className="next">&rarr;</button>
              </div>
                <div className="disciplines">
                  {schedules[currentDay].map((item, index) => (
                    <div className="discipline" key={index}>
                      <div className="time">{item.time}</div>
                      <div className="name">'{item.type}', ({item.instructor}), {item.location}</div>
                      <div className="status status__present"></div>
                    </div>
                  ))}
                </div>
            </div>
          </section>
            
        </div>
      </div>
    </div>
  );
}

export default Schedule;
