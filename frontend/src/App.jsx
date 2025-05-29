import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import CursorEffect from './components/CursorEffect'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  useEffect(() => {
    document.title = "Ahmedabad Ink Tattoo | Premium Tattoo Art"
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        <div className="grain"></div>
        <CursorEffect />
        <ScrollToTop />
        <Navbar />
        <Home />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App