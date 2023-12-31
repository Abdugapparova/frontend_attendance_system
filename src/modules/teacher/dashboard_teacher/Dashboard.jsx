import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";

function Dashboard() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with a valid date

  const handleDateClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date) => {
    return format(date, "dd.MM.yyyy");
  };

  const formatDayOfWeek = (date) => {
    return format(date, "EEEE"); // "EEEE" returns the full day name (e.g., "Thursday")
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
                <div className="discipline">
                  <div className="time">08:00 - 08:50</div>
                  <div className="name">
                    Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status__students">15/20</div>
                </div>
                <div className="discipline">
                  <div className="time">09:00 - 09:50</div>
                  <div className="name">
                    History and philosophy of science, 'L' (Kydyrbekuly D.), Main, 901
                  </div>
                  <div className="status__students">14/20</div>
                </div>
                <div className="discipline">
                  <div className="time">08:00 - 08:50</div>
                  <div className="name">
                    Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status__students">20/20</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
