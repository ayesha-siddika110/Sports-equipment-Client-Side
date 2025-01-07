import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';

const AllEquipments = () => {
    const equipmentData = useLoaderData();

    const {user, darkMode} = useContext(AuthContext)
    // console.log(equipmentData);

    return (
        <div className={`${darkMode && 'bg-[#030725] text-white'}`}>
            <div className='bg-slate-400 h-52 flex flex-col text-center text-white items-center justify-center'>
                <h1 className='text-4xl'>All Sports Equipments Here</h1>
                <p> Whether you're an amateur or a professional, choosing the right sports gear tailored to your needs is key to maximizing your potential and enjoying the game.</p>

            </div>
            <div className="overflow-x-auto py-8">
                <table className="table w-[90%] m-auto">
                    {/* head */}
                    <thead>
                        <tr className='text-2xl text-black'>
                            <th>Sl</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}
                        {
                            equipmentData && equipmentData.map((item, index) => <tr className={`${darkMode ? 'hover:bg-[#030438]':'hover' }`} key={item._id}>
                                
                                    <th>{index+1}</th>
                                    <td>{item.itemName}</td>
                                    <td>{item.category}</td>
                                    <td>$ {item.price}</td>
                                    <td><Link to={`${user ? `/viewDetails/${item._id}` : `/login`}`} className='border-2 p-2 hover:bg-slate-600 hover:text-white rounded-md '>View details</Link></td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;