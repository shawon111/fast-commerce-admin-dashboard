import React from 'react';
import BusinessStatistics from '../Components/Pages/Home/BusinessStatistics';
import SalesReport from '../Components/Pages/Home/SalesReport';

const Home = () => {
    return (
        <div className='admin-home'>
            <div>
                <BusinessStatistics />
                <div className='py-3'>
                    <h3 className='brandTwo-text fw-semibold overflow-hidden pt-4 fs-3'>
                        Sales in last three months
                    </h3>
                </div>
                <SalesReport />
            </div>
        </div>
    );
};

export default Home;