import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../assets/s1.png'
import img2 from '../../assets/s2.png'
import img3 from '../../assets/s3.jpg'
import img4 from '../../assets/s4.png'
import img5 from '../../assets/s5.png'
import img6 from '../../assets/s6.png'

const Sponsors = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold pt-24 pb-1'>Our Valued Sponsors</h1>
            <p className='text-center pb-12 w-[80%] m-auto'>We are proud to partner with some of the most reputable brands in the sports and fitness industry.</p>

            <Marquee className='space-x-10 h-28 overflow-hidden w-[80%] '>
                <img className='' src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </Marquee>

        </div>
    );
};

export default Sponsors;