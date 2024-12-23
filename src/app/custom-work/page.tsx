 
import SingleProject from '@/components/custom-work'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Custom Work - Gurkhas Pahiran',
  description: 'Custom Work - Gurkhas Pahiran',
}


export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  )
}
