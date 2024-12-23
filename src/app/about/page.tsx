
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About - Gurkhas Pahiran',
  description: 'Comfortable and Elegant',
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
