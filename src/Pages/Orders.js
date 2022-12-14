import React from 'react';
import PageTitle from '../Components/Global/PageTitle';
import OrderList from '../Components/Pages/Orders/OrderList';

const Orders = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Orders
                    </PageTitle>
                </div>
            </div>
            <div className='pt-3'>
                <OrderList />
            </div>
        </div>
    );
};

export default Orders;