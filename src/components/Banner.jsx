import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex bg-gradient-to-r from-primary to-neutral-300 dark:from-teal-950 dark:to-neutral-700 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-5'>
                <p>Book Appointment</p>
                <p className='mt-4'>with 100+ Trusted Doctors.</p>
            </div>
            <button onClick={()=>{navigate('/login')}} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 dark:bg-dar dark:text-whi'>Create account <img className='w-3' src={assets.arrow_icon} alt="" /></button>
        </div>

        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner