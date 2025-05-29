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
        const updateCounter = () => {
          const increment = target / 100
          if (count < target) {
            count += increment
            counter.textContent = Math.ceil(count)
            setTimeout(updateCounter, 30)
          } else {
            counter.textContent = target
          }
        }
        updateCounter()
      })
    }
  }, [isInView])
  
  const statsData = [
    { id: 1, value: 10, label: 'Years of Excellence', icon: '🎨' },
    { id: 2, value: 500, label: 'Unique Tattoos', icon: '🖼️' },
    { id: 3, value: 5, label: 'Master Artists', icon: '👨‍🎨' },
    { id: 4, value: 98, label: 'Client Satisfaction', icon: '⭐' },
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/90">
      <div 
        ref={statsRef}
        className="container-custom"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center hover:bg-primary/20 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="flex justify-center items-baseline">
                <h3 className="text-4xl font-bold text-primary" style={{ fontFamily: "'Dosis', sans-serif" }}>
                  <span className="counter" data-target={stat.value}>0</span>
                  {stat.id === 2 && '+'}
                  {stat.id === 4 && '%'}
                </h3>
              </div>
              <p className="text-gray-300 mt-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats