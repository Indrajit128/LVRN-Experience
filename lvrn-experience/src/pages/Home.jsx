import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiClock, FiX, FiMusic, FiStar } from 'react-icons/fi';
import Hero from '../components/Hero';
import holiCrowd from '../assets/holi_crowd.png';
import juggySandhu from '../assets/juggy_sandhu_new.jpg';
import djDastanPoster from '../assets/dj_dastan_new.jpg';
import djMannat from '../assets/dj mannat.png';
import lvrnPost from '../assets/lvrn post.png';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />

            {/* Featured Services Teaser */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">WE <span className="text-primary tracking-tighter">DEFINE</span> EXPERIENCE</h2>
                        <div className="w-32 h-2 bg-primary mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Artist Management', desc: 'Developing the next generation of global stars.' },
                            { title: 'Event Planning', desc: 'From curation to execution, we make it legendary.' },
                            { title: 'Music Shows', desc: 'High-energy concerts and nightlife experiences.' }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-10 bg-lightGray rounded-3xl text-left border-l-4 border-transparent hover:border-primary transition-all duration-500 shadow-sm hover:shadow-2xl"
                            >
                                <h3 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-tighter leading-none">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-8 font-bold leading-relaxed">{service.desc}</p>
                                <div className="w-12 h-1.5 bg-primary/30" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Holi Bash 2026 Feature Section */}
            <section className="py-32 bg-accent text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-primary font-black uppercase tracking-[0.4em] mb-4 block italic">SAVE THE DATE</span>
                                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none uppercase tracking-tighter">
                                    RANG<span className="text-white italic">OVER</span>
                                </h2>
                                <p className="text-2xl md:text-3xl font-black mb-6 text-primary/90 italic tracking-wide">
                                    Most Exclusive Holi Celebration
                                </p>
                                <div className="mb-10 max-w-lg">
                                    <p className="text-sm md:text-base text-gray-400 font-bold mb-4 uppercase tracking-widest">
                                        Featuring Main Artists
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                        {[
                                            'Juggy Sandhu',
                                            'DJ Dastan',
                                            'Shumayl Malik',
                                            'DJ Mannat'
                                        ].map((artist, i) => (
                                            <div key={i} className="flex items-center space-x-3 group">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                                                <span className="text-white font-black text-lg md:text-xl uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {artist}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest shadow-xl"
                                        >
                                            SECURE YOUR SPOT
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        onClick={() => setShowModal(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all duration-300 uppercase tracking-widest"
                                    >
                                        GET DETAILS
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-2 overflow-hidden rounded-[2rem] shadow-2xl group border border-white/5 bg-accent h-[280px]"
                            >
                                <img
                                    src={holiCrowd}
                                    alt="Rangover Holi Celebration"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 contrast-[1.1] brightness-[1.1]"
                                    style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="overflow-hidden rounded-[2rem] shadow-2xl group h-[280px] border border-white/5"
                            >
                                <img src={juggySandhu} alt="Juggy Sandhu" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="overflow-hidden rounded-[2rem] shadow-2xl group border border-white/5 h-[280px]"
                            >
                                <img
                                    src={djDastanPoster}
                                    alt="DJ Dastan"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="overflow-hidden rounded-[2rem] shadow-2xl group border border-white/5 h-[280px]"
                            >
                                <img
                                    src={lvrnPost}
                                    alt="Shumayl Malik"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="overflow-hidden rounded-[2rem] shadow-2xl group h-[280px]"
                            >
                                <img src={djMannat} alt="DJ Mannat" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RANGOVER Event Details Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-accent text-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/10 shadow-2xl"
                        >
                            {/* Close Button */}
                            <motion.button
                                onClick={() => setShowModal(false)}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all z-10 backdrop-blur-sm"
                            >
                                <FiX className="text-2xl" />
                            </motion.button>

                            <div className="flex-grow overflow-y-auto p-6 md:p-12 lg:p-16">
                                <div className="max-w-3xl mx-auto">
                                    {/* Event Title */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight uppercase tracking-tight">
                                            RANG<span className="text-primary italic">OVER</span>
                                        </h2>
                                        <p className="text-xl md:text-2xl font-black text-primary/90 mb-12 italic">
                                            The Ultimate Celebration of Colors
                                        </p>
                                    </motion.div>

                                    {/* Main Artists */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-12"
                                    >
                                        <div className="flex items-center mb-6">
                                            <FiStar className="text-primary text-2xl mr-3" />
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Main Artists</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-11">
                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                <p className="text-xl md:text-2xl font-black mb-2 text-primary">Juggy Sandhu</p>
                                                <p className="text-gray-400 font-medium">Live Performance Experience</p>
                                            </div>
                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                <p className="text-xl md:text-2xl font-black mb-2 text-primary">DJ Dastan</p>
                                                <p className="text-gray-400 font-medium">High-Energy Bollywood & EDM Set</p>
                                            </div>
                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                <p className="text-xl md:text-2xl font-black mb-2 text-primary">Shumayl Malik</p>
                                                <p className="text-gray-400 font-medium">Live Performance Experience</p>
                                            </div>
                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                <p className="text-xl md:text-2xl font-black mb-2 text-primary">DJ Mannat</p>
                                                <p className="text-gray-400 font-medium">High-Energy Bollywood & EDM Set</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Venue Details */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mb-12"
                                    >
                                        <div className="flex items-center mb-4">
                                            <FiMapPin className="text-primary text-2xl mr-3" />
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Venue</h3>
                                        </div>
                                        <div className="pl-0 md:pl-11 text-gray-300 font-medium leading-relaxed">
                                            <p className="text-lg md:text-xl mb-1 font-bold">Bangur Sports Complex (Bramha Mahesh Ground)</p>
                                            <p className="text-base md:text-lg">Bangur Nagar, Goregaon West</p>
                                            <p className="text-base md:text-lg">Mumbai, Maharashtra</p>
                                        </div>
                                    </motion.div>

                                    {/* Event Timing */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="mb-12"
                                    >
                                        <div className="flex items-center mb-4">
                                            <FiClock className="text-primary text-2xl mr-3" />
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Event Timing</h3>
                                        </div>
                                        <div className="pl-0 md:pl-11">
                                            <p className="text-lg md:text-xl text-gray-300 font-bold">10:00 AM – 4:00 PM</p>
                                        </div>
                                    </motion.div>

                                    {/* Lineup Update */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="mb-12"
                                    >
                                        <div className="flex items-center mb-4">
                                            <FiMusic className="text-primary text-2xl mr-3" />
                                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Lineup Update</h3>
                                        </div>
                                        <div className="pl-0 md:pl-11">
                                            <p className="text-base md:text-lg text-gray-400 font-bold italic">
                                                More Artist Lineups To Be Announced Soon…
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Event Experience */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="mb-12"
                                    >
                                        <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-wide">
                                            Event Experience
                                        </h3>
                                        <p className="text-base md:text-lg text-gray-300 font-medium mb-6 leading-relaxed">
                                            Get ready for a high-energy Holi celebration filled with:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                'Colors & Festive Vibes',
                                                'Live Music Performances',
                                                'DJ Beats & Dance',
                                                'Food, Fun & Entertainment',
                                                'A Premium LVRN Experience'
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.7 + i * 0.05 }}
                                                    className="flex items-center text-gray-300 font-bold"
                                                >
                                                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                                    {item}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Call to Action */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                        className="bg-white/5 p-6 md:p-8 rounded-2xl border border-primary/20"
                                    >
                                        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-2">
                                            Stay tuned for more lineup reveals and ticket updates.
                                        </p>
                                        <p className="text-base md:text-lg font-black text-primary">
                                            Follow LVRN Experience for the latest announcements.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 md:p-8 bg-white/5 flex items-center justify-center border-t border-white/10">
                                <span className="text-sm font-black text-white tracking-widest uppercase">LVRN EXPERIENCE</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -100, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 text-9xl font-black opacity-5 whitespace-nowrap"
                >
                    LVRN EXPERIENCE LVRN EXPERIENCE LVRN EXPERIENCE
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-center">READY TO JOIN THE VIBE?</h2>
                    <button className="bg-white text-primary px-12 py-4 rounded-full font-black text-xl hover:scale-110 transition-transform">
                        GET IN TOUCH
                    </button>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
