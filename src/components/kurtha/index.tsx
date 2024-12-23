import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import Kurtha from './Kurtha'

export default function KurthaPage() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Kurtha" />
            <Kurtha />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
