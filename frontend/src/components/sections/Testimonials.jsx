import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonialsRef = useRef(null)
  const isInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Dudan!',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60',
      rating: 5,
      quote: 'Excellent service and amazing tattoo work!',
      date: '2024-12-16',
      source: 'Google'
    },
    {
      id: 2,
      name: 'Tarun Hippara',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60',
      rating: 5,
      quote: 'Very good service & good work',
      date: '2024-11-11',
      source: 'Google'
    },
    {
      id: 3,
      name: 'Neetu Sharma',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60',
      rating: 5,
      quote: 'It was great experience, highly recommended for tattoo lovers. I have done 3 tattoos.',
      date: '2024-11-08',
      source: 'Google'
    },
    {
      id: 4,
      name: 'Siddharth Danidharia',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&auto=format&fit=crop&q=60',
      rating: 5,
      quote: 'Hey nice work. Really nice ink.',
      date: '2024-11-08',
      source: 'Google'
    },
    {
      id: 5,
      name: 'Dhaval Danidhariya',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60',
      rating: 5,
      quote: 'Professional service and excellent tattoo quality.',
      date: '2024-11-08',
      source: 'Google'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
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
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EXCELLENT - Based on 200 reviews
          </p>
        </motion.div>

        <div 
          ref={testimonialsRef}
          className="flex flex-col items-center justify-center relative"
        >
          <motion.div
            key={testimonials[currentIndex].id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            className="max-w-4xl w-full bg-dark/50 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-2xl relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="overflow-hidden rounded-full aspect-square border-4 border-primary mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-400">
                  {testimonials[currentIndex].date}
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <FaQuoteLeft className="text-primary/30 text-5xl" />
                  <span className="text-primary text-sm bg-primary/10 px-2 py-1 rounded">
                    {testimonials[currentIndex].source}
                  </span>
                </div>
                
                <p className="text-lg text-gray-200 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary" />
                  ))}
                </div>
                
                <h3 className="text-xl font-serif font-bold">
                  {testimonials[currentIndex].name}
                </h3>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark/50 hover:bg-primary text-white rounded-full transition-colors duration-300"
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark/50 hover:bg-primary text-white rounded-full transition-colors duration-300"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials