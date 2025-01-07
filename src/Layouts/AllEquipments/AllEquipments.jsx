import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import banner from '../../assets/banner-small.jpg'

const AllEquipments = () => {
    const equipmentData = useLoaderData();

    const [remainngData,setremainingData] = useState(equipmentData)

    const { user, darkMode } = useContext(AuthContext)
    // console.log(equipmentData);
    const handleAssendingOrder = () => {
        const assOrder = [...remainngData].sort((a, b) => a.price - b.price)
        setremainingData(assOrder);

    }
    const handleDssendingOrder = () => {
        const assOrder = [...remainngData].sort((a, b) => b.price - a.price)
        setremainingData(assOrder);

    }

    return (
        <div className={`${darkMode && 'bg-[#030725] text-white'}`}>
            <div
                style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}
                className=' h-52 flex flex-col text-center text-black items-center justify-center'>
                <h1 className='text-4xl'>All Sports Equipments Here</h1>
                <p> Whether you're an amateur or a professional, choosing the right sports gear tailored to your needs is key to maximizing your potential and enjoying the game.</p>

            </div>
            <div className='w-[90%] m-auto pt-11 flex justify-end items-center'>
            
            <p className='pr-4 font-semibold text-lg'>Sort By Price:</p>

            <select className={`select select-ghost border-2 border-sky-600 `} defaultValue={``} onChange={(e) => {
                if (e.target.value === "asc") {
                    handleAssendingOrder();
                } else if (e.target.value === "desc") {
                    handleDssendingOrder();
                }
            }}>

                <option disabled selected className=''>Sort By Price</option>
                <option value={`asc`}>lowest to highest price</option>
                <option value={`desc`}>Highest to low price</option>
            </select>
            </div>
            <div className="overflow-x-auto py-8">
                <table className="table w-[90%] m-auto">
                    {/* head */}
                    <thead className='bg-sky-200'>
                        <tr className='text-xl text-black'>
                            <th>Sl</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Explore</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}
                        {
                            remainngData && remainngData?.map((item, index) => <tr className={`${darkMode ? 'hover:bg-[#030438]' : 'hover'}`} key={item._id}>

                                <th>{index + 1}</th>
                                <td>{item.itemName}</td>
                                <td className='py-6'>{item.category}</td>
                                <td>$ {item.price}</td>
                                <td><Link to={`/viewDetails/${item._id}`} className='border-2 p-2 hover:bg-sky-600 hover:text-white rounded-md '>View details</Link></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;