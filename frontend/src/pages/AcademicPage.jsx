import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaCertificate, FaUsers, FaRocket, FaStar, FaBookOpen, FaLightbulb, FaAward, FaClock, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const Academic = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const [activeTab, setActiveTab] = useState('courses');

  const sectionRefs = {
    hero: useRef(null),
    overview: useRef(null),
    programs: useRef(null),
    curriculum: useRef(null),
    faculty: useRef(null),
    facilities: useRef(null),
    success: useRef(null),
    testimonials: useRef(null),
    admission: useRef(null),
    cta: useRef(null)
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    hero: useInView(sectionRefs.hero, inViewOptions),
    overview: useInView(sectionRefs.overview, inViewOptions),
    programs: useInView(sectionRefs.programs, inViewOptions),
    curriculum: useInView(sectionRefs.curriculum, inViewOptions),
    faculty: useInView(sectionRefs.faculty, inViewOptions),
    facilities: useInView(sectionRefs.facilities, inViewOptions),
    success: useInView(sectionRefs.success, inViewOptions),
    testimonials: useInView(sectionRefs.testimonials, inViewOptions),
    admission: useInView(sectionRefs.admission, inViewOptions),
    cta: useInView(sectionRefs.cta, inViewOptions)
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
        repeatDelay: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: '0 20px 40px rgba(196, 30, 58, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={ref} className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`neural-${i}`}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            initial={{
              y: Math.random() * 100 + 'vh',
              opacity: 0.2
            }}
            animate={{
              x: ['-100vw', '100vw'],
              opacity: [0.2, 0.6, 0.2],
              transition: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
          />
        ))}
        
        {/* Floating Learning Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-primary/20 text-2xl"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360],
              transition: {
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3
              }
            }}
          >
            {i % 4 === 0 ? '🎓' : i % 4 === 1 ? '📚' : i % 4 === 2 ? '🎨' : '⚡'}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 bg-[url('https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/95" />
        
        {/* Holographic Grid Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(196, 30, 58, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196, 30, 58, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        <motion.div
          className="absolute inset-0 border-8 border-primary/20 m-8 rounded-3xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
        
        <motion.div
          initial="hidden"
          animate={isInView.hero ? 'visible' : 'hidden'}
          variants={textVariants}
          className="relative z-10 text-center px-4 max-w-7xl mx-auto"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <FaGraduationCap className="text-6xl text-primary mx-auto mb-4" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-widest"
            style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 40px rgba(196, 30, 58, 0.8)' }}
            animate={{ 
              color: ['#ffffff', '#C41E3A', '#ffffff'],
              textShadow: [
                '0 0 40px rgba(196, 30, 58, 0.8)',
                '0 0 60px rgba(196, 30, 58, 1)',
                '0 0 40px rgba(196, 30, 58, 0.8)'
              ],
              transition: { duration: 4, repeat: Infinity } 
            }}
          >
            <span className="text-primary">TATTOO</span> ACADEMY
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-300"
            style={{ fontFamily: "'Dosis', sans-serif" }}
          >
            Master the Art of <span className="text-primary">Futuristic Tattooing</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            India's First AI-Enhanced Tattoo Training Institute - Where Ancient Art Meets Quantum Technology
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#programs"
              whileHover={{ 
                scale: 1.15, 
                boxShadow: '0 0 50px rgba(196, 30, 58, 1)',
                backgroundColor: 'transparent'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary text-white py-4 px-10 rounded-xl font-bold border-2 border-primary/70 hover:bg-transparent hover:text-primary transition-all duration-500 text-lg"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <FaRocket className="mr-3" />
              Explore Programs
              <FaArrowRight className="ml-3" />
            </motion.a>
            
            <motion.a
              href="#admission"
              whileHover={{ 
                scale: 1.15, 
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-transparent text-white py-4 px-10 rounded-xl font-bold border-2 border-white/50 hover:bg-white hover:text-black transition-all duration-500 text-lg"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <FaCertificate className="mr-3" />
              Apply Now
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Academy Overview Section */}
      <section ref={sectionRefs.overview} className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.overview ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Welcome to the <span className="text-primary">Future</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Ahmedabad Ink Tattoo Academy is revolutionizing tattoo education through cutting-edge technology, 
              world-class mentorship, and immersive learning experiences that prepare artists for the next generation of body art.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: FaUsers, number: '500+', label: 'Graduates Worldwide', color: 'text-blue-400' },
              { icon: FaCertificate, number: '12+', label: 'Industry Certifications', color: 'text-green-400' },
              { icon: FaAward, number: '98%', label: 'Job Placement Rate', color: 'text-yellow-400' },
              { icon: FaStar, number: '4.9/5', label: 'Student Satisfaction', color: 'text-primary' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-900/60 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <stat.icon className={`text-5xl ${stat.color} mx-auto mb-4`} />
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Dosis', sans-serif" }}>
                  {stat.number}
                </h3>
                <p className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={textVariants} className="space-y-6">
              <h3
                className="text-3xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
              >
                Why Choose <span className="text-primary">Our Academy?</span>
              </h3>
              <div className="space-y-4">
                {[
                  'AI-powered design assistance and precision tools',
                  'Holographic tattoo preview technology',
                  'Industry-leading hygiene and safety protocols',
                  'Personalized mentorship from master artists',
                  'International certification programs',
                  'Lifetime career support and placement assistance'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView.overview ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaArrowRight className="text-primary flex-shrink-0" />
                    <p className="text-gray-300" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden border-2 border-primary/40"
            >
              <img
                src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg"
                alt="Academy Overview"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <motion.div
                className="absolute inset-0 border-4 border-primary/20 m-4 rounded-xl"
                variants={glowVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={sectionRefs.programs} className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.programs ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Revolutionary</span> Programs
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Choose from our comprehensive range of courses designed to transform you into a master tattoo artist
            </motion.p>
          </motion.div>

          {/* Program Tabs */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-wrap justify-center mb-12 gap-4"
          >
            {[
              { id: 'courses', label: 'Professional Courses', icon: FaGraduationCap },
              { id: 'internship', label: 'Internship Program', icon: FaHandsHelping },
              { id: 'masterclass', label: 'Master Classes', icon: FaLightbulb }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <tab.icon className="mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Professional Courses */}
          {activeTab === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Foundation Certificate',
                  duration: '3 Months',
                  level: 'Beginner',
                  price: '₹45,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg',
                  features: [
                    'Basic tattoo techniques',
                    'Safety & hygiene protocols',
                    'Equipment handling',
                    'Portfolio development',
                    'Client consultation skills'
                  ]
                },
                {
                  title: 'Advanced Artistry',
                  duration: '6 Months',
                  level: 'Intermediate',
                  price: '₹85,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg',
                  features: [
                    'Complex design creation',
                    'Color theory mastery',
                    'Shading & texturing',
                    'Style specialization',
                    'Business fundamentals'
                  ]
                },
                {
                  title: 'Master Artist Program',
                  duration: '12 Months',
                  level: 'Expert',
                  price: '₹1,50,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-03-14-1.jpg',
                  features: [
                    'AI-assisted design tools',
                    'Holographic previews',
                    'Advanced techniques',
                    'Instructor certification',
                    'Studio setup guidance'
                  ]
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gray-900/80 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-sm relative"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary px-3 py-1 rounded-full text-sm font-bold">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif" }}
                    >
                      {course.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="flex items-center text-gray-400">
                        <FaClock className="mr-2" />
                        {course.duration}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {course.price}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-300">
                          <FaArrowRight className="text-primary mr-2 text-sm" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-xl font-bold transition-all duration-300"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Internship Program */}
          {activeTab === 'internship' && (
            <motion.div
              key="internship"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={textVariants} className="space-y-6">
                  <h3
                    className="text-3xl md:text-5xl font-bold mb-6"
                    style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
                  >
                    <span className="text-primary">Elite</span> Internship Program
                  </h3>
                  <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Our exclusive internship program offers hands-on experience in India's most advanced tattoo studio. 
                    Work alongside master artists and gain real-world expertise while building your portfolio.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Duration', value: '6-12 Months' },
                      { label: 'Stipend', value: '₹15,000/month' },
                      { label: 'Placements', value: '24 Available' },
                      { label: 'Success Rate', value: '95%' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-xl">
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-xl font-bold text-primary">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary/80 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300"
                  >
                    Apply for Internship
                  </motion.button>
                </motion.div>
                
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative rounded-2xl overflow-hidden border-2 border-primary/40"
                >
                  <img
                    src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg"
                    alt="Internship Program"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Master Classes */}
          {activeTab === 'masterclass' && (
            <motion.div
              key="masterclass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: 'AI-Enhanced Design Workshop',
                  instructor: 'Master Rajesh Sharma',
                  duration: '2 Days',
                  price: '₹12,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg',
                  description: 'Learn to integrate AI tools for revolutionary tattoo designs'
                },
                {
                  title: 'Holographic Preview Mastery',
                  instructor: 'Tech Lead Priya Patel',
                  duration: '1 Day',
                  price: '₹8,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ramgarhia-tattoos-studio-chhabewal-hoshiarpur-tattoo-artists-j66c8ikzwr-1536x1152.avif',
                  description: 'Master the art of holographic tattoo previewing technology'
                },
                {
                  title: 'Quantum Ink Techniques',
                  instructor: 'Dr. Amit Kumar',
                  duration: '3 Days',
                  price: '₹18,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/02/ABF52542-1062-4FDC-AD8D-5D0FCA015E0B.jpg',
                  description: 'Explore next-generation ink formulations and application methods'
                },
                {
                  title: 'Business & Branding Bootcamp',
                  instructor: 'Entrepreneur Sarah Williams',
                  duration: '2 Days',
                  price: '₹10,000',
                  image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg',
                  description: 'Build your tattoo business from concept to profitability'
                }
              ].map((masterclass, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gray-900/80 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={masterclass.image}
                      alt={masterclass.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-sm font-bold">
                      {masterclass.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Dosis', sans-serif" }}
                    >
                      {masterclass.title}
                    </h3>
                    <p className="text-gray-400 mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Instructor: <span className="text-primary">{masterclass.instructor}</span>
                    </p>
                    <p className="text-gray-300 mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {masterclass.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">
                        {masterclass.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary/80 text-white py-2 px-6 rounded-xl font-bold transition-all duration-300"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Curriculum Section */}
      <section ref={sectionRefs.curriculum} className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.curriculum ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Cutting-Edge</span> Curriculum
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Our innovative curriculum combines traditional artistry with futuristic technology
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary/30 top-0 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "Foundation Phase",
                    duration: "Month 1-3",
                    description: "Master the fundamentals of tattooing with a focus on safety, hygiene, and basic techniques",
                    icon: <FaBookOpen className="text-primary text-2xl" />
                  },
                  {
                    title: "Digital Integration",
                    duration: "Month 4-6",
                    description: "Learn to use AI design tools, holographic preview systems, and digital workflow management",
                    icon: <FaLightbulb className="text-primary text-2xl" />
                  },
                  {
                    title: "Advanced Techniques",
                    duration: "Month 7-9",
                    description: "Explore specialized styles, advanced coloring, shading techniques, and 3D tattooing",
                    icon: <FaCertificate className="text-primary text-2xl" />
                  },
                  {
                    title: "Professional Development",
                    duration: "Month 10-12",
                    description: "Build your brand, develop business skills, and prepare for industry certification",
                    icon: <FaChartLine className="text-primary text-2xl" />
                  }
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Dosis', sans-serif" }}>
                          {module.title}
                        </h3>
                        <p className="text-primary mb-3">{module.duration}</p>
                        <p className="text-gray-300" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {module.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-black transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                      {module.icon}
                    </div>
                    
                    <div className="md:hidden w-full pl-12 mt-6">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/30">
                        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Dosis', sans-serif" }}>
                          {module.title}
                        </h3>
                        <p className="text-primary mb-3">{module.duration}</p>
                        <p className="text-gray-300" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section ref={sectionRefs.faculty} className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.faculty ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Master</span> Instructors
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Learn from industry pioneers who are shaping the future of tattoo artistry
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                title: "Master Tattoo Artist",
                experience: "25+ years",
                specialties: ["Traditional Indian", "Realism", "AI Integration"],
                image: "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ramgarhia-tattoos-studio-chhabewal-hoshiarpur-tattoo-artists-j66c8ikzwr-1536x1152.avif"
              },
              {
                name: "Priya Patel",
                title: "Digital Art Director",
                experience: "15+ years",
                specialties: ["Holographic Design", "3D Art", "Digital Workflow"],
                image: "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg"
              },
              {
                name: "Amit Kumar",
                title: "Biotech Specialist",
                experience: "12+ years",
                specialties: ["Quantum Ink", "Skin Safety", "Healing Tech"],
                image: "https://ahmedabadinktattoo.com/wp-content/uploads/2025/02/ABF52542-1062-4FDC-AD8D-5D0FCA015E0B.jpg"
              }
            ].map((instructor, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-900/80 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Dosis', sans-serif" }}
                  >
                    {instructor.name}
                  </h3>
                  <p className="text-primary mb-3">{instructor.title}</p>
                  <p className="text-gray-400 mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Experience: <span className="text-white">{instructor.experience}</span>
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, sIndex) => (
                        <span key={sIndex} className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-xl font-bold transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={sectionRefs.facilities} className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.facilities ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Futuristic</span> Learning Environment
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Our state-of-the-art facilities are designed to inspire creativity and innovation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              {[
                {
                  title: "Holographic Design Studio",
                  description: "Create and preview designs in 3D space with our cutting-edge holographic technology",
                  icon: <div className="bg-primary/20 p-3 rounded-xl">🔮</div>
                },
                {
                  title: "AI-Assisted Workstations",
                  description: "Each station equipped with AI design tools and precision tattooing instruments",
                  icon: <div className="bg-primary/20 p-3 rounded-xl">🤖</div>
                },
                {
                  title: "Bio-Safety Labs",
                  description: "Industry-leading sterilization facilities and skin-safe environment protocols",
                  icon: <div className="bg-primary/20 p-3 rounded-xl">🧪</div>
                },
                {
                  title: "Digital Portfolio Studio",
                  description: "Professional photography and AR showcase environment for your work",
                  icon: <div className="bg-primary/20 p-3 rounded-xl">📸</div>
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Dosis', sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden border-2 border-primary/40 h-96"
            >
              <img
                src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg"
                alt="Facilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-03-14-1.jpg"
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative rounded-2xl overflow-hidden border-2 border-primary/40 h-64"
              >
                <img
                  src={image}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section ref={sectionRefs.success} className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.success ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Graduate</span> Success Stories
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Our alumni are transforming the tattoo industry worldwide
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Desai",
                position: "Studio Owner, Mumbai",
                story: "The academy's AI integration program helped me revolutionize my design process and triple my client base",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Rahul Mehta",
                position: "Lead Artist, Dubai",
                story: "The quantum ink techniques I learned opened doors to international exhibitions and collaborations",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Priya Reddy",
                position: "Instructor, Bangalore",
                story: "The academy's business program helped me build a thriving tattoo education platform with 15 employees",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-900/80 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-sm relative"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Dosis', sans-serif" }}
                  >
                    {story.name}
                  </h3>
                  <p className="text-primary mb-4">{story.position}</p>
                  <p className="text-gray-300 mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    "{story.story}"
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-xl font-bold transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRefs.testimonials} className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.testimonials ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Student <span className="text-primary">Testimonials</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  name: "Vikram Singh",
                  course: "Advanced Artistry Program",
                  text: "The holographic preview technology changed everything for me. Being able to show clients exactly how their tattoo would look on their body before committing was a game-changer. My client satisfaction has doubled!",
                  rating: 5
                },
                {
                  name: "Sanjana Patel",
                  course: "Master Artist Program",
                  text: "The AI design assistance tools helped me break through my creative blocks. I went from being a good tattoo artist to winning national competitions within a year of graduating. The academy truly delivers on its futuristic promises.",
                  rating: 5
                },
                {
                  name: "Arjun Kumar",
                  course: "Internship Program",
                  text: "Working alongside master artists in a real studio environment gave me the confidence and skills I needed to open my own studio immediately after graduation. The business training was invaluable.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gray-900/80 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xl italic mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <p className="font-bold text-lg" style={{ fontFamily: "'Dosis', sans-serif" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-primary">{testimonial.course}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section ref={sectionRefs.admission} className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.admission ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              <span className="text-primary">Begin Your</span> Journey
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Join the next generation of tattoo artists
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Dosis', sans-serif" }}>
                  Admission Process
                </h3>
                
                <div className="space-y-6">
                  {[
                    "Submit your application online",
                    "Portfolio review by our admissions panel",
                    "Personal interview (virtual or in-person)",
                    "Receive acceptance notification",
                    "Complete enrollment and payment",
                    "Begin your transformative journey"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.div
                variants={cardVariants}
                className="bg-gray-900/80 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Dosis', sans-serif" }}>
                  Apply Now
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Program of Interest
                    </label>
                    <select className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                      <option>Select a program</option>
                      <option>Foundation Certificate (3 Months)</option>
                      <option>Advanced Artistry (6 Months)</option>
                      <option>Master Artist Program (12 Months)</option>
                      <option>Internship Program</option>
                      <option>Master Classes</option>
                    </select>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-all duration-300"
                  >
                    Submit Application
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs.cta} className="py-16 bg-gradient-to-b from-black to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-primary/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isInView.cta ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-7xl font-serif font-bold mb-8"
              style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Ready to <span className="text-primary">Transform</span> Your Future?
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Limited seats available for our next cohort. Apply today to secure your place in India's most innovative tattoo academy.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#admission"
                whileHover={{ 
                  scale: 1.15, 
                  boxShadow: '0 0 50px rgba(196, 30, 58, 1)',
                  backgroundColor: 'transparent'
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-primary text-white py-4 px-10 rounded-xl font-bold border-2 border-primary/70 hover:bg-transparent hover:text-primary transition-all duration-500 text-lg"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <FaRocket className="mr-3" />
                Apply Now
                <FaArrowRight className="ml-3" />
              </motion.a>
              
              <motion.a
                href="#programs"
                whileHover={{ 
                  scale: 1.15, 
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-transparent text-white py-4 px-10 rounded-xl font-bold border-2 border-white/50 hover:bg-white hover:text-black transition-all duration-500 text-lg"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <FaBookOpen className="mr-3" />
                View Programs
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Dosis', sans-serif" }}>
                Ahmedabad Ink Tattoo Academy
              </h3>
              <p className="text-gray-400 mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Where art meets technology to create the tattoo artists of tomorrow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Dosis', sans-serif" }}>Programs</h4>
              <ul className="space-y-2">
                {['Foundation Certificate', 'Advanced Artistry', 'Master Artist Program', 'Internship', 'Master Classes'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Dosis', sans-serif" }}>Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Gallery', 'Events', 'FAQ', 'Career Support'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Dosis', sans-serif" }}>Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <div>123 Innovation Street</div>
                  <div>Ahmedabad, Gujarat 380015</div>
                </li>
                <li className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  info@ahmedabadinkacademy.com
                </li>
                <li className="text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  +91 98765 43210
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
              © {new Date().getFullYear()} Ahmedabad Ink Tattoo Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academic;