import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo left">REACT 4 U</a>
                <ul id="nav-mobile" className="right">
                    <li></li>
                    <li><Link to='/'> HOME </Link></li>
                    <li><Link to='/about'> ABOUT </Link></li>
                    <li><Link to='/cart'> CART </Link></li>
                    </ul>
                
            </div>
        </nav>
    )
}

export default Navbar
