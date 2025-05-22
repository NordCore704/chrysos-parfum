import { gucci, valentino, versaceBlue, monir, valentinoTwo } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const SignupHero = () => {
  return (
    <div className='md:w-[40%] sm:w-[35%] sm:h-full self-stretch'>
            <Image src={valentinoTwo} className='w-full h-full object-cover' alt={'image'} />
    </div>
  )
}

export default SignupHero