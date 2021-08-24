//React Modules
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="user">
                <div className="user__avatar">
                    <i className="fas fa-user"></i>
                </div>
                <p className="user__name">Lorem Ipsum</p>
            </div>
            <div className="menu-icon">
                <i className="fas fa-bars"></i>
            </div>
        </header>
    );
};

export default Header;
