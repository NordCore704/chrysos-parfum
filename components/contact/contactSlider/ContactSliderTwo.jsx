import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong, FaStar, FaStarAndCrescent } from 'react-icons/fa6'

const ContactSliderTwo = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full'>
        <div className="p-2 flex-col gap-3 w-full lg:w-[50%] hidden lg:flex">
          <h4 className="text-4xl lg:text-5xl ">20+</h4>
          <p className="">wonderful frangrance variants available readily in store</p>

          <Link href={'/shop'} className='flex gap-2 w-full hover:text-scheme-gold items-center duration-300 transition-colors'>See Now <FaArrowRightLong /></Link>
        </div>
        <div className="p-2 flex flex-col gap-3 w-full lg:w-[50%] bg-scheme-gold">
          <h4 className="text-4xl lg:text-5xl ">100+</h4>
          <p className="">satisfied customers that smell better because of our services</p>

      
          <button className='flex gap-1 w-full hover:text-scheme-white items-center duration-300 transition-colors'><FaStar /> <FaStar /><FaStar /><FaStar /></button>
        </div>
    </div>
  )
}

export default ContactSliderTwo