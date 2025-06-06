import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Form Handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual form submission logic here (e.g., API call)
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div ref={ref} className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Starry Background with Circuit Lines, Gradient Overlay, and Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
              opacity: Math.random() * 0.4 + 0.2,
            }}
          />
        ))}
        {/* Circuit Lines (transparent as specified) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`circuit-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-full h-0.5' : 'h-full w-0.5'} bg-transparent`}
            style={{
              left: i % 2 === 0 ? 0 : i * 5 + 'vw',
              top: i % 2 === 0 ? i * 5 + 'vh' : 0,
              opacity: 0.3,
            }}
          />
        ))}
        {/* Gradient Overlay (transparent as specified) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 opacity-80" />
        {/* Decorative Tattoo Pattern (transparent stroke as specified) */}
        <svg
          className="absolute inset-0 opacity-10"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="tattoo-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M50,50 Q75,25 100,50 T150,50 Q175,75 150,100 T100,150 Q75,175 50,150 T0,100 Q25,75 50,50 Z"
                fill="none"
                stroke="transparent"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#tattoo-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 border-4 border-primary/20 m-4 rounded-2xl"
          animate={{
            boxShadow: [
              '0 0 20px rgba(196, 30, 58, 0.6)',
              '0 0 20px rgba(196, 30, 58, 0.8)',
              '0 0 20px rgba(196, 30, 58, 0.6)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerChildren}
        >
          <motion.div variants={textVariants} className="flex items-center justify-center mb-6">
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ahmedabad-ink-logo.jpg"
              alt="Ahmedabad Ink Tattoo"
              className="w-24 md:w-32 mr-6"
              style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
            />
            <h1
              className="text-4xl md:text-6xl font-bold tracking-widest relative inline-block group"
              style={{
                fontFamily: "'Dosis', sans-serif",
                color: '#ffffff',
                textShadow: '0 0 20px rgba(196, 30, 58, 0.8)',
              }}
            >
              <span className="text-primary">Contact</span> Us Today
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
            </h1>
          </motion.div>
          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300"
            style={{ fontFamily: "'Dosis', sans-serif" }}
          >
            Book a Free Consultation
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Thank you for your interest in our services! We’re excited to assist you. Please fill out the form below to get in touch.
          </motion.p>
        </motion.div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 10px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-50" />
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <section ref={sectionRef} className="py-12 relative">
        <div className="container mx-auto max-w-4xl relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Information */}
            <motion.div variants={textVariants} className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 relative inline-block group"
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  color: '#ffffff',
                  textShadow: '0 0 25px rgba(196, 30, 58, 0.7)',
                }}
              >
                Get in <span className="text-primary">Touch</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </h2>
              <motion.div
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative flex items-start space-x-4 p-4 rounded-lg border-2 border-primary/20 group overflow-hidden"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 1.8,
                          repeat: Infinity,
                          delay: Math.random() * 1.2,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  ))}
                </div>
                <FaMapMarkerAlt className="text-primary text-2xl mt-1 z-10" />
                <div className="z-10">
                  <p
                    className="text-lg text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    FF/24, Silver Square Complex, opp. Dipak Mandir, near GIDC, Nikol, Ahmedabad, Gujarat 382350
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative flex items-start space-x-4 p-4 rounded-lg border-2 border-primary/20 group overflow-hidden"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 1.8,
                          repeat: Infinity,
                          delay: Math.random() * 1.2,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  ))}
                </div>
                <FaPhoneAlt className="text-primary text-2xl mt-1 z-10" />
                <div className="z-10">
                  <p
                    className="text-lg text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    +91 98765 12345
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative flex items-start space-x-4 p-4 rounded-lg border-2 border-primary/20 group overflow-hidden"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 1.8,
                          repeat: Infinity,
                          delay: Math.random() * 1.2,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  ))}
                </div>
                <FaEnvelope className="text-primary text-2xl mt-1 z-10" />
                <a
                  href="mailto:info@ahmedabadink.com"
                  className="text-lg text-gray-300 hover:text-primary transition-all duration-200 z-10"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  info@ahmedabadink.com
                </a>
              </motion.div>
              <motion.div
                variants={contactItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative flex items-start space-x-4 p-4 rounded-lg border-2 border-primary/20 group overflow-hidden"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 1.8,
                          repeat: Infinity,
                          delay: Math.random() * 1.2,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  ))}
                </div>
                <FaClock className="text-primary text-2xl mt-1 z-10" />
                <div className="z-10">
                  <p
                    className="text-lg text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Mon-Sun, 10:00 AM - 8:00 PM
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={textVariants}
              className="relative bg-gray-900/20 p-6 rounded-xl border-2 border-primary/30"
              style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.3)' }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-primary/50 m-2 rounded-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(196, 30, 58, 0.5)',
                    '0 0 30px rgba(196, 30, 58, 0.7)',
                    '0 0 20px rgba(196, 30, 58, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 relative inline-block z-10 group"
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  color: '#ffffff',
                  textShadow: '0 0 25px rgba(196, 30, 58, 0.7)',
                }}
              >
                Send a <span className="text-primary">Message</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </h2>
              <form className="space-y-6 z-10 relative" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800/50 text-white border-2 border-primary/20 focus:outline-none focus:border-primary/50 transition-all duration-200"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800/50 text-white border-2 border-primary/20 focus:outline-none focus:border-primary/50 transition-all duration-200"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800/50 text-white border-2 border-primary/20 focus:outline-none focus:border-primary/50 transition-all duration-200"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800/50 text-white border-2 border-primary/20 focus:outline-none focus:border-primary/50 transition-all duration-200"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hover: {
                      scale: 1.05,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    },
                  }}
                  className="relative w-full bg-primary text-white py-3 rounded-lg font-medium border-2 border-primary/30 hover:bg-transparent hover:text-primary transition-all duration-200 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 border border-primary rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 0.8, 0],
                          transition: {
                            duration: 1.8,
                            repeat: Infinity,
                            delay: Math.random() * 1.2,
                            ease: 'easeOut',
                          },
                        }}
                      />
                    ))}
                  </div>
                  <span className="relative z-10">Send</span>
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/50 m-1 rounded-lg"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(196, 30, 58, 0.5)',
                        '0 0 30px rgba(196, 30, 58, 0.7)',
                        '0 0 20px rgba(196, 30, 58, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section ref={mapRef} className="py-6 relative">
        <div className="container mx-auto max-w-3xl relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isMapInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-6 relative inline-block group"
              style={{
                fontFamily: "'Dosis', sans-serif",
                color: '#ffffff',
                textShadow: '0 0 25px rgba(196, 30, 58, 0.7)',
              }}
            >
              Find Us <span className="text-primary">Here</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
            </motion.h2>
            <motion.div
              variants={textVariants}
              className="relative rounded-xl overflow-hidden border-2 border-primary/30"
              style={{
                boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.3), 0 0 20px rgba(196, 30, 58, 0.6)',
              }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-primary/50 m-2 rounded-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(196, 30, 58, 0.5)',
                    '0 0 30px rgba(196, 30, 58, 0.7)',
                    '0 0 20px rgba(196, 30, 58, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <iframe
                className="relative z-10 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.360!2d72.304!3d23.0278627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86e6d7a763e5%3A0x4b4e3e5f1e5f0e5b!2sAhmedabad%20Ink%20Tattoo%20Studio!5e0!3m2!1sen!2sin!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahmedabad Ink Tattoo Studio Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;