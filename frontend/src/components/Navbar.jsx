import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Artists', href: '#artists' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-2 left-0 right-0 z-[100] w-full max-w-[1200px] mx-auto transition-all duration-300 rounded-full ${
          isScrolled ? 'bg-black/90 backdrop-blur-lg py-2' : 'bg-black/50 backdrop-blur-sm py-3'
        }`}
      >
        <div className="px-6">
          <div className="flex justify-between items-center">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg md:text-xl font-serif font-bold text-white"
            >
              <span className="text-primary">AHMEDABAD</span> INK TATTOO
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.05,
                    color: '#C41E3A',
                    transition: { duration: 0.2 }
                  }}
                  className="relative px-4 py-2 text-white group text-sm"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: '#8A0303' }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                Book Now
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none z-50"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-white hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-accent transition-all duration-300"
              >
                Book Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar