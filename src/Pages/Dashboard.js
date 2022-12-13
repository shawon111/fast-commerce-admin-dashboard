import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    );
};

export default Dashboard;