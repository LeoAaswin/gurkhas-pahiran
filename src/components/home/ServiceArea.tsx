
import Link from 'next/link'
import React from 'react'

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <Link href="/suits-and-shirt">
                <i className="ri-arrow-right-up-line"></i>
                </Link>
                <h5>01</h5>
                <h4>Suits And Shirts</h4>
                <p>Our suits are made from high-quality fabrics, ensuring durability and a luxurious feel with every wear. Each piece is tailored to enhance your silhouette, providing both comfort and confidence. From classic to contemporary designs, our collection caters to every occasion and personal preference. Experience the perfect blend of craftsmanship and elegance that sets our suits and shirts apart.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <Link href="/custom-work">
                <i className="ri-arrow-right-up-line"></i>
                </Link>
                <h5>02</h5>
                <h4>Custom Work</h4>
                <p>Tailored to perfection, our custom work ensures a personalized fit and style, reflecting your unique taste and requirements. From fabric selection to final touches, every detail is crafted with precision.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <Link href="/wedding-dress">
                <i className="ri-arrow-right-up-line"></i>
                </Link>
                <h5>03</h5>
                <h4>Wedding Dress</h4>
                <p>Designed with elegance and care, our custom wedding dresses offer a perfect blend of style and individuality. Each gown is meticulously crafted to make your special day as unforgettable as the dress itself.</p>
              </div>
            </div>


            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <Link href="/kurtha">
                <i className="ri-arrow-right-up-line"></i>
                </Link>
                <h5>04</h5>
                <h4>Kurtha</h4>
                <p>Kurthas are a symbol of Nepalese tradition, blending vibrant fabrics with intricate designs that reflect the rich cultural heritage of Nepal. Worn for both daily wear and special occasions, they embody the elegance and timelessness of our national identity.</p>
              </div>
            </div>
            <a className="theme-btn w-auto mx-auto" href="/service">See More</a>
          </div>
        </div>
      </section>
    </>
  )
}
