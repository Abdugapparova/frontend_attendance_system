import React, { useState } from 'react';
import './attendancesheet.css';
import "../dashboard/dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar';

function AttendanceSheet() {
  const initialData = [
    {
      date: '2023-09-04',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
    },
  ];

  const [attendanceData, setAttendanceData] = useState(initialData);

  const handleUpload = (subject, index) => {
    setAttendanceData((prevData) => {
      const newData = [...prevData];
      newData[index][subject].uploaded = true;
      return newData;
    });
  };

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head"> Attendance Sheet</h1>
          <div className="buttons-container">
            <button className="green-button">Checked in with ID card</button>
            <button className="yellow-button">Checked in through the site</button>
            <button className="red-button">Absent</button>
          </div>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th className="icon-column">
                      <div className="icon-container green-icon"></div>
                    </th>
                    <th className="icon-column">
                      <div className="icon-container yellow-icon"></div>
                    </th>
                    <th className="icon-column">
                      <div className="icon-container red-icon"></div>
                    </th>
                    <th>Subject</th>
                    <th>2023-09-04</th>
                    <th>2023-09-05</th>
                    <th>2023-09-06</th>
                    <th>2023-09-07</th>
                    <th>2023-09-08</th>
                    <th>2023-09-09</th>
                    <th>2023-09-10</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((rowData, index) => (
                    <React.Fragment key={index}>
                      <tr>
                       <td>60%</td>
                       <td>15%</td>
                       <td>6%</td>
                       <td>Software Development Management and Reengineering (Lecture)</td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container yellow-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                       <td className="icon-column">
                        <div className="icon-container red-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                      </tr>
                      <tr>
                       <td>70%</td>
                       <td>10%</td>
                       <td>20%</td>
                       <td>History and philosophy of science (Lab)</td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                       <td></td>
                       <td></td>
                       </tr>
                       <tr>
                       <td>70%</td>
                       <td>10%</td>
                       <td>20%</td>
                       <td>Geographic Information Systems</td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container yellow-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container yellow-icon"></div>
                       </td>
                       <td className="icon-column">
                        <div className="icon-container green-icon"></div>
                       </td>
                       <td></td>
                      </tr>
                      
                       <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       </tr>
                       <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       </tr>
                       <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
  }
  
  export default AttendanceSheet;
  