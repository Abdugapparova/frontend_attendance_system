import React from "react";
import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Profile() {
  return (
    <div className="Profile">
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
        <h1 className="head">Profile</h1>

          <section className="dashboard">
            <div className="wrapper__profile">
              <h6 className="head_profile">Yeraliyev Berik <br/>
            38516@iitu.edu.kz </h6>
              <table className="profile-table">
                <tbody>
                  <tr>
                    <td className="blue-background">History and philosophy of science</td>
                    <td className="gray-background">80%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">High School of Pedagogy</td>
                    <td className="gray-background">100%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">Research Methodology</td>
                    <td className="gray-background">75%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">Software Development Management and Reengineeringy</td>
                    <td className="gray-background">99%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">Advanced Programming</td>
                    <td className="gray-background">0%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">Theory and Technology of Blockchain</td>
                    <td className="gray-background">88%</td>
                  </tr>
                  <tr>
                    <td className="blue-background">Geographic Information Systems</td>
                    <td className="gray-background">63%</td>
                   </tr> 
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Profile;
