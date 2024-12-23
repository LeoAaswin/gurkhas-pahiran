import React from 'react'
import { 
  FaClock,
  FaGlobeAsia,
  FaUsers
} from 'react-icons/fa'

export default function CompanyOverview() {
  const companyHighlights = [
    {
      icon: FaClock,
      title: 'Our Journey',
      description: 'Established in 2010, we\'ve been transforming fashion landscapes with our innovative tailoring approach'
    },
    {
      icon: FaGlobeAsia,
      title: 'Local Roots',
      description: 'Proudly rooted in Kathmandu, serving the vibrant community with personalized clothing solutions'
    },
    {
      icon: FaUsers,
      title: 'Community Impact',
      description: 'Empowering local artisans and supporting sustainable fashion practices'
    }
  ]

  return (
    <section 
      className="company-overview-section " 
      style={{ 
        background: 'black', 
        color: 'white', 
        padding: '5rem 0'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title mb-4">
              <h2 className="text-white mb-4">Our Story</h2>
              <p className="text-white lead mb-4">
                Gurkhas Pahiran emerged from a passion to redefine personalized fashion. 
                We believe that clothing is more than fabric – it's an expression of individual identity. 
                Our journey began with a simple mission: to create garments that are as unique as the people who wear them.
              </p>
            </div>
            
            <div className="company-highlights">
              {companyHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="highlight-item mb-3 d-flex align-items-center p-3 rounded"
                  style={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    borderLeft: '4px solid #ffd700' 
                  }}
                >
                  <div className="highlight-icon me-4">
                    <highlight.icon 
                      className="display-4" 
                      style={{ color: '#ffd700' }} 
                    />
                  </div>
                  <div>
                    <h4 className="text-white h5 mb-2">{highlight.title}</h4>
                    <p className="text-white-50 mb-0">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="overview-image-gallery">
              <div className="row g-3">
                <div className="col-6">
                  <img 
                    src="/assets/images/projects/2.png" 
                    alt="Tailoring Workshop" 
                    className="img-fluid rounded shadow-lg"
                    style={{ 
                      height: '250px', 
                      width: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="/assets/images/projects/1.png" 
                    alt="Fabric Selection" 
                    className="img-fluid rounded shadow-lg"
                    style={{ 
                      height: '250px', 
                      width: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
                <div className="col-12">
                  <img 
                    src="/assets/images/about/me1.png" 
                    alt="Our Team" 
                    className="img-fluid rounded shadow-lg"
                    style={{ 
                      height: '365px', 
                      width: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-vision  text-center" style={{ marginTop: "5rem" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="text-white mb-4">Our Mission & Vision</h3>
              <div 
                className="mission-box p-4 rounded" 
                style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  border: '1px solid #ffd700' 
                }}
              >
                <p className="text-white lead mb-3">
                  <strong>Mission:</strong> To empower individuals through personalized, 
                  high-quality tailoring that celebrates unique style and craftsmanship.
                </p>
                <p className="text-white lead">
                  <strong>Vision:</strong> To be the premier destination for bespoke clothing, 
                  setting new standards in personalized fashion and artisanal tailoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}