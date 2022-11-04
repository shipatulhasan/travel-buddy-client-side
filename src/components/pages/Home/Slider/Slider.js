import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import './Slider.css'
// import {images} from './sliderImg'
import img from '../../../../asset/images/tour4.jpg'
import { PlacesContext } from '../Home';

const Slider = ({setInfo}) => {


    const places = useContext(PlacesContext)
    const [swiperIndex, setSwiperIndex] = useState(0)

    // console.log(findPlace)
    // con
    
    useEffect(()=>{
        const findPlace = places[swiperIndex]

        setInfo(findPlace)

    }, [swiperIndex])
    
    return (
        <>
              <Swiper
        slidesPerView={2}
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        // onSlideChange={() => console}
        // onSwiper={(swiper) => console.log(swiper)}
          
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onActiveIndexChange={(swiperCore) => {setSwiperIndex(swiperCore.realIndex)}}

        navigation={true} modules={[EffectCoverflow,Navigation]}
        className="mySwiper">
            {
              places.map(place =><SwiperSlide key={place.id}>
                    
                   
              <img src={place.thumb} className='object-cover w-1/2' alt="" />

              <p className='text-2xl font-bold absolute bottom-0 p-3 rounded-b-[10px] w-full  text-slate-200 bg-black bg-opacity-75'>{place.name}</p>
          </SwiperSlide>)
      }
        
        
      </Swiper>

     
        </>
    );
};

export default Slider;