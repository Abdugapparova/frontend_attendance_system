import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from './modules/dashboard/Dashboard';
import SignIn from "./modules/login/SignIn";
import ForgotPassword from './modules/login/ForgotPassword'; 
import Schedule from "./modules/schedule/Schedule";
import Support from "./modules/support/Support";
import Attendance from "./modules/attendance/Attendance";
import AttendanceSheet from "./modules/attendancesheet/AttendanceSheet";
import Profile from "./modules/profile/Profile";
import { SidebarProvider } from "./components/sidebar/SidebarProvider";

function App() {
  return (
    <div className="App">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Prosto+One&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
      </head>
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route index path="/" element={<SignIn />} />
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route index path="/schedule" element={<Schedule />} />
            <Route index path="/profile" element={<Profile />} />

            <Route index path="/support" element={<Support />} />
            <Route index path="/attendance" element={<Attendance />} />
            <Route index path="/attendancesheet" element={<AttendanceSheet />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
