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

// FuturisticImage component with hover effects
const FuturisticImage = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: 'easeOut' }
        },
        hover: {
          scale: 1.03,
          transition: { duration: 0.4, ease: 'easeOut' }
        }
      }}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative group overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-105 scale-100"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/25 via-purple-500/20 to-cyan-500/25 opacity-0 group-hover:opacity-100"
        animate={{
          opacity: [0, 0.75, 0],
          scale: [1, 1.05, 1],
          transition: { duration: 2.3, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 border border-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.3, 0],
              opacity: [0, 0.85, 0],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                delay: Math.random() * 1.7,
                ease: 'easeInOut'
              }
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 border border-primary/60 transition-all duration-500">
      </div>
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-500" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-500" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-500" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
    </motion.div>
  );
};

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
            initial="hidden"
            animate={isInView.hero ? 'visible' : 'hidden'}
            variants={textVariants}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider font-playfair">
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
                className="text-3xl md:text-5xl font-bold mb-8 font-playfair"
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
                <FuturisticImage
                  key={index}
                  src={img}
                  alt={`Promotional tattoo design ${index + 1} by Ahmedabad Ink Tattoo Studio`}
                  className="rounded-2xl h-72"
                />
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
                className="text-gray-300 text-left bg-gray-900/20 p-8 rounded-2xl border border-gray-700"
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
                className="text-4xl md:text-6xl font-bold mb-8 font-playfair"
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
                <FuturisticImage
                  key={index}
                  src={img}
                  alt={`Portfolio tattoo artwork ${index + 1} by Ahmedabad Ink Tattoo Studio`}
                  className="rounded-2xl h-80"
                />
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
                className="text-4xl md:text-6xl font-bold mb-12 font-playfair"
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
                href="/contactpage"
                variants={textVariants}
                whileHover={{
                  scale: 1.05,
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
      </div>
    </ErrorBoundary>
  );
};

export default Offers;