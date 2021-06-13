import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="NavBarItem">
                <Link className="navbarLink" to="/posts">Main Page</Link>
            </li>
            <li className="NavBarItem">
                <Link className="navbarLink" to="/likes">My Cooking Book</Link>
            </li>

        </ul>
    )
}