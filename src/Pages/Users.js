import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/Global/PageTitle';
import UserList from '../Components/Pages/Users/UserList';

const Users = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Users
                    </PageTitle>
                </div>
                <div className='d-inline-block'>
                    <Button className='brandTwo-btn border-0 rounded-3 fs-6 fw-semibold px-3 py-2'>
                    <Link to="/add-user">Add New User</Link>
                    </Button>
                </div>
            </div>
            <div className='pt-3'>
                <UserList />
            </div>
        </div>
    );
};

export default Users;