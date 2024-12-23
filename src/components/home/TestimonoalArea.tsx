'use client'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'

export default function TestimonoalArea() {
  const testimonials = [
    {
      id: 1,
      name: "Pradeep Karki",
      image: "assets/images/testimonials/author1.jpg",
      text: "I ordered a custom suit for my wedding from Gurkhas Pahiran, and I couldn't be happier! Their team came to my house, took all the measurements, and delivered the perfect fit right on time. Such a hassle-free experience. Highly recommend for anyone in Nepal looking for premium service!"
    },
    {
      id: 2,
      name: "Bikee Shrestha",
      image: "assets/images/testimonials/author2.jpg",
      text: "I was amazed by the quality of Gurkhas Pahiran's kurtha stitching. I requested a custom design, and their team did a fantastic job. The best part? They came to my home to take the measurements and delivered it perfectly stitched. Truly impressed!"
    },
    {
      id: 3,
      name: "Pranjol Regmi",
      image: "assets/images/testimonials/author3.jpg",
      text: "Customizing my shirts has never been this easy with Gurkhas Pahiran. I just made an inquiry from home, and their workers reached out to take my measurements. Within a few days, I got my perfectly tailored shirts. This is truly a game-changer for busy professionals in Nepal!"
    },
    {
      id: 4,
      name: "Hari Parajuli",
      image: "assets/images/testimonials/author4.jpg",
      text: "I wanted a unique wedding dress, and Gurkhas Pahiran made it happen! They designed exactly what I envisioned, took my measurements from home, and delivered it beautifully crafted. Such convenience and professionalism!"
    },
    {
      id: 5,
      name: "Prakash Shrestha",
      image: "assets/images/testimonials/author5.jpg",
      text: "The home service by Gurkhas Pahiran is amazing! I had my size taken at home for a suit and a kurtha. Both were delivered perfectly tailored. Gurkhas Pahiran truly offers top-notch quality and convenience!"
    }
  ]

  return (
    <section className="testimonials-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
        
        <Splide 
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '30px',
            pagination: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
              640: {
                perPage: 1,
                gap: '10px'
              },
              768: {
                perPage: 2,
                gap: '20px'
              },
              1024: {
                perPage: 3,
                gap: '30px'
              }
            }
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <div className="testimonial-item wow fadeInUp">
                <div className="author">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="text">
                  {testimonial.text}
                </div>
                <div className="testi-des">
                  <h5>{testimonial.name}</h5>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}