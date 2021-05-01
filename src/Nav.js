import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if (window.screenY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }

        return ()=>{
            window.removeEventListener("scroll")
        }

    })
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41"
            />
            <img
            className="nav__avatar"
            src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41"
            />
        </div>
    )
}

export default Nav
