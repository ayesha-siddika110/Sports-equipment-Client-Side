import React, { useContext } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ item }) => {
    const {darkMode, user} = useContext(AuthContext)
    return (
        <div>
            <>

                <div className={`${darkMode ? 'p-4 rounded-3xl border border-black  shadow-xl bg-[#0d0631]' : 'p-4 rounded-3xl   shadow-xl'}`}>
                    <img src={item?.image} className=' rounded-3xl w-full bg-cover h-[220px]' alt="" />
                    <div className='space-y-1'>
                        <div className='flex justify-between mt-3'>
                            <p className='text-2xl font-semibold'>{item?.itemName}</p>
                            <p className={`${item.stock == 'available' ? 'hover:bg-green-600 hover:text-white text-green-600 rounded-lg flex items-center px-3 border border-green-700' : 'hover:bg-orange-600 hover:text-white text-orange-600 rounded-lg flex items-center px-3 border border-orange-600'}`}>{item?.stock}</p>

                        </div>
                        <p className='text-lg text-gray-600'>{item?.category}</p>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='flex items-center space-x-1'>Rating : <span className='pl-1'>{item?.rating}</span><FaStar className='text-orange-600' /></p>
                            <p>Price: <span>{item?.price}$</span></p>

                        </div>
                        <div className='pt-3'>
                            <Link to={`${user ? `/viewDetails/${item._id}` : `/login`}`} className='border hover:bg-slate-600 hover:text-white  cursor-pointer border-slate-600 text-center py-2 px-3 rounded-3xl w-32'>View Details</Link>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default ProductCard;