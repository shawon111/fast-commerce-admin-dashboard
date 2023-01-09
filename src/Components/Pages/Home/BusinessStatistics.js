import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BusinessStatistics = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    // count product
    const countProduct = () => {
        fetch('https://fast-commerce-backend.onrender.com/products/length')
        .then(res=> res.json())
        .then(data=> setTotalProducts(data))
    }

    // count customers
    const countCustomer = () => {
        fetch('https://fast-commerce-backend.onrender.com/customers/length')
        .then(res=> res.json())
        .then(data=> setTotalCustomers(data))
    }

    // count Orders
    const countOrder = () => {
        setTotalOrders(30)
    }

    useEffect(()=>{
        countProduct();
        countCustomer();
        countOrder();
    }, [])


    return (
        <div className='hightlight-statistics'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-product-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold text-white'>{totalProducts}</Card.Title>
                            <Card.Text className='fs-5 fw-semibold text-white'>
                                Products
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-customer-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold brandTwo-text'>{totalCustomers}</Card.Title>
                            <Card.Text className='fs-5 fw-semibold brandTwo-text'>
                                Customers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-order-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold text-white'>{totalOrders}</Card.Title>
                            <Card.Text className='fs-5 fw-semibold text-white'>
                                Orders
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default BusinessStatistics;