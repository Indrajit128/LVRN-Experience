import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import Magnet from './Magnet';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Magnet padding={50} magnetStrength={3}>
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="LVRN Experience" className="h-14 w-auto rounded" />
                    </Link>
                </Magnet>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Magnet key={link.name} padding={20} magnetStrength={2}>
                            <Link
                                to={link.path}
                                className={`font-bold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-accent'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </Magnet>
                    ))}
                    <Magnet padding={50} magnetStrength={5}>
                        <Link to="/events" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform inline-block">
                            Get Tickets
                        </Link>
                    </Magnet>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-3xl text-accent" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-3xl font-black ${location.pathname === link.path ? 'text-primary' : 'text-accent'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/events" onClick={() => setIsOpen(false)} className="bg-primary text-white px-8 py-3 rounded-full font-bold text-xl">
                            Get Tickets
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
