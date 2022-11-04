import React, { useContext, useState } from 'react';
import logo from '../../../asset/images/trawell_logo_white.png'
import bg from '../../../asset/images/login-bg.jpg'

import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Reset = () => {

    const [error,setError] = useState('')
    const {resetPass} = useContext(AuthContext)

    const handleReset = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value

        resetPass(email)
        .then(()=>{
            toast(
                "Please check your email to reset password.\n\nIf you didn't found it on inbox then check spam box. Thank you.",
                {
                  duration: 6000,
                }
              );
              setError('')
        })
        .catch(err=>{
            console.error(err)
            setError(err.message)
        })
    }


    return (
        <div className="w-full bg-center bg-no-repeat bg-cover bg-black bg-opacity-10 bg-blend-overlay" style={{backgroundImage:`url(${bg})`}}>
            <div className="min-h-screen flex flex-col items-center justify-center">
               <Link to='/'><img src={logo} alt="" /></Link>
                <div className="bg-white bg-opacity-60 shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0}  aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Reset your password
                    </p>
                   
                  
                    <form action="" onSubmit={handleReset}>
                    <p className="text-base font-medium ml-4 text-red-600">{error}</p>
                    <div className='mt-4'>
                        <label className="text-base font-medium leading-none text-gray-800">Email
                        <input aria-label="enter email adress"  type="email" name='email' className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <button aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-sm font-semibold leading-none text-white focus:outline-none bg-red-600 border rounded hover:bg-red-700 py-4 w-full">
                            Reset
                        </button>
                    </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Reset;