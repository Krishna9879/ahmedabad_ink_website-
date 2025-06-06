import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutUs from './pages/About'
import CursorEffect from './components/CursorEffect'
import { ScrollToTop } from './components/ScrollToTop'
import Offers from './pages/Offers'
import Services from './pages/ServicePage'
import Contact from './pages/Contactpage'
import TattooRemoval from './pages/TattooRemoval'
import Portfolio from './pages/Portfolio'
import FAQ from './pages/faq'
import Academic from './pages/AcademicPage'

function App() {
  useEffect(() => {
    document.title = "Ahmedabad Ink Tattoo | Premium Tattoo Art"
  }, [])

  return (
    <Router>
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
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/portfolio" element={<Portfolio />} />
          
            <Route path="/about" element={<AboutUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/servicespage" element={<Services />} />
            <Route path="/contactpage" element={<Contact />} />
              <Route path="/tattooRemoval" element={<TattooRemoval />} />
                <Route path="/academic" element={<Academic />} />
          </Routes>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}

export default App
