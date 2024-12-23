 
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Service - Gurkhas Pahiran',
  description: 'Comfortable and Elegant',
}


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
