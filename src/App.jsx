import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SignIn from "./modules/login/SignIn";
import ForgotPassword from './modules/login/ForgotPassword';
// Student
import Dashboard from './modules/student/dashboard/Dashboard';
import Schedule from "./modules/student/schedule/Schedule";
import Support from "./modules/student/support/Support";
import Attendance from "./modules/student/attendance/Attendance";
import AttendanceSheet from "./modules/student/attendancesheet/AttendanceSheet";
import Profile from "./modules/student/profile/Profile";

// Teacher
import DashboardT from "./modules/teacher/dashboard_teacher/Dashboard";
import ScheduleT from "./modules/teacher/schedule_teacher/Schedule";
import SupportT from "./modules/teacher/support_teacher/Support";
import AttendanceT from "./modules/teacher/attendance_teacher/Attendance";
import AttendanceSheetT from "./modules/teacher/attendancesheet_teacher/AttendanceSheet";
import ProfileT from "./modules/teacher/profile_teacher/Profile";

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
            {/* Student */}
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route index path="/schedule" element={<Schedule />} />
            <Route index path="/profile" element={<Profile />} />

            <Route index path="/support" element={<Support />} />
            <Route index path="/attendance" element={<Attendance />} />
            <Route index path="/attendancesheet" element={<AttendanceSheet />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Teacher */}
            <Route index path="/dashboardTeacher" element={<DashboardT />} />
            <Route index path="/scheduleTeacher" element={<ScheduleT />} />
            <Route index path="/profileTeacher" element={<ProfileT />} />

            <Route index path="/supportTeacher" element={<SupportT />} />
            <Route index path="/attendanceTeacher" element={<AttendanceT />} />
            <Route index path="/attendancesheetTeacher" element={<AttendanceSheetT />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
