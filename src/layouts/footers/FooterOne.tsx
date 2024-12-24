import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function FooterOne() {
  return (
    <footer className="main-footer bg-black text-white py-10" style={{ paddingTop: '6rem', paddingBottom: '6rem'}}>
      <div className="container">
        <div className="row g-4 d-flex justify-content-between align-items-start">
          <div className="col-lg-4 text-lg-start text-center">
            <div className="logo">
              <Link href="/">
              <Image
                src="/assets/images/logo1.png"
                alt="Gurkhas Pahiran Logo"
                width={150}
                height={150}
                className="footer-logo img-fluid mb-4"
              />
              </Link>
              <p className="text-white mb-4">Your design, our precision. Crafting extraordinary tailoring experiences with passion and expertise.</p>
              <div className="contact-info">
                <p className="text-white mb-2">
                  <i className="fas fa-phone me-2"></i> +977 980-1234567
                </p>
                <p className="text-white">
                  <i className="fas fa-envelope me-2"></i> info@gurkhas-pahiran.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 text-lg-center text-center">
            <h4 className="text-white mb-4 position-relative pb-2 footer-heading">Quick Links</h4>
            <ul className="list-unstyled footer-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <li className="mb-2" style={{ textAlign: 'left', width: '100px'}}>
                <Link href="/" className="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-2"></i> Home
                </Link>
              </li>
              <li className="mb-2" style={{ textAlign: 'left', width: '100px'}}>
                <Link href="/about" className="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-2"></i> About Us
                </Link>
              </li>
              <li className="mb-2" style={{ textAlign: 'left', width: '100px'}}>
                <Link href="/services" className="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-2"></i> Services
                </Link>
              </li>
              <li className="mb-2" style={{ textAlign: 'left', width: '100px'}}>
                <Link href="/contact" className="text-white text-decoration-none">
                  <i className="fas fa-chevron-right me-2"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 text-lg-end text-center">
            <h4 className="text-white mb-4 position-relative pb-2 footer-heading">Follow Us</h4>
            <div className="social-icons d-flex justify-content-lg-end justify-content-center align-items-center">
              <Link 
                href="https://facebook.com/gurkhas-pahiran" 
                target="_blank" 
                className="text-white me-4 social-icon"
              >
                <i className="fab fa-facebook-f fa-2x"></i>
              </Link>
              <Link 
                href="https://instagram.com/gurkhas-pahiran" 
                target="_blank" 
                className="text-white me-4 social-icon"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
              <Link 
                href="https://linkedin.com/company/gurkhas-pahiran" 
                target="_blank" 
                className="text-white me-4 social-icon"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </Link>
              <Link 
                href="https://twitter.com/gurkhas-pahiran" 
                target="_blank" 
                className="text-white social-icon"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom mt-4 pt-3 border-top border-secondary">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-white mb-0">
                © {new Date().getFullYear()} Gurkhas Pahiran. All Rights Reserved. 
                Crafted by 
                <Link 
                  href="https://tantriktech.com.np/" 
                  target="_blank" 
                  className="text-white ms-1 fw-bold"
                >
                  Tantriktech
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}