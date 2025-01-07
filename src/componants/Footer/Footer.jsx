import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logos from '../../assets/logos.png'

const Footer = () => {
    const {darkMode} = useContext(AuthContext)
    return (
        <div className=''>


        <div className={`${darkMode ? 'bg-[#050c3b] text-white' : 'bg-slate-200 text-black'} `}>
            <footer className="footer w-[80%] m-auto  flex flex-col lg:flex-row lg:justify-between items-center py-20">
                <aside>
                    <Link className="lg:text-3xl text-2xl rancho-font" to="/"><img className='w-[200px]' src={logos} alt="" /></Link>
                    <p className='pl-6'>
                        Sports Equipment Ltd.
                        <br />
                        Your neccesery our responsibility
                    </p>
                </aside>
                <nav className=''>
                    <h6 className="text-xl  ">Contact US</h6>
                    <div className=" -space-y-2">
                        <p>phone : 01700115689</p><br />
                        <p>local Address : Dhanmondi,Dhaka, 1100</p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a>
                        <FaFacebook />
                        </a>
                        <a>
                        <FaLinkedin />
                        </a>
                        <a>
                        <FaWhatsapp />
                        </a>
                    </div>
                </nav>
            </footer>
            <p className='text-center pb-20 w-[80%] m-auto'>Copyright © 2024 - All right reserved by SPORTS EQUIPMENT Ltd.</p>
        </div>
        </div>
    );
};

export default Footer;