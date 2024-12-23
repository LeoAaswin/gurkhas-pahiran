import KurthaPage from '@/components/kurtha'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Kurtha - Gurkhas Pahiran',
  description: 'Kurtha - Gurkhas Pahiran',
}


export default function index() {
  return (
    <Wrapper>
      <KurthaPage />
    </Wrapper>
  )
}
