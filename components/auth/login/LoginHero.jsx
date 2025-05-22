import { valentinoTwo, monir, afrique } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const LoginHero = () => {
  return (
    <div className='md:w-[40%] sm:w-[35%] sm:h-full self-stretch'>
            <Image src={afrique} className='w-full h-full object-cover' alt={'image'} />
    </div>
  )
}

export default LoginHero