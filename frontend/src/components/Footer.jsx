import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaArrowRight } from 'react-icons/fa'

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
              About Ink Masters
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Premium tattoo studio specializing in custom designs and various tattoo styles. Our award-winning artists are committed to creating beautiful, lasting art.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <motion.a
                href="#"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: '#C41E3A' }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaYoutube size={20} />
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
              {['Home', 'Gallery', 'Artists', 'Services', 'Testimonials', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
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
              Services
            </motion.h3>
            <ul className="space-y-3">
              {['Custom Tattoos', 'Traditional', 'Black & Grey', 'Cover-ups', 'Watercolor', 'Touch-ups'].map((service, i) => (
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
          
          {/* Newsletter */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-white mb-6"
            >
              Newsletter
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-4"
            >
              Subscribe to our newsletter for the latest designs, promotions, and studio news.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-4 bg-dark/50 border border-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white py-2 px-4 rounded-r-lg hover:bg-accent transition-colors duration-300"
              >
                Join
              </motion.button>
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
            &copy; {currentYear} Ink Masters Studio. All rights reserved.
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
              Cookie Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer