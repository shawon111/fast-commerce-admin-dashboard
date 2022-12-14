import React from 'react';
import { Button, Table } from 'react-bootstrap';

const UserList = () => {
    const users = [
        { name: "Andrew Symon", userName: "symon_43", email: "symon@gmail.com" },
        { name: "Alvi Andrea", userName: "andrea_02", email: "andrea@gmail.com" },
    ]
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td><Button className='me-2 brandTwo-btn border-0 rounded-2'>Edit</Button>
                                <Button className='brandOne-btn border-0 rounded-2'>Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;