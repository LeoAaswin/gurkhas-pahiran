import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import Suits from './Suits'

export default function SuitsAndShirts() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Suits and Shirts" />
            <Suits />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
