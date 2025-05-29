import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Artists = () => {
  const artistsRef = useRef(null)
  const isInView = useInView(artistsRef, { once: true, amount: 0.1 })

  const artists = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Studio Owner & Master Artist',
      specialty: 'Japanese Traditional',
      image: 'https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg',
      socials: {
        instagram: '#',
        twitter: '#',
        email: 'mailto:alex@example.com'
      }
    },
    {
      id: 2,
      name: 'Sophia Chen',
      role: 'Lead Artist',
      specialty: 'Realism & Portraits',
      image: 'https://images.pexels.com/photos/2760248/pexels-photo-2760248.jpeg',
      socials: {
        instagram: '#',
        twitter: '#',
        email: 'mailto:sophia@example.com'
      }
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Senior Artist',
      specialty: 'Black & Grey',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      socials: {
        instagram: '#',
        twitter: '#',
        email: 'mailto:marcus@example.com'
      }
    },
    {
      id: 4,
      name: 'Olivia Singh',
      role: 'Artist',
      specialty: 'Watercolor & Abstract',
      image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg',
      socials: {
        instagram: '#',
        twitter: '#',
        email: 'mailto:olivia@example.com'
      }
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
    <section id="artists" className="py-24 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
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
            Meet Our <span className="text-primary">Artists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talented professionals dedicated to bringing your tattoo vision to life with skill and passion
          </p>
        </motion.div>

        <motion.div
          ref={artistsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">
                {artist.name}
              </h3>
              
              <p className="text-primary font-medium mb-1">{artist.role}</p>
              <p className="text-gray-400 text-sm mb-3">Specializes in {artist.specialty}</p>
              
              <div className="flex space-x-3">
                <motion.a
                  href={artist.socials.instagram}
                  whileHover={{ scale: 1.2, color: '#C41E3A' }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaInstagram size={18} />
                </motion.a>
                <motion.a
                  href={artist.socials.twitter}
                  whileHover={{ scale: 1.2, color: '#C41E3A' }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaTwitter size={18} />
                </motion.a>
                <motion.a
                  href={artist.socials.email}
                  whileHover={{ scale: 1.2, color: '#C41E3A' }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaEnvelope size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Artists