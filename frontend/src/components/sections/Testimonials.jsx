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
      name: 'Sarah J.',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
      rating: 5,
      quote: 'The artists here are incredibly talented. They took my vague idea and turned it into something beyond my expectations. The studio is clean, and the staff is friendly and professional.',
      tattooist: 'Alex Rivera',
    },
    {
      id: 2,
      name: 'Michael T.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      quote: 'From the consultation to the final result, everything was perfect. The attention to detail and the care they put into their work is amazing. I\'ll definitely be coming back for my next piece.',
      tattooist: 'Sophia Chen',
    },
    {
      id: 3,
      name: 'Emma R.',
      image: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg',
      rating: 5,
      quote: 'I was nervous about getting my first tattoo, but they made me feel comfortable throughout the whole process. The design is beautiful and the healing process was exactly as they described.',
      tattooist: 'Marcus Johnson',
    },
    {
      id: 4,
      name: 'James L.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 5,
      quote: 'I\'ve been to many tattoo studios, but this one stands out. The creativity and skill level here is unmatched. They turn your ideas into masterpieces. Worth every penny and more!',
      tattooist: 'Olivia Singh',
    },
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
            Hear what our clients have to say about their experience with us
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
              </div>
              
              <div className="w-full md:w-2/3">
                <FaQuoteLeft className="text-primary/30 text-5xl mb-4" />
                
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
                
                <p className="text-gray-400">
                  Tattooed by {testimonials[currentIndex].tattooist}
                </p>
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