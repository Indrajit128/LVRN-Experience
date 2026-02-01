import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import TrueFocus from './TrueFocus';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-accent">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="mb-8 flex justify-center">
                        <TrueFocus
                            sentence="CREATING ICONIC MOMENTS"
                            manualMode={false}
                            blurAmount={10}
                            borderColor="#E10600"
                            glowColor="rgba(225, 6, 0, 0.6)"
                            animationDuration={0.3}
                            pauseBetweenAnimations={0.5}
                        />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-medium"
                >
                    The pulse of youth culture. We manage artists, plan epic experiences, and bring the heat to every show.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                >
                    <Link
                        to="/events"
                        className="group relative bg-primary text-white px-10 py-4 rounded-full font-black text-lg overflow-hidden flex items-center shadow-lg hover:shadow-primary/50 transition-all"
                    >
                        <span className="relative z-10 flex items-center">
                            EXPLORE EVENTS <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        />
                    </Link>
                    <Link
                        to="/contact"
                        className="px-10 py-4 rounded-full font-black text-lg text-white border-2 border-white/20 hover:border-primary hover:text-primary transition-all hover:shadow-lg hover:shadow-white/10"
                    >
                        BOOK AN ARTIST
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
            >
                <span className="text-xs font-bold tracking-widest uppercase mb-2">Scroll</span>
                <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
