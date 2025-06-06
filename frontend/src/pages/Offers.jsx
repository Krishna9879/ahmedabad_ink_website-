import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center text-red-500 p-4">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const Offers = () => {
  const sectionRefs = {
    hero: useRef(null),
    offers: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    hero: useInView(sectionRefs.hero, inViewOptions),
    offers: useInView(sectionRefs.offers, inViewOptions),
    portfolio: useInView(sectionRefs.portfolio, inViewOptions),
    contact: useInView(sectionRefs.contact, inViewOptions),
  };

  // State for image loading
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Animation Variants
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: {
      scale: 1.08,
      filter: 'brightness(1.4) saturate(1.2) contrast(1.1)',
      boxShadow: '0 0 30px rgba(239, 68, 68, 0.6), 0 0 50px rgba(239, 68, 68, 0.3)',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const portfolioImageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      filter: 'brightness(1.3) saturate(1.1) contrast(1.05)',
      boxShadow: '0 0 40px rgba(239, 68, 68, 0.7), 0 0 60px rgba(239, 68, 68, 0.4)',
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  // Image preload handler
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <ErrorBoundary>
      <div className="bg-black text-white relative overflow-hidden font-source-sans">
        {/* Enhanced Futuristic Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-red-500 rounded-full"
              initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh`, opacity: 0.3 }}
              animate={{
                y: [0, -1200],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
                transition: { duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 6 },
              }}
            />
          ))}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent w-full"
              initial={{ y: `${Math.random() * 100}vh`, opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                transition: { duration: 10, repeat: Infinity, delay: Math.random() * 4 },
              }}
            />
          ))}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.4) 2px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        {/* Hero Section */}
        <section ref={sectionRefs.hero} className="relative pt-24 pb-16 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-900/90" />
          <motion.div
            className="absolute inset-0 border-2 border-red-500/30 m-4 rounded-xl"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}
          />
          <motion.div
            initial="hidden"
            animate={isInView.hero ? 'visible' : 'hidden'}
            variants={textVariants}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider font-playfair text-shadow-red">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Offers & Deals</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4 font-poppins font-medium">
              Special Offers - Ahmedabad Ink Tattoo Studio
            </h2>
          </motion.div>
        </section>

        {/* Offers Section */}
        <section ref={sectionRefs.offers} className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isInView.offers ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                Discover exclusive deals and discounts at Ahmedabad Ink Tattoo Studio! We believe in making your tattoo journey even more exciting with special offers tailored for our valued clients.
              </motion.p>
              <motion.h3
                variants={textVariants}
                className="text-3xl md:text-5xl font-bold mb-8 font-playfair text-shadow-red"
              >
                Exciting Offers <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Coming Soon</span>
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                We're crafting exclusive offers to enhance your tattoo experience. Stay tuned for incredible deals!
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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
                  className="relative rounded-2xl overflow-hidden border border-red-500/20 cursor-pointer group bg-gradient-to-br from-red-500/5 to-black/40 backdrop-blur-md"
                >
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"
                    style={{ animation: 'shimmer 2s infinite' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-700/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(239, 68, 68, 0.1) 4px, rgba(239, 68, 68, 0.1) 8px)',
                      animation: 'scan 3s linear infinite',
                    }}
                  />
                  {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                      <span className="text-gray-300">Loading...</span>
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`Promotional tattoo design ${index + 1} by Ahmedabad Ink Tattoo Studio`}
                    className="w-full h-72 object-cover transition-all duration-500 group-hover:filter group-hover:contrast-125"
                    onLoad={handleImageLoad}
                    onError={() => setImagesLoaded(true)}
                  />
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-ping" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700"
                    style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`, backgroundSize: '20px 20px' }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView.offers ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.h3
                variants={textVariants}
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent font-poppins"
              >
                Terms and Conditions
              </motion.h3>
              <motion.div
                variants={staggerChildren}
                className="text-gray-300 text-left bg-gray-900/20 p-8 rounded-2xl border border-red-500/10"
              >
                {[
                  "Offers cannot be combined with other promotions.",
                  "Discounts are applicable only on bookings made within the offer validity period.",
                  "Offers subject to change at the discretion of Ahmedabad Ink Tattoo Studio.",
                ].map((term, index) => (
                  <motion.div key={index} variants={textVariants} className="mb-3 flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="leading-relaxed">{term}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto font-medium font-poppins leading-relaxed"
            >
              Let Ahmedabad Ink Tattoo Studio bring your tattoo dreams to life, now with unbeatable offers!
            </motion.p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={sectionRefs.portfolio} className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isInView.portfolio ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.h2
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold mb-8 font-playfair text-shadow-red"
              >
                Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Portfolio</span>
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Explore the artistry of Ahmedabad Ink Tattoo Studio through our stunning portfolio.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  variants={portfolioImageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative rounded-2xl overflow-hidden border border-red-500/20 cursor-pointer group bg-gradient-to-br from-red-500/5 to-black/40 backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/10 to-red-700/0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(239, 68, 68, 0.1) 4px, rgba(239, 68, 68, 0.1) 8px)',
                      animation: 'scan 3s linear infinite',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl border border-red-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 20px rgba(239, 68, 68, 0.1)' }}
                  />
                  {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                      <span className="text-gray-300">Loading...</span>
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`Portfolio tattoo artwork ${index + 1} by Ahmedabad Ink Tattoo Studio`}
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:filter group-hover:contrast-125"
                    onLoad={handleImageLoad}
                    onError={() => setImagesLoaded(true)}
                  />
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-225" />
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-bounce" />
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 animate-bounce" />
                  <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500 animate-bounce" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-red-500 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 delay-600">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
                  <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:animate-pulse" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isInView.contact ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="text-center"
            >
              <motion.h2
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold mb-12 font-playfair text-shadow-red"
              >
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Contact Us</span>
              </motion.h2>

              <motion.div
                variants={staggerChildren}
                className="flex justify-center space-x-8 mb-12"
              >
                {[
                  { icon: Facebook, name: 'Facebook', link: 'https://facebook.com/ahmedabadinktattoo' },
                  { icon: Twitter, name: 'Twitter', link: 'https://twitter.com/ahmedabadinktattoo' },
                  { icon: Youtube, name: 'YouTube', link: 'https://youtube.com/ahmedabadinktattoo' },
                  { icon: Instagram, name: 'Instagram', link: 'https://instagram.com/ahmedabadinktattoo' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    variants={textVariants}
                    whileHover={{
                      scale: 1.2,
                      color: '#C41E3A',
                      textShadow: '0 0 15px rgba(239, 68, 68, 0.6)',
                      transition: { duration: 0.3 },
                    }}
                    className="text-gray-300 transition-all duration-300"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <social.icon className="text-3xl" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={staggerChildren}
                className="text-gray-300 space-y-6 mb-12"
              >
                <motion.div variants={textVariants} className="flex items-start justify-center text-lg">
                  <MapPin className="text-red-500 mr-3 mt-1 text-xl" />
                  <p className="max-w-2xl leading-relaxed">
                    Visit Us: FF/109, Silver Square Complex, opp. Dipak School, near Gangotri Circle, Sanidhya Park, Nikol, Ahmedabad, Gujarat 382350
                  </p>
                </motion.div>
                <motion.div variants={textVariants} className="flex items-center justify-center text-lg">
                  <Phone className="text-red-500 mr-3 text-xl" />
                  <p>Mobile: +91 8866486811</p>
                </motion.div>
                <motion.div variants={textVariants} className="flex items-center justify-center text-lg">
                  <Mail className="text-red-500 mr-3 text-xl" />
                  <p>Email: ahmedabadinkt@gmail.com</p>
                </motion.div>
              </motion.div>

              <motion.a
                href="#contact"
                variants={textVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
                  backgroundColor: 'transparent',
                  color: '#C41E3A',
                  borderColor: '#C41E3A',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white py-4 px-12 rounded-2xl font-semibold border-2 border-red-500/50 transition-all duration-500 text-lg font-poppins"
                aria-label="Contact Ahmedabad Ink Tattoo Studio"
              >
                Get in Touch
                <ArrowRight className="ml-3" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <style jsx>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          .text-shadow-red {
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          }
        `}</style>
      </div>
    </ErrorBoundary>
  );
};

export default Offers;