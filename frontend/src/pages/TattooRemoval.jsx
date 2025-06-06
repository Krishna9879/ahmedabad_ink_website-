import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarCheck, FaBolt, FaHandsHelping, FaShieldAlt, FaUserCheck, FaCogs, FaSyringe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TattooRemoval = () => {
  const ref = useRef(null);
  const howItWorksRef = useRef(null);
  const whyChooseRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);

  const isHowItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });
  const isPortfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        staggerChildren: 0.1
      }
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
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 25px rgba(196, 30, 58, 0.6)',
      transition: { duration: 0.3 }
    }
  };

  // Floating animation for stars
  const starVariants = {
    float: {
      y: [0, -10, 0],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        duration: 3 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Circuit line animation
  const circuitVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        delay: Math.random() * 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={ref} className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Starry Background with Circuit Lines, Gradient Overlay, and Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars with floating animation */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
            }}
            variants={starVariants}
            animate="float"
          />
        ))}
        
        {/* Circuit Lines with draw animation */}
        <svg
          className="absolute inset-0"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(20)].map((_, i) => {
            const isVertical = i % 3 === 0;
            const x1 = isVertical ? (i * 5) : 0;
            const y1 = isVertical ? 0 : (i * 5);
            const x2 = isVertical ? (i * 5) : "100%";
            const y2 = isVertical ? "100%" : (i * 5);
            
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(196, 30, 58, 0.1)"
                strokeWidth="0.5"
                variants={circuitVariants}
                initial="hidden"
                animate="visible"
              />
            );
          })}
        </svg>
        
        {/* Gradient Overlay - REMOVED REDISH TONE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#020024]/20 to-black/90 opacity-90" />
        
        {/* Decorative Tattoo Pattern - CHANGED TO RED */}
        <svg
          className="absolute inset-0 opacity-20"
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

      {/* Floating particles with trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(196, 30, 58, 1) 0%, rgba(196, 30, 58, 0) 70%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 border-4 border-[#C41E3A]/20 m-4 rounded-2xl"
          style={{ boxShadow: '0 0 20px rgba(196, 30, 58, 0.4)' }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            variants={textVariants}
            className="flex items-center justify-center mb-6"
          >
            {/* Floating logo with glow */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ahmedabad-ink-logo.jpg"
                alt="Ahmedabad Ink Tattoo Logo"
                className="w-24 md:w-32 mr-6"
                style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
              />
            </motion.div>
            
            {/* Text glow animation */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-widest relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 30px rgba(196, 30, 58, 0.8)' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(196, 30, 58, 0.4)',
                  '0 0 30px rgba(196, 30, 58, 0.8)',
                  '0 0 50px rgba(196, 30, 58, 1)',
                  '0 0 30px rgba(196, 30, 58, 0.8)',
                  '0 0 10px rgba(196, 30, 58, 0.4)'
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Tattoo <span className="text-[#C41E3A]">Removal</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h1>
          </motion.div>
          
          {/* Text cascade animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 5px rgba(255,255,255,0.1)',
                '0 0 15px rgba(196, 30, 58, 0.3)',
                '0 0 5px rgba(255,255,255,0.1)'
              ]
            }}
            transition={{ 
              duration: 0.8,
              textShadow: {
                duration: 3,
                repeat: Infinity
              }
            }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Welcome to Ahmedabad Ink Tattoo Studio, your trusted partner for safe and effective tattoo removal. Whether you’re looking to remove an old tattoo, lighten it for a cover-up, or start fresh, our experienced team is here to help.
          </motion.p>
          
          {/* Floating image with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
              boxShadow: [
                'inset 0 0 10px rgba(196, 30, 58, 0.3), 0 0 15px rgba(196, 30, 58, 0.4)',
                'inset 0 0 20px rgba(196, 30, 58, 0.5), 0 0 30px rgba(196, 30, 58, 0.7)',
                'inset 0 0 10px rgba(196, 30, 58, 0.3), 0 0 15px rgba(196, 30, 58, 0.4)'
              ]
            }}
            transition={{ 
              duration: 0.8,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              boxShadow: {
                duration: 4,
                repeat: Infinity
              }
            }}
          >
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/360_F_961633344_ibjsrwSYnBbgbB7MPDIIVZjvjkoSHgvK.jpg"
              alt="Tattoo Removal"
              className="w-full max-w-lg mx-auto rounded-lg border-2 border-[#C41E3A]/30"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Neon Divider - COLOR CHANGED TO RED */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-[#C41E3A]/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
        >
          <div className="h-0.5 bg-[#C41E3A] opacity-80" />
        </div>
      </div>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#C41E3A]/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isHowItWorksInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            {/* Glowing text animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 30px rgba(196, 30, 58, 0.9)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 10px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              How It <span className="text-[#C41E3A]">Works</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <motion.div variants={textVariants} className="space-y-6">
                {[
                  {
                    icon: <FaCalendarCheck className="text-[#C41E3A] text-2xl mt-1" />,
                    title: "Step 1: Consultation",
                    content: "Begin with a free consultation where we assess your tattoo and discuss your expectations. We’ll explain the process, timeline, and expected results."
                  },
                  {
                    icon: <FaBolt className="text-[#C41E3A] text-2xl mt-1" />,
                    title: "Step 2: Laser Removal Process",
                    content: "Using advanced laser technology, we target the ink particles beneath your skin, breaking them down into smaller fragments that your body naturally eliminates."
                  },
                  {
                    icon: <FaHandsHelping className="text-[#C41E3A] text-2xl mt-1" />,
                    title: "Step 3: Aftercare",
                    content: "Proper aftercare is essential for healing and optimal results. We provide detailed aftercare instructions and support throughout your recovery journey."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="flex items-start space-x-4 p-6 rounded-lg border-2 border-[#C41E3A]/30"
                    style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.3)' }}
                  >
                    {step.icon}
                    <div>
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ fontFamily: "'Dosis', sans-serif'" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-300"
                        style={{ fontFamily: "'Open Sans', sans-serif'" }}
                      >
                        {step.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Floating image with rotation */}
              <motion.div 
                variants={textVariants}
                animate={{ 
                  rotate: [0, 1, -1, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg"
                  alt="Laser Tattoo Removal Process"
                  className="w-full h-[600px] rounded-lg border-2 border-[#C41E3A]/30 object-contain"
                  style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.4), 0 0 20px rgba(196, 30, 58, 0.5)' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider - COLOR CHANGED TO RED */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-[#C41E3A]/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
        >
          <div className="h-0.5 bg-[#C41E3A] opacity-80" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#C41E3A]/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isWhyChooseInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            {/* Glowing text animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 30px rgba(196, 30, 58, 0.9)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 10px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Why <span className="text-[#C41E3A]">Choose Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCogs className="text-[#C41E3A] text-2xl mt-1" />,
                  title: "Advanced Technology",
                  content: "We use state-of-the-art laser technology to ensure effective and precise tattoo removal."
                },
                {
                  icon: <FaUserCheck className="text-[#C41E3A] text-2xl mt-1" />,
                  title: "Certified Experts",
                  content: "Our team of certified professionals ensures safe and expert handling of every procedure."
                },
                {
                  icon: <FaShieldAlt className="text-[#C41E3A] text-2xl mt-1" />,
                  title: "Customized Solutions",
                  content: "Every tattoo is unique, and so is our approach. We create personalized plans tailored to your tattoo’s size, color, and depth."
                },
                {
                  icon: <FaSyringe className="text-[#C41E3A] text-2xl mt-1" />,
                  title: "Hygienic Practices",
                  content: "Our studio adheres to the highest standards of hygiene to ensure your safety and comfort."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-start space-x-4 p-6 rounded-lg border-2 border-[#C41E3A]/30 min-h-[150px]"
                  style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.3)' }}
                >
                  {item.icon}
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif'" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "'Open Sans', sans-serif'" }}
                    >
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider - COLOR CHANGED TO RED */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-[#C41E3A]/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
        >
          <div className="h-0.5 bg-[#C41E3A] opacity-80" />
        </div>
      </div>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#C41E3A]/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isPortfolioInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            {/* Glowing text animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 30px rgba(196, 30, 58, 0.9)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 10px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our <span className="text-[#C41E3A]">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025658-1152x1536.jpeg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/7A1F815B-5BCF-4FF7-B535-2F8BC6B186C5-1536x1536.jpg",
                "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000000413-1152x1536.jpeg"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="rounded-lg overflow-hidden border-2 border-[#C41E3A]/30"
                  style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.4), 0 0 20px rgba(196, 30, 58, 0.5)' }}
                >
                  {/* Image reveal animation */}
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  >
                    <img
                      src={src}
                      alt={`Tattoo Removal Portfolio ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider - COLOR CHANGED TO RED */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div
          className="h-0.5 bg-[#C41E3A]/50"
          style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
        >
          <div className="h-0.5 bg-[#C41E3A] opacity-80" />
        </div>
      </div>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#C41E3A]/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center"
          >
            {/* Glowing text animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 30px rgba(196, 30, 58, 0.9)',
                  '0 0 20px rgba(196, 30, 58, 0.6)',
                  '0 0 10px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ready to Start <span className="text-[#C41E3A]">Fresh?</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C41E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            
            {/* Text pulse animation */}
            <motion.p
              className="text-lg text-gray-300 mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
              animate={{ 
                textShadow: [
                  '0 0 5px rgba(255,255,255,0.1)',
                  '0 0 15px rgba(196, 30, 58, 0.3)',
                  '0 0 5px rgba(255,255,255,0.1)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Book a free consultation with our experts and take the first step toward removing or lightening your tattoo.
            </motion.p>
            
            {/* Button with particle effect on hover */}
            <motion.div variants={textVariants}>
              <Link
                to="/contact"
                className="relative overflow-hidden inline-block bg-[#C41E3A] text-black py-3 px-8 rounded-lg font-medium border-2 border-[#C41E3A]/60 transition-all duration-500"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(196, 30, 58, 0.8)',
                  backgroundColor: 'black',
                  color: '#C41E3A'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
                
                {/* Button glow particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={false}
                  whileHover={{
                    opacity: [0, 1],
                    transition: { duration: 0.3 }
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-[#C41E3A]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                        scale: [1, 1.5, 0],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TattooRemoval;