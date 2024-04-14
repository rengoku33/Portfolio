import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
//import WitcherLogo from "../logo/witcher.svg";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./index.scss";

const data = [
    
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'EXPERIENCE',
        to: '/experience'
    },
    {
        label: 'SKILLS',
        to: '/skill'
    },
    {
        label: 'PROJECTS',
        to: '/project'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to={'/'} className="navbar-logo-container">
                        <img src={require('../logo/witcherGG.jpg')} alt="witcher logo" height={110} />
                    </Link>
                </div>
                <ul className={`navbar-container-menu ${toggleIcon ? 'activeClass' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar-container-menu-item">
                                <Link className="navbar-link" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={33} /> : <FaBars size={33} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;