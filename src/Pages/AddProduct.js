import React from 'react';
import PageTitle from '../Components/Global/PageTitle';
import ProductForm from '../Components/Pages/Orders/ProductForm';

const AddProduct = () => {
    return (
        <div>
            <PageTitle>
                Add Product
            </PageTitle>
            <ProductForm />
        </div>
    );
};

export default AddProduct;