import React, { useContext, useState } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "../Slider/Slider.css";
import img from '../../../../asset/images/tour4.jpg'

import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { PlacesContext } from '../Home';
import { SwiperSlide } from 'swiper/react';

export const Slider2 = () => {
    const [activeThumb, setActiveThumb] = useState(null)
    const places = useContext(PlacesContext)
    return (
        <>
      <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
              {
              places.map((i,place) =><SwiperSlide key={i} >
                    
                   
              <img src={img} alt="" />

              <p className='text-2xl font-bold absolute bottom-0 p-3 rounded-b-[10px] w-full  text-slate-200 bg-black bg-opacity-75'>{place.name}</p>
          </SwiperSlide>)
      }
  
      </Swiper>

      <Swiper
       onSwiper={setActiveThumb}
       loop={true}
       spaceBetween={10}
       slidesPerView={4}
       modules={[Navigation, Thumbs]}
       className='product-images-slider-thumbs'
      >
           {
              places.map((i,place) =><SwiperSlide key={i} >
                
              <img src={img} alt="" />

              <p className='text-2xl font-bold absolute bottom-0 p-3 rounded-b-[10px] w-full  text-slate-200 bg-black bg-opacity-75'>{place.name}</p>
          </SwiperSlide>)
      }
        
      </Swiper>
    </>
    );
};