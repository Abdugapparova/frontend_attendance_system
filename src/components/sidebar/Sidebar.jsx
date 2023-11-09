import React, { useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import control from "../../assets/images/control.png";
import logo from "../../assets/images/attendance-icon.svg";


import home from "../../assets/images/home.png";
import schedule from "../../assets/images/schedule.png";
import sheet from "../../assets/images/sheet.png";
import attendance from "../../assets/images/attendance.png";
import help from "../../assets/images/help.png";
import exit from "../../assets/images/exit.png";
import user from "../../assets/images/user.png";



function Sidebar() {
    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Dashboard", src: home, to: "/mainpage" },
        { title: "Account", src: user, to: "/profile" },

        { title: "Schedule ", src: schedule, gap: true, to: "/schedule" },
        { title: "Attendance Sheet", src: sheet },
        { title: "Attendance", src: attendance },
        { title: "Support", src: help },

        { title: "Logout", src: exit, gap: true, to:"/"},

    ];
    return (
            <div className={` ${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                <img
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className="logoSidebar"/>
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Attendance <br />System
                    </h1>
                </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4
                        ${Menu.gap ? "mt-9" : "mt-2"} `}>
                        
                        <NavLink to={Menu.to}
                            className={`iconsMenu ${Menu.to === window.location.pathname ? 'active-link' : ''}`}>
                            <img src={`${Menu.src}`} className="icooon" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;