import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);

    const getCustomersList = () => {
        fetch('http://localhost:5000/customers')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }

    useEffect(() => {
        getCustomersList()
    }, [])

    // delete customer
    const handleDeleteCustomer = (id) =>{
        fetch(`http://localhost:5000/customer/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            getCustomersList() 
        })
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer, index) => <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.userName}</td>
                            <td><Button className='me-2 brandTwo-btn border-0 rounded-2'>
                                <Link to={`/customers/${customer._id}`}>View</Link>
                            </Button>
                                <Button onClick={()=> handleDeleteCustomer(customer._id)} className='brandOne-btn border-0 rounded-2'>Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CustomersList;