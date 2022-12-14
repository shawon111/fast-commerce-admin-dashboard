import React from 'react';

const PageTitle = ({children}) => {
    return (
        <div>
            <h2 className='fs-2 fw-bold brandTwo-text py-3'>{children}</h2>
        </div>
    );
};

export default PageTitle;