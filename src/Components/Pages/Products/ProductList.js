import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // get product data
    useEffect(()=>{
        fetch("https://fast-commerce-backend.onrender.com/products")
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.availableStock}</td>
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

export default ProductList;