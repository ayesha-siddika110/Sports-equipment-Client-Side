import React from 'react';
import gift from '../../assets/page-404.gif'

const PageError = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-9xl pt-20'>404</h1>
            <img src={gift} className='h-[500px]' alt="" />
            <h2 className='text-5xl -mt-28 text-gray-500 font-semibold '>Page Not Found</h2>
            
        </div>
    );
};

export default PageError;