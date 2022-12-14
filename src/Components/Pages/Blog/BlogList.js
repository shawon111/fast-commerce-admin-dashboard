import React from 'react';
import { Button, Table } from 'react-bootstrap';

const BlogList = () => {
    const blogs = [
        { title: "lorem ipsum dolor sit amet", id: "0023", author: "Mr X" },
        { title: "Class aptent taciti sociosqu ad litora torquent", id: "0033", author: "Mr X" },
        { title: "Curabitur pharetra orci enim. Aenean luctus", id: "0024", author: "Mr X" },
        { title: "Mauris eu odio dictum, malesuada libero", id: "0027", author: "Mr X" },
        { title: "Fusce pellentesque eros at tellus tempus", id: "0053", author: "Mr X" },
    ]
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((blog, index) => <tr key={index} >
                            <td>{index+1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
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

export default BlogList;