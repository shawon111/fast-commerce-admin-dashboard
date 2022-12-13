import React from 'react';
import SidebarLink from '../Global/SidebarLink';

const Sidebar = () => {
    return (
        <div>
            <div className='admin-sidebar py-2'>
                <div className='sidebar-navigation'>
                    <SidebarLink name="Home" link="/" />
                    <SidebarLink name="Blogs" link="/blogs" />
                    <SidebarLink name="Products" link="/products" />
                    <SidebarLink name="Customers" link="/customers" />
                    <SidebarLink name="Orders" link="/orders" />
                    <SidebarLink name="Users" link="/users" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;