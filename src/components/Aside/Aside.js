//React Modules
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
    let [currentPath, setCurrentPath] = useState(window.location.hash);

    //Checks url, returning the nav icon based on current path
    const urlCheck = (path = "#/") => {
        if (currentPath === path) {
            return "fas fa-angle-double-right";
        } else {
            return "fas fa-angle-right";
        }
    };

    //Closes mobile aside bar when selected the link
    const handleMobileClick = (e) => {
        e.stopPropagation();
        if(window.innerWidth < 768){
            document.querySelector("aside").classList.remove("menu-open");
            document.getElementById("root").classList.remove("menu-open");
        }
    }

    useEffect(() => {
        window.addEventListener("hashchange", () =>
            setCurrentPath(window.location.hash)
        );
    }, []);

    return (
        <aside>
            <div className="logo">
                <h1 className="logo__name">Dashboard</h1>
            </div>
            <nav onClick={handleMobileClick} className="aside-nav">
                <NavLink className="aside-nav__link" to="/">
                    <i className={urlCheck()}></i>Home
                </NavLink>
                <NavLink className="aside-nav__link" to="/feed">
                    <i className={urlCheck("#/feed")}></i>Feed
                </NavLink>
                <NavLink className="aside-nav__link" to="/notes">
                    <i className={urlCheck("#/notes")}></i>Notes
                </NavLink>
                <NavLink className="aside-nav__link" to="/profile">
                    <i className={urlCheck("#/profile")}></i>Profile
                </NavLink>
                <NavLink className="aside-nav__link" to="/saved">
                    <i className={urlCheck("#/saved")}></i>Saved
                </NavLink>
            </nav>
        </aside>
    );
};

export default Aside;
