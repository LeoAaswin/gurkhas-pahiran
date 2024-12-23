import SuitsAndShirts from '@/components/suits-and-shirt'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Suits and Shirts - Gurkhas Pahiran',
  description: 'Suits and Shirts - Gurkhas Pahiran',
}


export default function index() {
  return (
    <Wrapper>
      <SuitsAndShirts />
    </Wrapper>
  )
}
