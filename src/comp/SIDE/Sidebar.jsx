import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Sidebar = ({ children, role }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const menuItems = {
        admin: [
            { path: "/", name: "Dashboard" },
            { path: "/eventpage", name: "EventPage" },
            { path: "/eventorganizing", name: "EventOrganizing" },
            { path: "/eventparticipation", name: "EventParticipation" },
        ],
        teacher: [
            { path: "/", name: "Dashboard" },
            { path: "/eventorganizing", name: "EventOrganizing" },
        ],
        student: [
            { path: "/", name: "Dashboard" },
        ],
    };

    const currentMenuItems = menuItems[role] || [];

    return (
        <div className="container" style={{ maxWidth: '100%', padding: '0%' }}>
            <div
                className={`sidebar ${isHovered ? 'expanded' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {currentMenuItems.map((item, index) => (
                    <NavLink 
                        to={item.path} 
                        key={index} 
                        className="menu-item" 
                        activeClassName="active"
                    >
                        <div className="link_text" style={{ display: isHovered ? 'block' : 'none' }}>
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
