import React from 'react';
import { Button, Table } from 'react-bootstrap';

const OrderList = () => {
    const orders = [
        { orderId: "001a", status: "processing", total: "400", date: '10-12-22' },
        { orderId: "002a", status: "processing", total: "300", date: '10-12-22' },
        { orderId: "003a", status: "Shipping", total: "800", date: '09-12-22' },
        { orderId: "001b", status: "Shipping", total: "500", date: '09-12-22' },
        { orderId: "002c", status: "Delivered", total: "200", date: '08-12-22' },
    ]
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>Order Status</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{order.orderId}</td>
                            <td>{order.status}</td>
                            <td>${order.total}</td>
                            <td>{order.date}</td>
                            <td><Button className='me-2 brandTwo-btn border-0 rounded-2'>View</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderList;