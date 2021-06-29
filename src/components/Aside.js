//React Modules
import React from 'react';
import { NavLink } from 'react-router-dom'

const Aside = () => {
    return(
        <aside>
            <div className='logo'>
                <h1 className='logo__name'>Dashboard</h1>
            </div>
            <nav className='aside-nav'>
                <NavLink className='aside-nav__link' to="/"><i className="fas fa-angle-right"></i>Home</NavLink>
                <NavLink className='aside-nav__link' to="/feed"><i className="fas fa-angle-right"></i>Feed</NavLink>
                <NavLink className='aside-nav__link' to="/notes"><i className="fas fa-angle-right"></i>Notes</NavLink>
                <NavLink className='aside-nav__link' to="/profile"><i className="fas fa-angle-right"></i>Profile</NavLink>
                <NavLink className='aside-nav__link' to="/saved"><i className="fas fa-angle-right"></i>Saved</NavLink>
            </nav>
        </aside>
    )
};

export default Aside;