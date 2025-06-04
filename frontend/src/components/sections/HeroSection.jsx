import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const HeroSection = () => {
  const needleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate the tattoo needle with subtle floating and rotation
    const needle = needleRef.current;

    if (needle) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(needle, {
        y: '-20px',
        rotation: 5,
        duration: 3,
        ease: 'power1.inOut',
      }).to(needle, {
        y: '0px',
        rotation: -2,
        duration: 2.5,
        ease: 'power1.inOut',
      });
    }

    // Text animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5,
    });

    // Parallax effect (reduced intensity)
    gsap.to(containerRef.current, {
      yPercent: 10, // Reduced from 30 to 10 to minimize overlap
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background with comprehensive overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed transform scale-110"></div>

        {/* Primary gradient overlay - covers entire section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/90"></div>

        {/* Secondary overlay for additional coverage */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Radial gradient for center focus */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60"></div>

        {/* Texture overlay */}
        <div className="absolute inset-0 bg-texture bg-repeat opacity-5"></div>

        {/* Bottom edge reinforcement */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        className="container-custom relative z-30 text-center pt-20 mt-20 pb-32"
      >
        <div className="flex justify-center items-center mb-8">
          <motion.div
            ref={needleRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="w-full max-w-[300px] relative"
          >
            <img
              src="https://images.pexels.com/photos/6593351/pexels-photo-6593351.jpeg"
              alt="Tattoo Machine"
              className="object-cover rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        <div ref={textRef} className="relative z-30">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)]"
          >
            <span className="text-primary">AHMEDABAD</span> INK TATTOO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white mt-6 max-w-3xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Dream | Create | Inspire – Art with Meaning at Ahmedabad Ink Tattoo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05, backgroundColor: '#8A0303' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full md:w-auto shadow-lg hover:shadow-primary/20"
            >
              View Our Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-white/20"
            >
              Book a Session
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Additional bottom section coverage */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;