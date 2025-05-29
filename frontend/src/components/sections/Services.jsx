import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const services = [
    {
      id: 1,
      title: 'Custom Tattoos',
      description: 'Unique, personalized designs created specifically for you. Our artists work with you to bring your vision to life.',
      icon: '🎨',
      details: ['One-on-one consultation', 'Multiple design revisions', 'Premium inks and equipment']
    },
    {
      id: 2,
      title: 'Traditional',
      description: 'Bold lines and vibrant colors in classic American, Japanese and tribal styles for timeless tattoo designs.',
      icon: '🌊',
      details: ['Old school designs', 'Vibrant lasting colors', 'Bold outlines']
    },
    {
      id: 3,
      title: 'Black & Grey',
      description: 'Subtle depth and incredible detail using various shades of black and grey for stunning realistic imagery.',
      icon: '⚫',
      details: ['Fine line work', 'Photorealistic shading', 'Custom grayscale']
    },
    {
      id: 4,
      title: 'Cover-ups',
      description: 'Transform unwanted tattoos into beautiful new designs. Our specialists can help you reimagine your skin.',
      icon: '✨',
      details: ['Free evaluation', 'Creative solutions', 'Color correction']
    },
    {
      id: 5,
      title: 'Watercolor',
      description: 'Vivid and dreamy designs that mimic the flowing nature of watercolor paintings on your skin.',
      icon: '🌈',
      details: ['Vibrant color blending', 'Abstract designs', 'Soft edges and transitions']
    },
    {
      id: 6,
      title: 'Touch-ups',
      description: 'Revitalize and enhance your existing tattoos to restore their original beauty or improve upon them.',
      icon: '✅',
      details: ['Color refresh', 'Line restoration', 'Detail enhancement']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture bg-repeat opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From custom designs to touch-ups, our studio offers a wide range of professional services
          </p>
        </motion.div>

        <motion.div
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(196, 30, 58, 0.1), 0 10px 10px -5px rgba(196, 30, 58, 0.04)',
                transition: { duration: 0.3 }
              }}
              className="card group hover:border-primary hover:border border-transparent border p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-gray-300">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center mb-1">
                    <span className="text-primary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Book a Consultation
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Services