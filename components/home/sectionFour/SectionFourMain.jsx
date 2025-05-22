import React from 'react'
import { SectionFourDisplay, SectionFourText } from '@/exports'

const SectionFourMain = () => {
  return (
    <section className=' bg-black flex flex-col-reverse sm:flex-row-reverse items-stretch'>
      <SectionFourText />
      <SectionFourDisplay />
    </section>
  )
}

export default SectionFourMain