import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./schedule.css";
import "../dashboard/dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import schedules from "./scheduleData"; // Import schedules data



function Schedule() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const currentDay = daysOfWeek[currentDayIndex];
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://temirmendigali.xyz/api/schedule/week', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setScheduleData(data);
        } else {
          console.error('Failed to fetch schedule data');
        }
      } catch (error) {
        console.error('Error while fetching schedule data', error);
      }
    };

    fetchData();
  }, []);

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
                      <div className="name">{item.title}, '{item.type}', ({item.instructor}), {item.location}</div>
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
