 
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact - Gurkhas Pahiran',
  description: 'Contact us for any queries or feedback. We are always here to help you.',
}


export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
