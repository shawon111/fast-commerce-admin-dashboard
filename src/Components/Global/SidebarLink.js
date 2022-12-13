import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({name, link}) => {
    return (
        <NavLink className="sidebar-link ps-5 py-2 my-1 w-100 d-inline-block brandTwo-text text-decoration-none fs-6 fw-semibold" end to={link}>
            {
                name
            }
        </NavLink>
    );
};

export default SidebarLink;