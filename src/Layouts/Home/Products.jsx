import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import Loading from '../../componants/Loading/Loading';
import ProductCard from './productCard';

const Products = ({ data }) => {

    const { darkMode, loading, setloading } = useContext(AuthContext)
    // console.log(data);


    // const [data, setdata] = useState([])
    const [categories, setCategories] = useState([])
    const [remainngData, setremainingData] = useState([])
    useEffect(() => {

        if (data) {


            // setdata(data);
            setloading(false)
            setremainingData(data)
        }
    }, [])

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories);

            })

    }, [])



    const handleCategory = (category) => {
        setremainingData(data)
        const remainng = data.filter(item => item.category == category)
        if (category == "All") {
            setremainingData(data);

        } else {

            setremainingData(remainng);
        }




    }
    const handleAssendingOrder = () => {
        const assOrder = [...remainngData].sort((a, b) => a.price - b.price)
        setremainingData(assOrder);

    }
    const handleDssendingOrder = () => {
        const assOrder = [...remainngData].sort((a, b) => b.price - a.price)
        setremainingData(assOrder);

    }



    return (
        <>

            <div className='w-[90%] m-auto'>
                <h1 className='text-center text-5xl font-semibold pt-12 pb-1'>Products</h1>
                <p className='text-center pb-12'>Choose your favorite product and go back to your game</p>
                <div className='flex lg:flex-row flex-col gap-4'>

                    <div className=' lg:w-[20%] grid grid-cols-1 space-y-3 h-[350px]'>
                        <p className='text-3xl rancho-font pb-3 font-semibold text-gray-500'>Select Category</p>
                        {
                            categories && categories.map(item => <NavLink key={item._id} onClick={() => handleCategory(item.category)} className={`${darkMode ? ' bg-[#140a49] hover:bg-slate-500 hover:text-white text-center py-2 h-12 rounded-3xl' : 'border hover:bg-slate-500 hover:text-white text-center py-2 h-12 rounded-3xl'}`}>{item.category}</NavLink>)
                        }

                    </div>
                    {/* products */}
                    <div className=' w-[95%]'>
                        <div className='flex  justify-end gap-6'>
                            <select className={`select select-ghost border-2 border-slate-600 `} defaultValue={``} onChange={(e) => {
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
                            <p className='text-3xl rancho-font text-end font-semibold text-gray-500 pb-6'>Favorite Products</p>

                        </div>
                        {
                            loading && <div className="loading loading-spinner loading-lg"></div>
                        }
                        <div className='  grid  grid-cols-1 lg:grid-cols-3 gap-5'>


                            {
                                remainngData && remainngData.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>

                    </div>
                </div>
                {/* categories */}

            </div>
        </>
    );
};

export default Products;