import React from 'react'
import { 
  FaCut, 
  FaRulerCombined, 
  FaPalette, 
  FaSwatchbook,
  FaEdit,
  FaTshirt 
} from 'react-icons/fa'

export default function SkillArea() {
  const tailoringSkills = [
    {
      icon: FaCut,
      title: 'Precision Cutting',
      description: 'Expert pattern cutting techniques ensuring impeccable garment structure',
      percentage: 95
    },
    {
      icon: FaRulerCombined,
      title: 'Custom Measurements',
      description: 'Precise body measurements for a perfect, personalized fit',
      percentage: 100
    },
    {
      icon: FaPalette,
      title: 'Fabric Selection',
      description: 'Curated collection of premium fabrics from around the world',
      percentage: 90
    },
    {
      icon: FaEdit,
      title: 'Detailed Stitching',
      description: 'Meticulous hand and machine stitching for superior quality',
      percentage: 98
    },
    {
      icon: FaSwatchbook,
      title: 'Design Consultation',
      description: 'Personalized style advice to bring your vision to life',
      percentage: 95
    },
    {
      icon: FaTshirt,
      title: 'Versatile Tailoring',
      description: 'Expert in suits, shirts, kurthas, and wedding attire',
      percentage: 92
    }
  ]

  return (
    <section className="skill-area-section bg-white" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="text-black">Our Craftsmanship</h2>
          <p className="text-black lead">Transforming Fabric into Art, One Stitch at a Time</p>
        </div>
        
        <div className="row">
          {tailoringSkills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="skill-card text-center p-4 bg-light rounded shadow-sm">
                <div className="skill-icon mb-3">
                  <skill.icon className="text-black display-4" />
                </div>
                <h3 className="h4 text-black mb-2">{skill.title}</h3>
                <p className="text-muted mb-3">{skill.description}</p>
                <div className="skill-progress">
                  <div 
                    className="progress" 
                    style={{ height: '10px', backgroundColor: '#e9ecef' }}
                  >
                    <div 
                      className="progress-bar bg-black" 
                      role="progressbar" 
                      style={{ width: `${skill.percentage}%` }}
                      aria-valuenow={skill.percentage} 
                      aria-valuemin={0} 
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="text-black mt-2 d-block">{skill.percentage}% Expertise</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="craftsmanship-philosophy text-center mt-5">
          <blockquote className="blockquote">
            <p className="text-black mb-4 lead">
              "At Gurkhas Pahiran, we don't just make clothes. We craft experiences. 
              Each garment is a testament to our dedication, precision, and passion for tailoring."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}