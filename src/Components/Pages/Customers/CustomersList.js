import React from 'react';
import { Button, Table } from 'react-bootstrap';

const CustomersList = () => {
    const customers = [
        { name: "Dani Starc", id: "0023", email: "dani@gmail.com", userName: "dani_09" },
        { name: "John Doe", id: "0033", email: "doe@gmail.com", userName: "doe_56"},
        { name: "Alexander Finch", id: "0024", email: "finch@gmail.com", userName: "finch_1"},
        { name: "Ruben Scott", id: "0027", email: "ruben@gmail.com", userName: "ruben_22"},
        { name: "Ferdinand De silva", id: "0053", email: "silva344@gmail.com", userName: "silva_344"},
    ]
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
                            <td>${customer.email}</td>
                            <td>{customer.userName}</td>
                            <td><Button className='me-2 brandTwo-btn border-0 rounded-2'>View</Button>
                                <Button className='brandOne-btn border-0 rounded-2'>Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CustomersList;