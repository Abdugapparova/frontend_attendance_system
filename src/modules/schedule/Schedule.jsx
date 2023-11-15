import React, { useState } from "react";
import "./schedule.css";
import "../dashboard/dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Schedule() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const currentDay = daysOfWeek[currentDayIndex];
  
  const schedules = {
    Monday:
      [
      {
        time: "18:30 - 19:20",
        title: "Pedagogy of Higher Education",
        type: "Lecture",
        instructor: "Abdullaeva G.O.",
        location: "Main, 901",
      },
      {
        time: "19:30 - 20:20",
        discipline: "History and Philosophy of Science",
        type: "Lecture",
        instructor: "Kydyrbekuly D.B.",
        location: "Main, 901",
      },
      {
        time: "20:30 - 21:20",
        title: "Pedagogy of Higher Education",
        type: "Lab",
        instructor: "Abdullaeva G.O.",
        location: "Main, 905",
      },
      {
        time: "21:30 - 22:20",
        discipline: "History and Philosophy of Science",
        type: "Lab",
        instructor: "Kydyrbekuly D.B.",
        location: "Main, 905",
      },
    ],
    Tuesday: [
      {
        time: "18:30 - 19:20",
        title: "Methodology of Scientific Research",
        type: "Lecture",
        instructor: "Bektemysova G.U.",
        location: "Main, 800",
      },
      {
        time: "19:30 - 20:20",
        title: "Methodology of Scientific Research",
        type: "Lab",
        instructor: "Bektemysova G.U.",
        location: "Main, 707",
      },
      {
        time: "20:30 - 21:20",
        title: "Methodology of Scientific Research",
        type: "Lab",
        instructor: "Bektemysova G.U.",
        location: "Main, 707",
      },
    ],
    Wednesday: [
      {
        time: "18:30 - 19:20",
        title: "Geographic Information Systems",
        type: "Lecture",
        instructor: "Tukenova L.M.",
        location: "Main, 700",
      },
      {
        time: "19:30 - 20:20",
        title: "Geographic Information Systems",
        type: "Practice",
        instructor: "Tukenova L.M.",
        location: "Main, 705",
      },
      {
        time: "20:30 - 21:20",
        title: "Geographic Information Systems",
        type: "Practice",
        instructor: "Tukenova L.M.",
        location: "Main, 705",
      },
    ],
    Thursday: [
      {
        time: "18:30 - 19:20",
        title: "Software Development Management and Reengineering",
        type: "Lecture",
        instructor: "Atymtaeva L.B.",
        location: "Main, 700",
      },
      {
        time: "19:30 - 20:20",
        title: "Software Development Management and Reengineering",
        type: "Lab",
        instructor: "Atymtaeva L.B.",
        location: "Main, 702",
      },
      {
        time: "20:30 - 21:20",
        title: "Software Development Management and Reengineering",
        type: "Lab",
        instructor: "Atymtaeva L.B.",
        location: "Main, 702",
      },
    ],
    Friday: [
      {
        time: "18:30 - 19:20",
        title: "Advanced Programming",
        type: "",
        instructor: "Kozina L.A.",
        location: "MOOC",
      },
      {
        time: "19:30 - 20:20",
        title: "Blockchain",
        type: "",
        instructor: "Tukenova L.M.",
        location: "MOOC",
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
