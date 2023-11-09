import React, { useState } from "react";
import "./header.css";
import "../../modules/mainpage/mainpage.css";
import { useNavigate } from "react-router-dom";
// import menu from "../../assets/images/menu.png";
// import user from "../../assets/images/user.png";
// import exit from "../../assets/images/exit.png";
// import user1 from "../../assets/images/user1.png";
// import cancel from "../../assets/images/cancel.png";
// import { Link } from "react-router-dom";
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import menu from "../../assets/images/menu-icon.svg";
import user from "../../assets/images/account-icon.svg";
import exit from "../../assets/images/logout-icon.svg";
import user1 from "../../assets/images/attendance-icon.svg";
import home from "../../assets/images/home-icon.svg";

function Header() {
    const navigate = useNavigate()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const signin = () => {
        navigate('/');
    }

    return (
        <div className="Header">
            {/* Header default */}
            <div class="burger-menu">
                <div class="logo logo__burger-menu">
                    <div class="logo__icon">
                        <img src={user1} alt="" />
                    </div>
                    <div class="logo__text">Attendance System</div>
                </div>
                <div class="common-section-name">MAIN</div>
                <div class="section">
                    <div class="section__icon">
                        <img src={home} alt="" />
                    </div>
                    <div class="section__name">Dashboard</div>
                </div>
            </div>

            <menu class="menu menu__wrapper">
                <div class="hamburger">
                    <img src={menu} alt="" />
                </div>
                <div class="logo">
                    <div class="logo__icon">
                        <img src={user1} alt="" />
                    </div>
                    <div class="logo__text">Attendance System</div>
                </div>
                <div class="right-side">
                    <div class="profile">
                        <img src={user} alt="" />
                    </div>
                    <div class="logout" onClick={signin}>
                        <img src={exit} alt="" />
                    </div></div>
            </menu>

            {/* Sidebar */}


        </div>
    );
}
export default Header;