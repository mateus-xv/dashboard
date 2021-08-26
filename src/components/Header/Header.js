//React Modules
import React, { useEffect } from "react";

const Header = () => {
    /*
      Handles the click on the menu button while in small screen,
      activating the aside navbar
    */
    const handleClick = (e, asideNav) => {
        asideNav.classList.toggle("open");
    };

    useEffect(() => {
        const menuButton = document.querySelector(".menu-icon");
        const asideNav = document.querySelector("aside");
        menuButton.addEventListener("click", (e) => handleClick(e, asideNav));
    }, []);

    return (
        <header>
            <div className="user">
                <div className="user__avatar">
                    <i className="fas fa-user"></i>
                </div>
                <p className="user__name">Lorem Ipsum</p>
            </div>
            <button className="menu-icon">
                <i className="fas fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;
