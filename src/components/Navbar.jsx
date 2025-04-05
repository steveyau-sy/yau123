import React from 'react';
import logo from "../images/react-logo-svgrepo-com.svg";
import PageLink from './PageLink';
import SocialLink from './SocialLink';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isToggled, setToggle] = useState (false);
    const handleToggle = ()=> {
        setToggle (!isToggled);};

    useEffect (()=>{
        const handleResize = () =>{
            if ( window.innerWidth>768){
                setToggle (false);
            }
            };
        window.addEventListener("resize", handleResize);
        }, []);
    return (
    <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img className="nav-logo" src={logo} alt=""/>
                    <button onClick = {handleToggle}
                    type="button"
                    className="nav-toggle"
                    id="nav-toggle"><i className="fa-solid fa-bars"></i>
                    </button>
                    <PageLink groupClass={ isToggled || isNavLinks ? "show-links" : "nav-links"}
                    itemClass="nav-links"/>
                    <SocialLink groupClass="nav-social"/>
                </div>
            </div>
        </nav>
  )}

export default Navbar