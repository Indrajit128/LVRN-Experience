import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

import { useEffect } from 'react';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
                <Navbar />
                <main>
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
