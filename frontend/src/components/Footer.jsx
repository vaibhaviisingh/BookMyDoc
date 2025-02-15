import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <div className='flex flex-row items-center gap-2 mb-2' >
                    <img onClick={() => navigate('/')} className='cursor-pointer w-[44px] h-[44px] ' src={assets.healthcare} alt="" />
                    <p className="text-3xl font-semibold text-[#1B5E3A]">Arogya</p>
                </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Arogya is a seamless healthcare platform that enables patients to book doctor appointments from their homes effortlessly. With AI-driven scheduling, real-time availability updates, and secure consultations, Arogya ensures convenient and patient-centric healthcare access.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9000-77890</li>
            <li>arogyadev@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Arogyadev.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
