import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    creativity: useRef(null),
    tech: useRef(null),
    timeline: useRef(null),
    hologram: useRef(null),
    gallery: useRef(null),
    cta: useRef(null)
  };

  const inViewOptions = { once: true, amount: 0.2 };
  const isInView = {
    hero: useInView(sectionRefs.hero, inViewOptions),
    intro: useInView(sectionRefs.intro, inViewOptions),
    creativity: useInView(sectionRefs.creativity, inViewOptions),
    tech: useInView(sectionRefs.tech, inViewOptions),
    timeline: useInView(sectionRefs.timeline, inViewOptions),
    hologram: useInView(sectionRefs.hologram, inViewOptions),
    gallery: useInView(sectionRefs.gallery, inViewOptions),
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
        repeatDelay: 0.5
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div ref={ref} className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0.4
            }}
            animate={{
              y: [0, -1500],
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
        {/* Laser Lines */}
        {[...Array(5)].map((_, i) => (
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

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 bg-[url('https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
        <motion.div
          className="absolute inset-0 border-8 border-primary/30 m-6 rounded-2xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          initial="hidden"
          animate={isInView.hero ? 'visible' : 'hidden'}
          variants={textVariants}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-9xl font-serif font-bold mb-8 tracking-widest"
            style={{ fontFamily: "'Dosis', sans-serif", textShadow: '0 0 30px rgba(196, 30, 58, 0.7)' }}
            animate={{ color: ['#ffffff', '#C41E3A', '#ffffff'], transition: { duration: 3, repeat: Infinity } }}
          >
            Welcome To <span className="text-primary">AHMEDABAD INK TATTOO</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-300 mb-10"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Pioneering the Future of Tattoo Artistry Since 2015
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.2, boxShadow: '0 0 40px rgba(196, 30, 58, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primary text-white py-4 px-10 rounded-xl font-medium border-2 border-primary/70 hover:bg-transparent hover:text-primary transition-all duration-500"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Step Into the Future
            <FaArrowRight className="ml-3" />
          </motion.a>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section ref={sectionRefs.intro} className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.intro ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={textVariants}>
              <h2
                className="text-4xl md:text-6xl font-serif font-bold mb-6 text-left"
                style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 15px rgba(196, 30, 58, 0.5)' }}
              >
                Our <span className="text-primary">Legacy</span>
              </h2>
              <p
                className="text-lg text-gray-300 mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
              >
                Ahmedabad Ink Tattoo has been a cornerstone of artistic expression in Ahmedabad for over a decade. Our studio is more than just a place to get inked—it’s a creative haven where your ideas come to life through the hands of our skilled artists. Specializing in custom tattoos, piercings, and tattoo removal, we pride ourselves on delivering exceptional quality and a personalized experience.
              </p>
              <p
                className="text-lg text-gray-300 mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
              >
                We’re redefining tattoo artistry with cutting-edge technology, ensuring every piece is a masterpiece that stands the test of time.
              </p>
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative rounded-xl overflow-hidden border-2 border-primary/40"
            >
              <img
                src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg"
                alt="Studio interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          >
            {[
              'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg',
              'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ramgarhia-tattoos-studio-chhabewal-hoshiarpur-tattoo-artists-j66c8ikzwr-1536x1152.avif',
            ].map((src, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative rounded-xl overflow-hidden border-2 border-primary/40"
              >
                <img
                  src={src}
                  alt={`Intro Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creativity Section */}
      <section ref={sectionRefs.creativity} className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://ahmedabadinktattoo.com/wp-content/uploads/2025/02/ABF52542-1062-4FDC-AD8D-5D0FCA015E0B.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.creativity ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Art That <span className="text-primary">Transcends Time</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              At Ahmedabad Ink Tattoo, we believe in the power of art to tell stories, evoke emotions, and celebrate individuality. Our team of passionate artists works closely with each client to craft unique designs that reflect their personality and vision.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg',
              'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg',
              'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg',
            ].map((src, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative rounded-xl overflow-hidden border-2 border-primary/40"
              >
                <img
                  src={src}
                  alt={`Creativity Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={textVariants}
            className="text-lg text-gray-300 max-w-4xl mx-auto text-center"
            style={{ fontFamily: "'Open Sans', sans-serif'" }}
          >
            Every tattoo we create is a journey—a fusion of your vision and our artistry, designed to resonate for generations.
          </motion.p>
        </div>
      </section>

      {/* Tattoo Technology Section */}
      <section ref={sectionRefs.tech} className="py-12 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.tech ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Next-Gen <span className="text-primary">Tattoo Tech</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              We’re committed to maintaining the highest standards of hygiene and safety, ensuring that every visit to our studio is as comfortable as it is memorable. Experience the future with our innovative tattoo technology.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Holographic Design Previews',
                description: 'Visualize your tattoo in 3D holographic projections before we begin.',
                image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg',
              },
              {
                title: 'Nano-Ink Technology',
                description: 'Using advanced nano-inks for longer-lasting, vibrant tattoos.',
                image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg',
              },
              {
                title: 'AI-Powered Precision',
                description: 'Our AI systems ensure flawless designs with perfect symmetry.',
                image: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-03-14-1.jpg',
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-gray-900/70 p-6 rounded-xl border-2 border-primary/40 backdrop-blur-sm"
              >
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 10px rgba(196, 30, 58, 0.3)' }}
                >
                  {tech.title}
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'Open Sans', sans-serif'" }}
                >
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Futuristic Timeline Section */}
      <section ref={sectionRefs.timeline} className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.timeline ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Our Journey <span className="text-primary">Through Time</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              A timeline of Ahmedabad Ink Tattoo’s evolution into the future of tattoo artistry.
            </motion.p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/50"></div>
            {[
              {
                year: '2015',
                event: 'Founded Ahmedabad Ink Tattoo, bringing world-class tattoo artistry to Gujarat.',
                side: 'left',
              },
              {
                year: '2018',
                event: 'Expanded our services to include piercings and tattoo removal with advanced tech.',
                side: 'right',
              },
              {
                year: '2020',
                event: 'Introduced AI-driven design tools for unparalleled precision.',
                side: 'left',
              },
              {
                year: '2025',
                event: 'Pioneered holographic tattoo previews, revolutionizing the client experience.',
                side: 'right',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                initial="hidden"
                animate={isInView.timeline ? 'visible' : 'hidden'}
                className={`flex items-center mb-12 ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-between`}
              >
                <div className={`w-5/12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                  <h3
                    className="text-2xl font-bold text-primary"
                    style={{ fontFamily: "'Dosis', sans-serif'" }}
                  >
                    {item.year}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "'Open Sans', sans-serif'" }}
                  >
                    {item.event}
                  </p>
                </div>
                <div className="w-2 h-2 bg-primary rounded-full border-4 border-primary/50 z-10"></div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holographic Experience Section */}
      <section ref={sectionRefs.hologram} className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate={isInView.hologram ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Holographic <span className="text-primary">Experience</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Step into our studio and experience your tattoo design in a holographic preview, blending art with futuristic technology.
            </motion.p>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative max-w-3xl mx-auto rounded-xl overflow-hidden border-4 border-primary/50"
          >
            <img
              src="https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ramgarhia-tattoos-studio-chhabewal-hoshiarpur-tattoo-artists-j66c8ikzwr-1536x1152.avif"
              alt="Holographic Preview"
              className="w-full h-96 object-cover"
            />
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 m-2 rounded-lg"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Expanded Gallery Section */}
      <section ref={sectionRefs.gallery} className="py-12 relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView.gallery ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Our <span className="text-primary">Futuristic Gallery</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Explore the future of tattoo artistry through our stunning creations.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/ramgarhia-tattoos-studio-chhabewal-hoshiarpur-tattoo-artists-j66c8ikzwr-1536x1152.avif",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2025/02/ABF52542-1062-4FDC-AD8D-5D0FCA015E0B.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-scaled.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-03-14-1.jpg",
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AIK-1.jpg", // Repeated to extend length
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/AiK-2-768x1367.jpg", // Repeated
              "https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG_8298-2048x1952.jpg", // Repeated
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
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs.cta} className="py-12 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            animate={isInView.cta ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{ fontFamily: "'Dosis', sans-serif'", textShadow: '0 0 20px rgba(196, 30, 58, 0.6)' }}
            >
              Enter the <span className="text-primary">Future of Art</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl text-gray-300 mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Join us at Ahmedabad Ink Tattoo and let’s create a masterpiece that defines the future of tattooing.
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2, boxShadow: '0 0 40px rgba(196, 30, 58, 0.9)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary text-white py-4 px-10 rounded-xl font-medium border-2 border-primary/70 hover:bg-transparent hover:text-primary transition-all duration-500"
              style={{ fontFamily: "'Open Sans', sans-serif'" }}
            >
              Book Your Session
              <FaArrowRight className="ml-3" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;