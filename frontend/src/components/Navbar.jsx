import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'OFFERS', href: '/offers' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    {
      name: 'Services',
      href: '/servicespage',
      subLinks: [
        { name: 'CUSTOM TATTOO', href: '/servicespage' },
        { name: 'TATTOO REMOVAL', href: '/tattooRemoval' },
      ],
    },
    { name: 'CONTACT', href: '/contactpage' },
    { name: 'FAQs', href: '/faqs' },
  ];

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
  };

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
  };

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
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, display: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
    setTimeoutId(id);
  };

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
              as={Link}
              to="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg md:text-xl font-bold text-white"
              style={{ fontFamily: "'Dosis', sans-serif'" }}
            >
              <span className="text-primary">AHMEDABAD</span> INK TATTOO
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 flex-nowrap">
              {navLinks.map((link, i) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={link.subLinks ? handleMouseEnter : undefined}
                  onMouseLeave={link.subLinks ? handleMouseLeave : undefined}
                >
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative px-4 py-2 text-white group text-sm flex items-center"
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center ${
                        link.name === 'ABOUT US' ? 'whitespace-nowrap' : ''
                      }`}
                    >
                      {link.name}
                      {link.subLinks && (
                        <FaAngleDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </Link>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </motion.div>

                  {/* Dropdown for Services */}
                  {link.subLinks && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate={isServicesOpen ? 'visible' : 'hidden'}
                      className="absolute top-full left-0 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg z-50 min-w-[200px] pt-1"
                    >
                      <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                      {link.subLinks.map((subLink, subIndex) => (
                        <motion.div
                          key={subLink.name}
                          custom={subIndex}
                          variants={linkVariants}
                          initial="hidden"
                          animate="visible"
                          className="block px-4 py-2 text-white hover:text-primary hover:bg-primary/10 transition-colors duration-200 text-sm"
                        >
                          <Link to={subLink.href}>{subLink.name}</Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <motion.div
                as={Link}
                to="/contact"
                whileHover={{ scale: 1.05, backgroundColor: '#8A0303' }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 whitespace-nowrap"
                style={{ fontFamily: "'Open Sans', sans-serif'" }}
              >
                Book Now
              </motion.div>
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
                <div key={link.name} className="w-full text-center">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center items-center"
                  >
                    <Link
                      to={link.href}
                      className="text-xl text-white hover:text-primary transition-colors duration-300 whitespace-nowrap"
                      onClick={() => !link.subLinks && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="ml-2 text-white hover:text-primary"
                      >
                        <FaAngleDown
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </motion.div>

                  {/* Mobile Submenu for Services */}
                  {link.subLinks && isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2"
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <motion.div
                          key={subLink.name}
                          custom={subIndex}
                          variants={linkVariants}
                          initial="hidden"
                          animate="visible"
                          className="block text-lg text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                          <Link to={subLink.href} onClick={() => setIsOpen(false)}>
                            {subLink.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <motion.div
                as={Link}
                to="/contact"
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-accent transition-all duration-300"
              >
                Book Now
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;