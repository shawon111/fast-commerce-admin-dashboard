import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddUserForm = () => {

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAddUser = () => {
        const userInfo = {
            name: name,
            user_name: userName,
            email: email,
            password: password
        }
        fetch('https://fast-commerce-backend.onrender.com/users', {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(userInfo)
        }).then(res=> res.json())
        .then(data=> {
            if(data?.insertedId){
                setUserName('');
                setEmail('');
                setName('');
                setPassword('');
            }
        })
    }

    return (
        <div>
            <Form>
                <Row className='gy-4'>
                    <Col sm={12} lg={6}>
                        <Form.Control onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form.Control onChange={(e)=> setUserName(e.target.value)} placeholder="User Name" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form.Control onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form.Control onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    </Col>
                </Row>
                <Button className='brandTwo-btn border-0 rounded-2 mt-4' onClick={()=> handleAddUser()}>Submit</Button>
            </Form>
        </div>
    );
};

export default AddUserForm;