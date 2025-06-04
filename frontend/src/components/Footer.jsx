import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black relative pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture bg-repeat opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* About */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-white mb-6"
            >
              About Ahmedabad Ink Tattoo
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Established over a decade ago, Ahmedabad Ink Tattoo is a leading tattoo studio in Ahmedabad, specializing in custom designs, piercings, and tattoo removal. Our passionate artists ensure a hygienic and creative experience for every client.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <motion.a
                href="https://www.facebook.com/ahmedabadinktattoo"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ahmedabadinktattoo/"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-white mb-6"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'Our Team', 'Services', 'Testimonials', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <FaArrowRight className="mr-2 text-sm" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-white mb-6"
            >
              Our Services
            </motion.h3>
            <ul className="space-y-3">
              {['Custom Tattoos', 'Traditional Tattoos', 'Black & Grey Tattoos', 'Cover-ups', 'Piercing Services', 'Tattoo Removal'].map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <FaArrowRight className="mr-2 text-sm" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-white mb-6"
            >
              Contact Us
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-gray-400"
            >
              <p>
                FF/109, Silver Square Complex, opp. Dipak School<br />
                near Gangotri Circle, Sanidhya Park, Nikol<br />
                Ahmedabad, Gujarat 382350
              </p>
              <p>Open: 10AM - 8PM (Mon-Sat)</p>
              <p>Phone: +91 88668 48681</p>
              <p>Email: ahmedabadinkt@gmail.com</p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <p className="text-gray-400 mb-2">Book an appointment:</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="py-2 px-4 bg-dark/50 border border-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white py-2 px-4 rounded-r-lg hover:bg-accent transition-colors duration-300"
                >
                  Call Me
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Ahmedabad Ink Tattoo. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Health & Safety
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer