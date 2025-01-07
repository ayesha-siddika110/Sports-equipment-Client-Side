import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/testimonials.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            
        })

    },[])
    console.log(data);
    return (
        <div>


            <div>
                <h1 className='text-center text-4xl font-semibold pt-20 pb-16'>What Out client Say ?</h1>
            </div>

            <div className='h-[500px] w-[90%] m-auto'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <div className='w-[80%] m-auto'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[500px]">
          {
            data?.map((item,idx)=> <SwiperSlide key={idx}>
            <TestimonialCard image={item?.buyerImage} rating={item?.rating} para={item?.description} name={item?.buyerName}></TestimonialCard>
           </SwiperSlide>)
          }
         
          
        
         
        </Swiper>

      </div>
            </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;