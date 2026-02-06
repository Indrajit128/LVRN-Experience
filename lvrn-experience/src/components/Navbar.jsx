import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo 4.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white shadow-sm py-2 transition-all duration-300">
            <div className="w-full px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={logo}
                        alt="LVRN Experience"
                        className="h-[80px] w-auto rounded object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-black px-2 py-1 transition-colors uppercase tracking-tight ${link.name === 'Home' ? 'text-black' : 'text-gray-800'} ${location.pathname === link.path ? 'text-primary' : ''} hover:text-primary`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/events" className="bg-primary text-white px-5 py-2 rounded-xl font-black text-base hover:scale-105 transition-transform uppercase tracking-wider shadow-lg">
                        Know More
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-3xl text-accent" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-3xl font-black px-4 py-2 uppercase tracking-tight hover:scale-110 transition-transform block ${link.name === 'Home' ? 'text-black' : 'text-gray-800'
                                        } ${location.pathname === link.path ? 'text-primary' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                to="/events"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-xl hover:scale-105 transition-transform uppercase tracking-wider shadow-xl inline-block"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
