import React from 'react'
import { assets } from '../assets/assets'
import SideButton from '../CHATBOT/SideButton'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-10 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Your Health, Our Priority <br />  Book an Appointment Today!
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Easily find and connect with top doctors- <br className='hidden sm:block' /> book your appointment in seconds.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>

              


                    
                
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative left-0 bottom-0'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.hero} alt="" />
                <SideButton/>
            </div>
        </div>
    )
}

export default Header