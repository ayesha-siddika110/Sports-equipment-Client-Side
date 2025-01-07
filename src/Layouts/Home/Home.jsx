import React, { useContext } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import Loading from '../../componants/Loading/Loading';
import img1 from '../../assets/sports-banner1.jpg'
import img2 from '../../assets/sports-banner2.jpg'
import img3 from '../../assets/sports-banner3.jpg'

import './home.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Products from './Products';
import { useLoaderData } from 'react-router-dom';
import Sponsors from './Sponsors';
import Maplocation from './MapLocation';
import { Fade } from 'react-awesome-reveal';




// function arrayN(size: number) {
//     return new Array(size).fill(undefined);
//   }
const Home = () => {



    const { loading, darkMode } = useContext(AuthContext)
    const data = useLoaderData()
    // console.log(data);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);


    return (
        <div className={`relative ${darkMode && 'bg-[#030725] text-white'}`}>

            {/* <Fade cascade damping={3}>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade> */}

           

            {/* Silder */}
            <div className="carousel w-full h-[570px] text-white">
                <div id="slide1" className="img1  carousel-item relative w-full">
                    {/* <img
                        src={career1}
                        className="object-cover w-full" /> */}

                    <p className='absolute left-[35%] top-[40%] text-5xl font-semibold'>
                        <Fade cascade damping={2}>

                            <h1 data-aos="fade-up">Your Game, Your Gear</h1>
                            <p data-aos="fade-up" className='-ml-[23%] mt-4 text-justify text-base font-normal w-[100%]'>Explore top-quality gear for every sport. Get ready to elevate your performance with our expertly curated collection.</p>
                        </Fade>

                    </p>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                        <a href="#slide4" className="text-4xl font-bold">❮</a>
                        <a href="#slide2" className="text-4xl font-bold">❯</a>
                    </div>
                    <div className='bg-gradient-to-t from-[#000000cb] h-[] w-full '>

                    </div>
                </div>
                <div id="slide2" className="carousel-item img2 relative w-full">
                    {/* <img
                        src={career2}
                        className="object-cover w-full" /> */}
                    <p className='absolute left-[35%] top-[40%] text-5xl font-semibold'>
                        <Fade cascade damping={2}>
                            <h1 data-aos="fade-up">Gear Up for Greatness</h1>
                            <p data-aos="fade-up" className='-ml-[23%] mt-4 text-justify text-base font-normal w-[100%]'>Discover premium sports equipment designed to help you push your limits. From beginners to pros, we’ve got you covered!</p>

                        </Fade>
                    </p>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="text-4xl font-bold">❮</a>
                        <a href="#slide3" className="text-4xl font-bold">❯</a>
                    </div>
                    <div className='bg-gradient-to-t from-[#000000cb] h-[] w-full '>

                    </div>
                </div>
                <div id="slide3" className="carousel-item img3 relative w-full">
                    {/* <img
                        src={career3}
                        className="object-cover w-full" /> */}
                    <p className='absolute left-[35%] top-[40%] text-5xl font-semibold'>
                        <Fade cascade damping={2}>

                            <h1 data-aos="fade-up">Your Game, Your Gear</h1>
                            <p data-aos="fade-up" className='-ml-[23%] mt-4 text-justify text-base font-normal w-[100%]'>Explore top-quality gear for every sport. Get ready to elevate your performance with our expertly curated collection.</p>
                        </Fade>
                    </p>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="text-4xl font-bold">❮</a>
                        <a href="#slide4" className="text-4xl font-bold">❯</a>
                    </div>
                    <div className='bg-gradient-to-t from-[#000000cb] h-[] w-full '>

                    </div>
                </div>
                <div id="slide4" className="carousel-item img1 relative w-full">
                    {/* <img
                        src={career4}
                        className="object-cover w-full" /> */}
                    <p className='absolute left-[35%] top-[40%] text-5xl font-semibold'>
                        <Fade cascade damping={3}>
                            <h1 data-aos="fade-up">Your Game, Your Gear</h1>
                            <p data-aos="fade-up" className='-ml-[23%] mt-4 text-justify text-base font-normal w-[100%]'>Explore top-quality gear for every sport. Get ready to elevate your performance with our expertly curated collection.</p>

                        </Fade>
                    </p>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="text-4xl font-bold">❮</a>
                        <a href="#slide1" className="text-4xl font-bold">❯</a>
                    </div>
                    <div className='bg-gradient-to-t from-[#000000cb] h-[] w-full '>

                    </div>
                </div>
            </div>

            {/* product section */}
            <Products data={data}></Products>
            <Sponsors></Sponsors>
            <Maplocation></Maplocation>
        </div>
    );
};

export default Home;