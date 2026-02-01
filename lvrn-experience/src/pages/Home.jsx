import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import holiCrowd from '../assets/holi_crowd.png';
import juggySandhu from '../assets/juggy_sandhu_live_new.jpg';
import djDastanPoster from '../assets/images (3).jpeg';

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
                                    HOLI <span className="text-white italic">BASH</span> <br />
                                    2K26
                                </h2>
                                <p className="text-lg md:text-xl text-gray-400 font-bold mb-10 max-w-lg leading-relaxed uppercase">
                                    The ultimate celebration of colors. Featuring heavyweights <span className="text-white underline decoration-primary underline-offset-8">Juggy Sandhu</span> & <span className="text-white underline decoration-primary underline-offset-8">DJ Dastan</span>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest shadow-xl">
                                        SECURE YOUR SPOT
                                    </button>
                                    <button className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all duration-300 uppercase tracking-widest">
                                        GET DETAILS
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="col-span-2 overflow-hidden rounded-[3rem] shadow-2xl group"
                            >
                                <img src={holiCrowd} alt="Holi Crowd" className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="overflow-hidden rounded-[2.5rem] shadow-2xl group border border-white/5 bg-accent"
                            >
                                <img
                                    src={juggySandhu}
                                    alt="Juggy Sandhu"
                                    className="w-full h-[200px] md:h-[280px] object-cover object-center group-hover:scale-105 transition-transform duration-700 contrast-[1.25] brightness-[1.1] saturate-[1.2]"
                                    style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                        WebkitBackdropFilter: 'blur(0px)' // Force GPU acceleration for clearer edges
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="overflow-hidden rounded-[2.5rem] shadow-2xl group border border-white/5"
                            >
                                <img
                                    src={djDastanPoster}
                                    alt="DJ Dastan"
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                        </div>
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
