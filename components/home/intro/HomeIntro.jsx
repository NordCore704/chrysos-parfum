import React from 'react'
import { HomeIntroIllustration, HomeFirstText, } from '@/exports'

const HomeIntro = () => {
  return (
    <section className='p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col sm:flex-row-reverse gap-5 justify-between'>
      <HomeIntroIllustration />
      <HomeFirstText />
      </section>
  )
}

export default HomeIntro