import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const sectionRefs = {
    hero: useRef(null),
    howItWorks: useRef(null),
    whyChoose: useRef(null),
    styles: useRef(null),
    portfolio: useRef(null),
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    hero: useInView(sectionRefs.hero, inViewOptions),
    howItWorks: useInView(sectionRefs.howItWorks, inViewOptions),
    whyChoose: useInView(sectionRefs.whyChoose, inViewOptions),
    styles: useInView(sectionRefs.styles, inViewOptions),
    portfolio: useInView(sectionRefs.portfolio, inViewOptions),
  };

  // Animation Variants
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 0 30px rgba(196, 30, 58, 0.7)',
      transition: { duration: 0.4 }
    }
  };

  const styleCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 0 25px rgba(196, 30, 58, 0.6)',
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(196, 30, 58, 0.7)',
      transition: { duration: 0.4 }
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
    <div ref={ref} className="bg-black text-white relative overflow-hidden">
      {/* Starry Background with Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: Math.random() * 0.4 + 0.2
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
              transition: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
          />
        ))}
        {/* Circuit Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-full h-0.5' : 'h-full w-0.5'} bg-primary/10`}
            initial={{
              x: i % 2 === 0 ? 0 : (i * 5) + 'vw',
              y: i % 2 === 0 ? (i * 5) + 'vh' : 0,
              opacity: 0.2
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              background: [
                'rgba(196, 30, 58, 0.1)',
                'rgba(196, 30, 58, 0.3)',
                'rgba(196, 30, 58, 0.1)'
              ],
              transition: {
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="relative pt-20 pb-10 flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/10 to-black/80"
        />
        <motion.div
          className="absolute inset-0 border-4 border-primary/20 m-4 rounded-2xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          initial="hidden"
          animate={isInView.hero ? 'visible' : 'hidden'}
          variants={staggerChildren}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-widest"
            style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 30px rgba(196, 30, 58, 0.8)' }}
          >
            <span className="text-primary">Our Services</span>
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300"
            style={{ fontFamily: "'Dosis', sans-serif'" }}
          >
            CUSTOM TATTOO
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-lg text-gray-300 max-w-4xl mx-auto mb-6"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            At Ahmedabad Ink Tattoo Studio, we believe that every tattoo tells a unique story. Our Custom Tattoo Design Service is dedicated to creating bespoke tattoos that reflect your individuality and vision. Whether you’re exploring intricate designs, bold patterns, or subtle art, we’re here to bring your ideas to life.
          </motion.p>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative max-w-2xl mx-auto rounded-xl overflow-hidden border-4 border-primary/50"
          >
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/Tattoo2-596318ff11a4435e9598e7ae05359a0d.jpg"
              alt="Custom Tattoo Example"
              className="w-full h-80 object-cover"
            />
            <motion.div
              className="absolute inset-0 border-2 border-primary/60 m-2 rounded-lg"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section ref={sectionRefs.howItWorks} className="py-10 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.howItWorks ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              How It <span className="text-primary">Works</span>
            </motion.h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-primary/50"
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: { duration: 3, repeat: Infinity }
              }}
            />
            {[
              {
                step: "Step 1: Initial Consultation",
                description: "Discuss your tattoo idea with our artists. Share your inspirations, preferred styles, and placement. Whether it’s a sketch, photo, or just an idea, we’ll guide you.",
              },
              {
                step: "Step 2: Design Creation",
                description: "Our artists will craft a custom design based on your input. You’ll have the chance to review and suggest modifications before finalizing the design.",
              },
              {
                step: "Step 3: Tattoo Session",
                description: "Once the design is ready, we’ll schedule your tattoo appointment. During the session, our artists ensure precision and care to deliver a flawless tattoo.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView.howItWorks ? 'visible' : 'hidden'}
                variants={textVariants}
                className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3
                    className="text-lg md:text-xl font-bold text-primary"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    {item.step}
                  </h3>
                  <p
                    className="text-gray-300 mt-2 text-lg"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    {item.description}
                  </p>
                </div>
                <motion.div
                  className="relative w-10 h-10 rounded-full border-2 border-primary/50 z-10"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(196, 30, 58, 0.5)',
                      '0 0 20px rgba(196, 30, 58, 0.8)',
                      '0 0 10px rgba(196, 30, 58, 0.5)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className="absolute inset-0 rounded-full border border-primary/70 m-1" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">{index + 1}</span>
                </motion.div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative max-w-xl mx-auto rounded-xl overflow-hidden border-4 border-primary/50 mt-8"
          >
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg"
              alt="Tattoo Process"
              className="w-full h-80 object-cover"
            />
            <motion.div
              className="absolute inset-0 border-2 border-primary/60 m-2 rounded-lg"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } }}
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={sectionRefs.whyChoose} className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.whyChoose ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Why Choose Our <span className="text-primary">Custom Tattoo Design Service?</span>
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                title: "Tailored to Your Vision",
                description: "Our experienced artists work closely with you to design tattoos that perfectly match your ideas, preferences, and personality.",
              },
              {
                title: "Collaborative Approach",
                description: "We value your input throughout the design process, ensuring the final artwork aligns with your expectations.",
              },
              {
                title: "Exceptional Artistic Expertise",
                description: "Our team consists of some of the best tattoo artists in Ahmedabad, specializing in various styles, including realism, geometric, tribal, watercolor, and abstract.",
              },
              {
                title: "Hygiene and Safety",
                description: "We adhere to the highest hygiene standards, using only sterilized equipment and high-quality, skin-safe inks.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative bg-gray-900/20 p-6 rounded-xl border-2 border-primary/30 backdrop-blur-sm"
              >
                <motion.div
                  className="absolute inset-0 border-2 border-primary/50 m-2 rounded-lg"
                  variants={glowVariants}
                  initial="hidden"
                  animate="visible"
                />
                <h3
                  className="text-lg font-bold text-center text-primary mb-3"
                  style={{ fontFamily: "'Dosis', sans-serif'" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-gray-300 text-center text-lg"
                  style={{ fontFamily: "'Open Sans', sans-serif'" }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Styles Section */}
      <section ref={sectionRefs.styles} className="py-10 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.styles ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Popular Styles We <span className="text-primary">Offer</span>
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                style: "Realism Tattoos",
                description: "Capture lifelike details and create realistic portraits or objects.",
              },
              {
                style: "Geometric Tattoos",
                description: "Explore symmetry and precision with mesmerizing geometric patterns.",
              },
              {
                style: "Watercolor Tattoos",
                description: "Add a splash of color with artistic watercolor effects.",
              },
              {
                style: "Abstract Tattoos",
                description: "Express your creativity with unique and unconventional designs.",
              },
              {
                style: "Traditional Tattoos",
                description: "Honor timeless tattoo art with bold lines and vibrant colors.",
              },
            ].map((style, index) => (
              <motion.div
                key={index}
                variants={styleCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative bg-gray-900/20 p-5 rounded-xl border-2 border-primary/30 backdrop-blur-sm"
              >
                <motion.div
                  className="absolute inset-0 border-2 border-primary/40 m-1 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    background: 'linear-gradient(90deg, rgba(196, 30, 58, 0) 0%, rgba(196, 30, 58, 0.4) 50%, rgba(196, 30, 58, 0) 100%)',
                    transition: { duration: 2, repeat: Infinity, ease: 'linear' }
                  }}
                />
                <h3
                  className="text-lg font-bold text-center text-primary mb-2"
                  style={{ fontFamily: "'Dosis', sans-serif'" }}
                >
                  {style.style}
                </h3>
                <p
                  className="text-gray-300 text-center text-lg"
                  style={{ fontFamily: "'Open Sans', sans-serif'" }}
                >
                  {style.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={sectionRefs.portfolio} className="py-10 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.portfolio ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Our <span className="text-primary">Portfolio</span>
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto"
          >
            {[
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/3-1.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/4.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/2-1024x1024.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-01-21-at-14.15.50_7aa79a12.jpg",
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
                className="relative mb-4 rounded-xl overflow-hidden border-2 border-primary/40 break-inside-avoid"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-primary/50 m-2 rounded-lg"
                  variants={glowVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            animate={isInView.portfolio ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Dosis', sans-serif'", color: '#ffffff', textShadow: '0 0 25px rgba(196, 30, 58, 0.7)' }}
            >
              Ready to Create Your <span className="text-primary">Masterpiece?</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-300 mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Visit Ahmedabad Ink Tattoo Studio today and let’s bring your tattoo vision to life!
            </motion.p>
            <motion.a
              href="#contact"
              variants={textVariants}
              whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(196, 30, 58, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium border-2 border-primary/60 hover:bg-transparent hover:text-primary transition-all duration-500"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Book Now
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;