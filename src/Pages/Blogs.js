import React from 'react';
import { Button } from 'react-bootstrap';
import PageTitle from '../Components/Global/PageTitle';
import BlogList from '../Components/Pages/Blog/BlogList';

const Blogs = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Blogs
                    </PageTitle>
                </div>
                <div className='d-inline-block'>
                    <Button className='brandTwo-btn border-0 rounded-3 fs-6 fw-semibold px-3 py-2'>Add New Blog</Button>
                </div>
            </div>
            <div className='pt-3'>
                <BlogList />
            </div>
        </div>
    );
};

export default Blogs;