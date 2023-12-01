import React, { useState } from "react";
import "./sidebar.css";
import { NavLink,Link } from "react-router-dom";
import control from "../../assets/images/control.png";
import logo from "../../assets/images/attendance-icon.svg";


import home from "../../assets/images/home.png";
import schedule from "../../assets/images/schedule.png";
import sheet from "../../assets/images/sheet.png";
import attendance from "../../assets/images/attendance.png";
import help from "../../assets/images/help.png";
import exit from "../../assets/images/exit.png";
import user from "../../assets/images/user.png";
import userC from "../../assets/images/circle-user.png";
import menu from "../../assets/images/menu.png";
import cancel from "../../assets/images/cancel1.png";

import { useSidebar } from "./SidebarProvider";



function Sidebar() {
    const { open, setOpen, activeLink, setActiveLink } = useSidebar();


    const Menus = [
        { title: "Dashboard", src: home, to: "/dashboard" },
        { title: "Account", src: user, to: "/profile" },

        { title: "Schedule ", src: schedule, gap: true, to: "/schedule" },
        { title: "Attendance Sheet", src: sheet, to: "/attendancesheet" },
        { title: "Attendance", src: attendance, to: "/attendance" },
        { title: "Support", src: help, to: "/support" },

        { title: "Logout", src: exit, gap: true, to: "/", className: "logout-link" },
    ];
    return (
        <div>
            <div className={` ${open ? "w-60" : "w-20 "} bg-dark-purple h-screen pt-8 relative duration-300`}>
                <img
                    src={open ? cancel : menu}
                    className={`control-icon absolute cursor-pointer  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-1 cursor-pointer text-gray-300 text-sm items-center gap-x-4
                        ${Menu.gap ? "mt-12" : "mt-5"} `}>
                        
                            <NavLink to={Menu.to}
                                className={`iconsMenu ${Menu.to === activeLink ? 'active-link' : ''}`}
                                onClick={() => setActiveLink(Menu.to)} title={Menu.title}>
                                <img src={`${Menu.src}`} className="icooon" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/profile" className="user-header">
                <img src={logo} className="logoSidebar" />
                <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                    Attendance <br className="small-br" /> System
                </h1>
                <img src={userC} alt="User Icon" className="user-icon" />
                <span className="user-name">Kamila Abdugapparova</span>
            </Link>
                
        </div>
    );
}

export default Sidebar;