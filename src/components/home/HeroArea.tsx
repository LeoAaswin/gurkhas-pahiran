'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroArea() {
  return (
    <section className="main-hero-area position-relative overflow-hidden">
      <div className="hero-background-overlay position-absolute w-100 h-100"></div>
      
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="display-4 fw-bold mb-4">
                <span className=" text-black">Gurkhas Pahiran</span>
                <br />Tailoring Excellence
              </h1>
              
              <p className="lead mb-5">
                Crafting bespoke garments that reflect your unique style. 
                From traditional to contemporary, we transform fabric into art.
              </p>
              
              <div className="hero-cta d-flex align-items-center py-4">
                <Link 
                  href="/contact" 
                  className="btn btn-primary text-white bg-black btn-lg me-4 px-4 py-3 rounded-pill"
                >
                  Book an Appointment
                </Link>
                <Link 
                  href="/service" 
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 order-1 order-lg-2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-image text-center"
            >
              <Image 
                src="/assets/images/about/me1.png" 
                alt="Gurkhas Pahiran Tailoring" 
                width={600} 
                height={600} 
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}