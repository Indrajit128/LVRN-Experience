import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Home = () => {
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
                        <h2 className="text-4xl md:text-6xl font-black mb-4">WE <span className="text-primary">DEFINE</span> EXPERIENCE</h2>
                        <div className="w-20 h-2 bg-primary mx-auto" />
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
                                className="p-10 bg-lightGray rounded-2xl text-left border-l-4 border-transparent hover:border-primary hover:shadow-2xl transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <div className="w-10 h-1 bg-primary/20" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
