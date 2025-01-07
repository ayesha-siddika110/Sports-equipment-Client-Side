import React, { useContext } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ item }) => {
    const {darkMode, user} = useContext(AuthContext)
    const {description} = item || {}

    const sliceDescrip = description.slice(0,40)
    return (
        <div className={`${darkMode && 'text-white'}`}>
            <>

                <div className={`${darkMode ? 'p-4 rounded-xs border border-black text-white  shadow-xl bg-[#0d0631]' : 'p-4 rounded-md   shadow-xl'}`}>
                    <img src={item?.image} className=' rounded-xs w-full bg-cover h-[150px]' alt="" />
                    <div className='space-y-1'>
                        <div className='flex justify-between mt-3'>
                            <p className='text-2xl font-semibold'>{item?.itemName}</p>
                            {/* <p className={`${item.stock == 'available' ? 'hover:bg-green-600 hover:text-white text-green-600 rounded-lg flex items-center px-3 border border-green-700' : 'hover:bg-orange-600 hover:text-white text-orange-600 rounded-lg flex items-center px-3 border border-orange-600'}`}>{item?.stock}</p> */}

                        </div>
                        <p className='text-base'>{sliceDescrip}...</p>
                        {/* <div className='flex justify-between'> */}
                            {/* <p className='flex items-center space-x-1'>Rating : <span className='pl-1'>{item?.rating}</span><FaStar className='text-orange-600' /></p> */}
                            {/* <p>Price: <span>{item?.price}$</span></p> */}

                        {/* </div> */}
                        <div className='pt-2'>
                            <Link to={`/viewDetails/${item._id}`} className='border hover:bg-sky-600 hover:text-white  cursor-pointer border-sky-600 text-center py-1 px-3 shadow-md shadow-sky-600 w-32'>See More</Link>
                        </div>  
                    </div>
                </div>
            </>

        </div>
    );
};

export default ProductCard;