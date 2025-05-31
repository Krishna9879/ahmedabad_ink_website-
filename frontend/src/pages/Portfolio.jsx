import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaPaintBrush, FaShapes, FaPalette, FaUser, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const sectionRefs = {
    header: useRef(null),
    portfolio: useRef(null),
    customTattoo: useRef(null),
    slider: useRef(null),
    whyChoose: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    header: useInView(sectionRefs.header, inViewOptions),
    portfolio: useInView(sectionRefs.portfolio, inViewOptions),
    customTattoo: useInView(sectionRefs.customTattoo, inViewOptions),
    slider: useInView(sectionRefs.slider, inViewOptions),
    whyChoose: useInView(sectionRefs.whyChoose, inViewOptions),
    testimonials: useInView(sectionRefs.testimonials, inViewOptions),
    contact: useInView(sectionRefs.contact, inViewOptions),
  };

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 0 20px rgba(196, 30, 58, 0.6)',
      transition: { duration: 0.3 }
    }
  };

  const parallaxVariants = {
    hidden: { y: 0 },
    visible: {
      y: -20,
      transition: { duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
    }
  };

  // Particle Effect for Hero Section
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX < 0 || newX > 100) particle.speedX *= -1;
          if (newY < 0 || newY > 100) particle.speedY *= -1;

          newX = Math.min(Math.max(newX, 0), 100);
          newY = Math.min(Math.max(newY, 0), 100);

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Slider Logic for Featured Works
  const sliderImages = [
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG20180604080023-1152x1536.jpg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000026027-1152x1536.jpeg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025709-1152x1536.jpeg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/7A1F815B-5BCF-4FF7-B535-2F8BC6B186C5-1536x1536.jpg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/63ca3d8b-11f1-433a-b4f5-d32c13546c5e.jpg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000000413-1152x1536.jpeg",
    "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
              opacity: Math.random() * 0.4 + 0.2
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              transition: { duration: 2, repeat: Infinity, delay: Math.random() * 2 }
            }}
          />
        ))}
        {/* Circuit Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-full h-0.5' : 'h-full w-0.5'} bg-primary/10`}
            initial={{
              left: i % 2 === 0 ? 0 : (i * 5) + 'vw',
              top: i % 2 === 0 ? (i * 5) + 'vh' : 0,
              opacity: 0.3
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              transition: { duration: 5, repeat: Infinity, delay: Math.random() * 3 }
            }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-primary/20 to-black/90 opacity-80" />
        {/* Decorative Tattoo Pattern */}
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
                stroke="#C41E3A"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#tattoo-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section ref={sectionRefs.header} className="relative pt-24 pb-16 flex items-center justify-center overflow-hidden min-h-[600px]">
        <motion.div
          className="absolute inset-0 z-0"
          variants={parallaxVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-900/90" />
          <svg
            className="absolute inset-0 opacity-20"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="mandala-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                <path
                  d="M150,150 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0 M150,150 m-70,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0 M150,150 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0"
                  fill="none"
                  stroke="#C41E3A"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <path
                  d="M150,150 L120,120 M150,150 L180,120 M150,150 L120,180 M150,150 L180,180"
                  fill="none"
                  stroke="#C41E3A"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#mandala-pattern)" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 m-2 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' } }}
        />
        <motion.div
          initial="hidden"
          animate={isInView.header ? 'visible' : 'hidden'}
          variants={staggerChildren}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Particle Effect */}
          <div className="relative w-64 h-64 mx-auto">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                  background: 'radial-gradient(circle, rgba(196, 30, 58, 0.8), transparent)',
                  opacity: particle.opacity,
                }}
              />
            ))}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="w-64 h-64 rounded-full border-4 border-primary/50"
                style={{ boxShadow: '0 0 30px rgba(196, 30, 58, 0.8), inset 0 0 15px rgba(196, 30, 58, 0.5)' }}
              >
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg"
                  alt="Ahmedabad Ink Tattoo Portfolio"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 p-6 bg-black/70 rounded-lg border-2 border-primary/30"
            style={{ boxShadow: '0 0 20px rgba(196, 30, 58, 0.5)' }}
          >
            <motion.h1
              variants={textVariants}
              className="text-4xl md:text-6xl font-bold tracking-widest relative inline-block mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 30px rgba(196, 30, 58, 0.8)' }}
            >
              <span className="text-primary">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Welcome to the creative world of Ahmedabad Ink Tattoo, where every design tells a story and every stroke is a work of art. Our portfolio showcases the incredible talent of our artists, offering a glimpse into the passion and dedication we bring to every tattoo.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Portfolio Section */}
      <section ref={sectionRefs.portfolio} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.portfolio ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Our <span className="text-primary">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG20180604080023-1152x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000026027-1152x1536.jpeg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025709-1152x1536.jpeg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/7A1F815B-5BCF-4FF7-B535-2F8BC6B186C5-1536x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/63ca3d8b-11f1-433a-b4f5-d32c13546c5e.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/8E737CDC-6B7D-44E9-9ED5-7EE82BB5EA76-1152x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/8E757B3D-103F-4412-A468-D248307D0820-1152x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/16A674FA-446D-4D60-934F-001F0DFB0BC0.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/13E9A31F-1731-4882-A054-33D8F093DEAD.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/8E737CDC-6B7D-44E9-9ED5-7EE82BB5EA76-1152x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025658-1152x1536.jpeg",
              ].map((img, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="rounded-lg overflow-hidden border-2 border-primary/30"
                  style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
                >
                  <img
                    src={img}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Custom Tattoo Section */}
      <section ref={sectionRefs.customTattoo} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.customTattoo ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Custom Tattoo</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 text-center"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              We specialize in creating unique, custom tattoos tailored to your personality and vision. Whether you’re looking for a minimalist design, intricate realism, or bold traditional art, we bring your ideas to life.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaPaintBrush className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Realism Tattoos
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Hyper-detailed portraits and lifelike designs.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaShapes className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Geometric Tattoos
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Symmetry meets creativity with precision-crafted designs.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaPalette className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Black & Grey Tattoos
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Elegant and timeless shading techniques.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaPalette className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Color Tattoos
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Vibrant, striking designs that pop.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Featured Works Slider Section */}
      <section ref={sectionRefs.slider} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.slider ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Featured Works</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all"
                aria-label="Previous Slide"
              >
                <FaArrowRight className="rotate-180 text-2xl" />
              </button>
              <div className="flex items-center space-x-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  {[-1, 0, 1].map((offset) => {
                    const index = (currentSlide + offset + sliderImages.length) % sliderImages.length;
                    return (
                      <motion.div
                        key={index}
                        className="flex-shrink-0"
                        initial={{ scale: 0.9, opacity: 0.7, rotate: -5 }}
                        animate={{
                          scale: offset === 0 ? 1.1 : 0.9,
                          opacity: offset === 0 ? 1 : 0.7,
                          rotate: offset === 0 ? 3 : -5,
                          zIndex: offset === 0 ? 10 : 5,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className="w-64 h-[400px] rounded-lg border-2 border-primary/30"
                          style={{ boxShadow: offset === 0 ? '0 0 30px rgba(196, 30, 58, 0.8), inset 0 0 15px rgba(196, 30, 58, 0.5)' : '0 0 10px rgba(196, 30, 58, 0.3)' }}
                        >
                          <img
                            src={sliderImages[index]}
                            alt={`Featured Work ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              <button
                onClick={nextSlide}
                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all"
                aria-label="Next Slide"
              >
                <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section ref={sectionRefs.whyChoose} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.whyChoose ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Why Choose <span className="text-primary">Ahmedabad Ink Tattoo?</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaUser className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Experienced Artists
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Each tattoo is crafted by a seasoned professional with years of expertise.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaShieldAlt className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Hygiene Standards
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    We adhere to the highest levels of cleanliness and safety.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaHeart className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Client-Centered Approach
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Your satisfaction and comfort are our priorities.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30 min-h-[150px]"
                style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
              >
                <FaPaintBrush className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Art with Meaning
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    We collaborate with you to create tattoos that resonate deeply.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Testimonials Section */}
      <section ref={sectionRefs.testimonials} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.testimonials ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Testimonials</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.div
              variants={textVariants}
              className="flex justify-center items-center mb-6"
            >
              <span className="text-lg text-gray-300 mr-2" style={{ fontFamily: "'Open Sans', sans-serif'" }}>
                EXCELLENT
              </span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-lg" />
                ))}
              </div>
              <span className="text-lg text-gray-300 ml-2" style={{ fontFamily: "'Open Sans', sans-serif'" }}>
                Based on 200 reviews
              </span>
            </motion.div>
            <div className="max-h-[400px] overflow-y-auto space-y-6 pr-4">
              {[
                { name: "Hetvi Dudani", date: "2024-12-16", review: "Very good service & good work" },
                { name: "Tarun Hirpara", date: "2024-11-11", review: "It was great experience, highly recommended for tatoo lovers. I have done 3 tatoo." },
                { name: "Neetu Sharma", date: "2024-11-08", review: "“Hey nice work” or “Really nice ink" },
                { name: "Siddharth Danidhariya", date: "2024-11-08", review: "Only artist can do this 😆" },
                { name: "Dhaval Danidhariya", date: "2024-11-08", review: "" },
                { name: "Fena Bhuva", date: "2024-10-29", review: "Best tattoo work" },
                { name: "Hitaxi Raiyani", date: "2024-10-27", review: "Excellent work 👏 must try 😊" },
                { name: "Swarnima Singh", date: "2024-10-26", review: "Kam" },
                { name: "Abhi Patel", date: "2024-10-20", review: "The improvement they suggested me on my original design was amazing. And overall it was a very nice experience." },
                { name: "Gamini Gor", date: "2024-10-20", review: "Your work is too good And excellent Mene 6 years pehle Tatto karvaya tha but Aaj bhi wo aese dark he bilkul light nai huwa .your service and work outstanding Thank you so much 🙏🙏" },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="p-6 rounded-lg border-2 border-primary/30"
                  style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold text-primary mr-2" style={{ fontFamily: "'Dosis', sans-serif'" }}>
                      {testimonial.name}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-primary text-sm" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-400 text-sm" style={{ fontFamily: "'Open Sans', sans-serif'" }}>
                      {testimonial.date}
                    </span>
                  </div>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    {testimonial.review}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-400 text-sm" style={{ fontFamily: "'Open Sans', sans-serif'" }}>
                      Google
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-primary/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
        >
          <div className="h-0.5 bg-primary opacity-80" />
        </div>
      </div>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.contact ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
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
                  aria-label={social.name}
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
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isInView.contact ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Ready to <span className="text-primary">Get Inked?</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-300 mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Book a Free Consultation Now!
            </motion.p>
            <motion.div variants={textVariants}>
              <Link
                to="/contactpage"
                className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-medium border-2 border-primary/60 hover:bg-transparent hover:text-primary transition-all duration-500"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(196, 30, 58, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book a Free Consultation"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;