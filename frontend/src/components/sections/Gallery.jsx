import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const galleryRef = useRef(null)
  const isInView = useInView(galleryRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const gallery = galleryRef.current
    
    if (gallery) {
      const images = gallery.querySelectorAll('.gallery-item')
      
      // GSAP Animation
      gsap.fromTo(images, 
        { y: 100, opacity: 0, rotateY: 45 },
        { 
          y: 0, 
          opacity: 1,
          rotateY: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gallery,
            start: 'top 70%',
          }
        }
      )
    }
  }, [])

  // Updated gallery images with examples from Ahmedabad Ink Tattoo
  const galleryImages = [
    {
      id: 1,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000026027-1152x1536.jpeg',
      title: 'Traditional Tiger',
      category: 'Traditional',
    },
    {
      id: 2,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2023-10-10.jpg',
      title: 'Minimalist Arrow',
      category: 'Minimalist',
    },
    {
      id: 3,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/IMG20180604080023-1152x1536.jpg',
      title: 'Colorful Butterfly',
      category: 'Color',
    },
    {
      id: 4,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025950-1152x1536.jpeg',
      title: 'Black & Grey Rose',
      category: 'Black & Grey',
    },
    {
      id: 5,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000000413-1152x1536.jpeg',
      title: 'Modern Wave',
      category: 'Modern',
    },
    {
      id: 6,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2024/12/1000025683-1152x1536.jpeg',
      title: 'Geometric Lotus',
      category: 'Geometric',
    },
    {
      id: 7,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-03-14-1.jpg',
      title: 'Sacred Geometry',
      category: 'Geometric',
    },
    {
      id: 8,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-10-15-1.jpg',
      title: 'Mandala Design',
      category: 'Geometric',
    },
    {
      id: 9,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-10-15.jpg',
      title: 'Intricate Pattern',
      category: 'Geometric',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture bg-repeat opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of stunning tattoo designs and custom artwork
          </p>
        </motion.div>

        <motion.div
          ref={galleryRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="gallery-item group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-primary font-medium mb-1">{item.category}</p>
              <p className="text-gray-400 text-sm mb-3">Premium tattoo artwork</p>
              
              <div className="flex space-x-2">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Custom Design</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Professional</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ 
                scale: 1.2, 
                color: '#C41E3A'
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary shadow-lg hover:shadow-primary/20 transition-colors"
            >
              View Full Portfolio
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery