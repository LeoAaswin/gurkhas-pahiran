
import React from 'react'
import ServiceArea from './ServiceArea'
import Breadcrumb from '../common/Breadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import TestimonoalArea from '../home/TestimonoalArea'

export default function Service() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Services" />
            <ServiceArea />
            <TestimonoalArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
