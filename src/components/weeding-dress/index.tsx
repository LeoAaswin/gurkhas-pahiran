import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import WeddingDress from './WeddingDress'
import FooterOne from '@/layouts/footers/FooterOne'

export default function WeddingDressPage() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Wedding Dress" />
            <WeddingDress />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
