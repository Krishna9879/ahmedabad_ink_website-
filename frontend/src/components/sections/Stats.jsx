import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Stats = () => {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.5 })
  
  useEffect(() => {
    const stats = statsRef.current
    
    if (stats && isInView) {
      const counters = stats.querySelectorAll('.counter')
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'))
        let count = 0
        const increment = target > 100 ? target / 100 : target / 50
        
        const updateCounter = () => {
          if (count < target) {
            count += increment
            counter.textContent = Math.ceil(count)
            setTimeout(updateCounter, target > 100 ? 30 : 50)
          } else {
            counter.textContent = target
          }
        }
        updateCounter()
      })

      // GSAP animations for additional effects
      gsap.fromTo('.stat-card', 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, [isInView])
  
  const statsData = [
    { 
      id: 1, 
      value: 1000, 
      label: 'Unique Tattoos Designed', 
      icon: '🎨',
      suffix: '+',
      gradient: 'from-red-500 to-red-700'
    },
    { 
      id: 2, 
      value: 11, 
      label: 'YEARS OF EXPERIENCE', 
      icon: '⏳',
      suffix: '+',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      id: 3, 
      value: 10000, 
      label: 'HAPPY CLIENTS', 
      icon: '😊',
      suffix: '+',
      gradient: 'from-yellow-500 to-orange-600'
    },
    { 
      id: 4, 
      value: 99, 
      label: 'Client Satisfaction', 
      icon: '⭐',
      suffix: '%+',
      gradient: 'from-green-500 to-yellow-500'
    },
  ]
  
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/20 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
      </div>
      
      <div 
        ref={statsRef}
        className="container-custom relative z-10"
      >
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Dosis', sans-serif" }}>
            Our <span className="text-primary">Achievement</span> Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 45 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)"
              }}
              className="stat-card bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center border border-gray-800/50 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Icon with enhanced styling */}
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4 filter drop-shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Counter section */}
                <div className="flex justify-center items-baseline mb-3">
                  <motion.h3 
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent filter drop-shadow-sm`}
                    style={{ fontFamily: "'Dosis', sans-serif" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="counter" data-target={stat.value}>0</span>
                    <span className="text-3xl">{stat.suffix}</span>
                  </motion.h3>
                </div>
                
                {/* Label with improved typography */}
                <p 
                  className="text-gray-300 font-medium text-sm md:text-base leading-relaxed tracking-wide group-hover:text-white transition-colors duration-300" 
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {stat.label}
                </p>

                {/* Decorative element */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Every number tells a story of <span className="text-primary font-semibold">dedication</span>, 
            <span className="text-primary font-semibold"> artistry</span>, and 
            <span className="text-primary font-semibold"> trust</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats