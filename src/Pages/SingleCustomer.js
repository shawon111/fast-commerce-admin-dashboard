import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const SingleCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState({});
    useEffect(() => {
        getCustomerData()
    }, [])

    const getCustomerData = () => {
        fetch(`http://localhost:5000/customers/${id}`)
            .then(res => res.json())
            .then(data => setCustomerData(data))
    }

    const handleDeleteCustomer = (id) =>{
        fetch(`http://localhost:5000/customer/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            navigate('/customers')
        })
    }

    return (
        <div>
            <Card>
                <Card.Header as="h6"><cite className='brandOne-text opacity-75'>username: {customerData.userName}</cite></Card.Header>
                <Card.Body>
                    <Card.Title className='overflow-hidden brandTwo-text fw-bold'>Name: {customerData.name}</Card.Title>
                    <Card.Text className='brandTwo-text fw-semibold'>
                        Email: {customerData.email}
                    </Card.Text>
                    <Card.Text className='brandTwo-text fw-semibold'>
                        Orders: {customerData.shippingDetails?.orders?.length || 0}
                    </Card.Text>
                    <Button onClick={()=> handleDeleteCustomer(id)} className='brandOne-btn border-0'>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCustomer;