import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/Global/PageTitle';
import ProductList from '../Components/Pages/Products/ProductList';

const Products = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-inline-block pe-5'>
                    <PageTitle>
                        Products
                    </PageTitle>
                </div>
                <div className='d-inline-block'>
                    <Button className='brandTwo-btn border-0 rounded-3 fs-6 fw-semibold px-3 py-2'>
                        <Link to="/add-product">Add New Product</Link>
                    </Button>
                </div>
            </div>
            <div className='pt-3'>
                <ProductList />
            </div>
        </div>
    );
};

export default Products;