import { motion } from 'framer-motion';
import { FiMusic, FiCalendar, FiUsers } from 'react-icons/fi';
import logo from '../assets/logo-transparent.png';


const Services = () => {
    const services = [
        {
            title: 'Artist Management',
            icon: <FiMusic className="text-4xl" />,
            desc: 'We provide full-scale career development from branding to distribution.',
            longDesc: 'Our dedicated team works closely with artists to build their brand identity, manage tours, and secure international recording deals. We focus on long-term sustainability and creative freedom.',
            features: ['Global Branding', 'Tour Management', 'Music Distribution', 'Press & PR']
        },
        {
            title: 'Event Organizing',
            icon: <FiCalendar className="text-4xl" />,
            desc: 'Seamless execution of festivals, concerts, and private experiences.',
            longDesc: 'From stage design to ticketing, we handle everything. Our events are known for high production value, immersive atmosphere, and unforgettable energy.',
            features: ['Concert Production', 'Ticketing Solutions', 'Stage & Sound Design', 'Logistics Management']
        },
        {
            title: 'Event Management',
            icon: <FiUsers className="text-4xl" />,
            desc: 'Corporate and private curation with a modern creative edge.',
            longDesc: 'We bring the LVRN vibe to corporate events and private parties. We ensure that every detail reflects the brand vision and resonates with the audience.',
            features: ['Brand Activations', 'Private VIP Curation', 'Creative Direction', 'Talent Booking']
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-lightGray"
        >
            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">WHAT WE <span className="text-primary italic">BRING</span></h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
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
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-base md:text-lg text-gray-600 mb-8 font-medium leading-relaxed">{service.desc}</p>

                            <div className="space-y-4 mb-10">
                                {service.features.map((feat, i) => (
                                    <div key={i} className="flex items-center text-xs md:text-base font-bold text-accent/70 uppercase tracking-widest">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-5 bg-accent text-white rounded-xl font-bold hover:bg-primary transition-all uppercase tracking-widest text-sm"
                            >
                                Inquire Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

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
                            className="w-64 h-auto md:w-96 object-contain relative z-10"
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            whileHover={{
                                scale: 1.15,
                                rotate: 0,
                                filter: "drop-shadow(0 0 20px rgba(255, 19, 92, 0.5))"
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
