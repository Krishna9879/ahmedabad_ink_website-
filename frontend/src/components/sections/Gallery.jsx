import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VanillaTilt from 'vanilla-tilt'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const galleryRef = useRef(null)
  const isInView = useInView(galleryRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const gallery = galleryRef.current
    
    if (gallery) {
      const images = gallery.querySelectorAll('.gallery-item')
      
      // Initialize Vanilla Tilt
      VanillaTilt.init(images, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
        scale: 1.05,
        perspective: 1000
      })

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

    return () => {
      const elements = document.querySelectorAll('.gallery-item')
      elements.forEach(element => element.vanillaTilt?.destroy())
    }
  }, [])

  // Updated gallery images with examples from Ahmedabad Ink Tattoo (replace with actual URLs)
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
      title: 'Geometric Lotus',
      category: 'Geometric',
    },
    {
      id: 8,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-10-15-1.jpg',
      title: 'Geometric Lotus',
      category: 'Geometric',
    },
    {
      id: 9,
      img: 'https://ahmedabadinktattoo.com/wp-content/uploads/2025/01/2024-10-15.jpg',
      title: 'Geometric Lotus',
      category: 'Geometric',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
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

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item group relative overflow-hidden rounded-lg transform-gpu transition-all duration-500 hover:z-10"
              initial={{ opacity: 0, rotateY: 45 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-serif font-bold text-white transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.title}</h3>
                <span className="text-primary text-sm transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: '#8A0303' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary shadow-lg hover:shadow-primary/20"
          >
            View Full Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Gallery