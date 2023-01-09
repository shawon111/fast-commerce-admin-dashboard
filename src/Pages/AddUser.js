import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageTitle from '../Components/Global/PageTitle';
import AddUserForm from '../Components/Pages/Users/AddUserForm';

const AddUser = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Add User
                    </PageTitle>
                </div>
            </div>
            <Row>
                <Col sm={12} md={8}>
                    <AddUserForm />
                </Col>
                <Col sm={12} md={4}>

                </Col>
            </Row>
        </div>
    );
};

export default AddUser;