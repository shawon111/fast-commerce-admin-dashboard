import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BusinessStatistics = () => {
    return (
        <div className='hightlight-statistics'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-product-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold text-white'>120</Card.Title>
                            <Card.Text className='fs-5 fw-semibold text-white'>
                                Products
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-customer-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold brandTwo-text'>1320</Card.Title>
                            <Card.Text className='fs-5 fw-semibold brandTwo-text'>
                                Customers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className='total-order-card p-2 rounded-3'>
                        <Card.Body>
                            <Card.Title className='overflow-hidden fs-1 fw-bold text-white'>4023</Card.Title>
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