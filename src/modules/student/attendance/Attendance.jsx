import React, { useState, useEffect } from 'react';
import './attendance.css';
import "../dashboard/dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar';

function Attendance() {
  const initialData = [
    {
      date: '2023-11-09',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},

    },
    {
      date: '2023-11-10',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},
    },
    {
      date: '2023-11-13',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},
    },
    {
      date: '2023-11-14',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},
    },
    {
      date: '2023-11-15',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},
    },
    {
      date: '2023-11-16',
      softwareDevelopment: { status: 'Present', uploaded: false },
      historyAndPhilosophy: { status: 'Absent', uploaded: false },
      geographicInformationSystems: { status: 'Present', uploaded: false },
      AdvancedProgramming: { status: 'Present', uploaded: false},
      Blockchain: { status: 'Present', uploaded: false},
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
    // Получаем текущую дату в формате 'yyyy-MM-dd'
    const currentDate = new Date().toISOString().split('T')[0];
    setTodayDate(currentDate);
  }, []);

  const [checkedRowsSoftware, setCheckedRowsSoftware] = useState([]);
  const [checkedRowsHistory, setCheckedRowsHistory] = useState([]);
  const [checkedRowsGeographic, setCheckedRowsGeographic] = useState([]);
  const [checkedRowsAdvanced, setCheckedRowsAdvanced] = useState([]);
  const [checkedRowsBlockchain, setCheckedRowsBlockchain] = useState([]);


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
      
      case 'advancedInformationSystems':
        setCheckedRowsAdvanced((prevCheckedRows) => {
          const newCheckedRows = [...prevCheckedRows];
          newCheckedRows[index] = !newCheckedRows[index];
          return newCheckedRows;
        });
        break;
      case 'blockchainInformationSystems':
        setCheckedRowsBlockchain((prevCheckedRows) => {
          const newCheckedRows = [...prevCheckedRows];
          newCheckedRows[index] = !newCheckedRows[index];
          return newCheckedRows;
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">  Attendance</h1>
          <div className='helpAttendance'>
              <p>Checkbox - click if you want attend your class</p>
              <p>Reason button - to upload your absence certificate</p>
          </div>
          <section className="dashboard">
            
            <div className="wrapper__dashboard">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Software Development Management and Reengineering</th>
                    <th>History and philosophy of science</th>
                    <th>Geographic Information Systems</th>
                    <th>Advanced Programming</th>
                    <th>Theory and Technology of Blockchain</th>
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
                          <button
                            className={`upload-button ${rowData.softwareDevelopment.uploaded ? 'uploaded' : ''}`}
                            onClick={() => handleUpload('softwareDevelopment', index)}
                          >
                            {rowData.softwareDevelopment.uploaded ? 'Reason' : 'Reason'}
                          </button>
                        </div>
                    </td>



                      <td className={`status status__${rowData.historyAndPhilosophy.status.toLowerCase()}`}>
                        <input
                          type="checkbox"
                          checked={checkedRowsHistory[index]}
                          onChange={() => handleCheckboxChange(index, 'historyAndPhilosophy')}
                          className="custom-checkbox"
                        />
                        <button
                          className={`upload-button ${rowData.historyAndPhilosophy.uploaded ? 'uploaded' : ''}`}
                          onClick={() => handleUpload('historyAndPhilosophy', index)}
                        >
                          {rowData.historyAndPhilosophy.uploaded ? 'Reason' : 'Reason'}
                        </button>
                      </td>


                      <td className={`status status__${rowData.geographicInformationSystems.status.toLowerCase()}`}>
                        <input
                          type="checkbox"
                          checked={checkedRowsGeographic[index]}
                          onChange={() => handleCheckboxChange(index, 'geographicInformationSystems')}
                          className="custom-checkbox"
                        />
                        <button
                          className={`upload-button ${rowData.geographicInformationSystems.uploaded ? 'uploaded' : ''}`}
                          onClick={() => handleUpload('geographicInformationSystems', index)}
                        >
                          {rowData.geographicInformationSystems.uploaded ? 'Reason' : 'Reason'}
                        </button>
                      </td>


                      <td className={`status status__${rowData.AdvancedProgramming.status.toLowerCase()}`}>
                        <input
                          type="checkbox"
                          checked={checkedRowsAdvanced[index]}
                          onChange={() => handleCheckboxChange(index, 'AdvancedProgramming')}
                          className="custom-checkbox"
                        />
                        <button
                          className={`upload-button ${rowData.AdvancedProgramming.uploaded ? 'uploaded' : ''}`}
                          onClick={() => handleUpload('AdvancedProgramming', index)}
                        >
                          {rowData.AdvancedProgramming.uploaded ? 'Reason' : 'Reason'}
                        </button>
                      </td>


                      <td className={`status status__${rowData.Blockchain.status.toLowerCase()}`}>
                        <input
                          type="checkbox"
                          checked={checkedRowsBlockchain[index]}
                          onChange={() => handleCheckboxChange(index, 'Blockchain')}
                          className="custom-checkbox"
                        />
                        <button
                          className={`upload-button ${rowData.Blockchain.uploaded ? 'uploaded' : ''}`}
                          onClick={() => handleUpload('Blockchain', index)}
                        >
                          {rowData.Blockchain.uploaded ? 'Reason' : 'Reason'}
                        </button>
                      </td>
                    </tr>
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

export default Attendance;
