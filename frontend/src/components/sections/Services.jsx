import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const services = [
    {
      id: 1,
      title: 'Custom Tattoos',
      description: 'Our artists work closely with you to create a unique design that tells your story. From concept to completion, we ensure your tattoo is one-of-a-kind.',
      icon: '🎨',
      details: ['Personalized consultations', 'Multiple design iterations', 'Premium inks and equipment']
    },
    {
      id: 2,
      title: 'Traditional Tattoos',
      description: 'Experience the timeless art of traditional tattooing with bold lines and vibrant colors. Perfect for those who appreciate classic styles.',
      icon: '🌊',
      details: ['Classic American and Japanese styles', 'Bold outlines', 'Vibrant, lasting colors']
    },
    {
      id: 3,
      title: 'Black & Grey Tattoos',
      description: 'Achieve stunning depth and realism with our black and grey tattoo services. Ideal for portraits and detailed imagery.',
      icon: '⚫',
      details: ['Fine line work', 'Photorealistic shading', 'Custom grayscale designs']
    },
    {
      id: 4,
      title: 'Cover-ups',
      description: 'Transform unwanted tattoos into beautiful new art. Our specialists are skilled in creating cover-ups that you’ll love.',
      icon: '✨',
      details: ['Free evaluation', 'Creative design solutions', 'Color correction']
    },
    {
      id: 5,
      title: 'Piercing Services',
      description: 'Professional and hygienic piercing services for a variety of styles. From ear and nose piercings to unique body modifications, we’ve got you covered.',
      icon: '💎',
      details: ['Sterile and safe procedures', 'Wide range of piercing options', 'Expert aftercare advice']
    },
    {
      id: 6,
      title: 'Tattoo Removal',
      description: 'Safely and effectively remove or lighten unwanted tattoos with our advanced tattoo removal services. Trust our experts for the best results.',
      icon: '🧼',
      details: ['State-of-the-art technology', 'Safe and effective removal', 'Expert care and guidance']
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
            Explore our wide range of tattoo and piercing services, designed to bring your vision to life.
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