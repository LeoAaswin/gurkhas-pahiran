// src/components/about/index.tsx
"use client"
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import SkillArea from './SkillArea'
import CompanyOverview from './CompanyOverview'
import HistoricalImpact from './HistoricalImpact'
import TeamLeadership from './TeamLeadership'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'
import CTASection from './CallToAction'

export default function About() {
  return (
    <>
    <HeaderOne />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Breadcrumb title="About Us" />
          <CompanyOverview />
          <HistoricalImpact />
          <TeamLeadership />
          <SkillArea />
          <CTASection 
  title="Ready to Transform Your Style?" 
  description="Our expert tailors are waiting to create something extraordinary just for you."
  buttonText="Start Your Journey"
  buttonLink="/contact"
/>
        </main>
        <FooterOne />
      </div>
    </div>
    </>
  )
}