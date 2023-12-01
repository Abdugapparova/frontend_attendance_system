import React, { useState, useEffect } from 'react';
import './attendance.css';
import "../dashboard/dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar';
import Modal from './ReasonModal';


function Attendance() {
  const initialData = [
    {
      date: '2023-11-09',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      reason: { uploaded: false },
      attendForAllDay: false,
    },
    {
      date: '2023-11-10',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      reason: { uploaded: false },
      attendForAllDay: false,
    },
    {
      date: '2023-11-13',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      reason: { uploaded: false },
      attendForAllDay: false,
    },
    {
      date: '2023-11-14',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      reason: { uploaded: false },
      attendForAllDay: false,
    },
    {
      date: '2023-12-05',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      reason: { uploaded: false },
      attendForAllDay: false,
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

  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setTodayDate(currentDate);
  }, []);

  const [checkedRowsSoftware, setCheckedRowsSoftware] = useState([]);
  const [checkedRowsHistory, setCheckedRowsHistory] = useState([]);
  const [checkedRowsGeographic, setCheckedRowsGeographic] = useState([]);
  const [checkedRowsReason, setCheckedRowsReason] = useState([]);
  const [checkedRowsAllDay, setCheckedRowsAllDay] = useState([]);

  const handleCheckboxChange = (index, column) => {
    switch (column) {
      case 'softwareDevelopment':
        setCheckedRowsSoftware((prevCheckedRows) => {
          const newCheckedRows = [...prevCheckedRows];
          newCheckedRows[index] = !newCheckedRows[index];
          return newCheckedRows;
        });
        break;
      case 'historyAndPhilosophy':
        setCheckedRowsHistory((prevCheckedRows) => {
          const newCheckedRows = [...prevCheckedRows];
          newCheckedRows[index] = !newCheckedRows[index];
          return newCheckedRows;
        });
        break;
      case 'geographicInformationSystems':
        setCheckedRowsGeographic((prevCheckedRows) => {
          const newCheckedRows = [...prevCheckedRows];
          newCheckedRows[index] = !newCheckedRows[index];
          return newCheckedRows;
        });
        break;
    }
  }

  // all day attend
  const handleCheckboxChange1 = (index, column) => {
    setCheckedRowsAllDay((prevCheckedRowsAllDay) => {
      const newCheckedRowsAllDay = [...prevCheckedRowsAllDay];
      newCheckedRowsAllDay[index] = !newCheckedRowsAllDay[index];

      if (newCheckedRowsAllDay[index]) {
        setCheckedRowsSoftware((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = true;
          return newCheckedRows;
        });
        setCheckedRowsHistory((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = true;
          return newCheckedRows;
        });
        setCheckedRowsGeographic((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = true;
          return newCheckedRows;
        });
      } else {
        setCheckedRowsSoftware((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = false;
          return newCheckedRows;
        });
        setCheckedRowsHistory((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = false;
          return newCheckedRows;
        });
        setCheckedRowsGeographic((prev) => {
          const newCheckedRows = [...prev];
          newCheckedRows[index] = false;
          return newCheckedRows;
        });
      }

      return newCheckedRowsAllDay;
    });
  };



  //send absence certificate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isReasonConfirmed, setIsReasonConfirmed] = useState(false);
  const [file, setFile] = useState(null);


  const openModal = (index) => {
    setSelectedRowIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowIndex(null);
    setIsModalOpen(false);
  };

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">  Attendance</h1>
          <div className='helpAttendance'>
            <p>Checkbox - click if you want to attend your class</p>
            <p>Reason button - to upload your absence certificate</p>
          </div>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Software Development <br />Management and Reengineering</th>
                    <th>History and philosophy of science</th>
                    <th>Geographic Information Systems</th>
                    <th>Absence certificate</th>
                    <th>Attend for all day</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((rowData, index) => (
                    <tr key={index} className={rowData.date === todayDate ? 'today-row' : (rowData.date < todayDate ? 'past-row' : '')}>
                      <td>{rowData.date}</td>
                      <td className={`status status__${rowData.softwareDevelopment.status.toLowerCase()}`}>
                        <div className="checkbox-upload-container">
                          <input
                            type="checkbox"
                            checked={checkedRowsSoftware[index]}
                            onChange={() => handleCheckboxChange(index, 'softwareDevelopment')}
                            className="custom-checkbox"
                          />
                        </div>
                      </td>
                      <td className={`status status__${rowData.historyAndPhilosophy.status.toLowerCase()}`}>
                        <div className="checkbox-upload-container">
                          <input
                            type="checkbox"
                            checked={checkedRowsHistory[index]}
                            onChange={() => handleCheckboxChange(index, 'historyAndPhilosophy')}
                            className="custom-checkbox"
                          />
                        </div>
                      </td>
                      <td className={`status status__${rowData.geographicInformationSystems.status.toLowerCase()}`}>
                        <div className="checkbox-upload-container">
                          <input
                            type="checkbox"
                            checked={checkedRowsGeographic[index]}
                            onChange={() => handleCheckboxChange(index, 'geographicInformationSystems')}
                            className="custom-checkbox"
                          />
                        </div>
                      </td>
                      <td>
                      <button
                          className={`upload-button ${rowData.reason.uploaded ? 'uploaded' : 'no'} ${isReasonConfirmed ? 'confirmed' : ''}`}
                          onClick={() => openModal(index)}
                        >
                          {rowData.reason.uploaded ? 'Reason' : 'Reason'}
                        </button>

                      </td>
                      <td>
                        <div className="checkbox-upload-container">
                          <input
                            type="checkbox"
                            checked={checkedRowsAllDay[index]}
                            onChange={() => handleCheckboxChange1(index, 'attendForAllDay')}
                            className="custom-checkbox"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setIsReasonConfirmed={setIsReasonConfirmed}  // Pass the state setter function to the ReasonModal

      />
    </div>
  );
}

export default Attendance;
