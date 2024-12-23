
import React from 'react'
import HeroArea from './HeroArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import PortfolioArea from './PortfolioArea'
import TestimonoalArea from './TestimonoalArea'
import ContactArea from './ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <AboutArea />
            <ServiceArea />
            <PortfolioArea />
            <TestimonoalArea />
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div> 
    </>
  )
}
