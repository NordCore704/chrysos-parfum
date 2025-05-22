import React from 'react'
import { ContactSliderOne, ContactSliderTwo, } from '@/exports'

const ContactSliderMain = () => {
  return (
    <aside className='self-stretch items-stretch justify-end flex flex-col sm:w-[30%]'>
        <ContactSliderOne />
        <ContactSliderTwo />
    </aside>
  )
}

export default ContactSliderMain