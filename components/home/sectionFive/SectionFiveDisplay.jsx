import React from 'react'
import Image from 'next/image'
import { modelOne, modelTwo, modelThree, modelFour, } from '@/exports/image-exports'

const SectionFiveDisplay = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:w-[60%] w-full'>
        <div className="lg:w-[85%]">
            <Image src={modelOne} className='w-full h-auto' alt={'model'} />
        </div>
        <div className="lg:w-[85%]">
            <Image src={modelTwo} className='w-full h-auto grayscale' alt={'model'} />
        </div>
        <div className="lg:w-[85%]">
            <Image src={modelThree} className='w-full h-auto grayscale' alt={'model'} />
        </div>
        <div className="max-w-[1280px] max-h-[1917px] lg:w-[85%]">
            <Image src={modelFour} className='w-full h-full object-cover' alt={'model'} />
        </div>
    </div>
  )
}

export default SectionFiveDisplay