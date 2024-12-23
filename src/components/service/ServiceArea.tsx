import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import portfolio_img_1 from "@/assets/images/projects/1.png";
import portfolio_img_2 from "@/assets/images/projects/2.png";
import portfolio_img_3 from "@/assets/images/projects/3.png";
import portfolio_img_4 from "@/assets/images/projects/4.png";

export default function ServiceArea() {
  const services = [
    {
      id: '01',
      title: 'Suits And Shirts',
      description: 'Our suits are made from high-quality fabrics, ensuring durability and a luxurious feel with every wear. Each piece is tailored to enhance your silhouette, providing both comfort and confidence. From classic to contemporary designs, our collection caters to every occasion and personal preference. Experience the perfect blend of craftsmanship and elegance that sets our suits and shirts apart.',
      link: '/suits-and-shirt',
      image: portfolio_img_1
    },
    {
      id: '02',
      title: 'Custom Work',
      description: 'Tailored to perfection, our custom work ensures a personalized fit and style, reflecting your unique taste and requirements. From fabric selection to final touches, every detail is crafted with precision.',
      link: '/custom-work',
      image: portfolio_img_2
    },
    {
      id: '03',
      title: 'Wedding Dress',
      description: 'Designed with elegance and care, our custom wedding dresses offer a perfect blend of style and individuality. Each gown is meticulously crafted to make your special day as unforgettable as the dress itself.',
      link: '/wedding-dress',
      image: portfolio_img_3
    },
    {
      id: '04',
      title: 'Kurtha',
      description: 'Kurthas are a symbol of Nepalese tradition, blending vibrant fabrics with intricate designs that reflect the rich cultural heritage of Nepal. Worn for both daily wear and special occasions, they embody the elegance and timelessness of our national identity.',
      link: '/kurtha',
      image: portfolio_img_4
    }
  ]

  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`col-lg-${index % 2 === 0 ? '8' : '4'} col-md-${index % 2 === 0 ? '7' : '5'}`}
              >
                <div className="service-item wow fadeInUp delay-0-2s position-relative">
                  <Link href={service.link}>
                    <div className="service-image-container">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        layout="fill" 
                        objectFit="cover" 
                        className="service-image"
                      />
                    </div>
                    <i className="ri-arrow-right-up-line"></i>
                  </Link>
                  <h5>{service.id}</h5>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
            <a className="theme-btn w-auto mx-auto" href="/service">See More</a>
          </div>
        </div>
      </section>
    </>
  )
}