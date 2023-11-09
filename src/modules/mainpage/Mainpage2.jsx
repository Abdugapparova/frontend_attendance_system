import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";
import { Routes, Route } from "react-router-dom";
import Schedule from "../schedule/Schedule";
import Sidebar2 from "../../components/sidebar/Sidebar2";



function Mainpage2() {
  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar2 />
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
                  <div className="name">
                  History and philosophy of science, 'L' (Kydyrbekuly D.), Main, 801
                  </div>
                  <div className="status status__present"></div>
                </div>
                <div className="discipline">
                  <div className="time">12:00 - 12:50</div>
                  <div className="name">
                  Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status status__absent"></div>
                </div>
                <div className="discipline">
                  <div className="time">13:00 - 13:50</div>
                  <div className="name">
                    Software Development Management and Reengineering, 'Lab' (Atymtayeva L.), Main, 702
                  </div>
                  <div className="status status__present"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Mainpage2;


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