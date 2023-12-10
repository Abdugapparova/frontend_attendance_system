import React, { useState, useEffect } from "react";
import { format, getDay, addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import schedules from "./scheduleData";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://temirmendigali.xyz/api/schedule/today?groupId=101",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setScheduleData(data);
        } else {
          console.error("Failed to fetch schedule data");
        }
      } catch (error) {
        console.error("Error while fetching schedule data", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const currentDayOfWeek = getDay(selectedDate);
  const todaySchedule = schedules[Object.keys(schedules)[currentDayOfWeek]];

  const isWeekend = currentDayOfWeek === 0 || currentDayOfWeek === 6;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">Dashboard</h1>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <div className="first-row">
                <div className="day-of-the-week">
                  {format(selectedDate, "EEEE")}
                </div>
                <div
                  className={`date date__btn ${
                    isCalendarOpen ? "button-below" : ""
                  }`}
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  {format(selectedDate, "dd.MM.yyyy")}
                  {isCalendarOpen && (
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd.MM.yyyy"
                      inline
                    />
                  )}
                </div>
              </div>
              {isWeekend ? (
                <div className="no-courses-message">
                  No courses for today (Weekend).
                </div>
              ) : (
              //   <div className="disciplines">
              //   {scheduleData.map((item) => (
              //     <div className="discipline" key={item.scheduleId}>
              //       <div className="time">{`${format(new Date(item.startTime), 'HH:mm')} - ${format(new Date(item.endTime), 'HH:mm')}`}</div>
              //       <div className="name">{`${item.courseName}, '${item.classroom}' (${item.teacherName}), ${item.groupName}`}</div>
              //       <div className="status status__present">Present</div>
              //     </div>
              //   ))}
              // </div>
                <div className="disciplines">
                  {todaySchedule?.map((item, index) => (
                    <div className="discipline" key={index}>
                      <div className="time">{item.time}</div>
                      <div className="name">{item.title}, '{item.type}', ({item.instructor}), {item.location}</div>
                      <div className="status">Attendance status</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
