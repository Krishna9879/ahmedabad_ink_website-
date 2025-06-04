import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa'

const Contact = () => {
  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { once: true, amount: 0.2 })
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        submitted: true, 
        message: 'Thank you for your message! We will contact you shortly to discuss your tattoo or piercing ideas at Ahmedabad Ink Tattoo.' 
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    }, 1000)
  }

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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  }

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black/90 to-black relative overflow-hidden">
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get inked or pierced? Contact us to book a consultation or learn more about our services at Ahmedabad Ink Tattoo.
          </p>
        </motion.div>

        <div 
          ref={contactRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-400">
                      FF/109, Silver Square Complex, opp. Dipak School<br />
                      near Gangotri Circle, Sanidhya Park, Nikol<br />
                      Ahmedabad, Gujarat 382350
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-gray-400">+91 88668 48681</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-gray-400">ahmedabadinkt@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Hours</h4>
                    <p className="text-gray-400">
                      Monday - Saturday: 10am - 8pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.705181684695!2d72.66457657421195!3d23.03466011641873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873e40d32bc5%3A0xafee5a813b8e0e0e!2sAhmedabad%20Ink%20Tattoo!5e0!3m2!1sen!2sin!4v1730369805129!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahmedabad Ink Tattoo Location"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
              
              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/20 border border-primary text-white p-6 rounded-lg flex items-start"
                >
                  <FaCheck className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-2">Message Sent!</h4>
                    <p>{formStatus.message}</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-white mb-2">Service</label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        <option value="Custom Tattoos">Custom Tattoos</option>
                        <option value="Traditional Tattoos">Traditional Tattoos</option>
                        <option value="Black & Grey Tattoos">Black & Grey Tattoos</option>
                        <option value="Cover-ups">Cover-ups</option>
                        <option value="Piercing Services">Piercing Services</option>
                        <option value="Tattoo Removal">Tattoo Removal</option>
                        <option value="Consultation">Consultation Only</option>
                      </motion.select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="input-field"
                      placeholder="Tell us about your tattoo or piercing idea"
                    ></motion.textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact