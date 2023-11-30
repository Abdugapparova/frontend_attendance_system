import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import { API_BASE_URL } from "../../../constants";
import user from "../../../assets/images/user.png";

function Dashboard() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with a valid date
  const [scheduleData, setScheduleData] = useState([]);

  const handleDateClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date) => {
    return format(date, "dd.MM.yyyy");
  };

  const formatDayOfWeek = (date) => {
    return format(date, "EEEE");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/schedule/today?groupId=101`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${token}`,
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

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">Dashboard</h1>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <div className="first-row">
                <div className="day-of-the-week">{formatDayOfWeek(selectedDate)}</div>
                <div
                  className={`date date__btn ${
                    isCalendarOpen ? "button-below" : ""
                  }`}
                  onClick={handleDateClick}
                >
                  {selectedDate ? formatDate(selectedDate) : "Date"}
                
                {isCalendarOpen && (
                  <DatePicker
                    className="absolute-calendar"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd.MM.yyyy"
                    inline
                  />
                  )}
                  </div>
              </div>
              <div className="disciplines">
                {scheduleData.map((item) => (
                  <div className="discipline" key={item.scheduleId}>
                    <div className="time">{`${format(new Date(item.startTime), 'HH:mm')} - ${format(new Date(item.endTime), 'HH:mm')}`}</div>
                    <div className="name">{`${item.courseName}, '${item.classroom}' (${item.teacherName}), ${item.groupName}`}</div>
                    <div className="status status__present">Present</div>
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

export default Dashboard;
