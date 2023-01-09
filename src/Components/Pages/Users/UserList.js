import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const UserList = () => {
    // const users = [
    //     { name: "Andrew Symon", userName: "symon_43", email: "symon@gmail.com" },
    //     { name: "Alvi Andrea", userName: "andrea_02", email: "andrea@gmail.com" },
    // ]
    const [users, setUsers] = useState([]);

    const loadUserList = () => {
        fetch('https://fast-commerce-backend.onrender.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        loadUserList()
    }, [])

    const handleDeleteUser = (id) => {
        fetch(`https://fast-commerce-backend.onrender.com/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                loadUserList(data)
            })
    }

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
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button className='brandOne-btn border-0 rounded-2' onClick={()=> handleDeleteUser(user._id)}>Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;