import React from 'react'
import { ContactDisplayOne, ContactDisplayTwo, } from '@/exports'

const ContactMainDisplay = () => {
  return (
    <article className=' flex flex-col justify-between sm:w-[70%]'>
        <ContactDisplayOne />
        <ContactDisplayTwo />
    </article>
  )
}

export default ContactMainDisplay