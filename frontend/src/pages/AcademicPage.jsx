import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaCertificate, FaRocket, FaStar, FaBookOpen, FaLightbulb, FaAward, FaClock, FaHandsHelping, FaChartLine, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlay, FaCheckCircle, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaQuoteLeft } from 'react-icons/fa';

const Academic = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    y: -2,
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.4)',
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const cardHover = {
    y: -10,
    boxShadow: '0 25px 50px rgba(196, 30, 58, 0.15)',
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  };

  const glowHover = {
    boxShadow: [
      '0 0 20px rgba(196, 30, 58, 0.3)',
      '0 0 40px rgba(196, 30, 58, 0.4)',
      '0 0 20px rgba(196, 30, 58, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const textGlow = {
    textShadow: [
      '0 0 10px rgba(196, 30, 58, 0.5)',
      '0 0 20px rgba(196, 30, 58, 0.8)',
      '0 0 10px rgba(196, 30, 58, 0.5)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      }
    }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const rotate3D = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-[#C41E3A]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#C41E3A]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div
              whileHover={glowHover}
              className="inline-block"
            >
              <FaGraduationCap className="text-8xl text-[#C41E3A] mx-auto mb-4" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.span 
              className="text-[#C41E3A]"
              whileHover={textGlow}
            >
              AHMEDABAD
            </motion.span> INK TATTOO ACADEMY
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Master the Art of <span className="text-[#C41E3A]">Professional Tattooing</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Premier tattoo education institute offering comprehensive training programs 
            designed to transform artistic passion into professional expertise
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.a
              href="#programs"
              className="inline-flex items-center bg-[#C41E3A] text-white py-4 px-10 rounded-xl font-bold border-2 border-[#C41E3A]/70 hover:bg-transparent hover:text-[#C41E3A] transition-all duration-500 text-lg overflow-hidden relative group"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FaRocket className="mr-3 group-hover:animate-bounce" />
              Explore Programs
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-transparent text-white py-4 px-10 rounded-xl font-bold border-2 border-white/50 hover:bg-white hover:text-black transition-all duration-500 text-lg relative group overflow-hidden"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FaCertificate className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Academy Overview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 relative max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              variants={fadeInUp}
            >
              Welcome to Our <span className="text-[#C41E3A]">Tattoo Academy</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Ahmedabad Ink Tattoo Academy stands as the premier destination for professional tattoo education. 
              Our comprehensive programs blend artistic excellence with technical mastery, preparing students 
              for successful careers in the dynamic tattoo industry.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { 
                icon: FaBookOpen, 
                title: 'Comprehensive Curriculum', 
                desc: 'Structured learning path from fundamentals to advanced professional techniques',
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              { 
                icon: FaHandsHelping, 
                title: 'Practical Experience', 
                desc: 'Extensive hands-on training with supervised practice on various mediums',
                gradient: 'from-green-500/20 to-teal-500/20'
              },
              { 
                icon: FaCertificate, 
                title: 'Industry Recognition', 
                desc: 'Accredited certification programs recognized by professional tattoo associations',
                gradient: 'from-[#C41E3A]/20 to-pink-500/20'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={cardHover}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 rounded-2xl border border-[#C41E3A]/30 text-center relative group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="text-5xl text-[#C41E3A] mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-400 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="text-[#C41E3A]">Training Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Carefully designed courses to develop your skills at every stage of your tattoo journey
            </p>
          </motion.div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center mb-16 gap-4">
            {[
              { id: 'courses', label: 'Professional Courses', icon: FaGraduationCap },
              { id: 'internship', label: 'Internship Program', icon: FaHandsHelping }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-10 py-5 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab.id
                    ? 'bg-[#C41E3A] text-white shadow-lg shadow-[#C41E3A]/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                whileHover={activeTab !== tab.id ? { scale: 1.05, y: -2 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <tab.icon className="mr-3 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Professional Courses */}
          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Foundation Certificate',
                  duration: '3 Months',
                  price: '₹45,000',
                  level: 'Beginner',
                  features: [
                    'Tattoo fundamentals & theory',
                    'Safety protocols & hygiene',
                    'Equipment mastery',
                    'Basic design principles',
                    'Portfolio development'
                  ],
                  gradient: 'from-blue-500/10 to-cyan-500/10'
                },
                {
                  title: 'Advanced Artistry',
                  duration: '6 Months',
                  price: '₹85,000',
                  level: 'Intermediate',
                  popular: true,
                  features: [
                    'Advanced technique mastery',
                    'Color theory & application',
                    'Complex shading methods',
                    'Style specialization',
                    'Client consultation skills'
                  ],
                  gradient: 'from-[#C41E3A]/10 to-pink-500/10'
                },
                {
                  title: 'Master Artist Program',
                  duration: '12 Months',
                  price: '₹1,50,000',
                  level: 'Professional',
                  features: [
                    'Expert-level techniques',
                    'Business & marketing',
                    'Studio management',
                    'Advanced portfolio',
                    'Career placement support'
                  ],
                  gradient: 'from-purple-500/10 to-indigo-500/10'
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={cardHover}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`bg-gradient-to-br ${course.gradient} backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C41E3A]/30 relative group`}
                >
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-[#C41E3A] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {course.title}
                        </h3>
                        <span className="text-[#C41E3A] text-sm font-semibold bg-[#C41E3A]/20 px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-8">
                      <span className="flex items-center text-gray-400">
                        <FaClock className="mr-2" />
                        {course.duration}
                      </span>
                      <span className="text-3xl font-bold text-[#C41E3A]">
                        {course.price}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {course.features.map((feature, fIndex) => (
                        <motion.li 
                          key={fIndex} 
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: fIndex * 0.1 }}
                        >
                          <FaCheckCircle className="text-[#C41E3A] mr-3 text-sm" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.button 
                      className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                      <span className="relative z-10">Enroll Now</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Internship Program */}
          {activeTab === 'internship' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  className="space-y-8"
                  variants={slideIn}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-4xl font-bold mb-6">
                    <span className="text-[#C41E3A]">Professional</span> Internship Program
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Our comprehensive internship program provides invaluable hands-on experience in a 
                    professional tattoo studio environment. Work directly with experienced artists 
                    and develop the practical skills essential for industry success.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Program Duration', value: '3-6 Months', icon: FaClock },
                      { label: 'Weekly Commitment', value: '20-30 Hours', icon: FaChartLine },
                      { label: 'Learning Focus', value: 'Real-World Skills', icon: FaLightbulb },
                      { label: 'Mentorship', value: '1-on-1 Guidance', icon: FaHandsHelping }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-800/50 p-6 rounded-xl border border-[#C41E3A]/20 group"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(196, 30, 58, 0.5)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center mb-2">
                          <item.icon className="text-[#C41E3A] mr-2" />
                          <p className="text-gray-400 text-sm">{item.label}</p>
                        </div>
                        <p className="text-xl font-bold text-[#C41E3A]">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white py-4 px-10 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10">Apply for Internship</span>
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="relative rounded-2xl overflow-hidden border-2 border-[#C41E3A]/40 h-96 group"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(196, 30, 58, 0.6)' }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#C41E3A]/5 group-hover:bg-[#C41E3A]/10 transition-colors duration-500" />
                    <div className="text-center p-8 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <FaHandsHelping className="text-6xl text-[#C41E3A] mx-auto mb-6" />
                      </motion.div>
                      <h4 className="text-2xl font-bold mb-4">Hands-On Experience</h4>
                      <p className="text-gray-400">Master your craft in a real professional studio environment</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Comprehensive <span className="text-[#C41E3A]">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our meticulously designed curriculum covers every aspect of professional tattooing
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Foundation & Fundamentals",
                  description: "Master the essential basics of tattooing with comprehensive focus on safety protocols, hygiene standards, and fundamental techniques that form the bedrock of professional practice",
                  icon: <FaBookOpen className="text-[#C41E3A] text-3xl" />,
                  gradient: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  phase: "Phase 2",
                  title: "Technical Mastery",
                  description: "Develop precision and expertise in advanced line work, complex shading techniques, color application, and master various tattoo styles from traditional to contemporary",
                  icon: <FaCertificate className="text-[#C41E3A] text-3xl" />,
                  gradient: "from-[#C41E3A]/10 to-pink-500/10"
                },
                {
                  phase: "Phase 3",
                  title: "Artistic Excellence",
                  description: "Enhance your creative vision and design capabilities while developing your signature artistic style that will set you apart in the competitive tattoo industry",
                  icon: <FaLightbulb className="text-[#C41E3A] text-3xl" />,
                  gradient: "from-purple-500/10 to-indigo-500/10"
                },
                {
                  phase: "Phase 4",
                  title: "Professional Development",
                  description: "Learn essential business skills including client consultation, studio management, marketing strategies, and comprehensive career development planning",
                  icon: <FaChartLine className="text-[#C41E3A] text-3xl" />,
                  gradient: "from-green-500/10 to-teal-500/10"
                }
              ].map((module, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={cardHover}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`bg-gradient-to-br ${module.gradient} backdrop-blur-sm rounded-2xl p-8 border border-[#C41E3A]/30 relative group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div 
                      className="bg-[#C41E3A]/20 p-4 rounded-xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {module.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#C41E3A] text-sm font-bold bg-[#C41E3A]/20 px-3 py-1 rounded-full">
                          {module.phase}
                        </span>
                        <h3 className="text-2xl font-bold">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Why Choose <span className="text-[#C41E3A]">Our Academy?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover what sets us apart as the premier tattoo education destination
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <div className="bg-[#C41E3A]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl">🎨</div>,
                title: "Artistic Development",
                desc: "Focus on developing your unique artistic style and creative expression"
              },
              {
                icon: <div className="bg-[#C41E3A]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl">🔬</div>,
                title: "Modern Techniques",
                desc: "Learn the latest industry-standard methods and equipment"
              },
              {
                icon: <div className="bg-[#C41E3A]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl">🧼</div>,
                title: "Safety First",
                desc: "Rigorous hygiene and safety protocols taught by industry experts"
              },
              {
                icon: <div className="bg-[#C41E3A]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl">🤝</div>,
                title: "Community",
                desc: "Join a supportive network of artists and industry professionals"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={rotate3D}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-[#C41E3A]/30 backdrop-blur-sm text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex justify-center mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-400 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Student <span className="text-[#C41E3A]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from our graduates who are making their mark in the tattoo industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Patel",
                role: "Professional Tattoo Artist",
                quote: "The academy transformed my passion into profession. The hands-on training gave me the confidence to start my own studio immediately after graduation.",
                avatar: "RP"
              },
              {
                name: "Priya Sharma",
                role: "Specialist in Fine Line Tattoos",
                quote: "The mentorship I received was invaluable. Learning from industry veterans helped me develop a unique style that clients love.",
                avatar: "PS"
              },
              {
                name: "Vikram Singh",
                role: "Studio Owner",
                quote: "The business skills I learned were just as important as the artistic techniques. This academy gave me everything I needed to succeed.",
                avatar: "VS"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-[#C41E3A]/30 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#C41E3A]/20 flex items-center justify-center text-xl font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-[#C41E3A]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <FaQuoteLeft className="text-[#C41E3A]/30 text-4xl mb-4" />
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Frequently <span className="text-[#C41E3A]">Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to know about our tattoo academy programs
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need prior artistic experience to enroll?",
                answer: "While prior artistic experience is beneficial, it's not required. Our foundation course is designed to teach both artistic fundamentals and technical tattooing skills from the ground up."
              },
              {
                question: "What equipment will I need for the courses?",
                answer: "We provide all necessary equipment during training sessions. For personal practice outside of class, we'll guide you on purchasing your own professional-grade equipment."
              },
              {
                question: "Are your certifications recognized internationally?",
                answer: "Yes, our certifications are accredited by international tattoo associations and recognized by studios worldwide. Our graduates have successfully worked in over 15 countries."
              },
              {
                question: "What is the class size?",
                answer: "We maintain small class sizes of 8-10 students to ensure personalized attention and optimal learning conditions for every participant."
              },
              {
                question: "Do you offer job placement assistance?",
                answer: "Absolutely. Our master program includes career development support, portfolio reviews, and direct connections to studios seeking talented artists."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-[#C41E3A]/30 backdrop-blur-sm overflow-hidden"
              >
                <button 
                  className="w-full text-left p-6 flex justify-between items-center group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold group-hover:text-[#C41E3A] transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-[#C41E3A]/30">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Begin Your <span className="text-[#C41E3A]">Tattoo Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Apply today to start your transformation into a professional tattoo artist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#C41E3A] mt-1 mr-4 text-xl" />
                  <div>
                    <p className="font-bold">Studio Location</p>
                    <p className="text-gray-300">123 Art Street, Ahmedabad, Gujarat 380015</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-[#C41E3A] mr-4 text-xl" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className="text-[#C41E3A] mr-4 text-xl" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-gray-300">info@ahmedabadinkacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaClock className="text-[#C41E3A] mr-4 text-xl" />
                  <div>
                    <p className="font-bold">Hours</p>
                    <p className="text-gray-300">Mon-Sat: 10AM - 7PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-[#C41E3A]/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8">
                Request Information
              </h3>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C41E3A] transition-colors" 
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C41E3A] transition-colors" 
                    placeholder="Email Address"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C41E3A] transition-colors" 
                    placeholder="Phone Number"
                  />
                </div>
                
                <div>
                  <select className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C41E3A] transition-colors">
                    <option>Program of Interest</option>
                    <option>Foundation Certificate (3 Months)</option>
                    <option>Advanced Artistry (6 Months)</option>
                    <option>Master Artist Program (12 Months)</option>
                    <option>Internship Program</option>
                  </select>
                </div>
                
                <div>
                  <textarea 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C41E3A] transition-colors" 
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                
                <motion.button 
                  className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">Submit Application</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ahmedabad Ink Tattoo Academy
              </h3>
              <p className="text-gray-400 mb-4">
                Professional tattoo education for aspiring artists
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                  <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                {['Foundation Certificate', 'Advanced Artistry', 'Master Artist Program', 'Internship Program'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Gallery', 'Blog', 'FAQ', 'Student Work'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#C41E3A] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <div>123 Art Street</div>
                  <div>Ahmedabad, Gujarat 380015</div>
                </li>
                <li className="text-gray-400">
                  info@ahmedabadinkacademy.com
                </li>
                <li className="text-gray-400">
                  +91 98765 43210
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} Ahmedabad Ink Tattoo Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academic;