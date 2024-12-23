import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import SingleProjectArea from './CustomWork'
import FooterOne from '@/layouts/footers/FooterOne'

export default function SingleProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Custom Work" />
            <SingleProjectArea />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
