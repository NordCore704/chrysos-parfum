import React from 'react'
import { SectionTwoIllustration, SectionTwotext } from '@/exports'

const SectionTwo = () => {
  return (
    <section className='p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col-reverse sm:flex-row-reverse gap-5 justify-between'>
      <SectionTwotext />
      <SectionTwoIllustration />
    </section>
  )
}

export default SectionTwo