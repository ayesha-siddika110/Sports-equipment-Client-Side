import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useState } from "react";
import Switch from "react-switch";
import logo from '../../assets/logo1.webp'
import './navbar.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, SignOutUser, setDarkMode, darkMode } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        SignOutUser()
            .then(res => navigate("/")
            )
            .catch(err => {
                console.log(err);

            })
    }

    const links = <div className="lg:space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allEquipments">All Sports Equipment</NavLink>
        <a href='#aboutUs'>About Us</a>
        {
            user && <>
                <NavLink to="/addEquipments">Add Equipment</NavLink>
                <NavLink to="/myEquipments">My Equipment</NavLink>
            </>

        }


    </div>
    const loginRegister = <>
        {
            user ? <div className={` flex`}>
                <div className={`drawer drawer-end `}>
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" data-tooltip-id="my-tooltip" data-tooltip-content={`${user?.displayName}`} className="drawer-button "><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="User details" /></label>
                       
            <Tooltip id="my-tooltip" />
                    </div>
                    <div className={`drawer-side mt-[6%] `}>
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className={`menu  text-base-content  w-80 p-4 ${darkMode ? 'bg-[#030725] text-white' : 'bg-white'}`}>
                            {/* Sidebar content here */}
                            
                            <li className='py-2 text-xl font-semibold text-center'>{user?.displayName}</li>
                            <li className='text-center'>{user?.email}</li>
                            <li><Link onClick={handleSignOut} className='btn border-slate-600 mt-6'> Sign out</Link></li>
                        </ul>
                    </div>
                </div>
                

            </div> : <>
                <Link to="/login" className='bg-sky-500 shadow-lg shadow-sky-600 py-2 px-5 rounded-md  text-white'>Login</Link>
                <Link to="/register" className='bg-sky-500 shadow-lg shadow-sky-600 py-2 px-5 rounded-md text-white'>Register</Link>
            </>
        }
    </>

    // const [darkMode, setDarkMode] = useState(false);


    return (
        <div className={`  ${darkMode ? 'bg-[#030725] text-white sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm ' : 'sticky top-0 z-50  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-lg'} `}>

            <div className="w-[90%] m-auto">
                <div className={`flex justify-between items-center w-full  py-6`}>
                    <div className="navbar-start space-x-3">
                        <div className={`dropdown `}>
                            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow${darkMode && 'bg-blue-950'}`}>
                                {links}
                            </ul>
                        </div>
                        <Link className="lg:text-3xl text-2xl " to="/">
                            <p className='font-semibold -mt-9 relative'>
                                <span className='font-semibold uppercase'>Sports Gear</span>
                                <img src={logo} className='h-16 absolute top-0 left-28' alt="logo" />
                                 </p>
                        </Link>
                        <Tooltip id="logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-3">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-5">

                        <div className={darkMode ? "dark" : "light"}>
                            <Switch
                                onChange={setDarkMode}
                                checked={darkMode}
                                offColor="#ccc"
                                onColor="#000"
                            />
                        </div>
                        <div className="navbar-end space-x-2">
                            {loginRegister}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;