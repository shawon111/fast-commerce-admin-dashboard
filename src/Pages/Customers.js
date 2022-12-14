import React from 'react';
import PageTitle from '../Components/Global/PageTitle';
import CustomersList from '../Components/Pages/Customers/CustomersList';

const Customers = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Customers
                    </PageTitle>
                </div>
            </div>
            <div className='pt-3'>
                <CustomersList />
            </div>
        </div>
    );
};

export default Customers;