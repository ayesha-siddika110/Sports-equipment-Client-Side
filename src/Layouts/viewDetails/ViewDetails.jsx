import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';

const ViewDetails = () => {
    const data = useLoaderData()
    // console.log(data)/;
    const {darkMode} = useContext(AuthContext)
    const { itemName, category, price, description, stock, time, customization, rating, image, email, userName } = data || {}

    return (
        <div className={`${darkMode && 'bg-[#0d0631] text-white'} py-14`}>


        <div className='border-2 flex flex-col justify-center w-[70%] m-auto p-8 py-10 rounded-lg'>
            <div className='
            flex justify-between mb-8'>
                <div>
                    <p className='text-lg'>Item name : <span className='font-semibold text-lg'>{itemName}<span className='text-base text-gray-600'>({category})</span></span></p>
                    <p className='text-lg'>Owner : <span className='font-semibold text-lg'>{userName}</span></p>
                    <p className='text-lg'>Price : <span className='font-semibold text-lg'>{price} $</span></p>
                    <p className='text-lg'>Stock : <span className='font-semibold text-lg'>{stock}</span></p>
                    <p className='text-lg'>Delivery Time : <span className='font-semibold text-lg'>{time} hours</span></p>
                </div>
                <div><img src={image} className='w-64 border h-[64]' alt="Product Image" /></div>
            </div>
            <hr />
            <div>
                <p><span className='text-xl font-semibold'>Description : </span> {description}</p>
            </div>

        </div>
        </div>
    );
};

export default ViewDetails;