import React from "react"
import { link } from 'react-router-dom'
import Register from './Register.js';

function NavBar() {
     return (

        <nav>
            <h1 className="h1">Hello</h1>
            <ul>
                <link to={"./Register"}>
                    <li>Register</li>
                </link>
            </ul>
        </nav>
    ) 
}

export default NavBar