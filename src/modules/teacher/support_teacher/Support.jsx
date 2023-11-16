import React from "react";
import "./support.css";
import "../dashboard_teacher/dashboard.css";
import Sidebar from "../../../components/sidebar/Sidebar";

function Support() {
  return (
    <div className="Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 className="head">Support</h1>
          <section className="dashboard">
            <div className="wrapper__dashboard">
              <div className="instructions">
                <ol>
                  <li>
                    <strong className="red-text">1. Sign in:</strong>
                    <ul>
                      <li>1.1 Enter the university email address. For example: :l.atymtaeva@iitu.edu.kz.</li>
                      <li>1.2. Enter your account password.</li>
                      <li>1.3. You can click on the eye icon to see what you have entered in the password box.</li>
                      <li>1.4. You can click on the check box to save your password in your browser.</li>
                      <li>1.5. If you have forgotten your password, you can click the forgot password button.</li>
                      <li>1.6. After filling in the fields, click on the login button.</li>
                      <li>1.7. If you do not have an account in the system, click on one of the registration buttons.</li>
                    </ul>
                  </li>
                  
                  <li>
                    <strong className="red-text">2. Sign up:</strong>
                    <ul>
                      <li>2.1. Enter your name.</li>
                      <li>2.2. Enter your last name.</li>
                      <li>2.3. Enter your email address.</li>
                      <li>2.4. Enter your password.</li>
                      <li>2.5. Enter your password again.</li>
                      <li>2.6. You can click on the eye icon to see what you have entered in the password field.</li>
                      <li>2.7. Read the terms and conditions and if you agree click on the check box.</li>
                      <li>2.8. After filling in the fields, click on the registration button.</li>
                      <li>2.9. If you already have an account, click on one of the login buttons.</li>
                    </ul>
                  </li>

                  <li>
                    <strong className="red-text">3. View and manage your attendance:</strong>
                    <ul>
                      <li>3.1. In this page, you will see the day of the week as well as the schedule for that day.</li>
                      <li>3.2. On the left side of the page you will see the time of the discipline, in the middle you will see the name of the discipline (if you have a class at that time), and on the right side you will see the attendance status of the class.</li>
                      <li>3.3. If you have already had this lesson and you were present at the lesson then the status will show "Present".</li>
                      <li>3.4. If you have already completed the session and you have not attended the session, then the status will be "Absent".</li>
                      <li>3.5. If the class has just started, you can check your presence manually on the website using the "check in" button.</li>
                      <li>3.6. Attention! If in one month you check in three times manually on the site, then you will be checked by the administration in order to maintain academic integrity!</li>
                      <li>3.7. If you are sick or have an exemption from the university, and you have a certificate of exemption, it is necessary to attach it by clicking or dragging the document in the "upload" field and then click the "check in" button.</li>
                      <li>3.8. If you want to see other days, click on the date button.</li>
                    </ul>
                  </li>

                  <li>
                    <strong className="red-text">4. Notification:</strong>
                    <ul>
                      <li>4.1. In this modal window you will see the number of unread notifications as well as the notifications themselves.</li>
                      <li>4.2. You can click on the notification and go to this page.</li>
                      <li>4.3. You can also just close it.</li>
                    </ul>
                  </li>

                  <li>
                    <strong className="red-text">5. Instructions:</strong>
                    <ul>
                      <li>5.1. You are now in this page. It will help you with any questions you may have about the attendance management system.</li>
                    </ul>
                  </li>

                  <li>
                    <strong className="red-text">6. Profile:</strong>
                    <ul>
                      <li>6.1. You will see your first and last name.</li>
                      <li>6.2. At the bottom you will see all courses for the semester and on the right side you will see your total attendance percentage.</li>
                    </ul>
                  </li>
                
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Support;