import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Offers = () => {
  const sectionRefs = {
    hero: useRef(null),
    offers: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null)
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    hero: useInView(sectionRefs.hero, inViewOptions),
    offers: useInView(sectionRefs.offers, inViewOptions),
    portfolio: useInView(sectionRefs.portfolio, inViewOptions),
    contact: useInView(sectionRefs.contact, inViewOptions)
  };

  // Animation Variants
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: '0 0 30px rgba(196, 30, 58, 0.7)',
      transition: { duration: 0.3 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0.4
            }}
            animate={{
              y: [0, -1200],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
              transition: {
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-0.5 bg-primary/50"
            initial={{
              x: i % 2 === 0 ? '-100vw' : '100vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0.3
            }}
            animate={{
              x: i % 2 === 0 ? '100vw' : '-100vw',
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: 10,
                repeat: Infinity,
                delay: Math.random() * 3
              }
            }}
          />
        ))}
      </div>

      {/* Hero Section (Compact) */}
      <section ref={sectionRefs.hero} className="relative py-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-900/90" />
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 m-4 rounded-xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          initial="hidden"
          animate={isInView.hero ? 'visible' : 'hidden'}
          variants={textVariants}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-wider"
            style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
          >
            <span className="text-primary">Offers & Deals</span>
          </h1>
          <h2
            className="text-2xl md:text-3xl font-serif font-semibold text-gray-300 mb-4"
            style={{ fontFamily: "'Dosis', sans-serif'" }}
          >
            Special Offers - Ahmedabad Ink Tattoo Studio
          </h2>
        </motion.div>
      </section>

      {/* Offers Section */}
      <section ref={sectionRefs.offers} className="py-12 relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView.offers ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Discover exclusive deals and discounts at Ahmedabad Ink Tattoo Studio! We believe in making your tattoo journey even more exciting with special offers tailored for our valued clients.
            </motion.p>
            <motion.h3
              variants={textVariants}
              className="text-2xl md:text-4xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
            >
              Exciting Offers <span className="text-primary">Coming Soon</span>
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              We’re crafting exclusive offers to enhance your tattoo experience. Stay tuned for incredible deals!
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {[
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/3-1.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/4.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/2-1024x1024.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-01-21-at-14.15.50_7aa79a12.jpg",
            ].map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative rounded-xl overflow-hidden border-2 border-primary/40"
              >
                <img
                  src={img}
                  alt={`Offer Visual ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView.offers ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.h3
              variants={textVariants}
              className="text-xl md:text-2xl font-serif font-bold mb-4 text-primary"
              style={{ fontFamily: "'Dosis', sans-serif'" }}
            >
              Terms and Conditions
            </motion.h3>
            <motion.ul
              variants={staggerChildren}
              className="text-gray-300 text-left"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              {[
                "Offers cannot be combined with other promotions.",
                "Discounts are applicable only on bookings made within the offer validity period.",
                "Offers subject to change at the discretion of Ahmedabad Ink Tattoo Studio.",
              ].map((term, index) => (
                <motion.li
                  key={index}
                  variants={textVariants}
                  className="mb-2 flex items-start"
                >
                  <span className="text-primary mr-2">•</span> {term}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Let Ahmedabad Ink Tattoo Studio bring your tattoo dreams to life, now with unbeatable offers!
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={sectionRefs.portfolio} className="py-12 relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView.portfolio ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
            >
              Our <span className="text-primary">Portfolio</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Explore the artistry of Ahmedabad Ink Tattoo Studio through our stunning portfolio.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025658-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/7A1F815B-5BCF-4FF7-B535-2F8BC6B186C5-1536x1536.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000000413-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000026027-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/63ca3d8b-11f1-433a-b4f5-d32c13546c5e.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG20180604080023-1152x1536.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025709-1152x1536.jpeg",
            ].map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative rounded-xl overflow-hidden border-2 border-primary/40"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-12 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView.contact ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
            >
              <span className="text-primary">Contact Us</span>
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              className="flex justify-center space-x-6 mb-8"
            >
              {[
                { icon: FaFacebookF, name: 'Facebook', link: '#' },
                { icon: FaTwitter, name: 'Twitter', link: '#' },
                { icon: FaYoutube, name: 'Youtube', link: '#' },
                { icon: FaInstagram, name: 'Instagram', link: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  variants={textVariants}
                  whileHover={{ scale: 1.2, color: '#C41E3A', transition: { duration: 0.3 } }}
                  className="text-gray-300"
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              variants={staggerChildren}
              className="text-gray-300 space-y-4"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              <motion.div variants={textVariants} className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <p>
                  Visit Us: FF/109, Silver Square Complex, opp. Dipak School, near Gangotri Circle, Sanidhya Park, Nikol, Ahmedabad, Gujarat 382350
                </p>
              </motion.div>
              <motion.div variants={textVariants} className="flex items-center justify-center">
                <FaPhone className="text-primary mr-2" />
                <p>Mobile: +91 886648681</p>
              </motion.div>
              <motion.div variants={textVariants} className="flex items-center justify-center">
                <FaEnvelope className="text-primary mr-2" />
                <p>Email: ahmedabadinkt@gmail.com</p>
              </motion.div>
            </motion.div>
            <motion.a
              href="#contact"
              variants={textVariants}
              whileHover={{ scale: 1.2, boxShadow: '0 0 40px rgba(196, 30, 58, 0.9)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary text-white py-4 px-10 rounded-xl font-medium border-2 border-primary/70 hover:bg-transparent hover:text-primary transition-all duration-500 mt-8"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Get in Touch
              <FaArrowRight className="ml-3" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers;