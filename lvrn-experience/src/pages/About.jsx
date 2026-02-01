import { motion } from 'framer-motion';

const About = () => {
    const milestones = [
        { year: '2025', title: 'The Genesis', desc: 'LVRN Experience founded to bridge the gap between music and youth culture.' },
        { year: '2025 Oct', title: 'First Mega Event', desc: 'Sold out launch event in the heart of the city.' },
        { year: '2026', title: 'Global expansion', desc: 'Starting management for artists across continents.' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black mb-10 tracking-tighter"
                    >
                        OUR <span className="text-primary italic">STORY</span>
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                            LVRN (Live Right Now) Experience is more than just a brand; it's a movement. Born from the energy of nightlife and the passion for creative expression, we're here to redefine what music and events mean to the youth.
                        </p>
                        <div className="bg-primary/10 p-10 md:p-12 rounded-[2.5rem] border border-primary/20">
                            <h3 className="text-2xl font-bold mb-4 text-primary italic">Our Mission</h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                                To create immersive experiences that celebrate authenticity, diversity, and the raw energy of live music. We empower artists and connect fans in ways never seen before.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter">THE JOURNEY</h2>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {milestones.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-32 h-32 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl ring-8 ring-primary/10">
                                    {item.year}
                                </div>
                                <div className={`p-8 bg-lightGray rounded-[1.5rem] flex-grow border-l-4 border-primary ${idx % 2 !== 0 ? 'text-right md:border-l-0 md:border-r-4' : ''}`}>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-lg text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
