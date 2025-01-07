import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';

const ViewDetails = () => {
    const data = useLoaderData()
    // console.log(data)/;
    const { darkMode } = useContext(AuthContext)
    const { itemName, category, price, description, stock, time, customization, rating, image, email, userName } = data || {}

    return (
        <div className={`${darkMode && 'bg-[#0d0631] text-white'} py-14`}>


            <div className=' flex flex-col justify-center w-[95%] m-auto p-8 py-10 rounded-lg'>
                <div className='
            flex justify-between mb-8'>
                    <div>
                        <p className='text-lg'>Item name : <span className='font-semibold text-lg'>{itemName}<span className='text-base text-gray-600'>({category})</span></span></p>
                        <p className='text-lg'>Owner : <span className='font-semibold text-lg'>{userName}</span></p>
                        <p className='text-lg'>Price : <span className='font-semibold text-lg'>{price} $</span></p>
                        <p className='text-lg'>Stock : <span className='font-semibold text-lg'>{stock}</span></p>
                        <p className='text-lg'>Delivery Time : <span className='font-semibold text-lg'>{time} hours</span></p>
                        <div className='flex justify-between'>
                            <p className='flex items-center space-x-1'>Rating : <span className='pl-1 font-semibold'>{rating}</span><FaStar className='text-orange-600' /></p>

                        </div>
                        <p className='text-lg'>Category : <span className='font-semibold text-lg'>{category}</span></p>


                    </div>


                    <div><img src={image} className='w-[500px] border max-h-[280px] object-cover' alt="Product Image" /></div>
                </div>
                <hr />
                <div className='pt-10'>
                    <p><span className='text-xl font-semibold '><span className='text-7xl'>D</span>escription : </span> {description}</p>
                </div>

            </div>
        </div>
    );
};

export default ViewDetails;