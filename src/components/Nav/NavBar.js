import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navBarItem">
                <Link className="navbarLink" to="/posts">Main Page</Link>
            </li>
            <li className="navBarItem">
                <Link className="navbarLink myCookingBookImage" to="/likes">My Cooking Book</Link>
            </li>
            <li>
                <Link className="navBarLink" to="/login" onClick={
                    () => {
                        localStorage.removeItem("myFavoriteRecipe_user")
                    }
                }>Logout</Link>
            </li>

        </ul>
    )
}