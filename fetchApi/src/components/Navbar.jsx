import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navList">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;