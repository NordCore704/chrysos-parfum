import React from 'react'
import { skeleton, skeletonNoBg, versace } from '@/exports/image-exports'
import Image from 'next/image'

const SectionTwoIllustration = () => {
  return (
    <div className="sm:w-[55%] lg:w-[55%] flex flex-col items-center justify-center self-start lg:justify-between mt-5 sm:mt-0">
      <Image src={versace} alt={'skeleton'} className='lg:w-[%]'/>
    </div>
  )
}

export default SectionTwoIllustration