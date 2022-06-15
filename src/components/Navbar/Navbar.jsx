import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {

    return (
        <nav className="nav-navbar">
            <div className="logo">
                <NavLink to="/" style={{ textDecoration:"none",color:"white" }}><h1>Athlyst</h1></NavLink>
            </div>
            <div className="container" onClick={() => { 
                document.querySelector(".container").classList.toggle("change"); 
                document.querySelector(".navbar").classList.toggle("expand");
            }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className="navbar">
                <NavLink to="/matchlist" className="navLinks">Match List</NavLink>
                <li className="navLinks">
                    <a href="https://www.linkedin.com/company/athlyst/" target="__blank">About Us</a>
                </li>
                <li className="navLinks">
                    <a href="https://www.linkedin.com/company/athlyst/" target="__blank">Contact Us</a>
                </li>
                <li className="navLinks">
                    <a href="https://www.linkedin.com/company/athlyst/" target="__blank">Careers</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;