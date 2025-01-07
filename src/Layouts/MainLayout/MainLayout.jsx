import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../componants/Navbar/Navbar';
import Footer from '../../componants/Footer/Footer';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import Loading from '../../componants/Loading/Loading';
import '../../index.css'
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        <Loading></Loading>
    }
    return (
        <div className='roboto-font'>
            <Toaster></Toaster>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;