import React from 'react';
import bg from '../../../asset/images/banner.png'

const Banner = () => {
    return (
        <div className="min-h-[60vh] w-full py-16 px-4 bg-center bg-no-repeat bg-fixed bg-cover bg-black bg-opacity-50 bg-blend-overlay flex items-center" style={{backgroundImage:`url(${bg})`}}>
            
            <h2 className="max-w-3xl font-sans text-5xl font-bold  text-white sm:leading-none lg:pl-12">
            The world is a book and those who do not travel read only one page.
              </h2>
        </div>
    );
};

export default Banner;