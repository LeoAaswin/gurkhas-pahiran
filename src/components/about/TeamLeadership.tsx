import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function TeamLeadership() {
  const teamMembers = [
    {
      name: 'Ramesh Pandit',
      role: 'Founder & CEO',
      image: '/assets/images/about/me1.png',
      bio: 'A visionary entrepreneur with over a decade of experience in textile design and garment manufacturing. My passion lies in transforming fabric into personalized art, creating clothing that tells a unique story.',
      quote: 'Every stitch is a promise of quality, every garment a canvas of personal expression.',
      contact: {
        linkedin: 'https://linkedin.com/in/rameshpandit',
        email: 'ramesh@gurkhaспahiran.com',
        phone: '+977 985-123-4567'
      },
      achievements: [
        '10+ Years in Textile Industry',
        'Specialized in Bespoke Tailoring',
        'Sustainable Fashion Advocate'
      ]
    }
  ]

  return (
    <section 
      className="team-leadership-section" 
      style={{ 
        backgroundColor: 'black', 
        color: 'white',
      }}
    >
      <div className="container">
        <h2 className=" text-center h1" style={{
        marginBottom: '4rem', marginTop: '4rem'}}>Meet the Founders</h2>
      <div className="container-fluid px-5">
        <div className="row g-0 align-items-stretch">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12">
              <div 
                className="founder-full-width d-flex flex-column flex-lg-row"
                style={{ 
                  minHeight: '100vh',
                  backgroundColor: 'black'
                }}
              >
                {/* Image Section */}
                <div 
                  className="founder-image-section col-lg-6 order-1 order-lg-2 flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px'
                  }}
                />

                {/* Content Section */}
                <div 
                  className="founder-content-section col-lg-6 order-2 order-lg-1 d-flex align-items-center p-5"
                  style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                >
                  <div className="founder-details text-center text-lg-start">
                    <h2 className="display-4 mb-3 text-white">{member.name}</h2>
                    <h4 className=" mb-4">{member.role}</h4>
                    
                    <div className="founder-quote mb-4 position-relative">
                      <FaQuoteLeft className="text-white me-2" />
                      <span className="fst-italic text-white">{member.quote}</span>
                      <FaQuoteRight className="text-white ms-2" />
                    </div>
                    
                    <p className="lead text-white-50 mb-4">{member.bio}</p>
                    
                    <div className="founder-achievements mb-4">
                      <h5 className="text-white mb-3">Key Achievements</h5>
                      <ul className="list-unstyled">
                        {member.achievements.map((achievement, idx) => (
                          <li 
                            key={idx} 
                            className="mb-2 text-white-50"
                          >
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="founder-contact">
                      <div className="contact-links d-flex justify-content-center justify-content-lg-start">
                        <a 
                          href={member.contact.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline-light me-3"
                        >
                          <FaLinkedin className="me-2" /> LinkedIn
                        </a>
                        <a 
                          href={`mailto:${member.contact.email}`}
                          className="btn btn-outline-light"
                        >
                          <FaEnvelope className="me-2" /> Email
                        </a>
                      </div>
                      <p className="text-white-50 mt-3">
                        <FaPhoneAlt className="me-2" />
                        {member.contact.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}