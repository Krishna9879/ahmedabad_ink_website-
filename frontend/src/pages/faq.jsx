import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const sectionRefs = {
    faq: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    faq: useInView(sectionRefs.faq, inViewOptions),
    portfolio: useInView(sectionRefs.portfolio, inViewOptions),
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
      boxShadow: '0 0 30px rgba(255, 111, 97, 0.6)',
      transition: { duration: 0.3 }
    }
  };

  // Particle Effect
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
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

  // FAQ Accordion State
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = {
    general: [
      {
        question: "What makes Ahmedabad Ink Tattoo Studio the best tattoo studio in Ahmedabad?",
        answer: "We are recognized for our skilled artists, hygienic environment, and exceptional customer service. Our team ensures every tattoo design is personalized to your taste and executed with precision."
      },
      {
        question: "Where is Ahmedabad Ink Tattoo Studio located?",
        answer: "Our tattoo studio is centrally located in Ahmedabad, making it convenient for clients searching for “tattoo near me” in the city."
      },
      {
        question: "Do you offer consultations before tattooing?",
        answer: "Yes, we provide free consultations to discuss your design ideas, placement, size, and other preferences."
      },
      {
        question: "Are walk-ins welcome at your tattoo shop in Ahmedabad?",
        answer: "While we welcome walk-ins, we recommend booking an appointment to ensure availability and reduce wait times."
      },
      {
        question: "How do I book an appointment with the best tattoo artist in Ahmedabad?",
        answer: "You can book an appointment via our website, by phone, or by visiting our studio in person."
      }
    ],
    design: [
      {
        question: "What types of tattoos do you specialize in?",
        answer: "We specialize in various styles, including traditional, realism, tribal, geometric, watercolor, and custom designs. Our artists collaborate with clients to create unique tattoos."
      },
      {
        question: "Can I bring my own tattoo design?",
        answer: "Absolutely! Our artists are happy to work with your designs and provide suggestions to make them perfect for tattooing."
      },
      {
        question: "What should I consider when choosing a tattoo design?",
        answer: "Think about the meaning, placement, and size of the tattoo. During your consultation, we’ll help refine your ideas to ensure your tattoo is visually appealing and meaningful."
      },
      {
        question: "How do I ensure my tattoo is unique?",
        answer: "Collaborate with our skilled artists to create a custom design tailored to your vision. We pride ourselves on originality and creativity."
      },
      {
        question: "Are your inks safe and high-quality?",
        answer: "We use FDA-approved, vegan-friendly inks to ensure safety and vibrant, lasting results."
      }
    ],
    removal: [
      {
        question: "Do you provide tattoo removal services?",
        answer: "Yes, we offer professional tattoo removal using advanced laser technology for safe and effective results."
      },
      {
        question: "How does tattoo removal work?",
        answer: "Laser tattoo removal breaks down the ink particles in your skin, allowing your body to naturally eliminate them over time."
      },
      {
        question: "Is tattoo removal painful?",
        answer: "While some discomfort is expected, most clients find it manageable. We use numbing solutions to enhance your comfort."
      },
      {
        question: "How many sessions does tattoo removal require?",
        answer: "The number of sessions depends on factors such as the tattoo’s size, color, and age. Typically, it requires multiple sessions spaced weeks apart."
      },
      {
        question: "Are there side effects of tattoo removal?",
        answer: "Temporary redness, swelling, and sensitivity are common. Our experts will provide aftercare instructions to ensure proper healing."
      },
      {
        question: "How much does tattoo removal cost?",
        answer: "The cost varies based on the tattoo’s size and complexity. Contact us for a consultation and personalized quote."
      },
      {
        question: "Can you completely remove my tattoo?",
        answer: "While most tattoos can be fully removed, certain colors and older tattoos may require more effort or leave slight traces."
      }
    ],
    safety: [
      {
        question: "What precautions do you take to prevent infections?",
        answer: "We use disposable needles, gloves, and sterilized equipment. Our team also provides aftercare instructions to help you care for your tattoo."
      },
      {
        question: "Are your tattoo artists certified?",
        answer: "Yes, all our tattoo artists are highly trained and certified, ensuring professional and quality service."
      },
      {
        question: "Is Ahmedabad Ink Tattoo Studio clean and safe?",
        answer: "Absolutely. We maintain a sterile environment, use disposable equipment, and follow stringent hygiene protocols to ensure your safety."
      }
    ]
  };

  // Portfolio Slider Logic
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
    <div className="bg-gradient-to-br from-black via-gray-900 to-primary/20 text-white relative overflow-hidden min-h-screen">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: 'radial-gradient(circle, rgba(255, 111, 97, 0.8), transparent)',
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(255, 111, 97, 0.5)'
            }}
          />
        ))}
        {/* Holographic Grid */}
        <svg
          className="absolute inset-0 opacity-10"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M0 0H50M0 0V50"
                fill="none"
                stroke="#FF6F61"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* FAQ Section with Enhanced Hero */}
      <section ref={sectionRefs.faq} className="pt-24 pb-16 relative z-10 min-h-[600px] sm:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Parallax Background with Mandala Pattern */}
          <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
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
                    stroke="#FF6F61"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <path
                    d="M150,150 L120,120 M150,150 L180,120 M150,150 L120,180 M150,150 L180,180"
                    fill="none"
                    stroke="#FF6F61"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#mandala-pattern)" />
            </svg>
          </motion.div>
          {/* Glitch Overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/5"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView.faq ? 'visible' : 'hidden'}
          variants={staggerChildren}
          className="container-custom max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Tattoo Needle Graphic with Ink Splash */}
          <div className="relative w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 mx-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255, 111, 97, 0.8))' }}
              >
                {/* Tattoo Needle */}
                <g transform="translate(50, 50) scale(0.6)">
                  <path
                    d="M0 0 L0 -40 M0 -40 L-5 -35 M0 -40 L5 -35 M0 0 L-10 10 M0 0 L10 10"
                    fill="none"
                    stroke="#FF6F61"
                    strokeWidth="3"
                  />
                </g>
                {/* Ink Splash 1 */}
                <motion.path
                  d="M30 70 Q40 60 50 70 T70 70 Q80 80 70 90 T50 90 Q40 100 30 90 T10 90 Q0 80 10 70 T30 70"
                  fill="none"
                  stroke="#C41E3A"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Ink Splash 2 */}
                <motion.path
                  d="M70 30 Q80 40 70 50 T70 70 Q60 80 50 70 T30 70 Q20 60 30 50 T30 30 Q40 20 50 30 T70 30"
                  fill="none"
                  stroke="#FF6F61"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </svg>
            </motion.div>
          </div>
          {/* Title and Subtitle */}
          <motion.h1
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            style={{ fontFamily: "'Orbitron', sans-serif'" }}
            animate={{
              textShadow: [
                '0 0 10px rgba(255, 111, 97, 0.5)',
                '0 0 20px rgba(255, 111, 97, 0.8)',
                '0 0 10px rgba(255, 111, 97, 0.5)'
              ],
              transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            FAQ's
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-[#FF6F61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif'", color: '#FF6F61' }}
          >
            Frequently Asked Questions (FAQs) about<br />Ahmedabad Ink Tattoo Studio
          </motion.h2>
          {/* Introductory Text */}
          <motion.div
            variants={textVariants}
            className="max-w-4xl mx-auto p-6 bg-black/50 rounded-lg border-2 border-primary/30"
            style={{ boxShadow: '0 0 20px rgba(255, 111, 97, 0.5)' }}
          >
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300"
              style={{ fontFamily: "'Roboto', sans-serif'" }}
            >
              Welcome to Ahmedabad Ink Tattoo Studio’s FAQ page! We’ve compiled answers to the most commonly asked questions about our tattoo design and tattoo removal services. Whether you’re searching for the best tattoo artist in Ahmedabad, looking for a trusted tattoo shop in Ahmedabad, or simply exploring “tattoo near me,” we’ve got you covered.
            </p>
          </motion.div>

          {/* General Questions */}
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 mt-12 text-center"
            style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 15px rgba(255, 111, 97, 0.6)' }}
          >
            General Questions About Ahmedabad Ink Tattoo Studio
          </motion.h3>
          <div className="space-y-4">
            {faqs.general.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="border-2 border-primary/30 rounded-lg overflow-hidden bg-black/50"
                style={{ boxShadow: 'inset 0 0 10px rgba(255, 111, 97, 0.4)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl font-semibold text-primary"
                    style={{ fontFamily: "'Orbitron', sans-serif'" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-black/30">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-300"
                      style={{ fontFamily: "'Roboto', sans-serif'" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tattoo Design Services */}
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 mt-12 text-center"
            style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 15px rgba(255, 111, 97, 0.6)' }}
          >
            Tattoo Design Services
          </motion.h3>
          <div className="space-y-4">
            {faqs.design.map((faq, index) => (
              <motion.div
                key={index + faqs.general.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="border-2 border-primary/30 rounded-lg overflow-hidden bg-black/50"
                style={{ boxShadow: 'inset 0 0 10px rgba(255, 111, 97, 0.4)' }}
              >
                <button
                  onClick={() => toggleFAQ(index + faqs.general.length)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl font-semibold text-primary"
                    style={{ fontFamily: "'Orbitron', sans-serif'" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 ${openIndex === index + faqs.general.length ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index + faqs.general.length && (
                  <div className="p-4 bg-black/30">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-300"
                      style={{ fontFamily: "'Roboto', sans-serif'" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tattoo Removal Services */}
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 mt-12 text-center"
            style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 15px rgba(255, 111, 97, 0.6)' }}
          >
            Tattoo Removal Services
          </motion.h3>
          <div className="space-y-4">
            {faqs.removal.map((faq, index) => (
              <motion.div
                key={index + faqs.general.length + faqs.design.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="border-2 border-primary/30 rounded-lg overflow-hidden bg-black/50"
                style={{ boxShadow: 'inset 0 0 10px rgba(255, 111, 97, 0.4)' }}
              >
                <button
                  onClick={() => toggleFAQ(index + faqs.general.length + faqs.design.length)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl font-semibold text-primary"
                    style={{ fontFamily: "'Orbitron', sans-serif'" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 ${openIndex === index + faqs.general.length + faqs.design.length ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index + faqs.general.length + faqs.design.length && (
                  <div className="p-4 bg-black/30">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-300"
                      style={{ fontFamily: "'Roboto', sans-serif'" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Safety and Hygiene */}
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 mt-12 text-center"
            style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 15px rgba(255, 111, 97, 0.6)' }}
          >
            Safety and Hygiene
          </motion.h3>
          <div className="space-y-4">
            {faqs.safety.map((faq, index) => (
              <motion.div
                key={index + faqs.general.length + faqs.design.length + faqs.removal.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="border-2 border-primary/30 rounded-lg overflow-hidden bg-black/50"
                style={{ boxShadow: 'inset 0 0 10px rgba(255, 111, 97, 0.4)' }}
              >
                <button
                  onClick={() => toggleFAQ(index + faqs.general.length + faqs.design.length + faqs.removal.length)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl font-semibold text-primary"
                    style={{ fontFamily: "'Orbitron', sans-serif'" }}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 ${openIndex === index + faqs.general.length + faqs.design.length + faqs.removal.length ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index + faqs.general.length + faqs.design.length + faqs.removal.length && (
                  <div className="p-4 bg-black/30">
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-300"
                      style={{ fontFamily: "'Roboto', sans-serif'" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="h-0.5 bg-gradient-to-r from-primary to-[#FF6F61]"
          style={{ boxShadow: '0 0 15px rgba(255, 111, 97, 0.5)' }}
        />
      </div>

      {/* Portfolio Slider Section */}
      <section ref={sectionRefs.portfolio} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(255, 111, 97, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isInView.portfolio ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block"
              style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 20px rgba(255, 111, 97, 0.7)' }}
            >
              OUR PORTFOLIO
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-[#FF6F61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <div className="relative flex flex-col md:flex-row items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all hidden md:block"
                aria-label="Previous Slide"
              >
                <FaArrowRight className="rotate-180 text-2xl" />
              </button>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                <AnimatePresence mode="wait">
                  {[-1, 0, 1].map((offset) => {
                    const index = (currentSlide + offset + sliderImages.length) % sliderImages.length;
                    return (
                      <motion.div
                        key={index}
                        className="flex-shrink-0 w-full md:w-1/3"
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
                          className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg border-2 border-primary/30"
                          style={{ boxShadow: offset === 0 ? '0 0 30px rgba(255, 111, 97, 0.8), inset 0 0 15px rgba(255, 111, 97, 0.5)' : '0 0 10px rgba(255, 111, 97, 0.3)' }}
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
                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all hidden md:block"
                aria-label="Next Slide"
              >
                <FaArrowRight className="text-2xl" />
              </button>
              {/* Mobile Navigation */}
              <div className="flex space-x-4 mt-4 md:hidden">
                <button
                  onClick={prevSlide}
                  className="bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all"
                  aria-label="Previous Slide"
                >
                  <FaArrowRight className="rotate-180 text-2xl" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-primary/70 text-white p-3 rounded-full hover:bg-primary transition-all"
                  aria-label="Next Slide"
                >
                  <FaArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="h-0.5 bg-gradient-to-r from-primary to-[#FF6F61]"
          style={{ boxShadow: '0 0 15px rgba(255, 111, 97, 0.5)' }}
        />
      </div>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(255, 111, 97, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isInView.contact ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 relative inline-block"
              style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 20px rgba(255, 111, 97, 0.7)' }}
            >
              CONTACT US
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-[#FF6F61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              className="flex justify-center space-x-4 sm:space-x-6 mb-8"
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
                  whileHover={{ scale: 1.2, color: '#FF6F61', transition: { duration: 0.3 } }}
                  className="text-gray-300"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl sm:text-2xl" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              variants={staggerChildren}
              className="text-gray-300 space-y-4 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "'Roboto', sans-serif'" }}
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
          style={{ background: 'radial-gradient(circle, rgba(255, 111, 97, 0.1) 0%, transparent 70%)' }}
        />
        <div className="container-custom max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isInView.contact ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              style={{ fontFamily: "'Orbitron', sans-serif'", color: '#ffffff', textShadow: '0 0 20px rgba(255, 111, 97, 0.7)' }}
            >
              READY TO <span className="text-primary">GET INKED?</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-[#FF6F61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6"
              style={{ fontFamily: "'Roboto', sans-serif'" }}
            >
              BOOK A FREE CONSULTATION NOW!
            </motion.p>
            <motion.div variants={textVariants}>
              <Link
                to="/contactpage"
                className="inline-block bg-gradient-to-r from-primary to-[#FF6F61] text-white py-3 px-8 rounded-lg font-medium border-2 border-primary/60 hover:bg-transparent hover:text-primary transition-all duration-500"
                style={{ fontFamily: "'Orbitron', sans-serif'" }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 111, 97, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book a Free Consultation"
              >
                BOOK NOW
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;