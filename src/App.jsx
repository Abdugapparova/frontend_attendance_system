import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './modules/mainpage/Mainpage';
import SignIn from "./modules/login/SignIn";
import ForgotPassword from './modules/login/ForgotPassword'; 
import Schedule from "./modules/schedule/Schedule";


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
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
