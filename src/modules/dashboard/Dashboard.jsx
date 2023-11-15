import React, { useState } from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";



function Dashboard() {
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

export default Dashboard;
