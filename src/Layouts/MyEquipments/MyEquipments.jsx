import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const MyEquipments = () => {
    const { user, darkMode } = useContext(AuthContext)
    const data = useLoaderData()
    const [myProduct, setmyproduct] = useState([])
    // const [page, setPage] = useState(0);
    // const [product, setproduct] = useState(myProduct)



    useEffect(() => {
        // const remaining =  data && data.filter(item=> (user?.email === item?.email))
        // setmyproduct((prev)=> [...prev, ...remaining])
        fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments`)
            .then((res) => res.json())
            .then((data) => {
                const userProducts = data.filter((item) => item.email === user?.email);
                setmyproduct(userProducts);
            });
    }, [user?.email])
    // console.log(product);
    // console.log(myProduct);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remaining = myProduct.filter(item => item._id !== id)
        
                        setmyproduct(remaining);
        
                    })
            }
          });

    }
   



    return (
        <div className={`${darkMode && 'bg-[#030725] text-white'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[80%] m-auto gap-8 py-8">

                {
                    Array.isArray(myProduct) ? myProduct.map((item, index) => <div key={`${item._id} ${index}`} >



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
                                    <p>Rating : <span>{item?.rating}</span></p>
                                    <p>Price: <span>{item?.price}$</span></p>

                                </div>
                                <div className='pt-2 space-x-4'>
                                    <Link className='bg-slate-600 text-white py-2 px-4 rounded-lg' onClick={() => handleDelete(item._id)}>Delete</Link>
                                    <Link className='bg-slate-600 text-white py-2 px-4 rounded-lg' to={`/updateEquipments/${item._id}`}>Update</Link>
                                </div>
                            </div>
                        </div>


                    </div>) : <p>page not found</p>
                }

            </div>
            <div className='m-auto flex justify-center py-12'>

            {/* <button onClick={() => setPage(page + 1)} className='btn'>Load More</button> */}
            </div>

        </div>
    );
};

export default MyEquipments;