import React from 'react'
import Link from 'next/link'

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Ready to Design Your Dream Dress?",
  description = "Transform your vision into reality. Our expert tailors are ready to craft a unique, personalized dress that tells your story.",
  buttonText = "Book Consultation",
  buttonLink = "/contact"
}: CTASectionProps) {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="cta-content text-black">
              <h2 className="mb-3 text-black">{title}</h2>
              <p className="lead mb-4 text-black">{description}</p>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link 
              href={buttonLink} 
              className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-sm"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}