import React from 'react';
import workingimg from '../../assets/working.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <div id="aboutUs">
                <p className='text-center text-4xl font-semibold  mt-6'>About Us</p>


                <div className='w-[80%] m-auto lg:flex md:flex py-10'>
                    <div className='lg:w-[50%] md:w-[50%] w-[90%] flex justify-center items-center'>
                        <img src={workingimg} alt="img" />

                    </div>
                    <div className='lg:w-[50%] md:w-[50%] w-[90%] space-y-3'>
                        <h1 className='text-4xl text-sky-400 font-semibold mt-10'>Our Working Proccess</h1>
                        <p className='text-gray-400 text-justify text-[16px] pt-6'>At SPORTS GEAR, we are passionate about sports and fitness. Our mission is to empower athletes and enthusiasts of all levels with high-quality equipment that inspires performance and fosters a love for the game.</p>
                        <p>Whether you’re a seasoned professional, a weekend warrior, or just starting your fitness journey, we’ve got you covered. Our carefully curated selection features gear for every sport, from football and cricket to yoga and outdoor adventures.</p>
                        <p className='font-semibold pb-10'>Join us in celebrating the spirit of sports and unlocking your true potential. Together, let’s play, achieve, and exceed limits!</p>

                        <Link to="/allEquipments" className='bg-sky-500 shadow-lg shadow-sky-600 py-2 px-5 rounded-md  text-white w-56 text-center '>Visite All Equipments</Link>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;