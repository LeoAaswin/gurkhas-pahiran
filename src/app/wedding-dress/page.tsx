 
import WeddingDressPage from '@/components/weeding-dress'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Wedding Dress - Gurkhas Pahiran',
  description: 'Wedding Dress - Gurkhas Pahiran',
}


export default function index() {
  return (
    <Wrapper>
        <WeddingDressPage />
    </Wrapper>
  )
}
