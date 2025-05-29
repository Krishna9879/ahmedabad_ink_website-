import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FaAngleDown } from 'react-icons/fa'

const HeroSection = () => {
  const needleRef = useRef(null)
  const textRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // Animate the tattoo needle with subtle floating and rotation
    const needle = needleRef.current
    
    if (needle) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      
      tl.to(needle, {
        y: '-20px',
        rotation: 5,
        duration: 3,
        ease: 'power1.inOut'
      })
      .to(needle, {
        y: '0px',
        rotation: -2,
        duration: 2.5,
        ease: 'power1.inOut'
      })
    }

    // Text animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5
    })

    // Parallax effect (reduced intensity)
    gsap.to(containerRef.current, {
      yPercent: 10, // Reduced from 30 to 10 to minimize overlap
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-black mb-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed transform scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-texture bg-repeat opacity-5"></div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="container-custom relative z-30 text-center pt-20 mt-20 pb-20">
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
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          >
            <span className="text-primary">AHMEDABAD</span> INK TATTOO
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white mt-6 max-w-3xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
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

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center z-30"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <FaAngleDown className="animate-bounce" />
      </motion.div>
    </section>
  )
}

export default HeroSection