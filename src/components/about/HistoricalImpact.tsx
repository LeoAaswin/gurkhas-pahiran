import React from 'react'
import { FaRulerCombined, FaTruck, FaSmile, FaTshirt } from 'react-icons/fa'

export default function HistoricalImpact() {
  const serviceHighlights = [
    { 
      icon: FaRulerCombined,
      number: 'Custom Fit',
      label: 'Personalized Measurements', 
      description: 'Home visit measurements for perfect tailoring'
    },
    { 
      icon: FaTshirt,
      number: '10+',
      label: 'Clothing Types', 
      description: 'Suits, Shirts, Kurthas, Wedding Dresses'
    },
    { 
      icon: FaTruck,
      number: 'Free',
      label: 'Home Delivery', 
      description: 'Convenient doorstep measurement and delivery'
    }
  ]

  return (
    <section className="service-highlights-section bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="text-black">Our Tailoring Promise</h2>
          <p className="text-black lead">Crafting Elegance, Delivering Perfection</p>
        </div>
        
        <div className="row">
          {serviceHighlights.map((highlight, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div 
                className="service-highlight-card text-center p-4 bg-white rounded shadow-sm" 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  minHeight: '350px',
                  transition: 'transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div 
                  className="highlight-icon mb-3" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderRadius: '50%', 
                    backgroundColor: '#f0f0f0',
                    marginBottom: '20px'
                  }}
                >
                  <highlight.icon className="text-black display-4" />
                </div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <h3 className="h4 text-black mb-2" style={{ fontSize: '1.5rem' }}>
                    {highlight.number}
                  </h3>
                  <h4 className="text-muted mb-3" style={{ fontSize: '1.2rem' }}>
                    {highlight.label}
                  </h4>
                  <p 
                    className="text-black" 
                    style={{ 
                      fontSize: '1rem', 
                      lineHeight: '1.6',
                      maxWidth: '250px',
                      margin: '0 auto'
                    }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-tailoring-description text-center mt-5">
          <blockquote className="blockquote">
            <p className="text-black mb-4">
              "We understand that every individual is unique, and so are their style preferences. 
              From fabric selection to the final stitch, every detail is crafted with your vision in mind. 
              Whether classic or contemporary, we ensure each garment reflects your personal taste."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}