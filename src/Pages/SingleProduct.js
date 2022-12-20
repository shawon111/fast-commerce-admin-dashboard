import React from 'react';
import PageTitle from '../Components/Global/PageTitle';
import ProductEditForm from '../Components/Pages/Orders/ProductEditForm';

const SingleProduct = () => {
    return (
        <div>
            <PageTitle>
                Edit Product
            </PageTitle>
            <ProductEditForm />
        </div>
    );
};

export default SingleProduct;