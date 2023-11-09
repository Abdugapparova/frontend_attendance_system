import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";
import { Routes, Route } from "react-router-dom";
import Schedule from "../schedule/Schedule";
import Sidebar from "../../components/sidebar/Sidebar";



function Mainpage() {
  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head"> Dashboard</h1>
          <section class="dashboard">
            <div class="wrapper__dashboard">
              <div class="first-row">
                <div class="day-of-the-week">Thursday</div>
                <div class="date date__btn">21.09.2023</div>
              </div>
              <div class="disciplines">
                <div class="discipline">
                  <div class="time">08:00 - 08:50</div>
                  <div class="name">
                    Software Development Management and Reengineering,'Lab' (
                    Atymtayeva L.), Main, 702
                  </div>
                  <div class="status status__present">Present</div>
                </div>
                <div class="discipline">
                  <div class="time">09:00 - 09:50</div>
                  <div class="name">
                    History and philosophy of science,'L' ( Кydyrbekuly D.), Main, 901
                  </div>
                  <div class="status status__absent">Absent</div>
                </div>
                <div class="discipline">
                  <div class="time">08:00 - 08:50</div>
                  <div class="name">
                    Software Development Management and Reengineering,'Lab' (
                    Atymtayeva L.), Main, 702
                  </div>
                  <div class="status status__present">Present</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;


{/* // <div className="Mainpage">
    //   <header className="header">
    //     <Header/>
    //   </header>
    //   <div className="contentMainpage">
    //     <h className="day">Day of week</h>
    //     <p className="date">Date</p>
    //     <table className="scheduleTable">
    //       <tr>
    //         <th></th>
    //       </tr>
    //       <tr>
    //         <td>Time</td>
    //         <td>Subject name</td>
    //         <td>Attendance</td>
    //       </tr>
    //       <tr>
    //         <td>Time</td>
    //         <td>Subject name</td>
    //         <td>Attendance</td>
    //       </tr>
    //     </table>
    //   </div>
    // </div> */}