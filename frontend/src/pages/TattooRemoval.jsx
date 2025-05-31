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
              opacity: Math.random() * 0.4 + 0.2
            }}
          />
        ))}
        {/* Circuit Lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`circuit-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-full h-0.5' : 'h-full w-0.5'} bg-primary/10`}
            style={{
              left: i % 2 === 0 ? 0 : (i * 5) + 'vw',
              top: i % 2 === 0 ? (i * 5) + 'vh' : 0,
              opacity: 0.3
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
      <section className="relative pt-24 pb-12 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 border-4 border-primary/20 m-4 rounded-2xl"
          style={{ boxShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
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
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ahmedabad-ink-logo.jpg"
              alt="Ahmedabad Ink Tattoo Logo"
              className="w-24 md:w-32 mr-6"
              style={{ boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}
            />
            <h1
              className="text-4xl md:text-6xl font-bold tracking-widest relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 30px rgba(196, 30, 58, 0.8)' }}
            >
              Tattoo <span className="text-primary">Removal</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </h1>
          </motion.div>
          <motion.p
            variants={textVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Welcome to Ahmedabad Ink Tattoo Studio, your trusted partner for safe and effective tattoo removal. Whether you’re looking to remove an old tattoo, lighten it for a cover-up, or start fresh, our experienced team is here to help.
          </motion.p>
          <motion.img
            variants={textVariants}
            src="https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/360_F_961633344_ibjsrwSYnBbgbB7MPDIIVZjvjkoSHgvK.jpg"
            alt="Tattoo Removal"
            className="w-full max-w-lg mx-auto rounded-lg border-2 border-primary/30"
            style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
          />
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

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isHowItWorksInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              How It <span className="text-primary">Works</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <motion.div variants={textVariants} className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30"
                  style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
                >
                  <FaCalendarCheck className="text-primary text-2xl mt-1" />
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif'" }}
                    >
                      Step 1: Consultation
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "'Open Sans', sans-serif'" }}
                    >
                      Begin with a free consultation where we assess your tattoo and discuss your expectations. We’ll explain the process, timeline, and expected results.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30"
                  style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
                >
                  <FaBolt className="text-primary text-2xl mt-1" />
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif'" }}
                    >
                      Step 2: Laser Removal Process
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "'Open Sans', sans-serif'" }}
                    >
                      Using advanced laser technology, we target the ink particles beneath your skin, breaking them down into smaller fragments that your body naturally eliminates.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-start space-x-4 p-6 rounded-lg border-2 border-primary/30"
                  style={{ boxShadow: 'inset 0 0 10px rgba(196, 30, 58, 0.4)' }}
                >
                  <FaHandsHelping className="text-primary text-2xl mt-1" />
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif'" }}
                    >
                      Step 3: Aftercare
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "'Open Sans', sans-serif'" }}
                    >
                      Proper aftercare is essential for healing and optimal results. We provide detailed aftercare instructions and support throughout your recovery journey.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div variants={textVariants}>
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg"
                  alt="Laser Tattoo Removal Process"
                  className="w-full h-[600px] rounded-lg border-2 border-primary/30 object-contain"
                  style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
                />
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

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isWhyChooseInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Why <span className="text-primary">Choose Us</span>
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
                <FaCogs className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Advanced Technology
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    We use state-of-the-art laser technology to ensure effective and precise tattoo removal.
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
                <FaUserCheck className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Certified Experts
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Our team of certified professionals ensures safe and expert handling of every procedure.
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
                    Customized Solutions
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Every tattoo is unique, and so is our approach. We create personalized plans tailored to your tattoo’s size, color, and depth.
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
                <FaSyringe className="text-primary text-2xl mt-1" />
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    Hygienic Practices
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    Our studio adheres to the highest standards of hygiene to ensure your safety and comfort.
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

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isPortfolioInView ? 'visible' : 'hidden'}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="rounded-lg overflow-hidden border-2 border-primary/30"
                style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
              >
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025658-1152x1536.jpeg"
                  alt="Tattoo Removal Portfolio 1"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="rounded-lg overflow-hidden border-2 border-primary/30"
                style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
              >
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/7A1F815B-5BCF-4FF7-B535-2F8BC6B186C5-1536x1536.jpg"
                  alt="Tattoo Removal Portfolio 2"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="rounded-lg overflow-hidden border-2 border-primary/30"
                style={{ boxShadow: 'inset 0 0 15px rgba(196, 30, 58, 0.5), 0 0 20px rgba(196, 30, 58, 0.6)' }}
              >
                <img
                  src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000000413-1152x1536.jpeg"
                  alt="Tattoo Removal Portfolio 3"
                  className="w-full h-64 object-cover"
                />
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

      {/* Call to Action Section */}
      <section ref={ctaRef} className="py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-5xl mx-auto relative z-10 px-4">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Ready to Start <span className="text-primary">Fresh?</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-300 mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Book a free consultation with our experts and take the first step toward removing or lightening your tattoo.
            </motion.p>
            <motion.div variants={textVariants}>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-medium border-2 border-primary/60 hover:bg-transparent hover:text-primary transition-all duration-500"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(196, 30, 58, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TattooRemoval;