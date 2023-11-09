import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './modules/mainpage/Mainpage';
import SignIn from "./modules/login/SignIn";
import ForgotPassword from './modules/login/ForgotPassword'; 
import Schedule from "./modules/schedule/Schedule";
import Schedule2 from "./modules/schedule/Schedule2";
import MainPage2 from './modules/mainpage/Mainpage2';




function App() {
  return (
    <div className="App">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Prosto+One&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route index path="/mainpage" element={<MainPage />} />
          <Route index path="/schedule" element={<Schedule />} />
          <Route index path="/mainpage2" element={<MainPage2 />} />
          <Route index path="/schedule2" element={<Schedule2 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
