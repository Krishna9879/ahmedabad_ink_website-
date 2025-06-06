import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './sections/HeroSection'
import Gallery from './sections/Gallery'
import Services from './sections/Services'
import Artists from './sections/Artists'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Stats from './sections/Stats'
// Import images from assets folder
import img1 from '../assets/insta_image1.jpg'
import img2 from '../assets/insta_image2.jpg'
import img3 from '../assets/insta_image3.jpg'
import img4 from '../assets/insta_image4.jpg'
import img5 from '../assets/insta_image5.jpg'
import img6 from '../assets/insta_image6.jpg'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const { scrollYProgress } = useScroll()
  const progressRef = useRef(null)

  useEffect(() => {
    // Create a progress bar that moves as user scrolls
    const progressBar = progressRef.current
    
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (progressBar) {
        progressBar.style.width = `${value * 100}%`
      }
    })
    
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <main className="overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div 
          ref={progressRef} 
          className="h-full bg-primary" 
          style={{ width: '0%' }}
        ></div>
      </div>

      <HeroSection />
      <Gallery />
      <Stats />
      <Services />
      <Artists />
      <InstagramFeed />
      <Testimonials />
      <Contact />
    </main>
  )
}

const InstagramFeed = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // Mock Instagram posts with imported images
  const instagramPosts = [
    {
      id: 1,
      img: img1,
      likes: 124,
    },
    {
      id: 2,
      img: img2,
      likes: 245,
    },
    {
      id: 3,
      img: img3,
      likes: 189,
    },
    {
      id: 4,
      img: img4,
      likes: 302,
    },
    {
      id: 5,
      img: img5,
      likes: 276,
    },
    {
      id: 6,
      img: img6,
      likes: 167,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-black/90">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Follow Our Work</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest designs and behind-the-scenes moments by following us on Instagram
          </p>
          <motion.a 
            href="https://www.instagram.com/ahmedabadinktattoo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaInstagram className="mr-2" size={20} />
            <span>@ahmedabadinktattoo</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={post.img}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="block font-semibold">{post.likes} likes</span>
                  <span className="text-sm">View on Instagram</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <motion.a
            href="https://www.instagram.com/ahmedabadinktattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on Instagram
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Home