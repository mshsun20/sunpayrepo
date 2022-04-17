import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import menu from '../icons/darkmode/menu.png'

const Navbar = () => {
    const [menuState, setmenuState] = useState(false)

    // close hamberger menu when click anywhere outside the menu window
    document.addEventListener('click', (e) => {
        if (e.target.className !== "hmbrgicn") {
            setmenuState(false)
        }
    })

    return (
        <>
        <div className="navcntnr">
            <div className="navbr">
                <div className="navhd">
                    <div><span>s</span>un<span>p</span>ay</div>
                </div>
                <div className="nvmnugrp">
                    <div className="navmnu">
                        <NavLink className="nvlnk" to='/'><span className="nvspn">Home</span></NavLink>
                        <NavLink className="nvlnk" to='/about'><span className="nvspn">AboutUS</span></NavLink>
                        <NavLink className="nvlnk" to='/services'><span className="nvspn">Services</span></NavLink>
                        <NavLink className="nvlnk" to='/contact'><span className="nvspn">ContactUS</span></NavLink>
                        <NavLink className="nvlnk" to='/registration'><Button className="nvbtnrg">Sign Up</Button></NavLink>
                        <NavLink className="nvlnk" to='/login'><Button className="nvbtnlg">Log In</Button></NavLink>
                    </div>
                    <div className="hmbrgmnu"><img className="hmbrgicn" src={menu} alt="" onClick={() => setmenuState(!menuState)} /></div>
                </div>
            </div>
            <div className={ menuState ? "mobile-navgrp" : "nonavmnu" }>
                <div className="mb-navmnu">
                    <NavLink className="nvlnk" to='/' onClick={() => setmenuState(!menuState)}><Button className="nvspn">Home</Button></NavLink>
                    <NavLink className="nvlnk" to='/about' onClick={() => setmenuState(!menuState)}><Button className="nvspn">AboutUS</Button></NavLink>
                    <NavLink className="nvlnk" to='/services' onClick={() => setmenuState(!menuState)}><Button className="nvspn">Services</Button></NavLink>
                    <NavLink className="nvlnk" to='/contact' onClick={() => setmenuState(!menuState)}><Button className="nvspn">ContactUS</Button></NavLink>
                    <NavLink className="nvlnk" to='/registration' onClick={() => setmenuState(!menuState)}><Button className="nvspn">Sign Up</Button></NavLink>
                    <NavLink className="nvlnk" to='/login' onClick={() => setmenuState(!menuState)}><Button className="nvspn">Log In</Button></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
