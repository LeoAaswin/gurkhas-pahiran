"use client";
import React, { useState } from 'react'
import img_1 from "@/assets/images/projects/2.png";
import img_2 from "@/assets/images/projects/3.png";
import img_3 from "@/assets/images/projects/4.png";
import img_4 from "@/assets/images/projects/5.png";
import Image from 'next/image';
import ImagePopup from '@/modals/ImagePopup';
import ContactForm from '@/components/contact/contactform';

const portfolio_images = [
  {
    id: 1,
    image: img_1,
  },
  {
    id: 2,
    image: img_2,
  },
  {
    id: 3,
    image: img_3,
  },
  {
    id: 4,
    image: img_4,
  },
]

export default function SingleProjectArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_images.slice(0, 5).map((item) => item.image.src);


  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="assets/images/projects/1.png" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Custom Work
                </h2>
                <p>Tailored to perfection, our custom work ensures a personalized fit and style, reflecting your unique taste and requirements. From fabric selection to final touches, every detail is crafted with precision.</p>
              </div>
            </div>
          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <Image src={item.image} style={{ height: "auto" }} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <ContactForm title="Customize Your Dress Now" />
        </div>
      </div>


      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  )
}
