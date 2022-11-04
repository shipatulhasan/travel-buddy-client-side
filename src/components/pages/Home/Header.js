import React, { useState } from 'react';
// import home_bg from '../../../asset/images/img-home.jpg'
import Slider from './Slider/Slider';

const Header = () => {
  const [info, setInfo] = useState({})

  const {name,img,description} = info
  console.log(img)
    return (
        <div className="relative">
      <img
        src={img}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-60 bg-slate-900">
        
        <div className="relative py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:pt-20">
          <div className="flex flex-col md:min-h-[78vh]  items-center justify-between md:flex-row">
            <div className="w-full max-w-2xl mb-12 px-4 xl:mb-0 lg:pl-16 xl:w-4/6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white md:text-6xl sm:leading-none">
              {
                info.name ? name : 'Where will you go next ?'
              }
              </h2>
              <p className=" mb-4 text-base text-gray-100 md:text-lg">
                {
                  info?.description && description.length > 150 ? description.slice(0,200)+'. . .' : description
                }
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex text-base items-center font-semibold tracking-wider transition-colors duration-200 bg-slate-100 bg-opacity-40 text-slate-100 px-4 py-1 border-4 border-transparent ring-fuchsia-900 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800"
              >
                Booking today
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 min- max-w-xl  ">
              <div className=" rounded ">
               <Slider setInfo={setInfo} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;