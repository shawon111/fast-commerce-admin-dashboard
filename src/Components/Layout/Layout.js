import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Row>
                <Col xs={0} md={4} xl={2}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={8} xl={10}>
                    <div className='dashboard-contents p-5'>
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Layout;