import React from 'react';
import logo from '../../../asset/images/trawell_logo_white.png'
import bg from '../../../asset/images/login-bg.jpg'
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div className="w-full bg-center bg-no-repeat bg-cover bg-black bg-opacity-10 bg-blend-overlay" style={{backgroundImage:`url(${bg})`}}>
            <div className="min-h-screen flex flex-col items-center justify-center">
               <Link to='/'><img src={logo} alt="" /></Link>
                <div className="bg-white bg-opacity-40 shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0}  aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Book your hotel in your tour destination
                    </p>
                   
                  
                    <form action="" onSubmit={"handleReset"}>
                    <p className="text-base font-medium ml-4 text-red-600">{'error'}</p>
                    <div className='mt-4'>
                        <label className="text-sm font-medium leading-none text-gray-800">Email
                        <input aria-label="enter email adress"  type="email" name='email' className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </label>
                    </div>
                    <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
                    
                    <label className="text-sm font-medium leading-none text-gray-800">Check In
                    <input type="date" name='chekIn' className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </label>
                
                
                    <label className="text-sm font-medium leading-none text-gray-800">Check Out
                    <input type="date" name='checkOut' required className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </label>
                </div>
                    <div className="mt-8">
                        <button aria-label="create my account" className="w-full text-base items-center font-semibold tracking-wider transition-colors duration-200 bg-slate-100 bg-opacity-40 text-slate-800 px-4 py-1 border-4 border-transparent ring-fuchsia-900 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800">
                            Check Availability
                        </button>
                    </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Booking;