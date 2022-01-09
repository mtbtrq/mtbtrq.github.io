import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav id="navbar">
            <ul id="mainUl">
                <li className="links"><Link className="link" to="/">About</Link></li>
                <li className="links"><Link className="link" to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}