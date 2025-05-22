import { bentley, bentleyHalf, bentleyLong } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const SectionFourDisplay = () => {
  return (
    <div className='bg-black sm:w-[60%] flex self-stretch items-stretch'>
        <div className="w-[33.33%]">
        <Image src={bentleyHalf} alt='bentley' className='w-full h-full object-cover'/>
        </div>
        <div className="w-[33.33%]">
        <Image src={bentley} alt='bentley' className='w-full h-full object-cover'/>
        </div>
        <div className="w-[33.33%]">
        <Image src={bentleyLong} alt='bentley' className='w-full h-full object-cover'/>
        </div>
        
    </div>
  )
}

export default SectionFourDisplay