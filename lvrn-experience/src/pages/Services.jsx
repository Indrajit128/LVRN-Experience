import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMusic, FiCalendar, FiUsers, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import logo from '../assets/logo.png';


const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: 'Artist Management',
            icon: <FiMusic className="text-4xl" />,
            desc: 'We provide full-scale career development from branding to distribution.',
            features: ['Global Branding', 'Tour Management', 'Music Distribution', 'Press & PR'],
            modalData: {
                heading: 'Artist Management – Full Support',
                description: 'We provide complete career management for artists, helping them grow from emerging talent to global recognition.',
                details: [
                    {
                        title: 'Global Branding',
                        text: 'Craft a powerful artist identity with premium positioning and worldwide appeal.'
                    },
                    {
                        title: 'Tour Management',
                        text: 'End-to-end tour planning and execution, ensuring smooth logistics and unforgettable performances.'
                    },
                    {
                        title: 'Music Distribution',
                        text: 'Release music across all major streaming platforms with maximum reach and visibility.'
                    },
                    {
                        title: 'Press & PR',
                        text: 'Strategic media promotion, press coverage, and campaigns to keep your brand in the spotlight.'
                    }
                ]
            }
        },
        {
            title: 'Event Organizing',
            icon: <FiCalendar className="text-4xl" />,
            desc: 'Seamless execution of festivals, concerts, and private experiences.',
            features: ['Concert Production', 'Ticketing Solutions', 'Stage & Sound Design', 'Logistics Management'],
            modalData: {
                heading: 'Event Organizing',
                description: 'We specialize in organizing unforgettable festivals, concerts, and immersive private experiences with seamless planning and premium production quality.',
                details: [
                    {
                        title: 'Concert Production',
                        text: 'Complete end-to-end production, ensuring world-class live show execution and audience experience.'
                    },
                    {
                        title: 'Ticketing Solutions',
                        text: 'Smooth ticket setup, sales management, and entry coordination for hassle-free event access.'
                    },
                    {
                        title: 'Stage & Sound Design',
                        text: 'High-quality stage setups, lighting, and sound engineering tailored for impactful performances.'
                    },
                    {
                        title: 'Logistics Management',
                        text: 'Full operational support including venue coordination, scheduling, staffing, and event-day flow.'
                    }
                ]
            }
        },
        {
            title: 'Event Management',
            icon: <FiUsers className="text-4xl" />,
            desc: 'Corporate and private curation with a modern creative edge.',
            features: ['Brand Activations', 'Private VIP Curation', 'Creative Direction', 'Talent Booking'],
            modalData: {
                heading: 'Event Management',
                description: 'We curate corporate and private events with a luxury creative approach, delivering unforgettable experiences through modern design, talent, and flawless execution.',
                details: [
                    {
                        title: 'Brand Activations',
                        text: 'Innovative event concepts that elevate brands through immersive audience engagement and high-impact experiences.'
                    },
                    {
                        title: 'Private VIP Curation',
                        text: 'Exclusive private events designed with luxury hospitality, elite access, and premium guest experiences.'
                    },
                    {
                        title: 'Creative Direction',
                        text: 'Complete artistic and visual direction, ensuring every event feels unique, modern, and memorable.'
                    },
                    {
                        title: 'Talent Booking',
                        text: 'Access to top performers, DJs, hosts, and artists with seamless booking and management support.'
                    }
                ]
            }
        }
    ];

    const openModal = (idx) => {
        setSelectedService(services[idx]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-lightGray relative"
        >
            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">WHAT WE <span className="text-primary italic">BRING</span></h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                        A comprehensive suite of services designed for the modern music ecosystem. We handle the business so you can celebrate the culture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-8 font-medium leading-relaxed">{service.desc}</p>

                            <div className="space-y-4 mb-10 flex-grow">
                                {service.features.map((feat, i) => (
                                    <div key={i} className="flex items-center text-xs md:text-sm font-bold text-accent/70 uppercase tracking-widest">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openModal(idx)}
                                className="w-full py-4 md:py-5 rounded-xl font-black transition-all uppercase tracking-widest text-[10px] md:text-sm flex items-center justify-center space-x-2 md:space-x-3 shadow-xl bg-accent text-white hover:bg-primary hover:scale-[1.02]"
                            >
                                <img src={logo} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain brightness-0 invert" />
                                <span>Inquire Now</span>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all z-10"
                            >
                                <span className="text-2xl font-light">✕</span>
                            </button>

                            <div className="flex-grow overflow-y-auto p-8 md:p-16">
                                <div className="max-w-3xl">
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            {selectedService.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">{selectedService.modalData.heading}</h2>
                                    </div>

                                    <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                                        {selectedService.modalData.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {selectedService.modalData.details.map((item, i) => (
                                            <div key={i} className="group p-8 bg-lightGray rounded-3xl hover:bg-primary/5 transition-all">
                                                <h4 className="text-xl font-black mb-3 text-accent group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-gray-600 font-medium leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:px-16 md:pb-12 bg-gray-50 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 space-y-4 md:space-y-0">
                                <div className="flex items-center space-x-3">
                                    <img src={logo} alt="LVRN" className="w-8 h-8 object-contain" />
                                    <span className="text-sm font-black text-accent tracking-widest uppercase">LVRN EXPERIENCE</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedService(null)}
                                    className="px-10 py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-accent transition-all"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Why Choose Us */}
            <section className="py-24 bg-accent text-white overflow-hidden relative">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">YOUTH-CENTRIC<br /><span className="text-primary italic">CULTURE DRIVEN</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We understand the zeitgeist. Our edge comes from being on the ground, witnessing the shifts in music and events as they happen.
                        </p>
                        <div className="grid grid-cols-1 gap-8">
                            <div>
                                <h4 className="text-3xl font-black text-primary mb-2">100%</h4>
                                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Authenticity</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative">
                        {/* Glow effect background */}
                        <motion.div
                            className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src={logo}
                            alt="LVRN Logo"
                            className="w-80 h-auto md:w-[40rem] object-contain relative z-10 filter drop-shadow-[0_0_20px_rgba(225,6,0,0.3)]"
                            animate={{
                                y: [0, -25, 0],
                                scale: [1, 1.02, 0.98, 1.02, 1],
                                filter: [
                                    "drop-shadow(0 0 20px rgba(225,6,0,0.3))",
                                    "drop-shadow(0 0 40px rgba(225,6,0,0.5))",
                                    "drop-shadow(0 0 20px rgba(225,6,0,0.3))"
                                ]
                            }}
                            transition={{
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            whileHover={{
                                scale: 1.1,
                                filter: "drop-shadow(0 0-50px rgba(225, 6, 0, 0.8)) brightness(1.2)",
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
