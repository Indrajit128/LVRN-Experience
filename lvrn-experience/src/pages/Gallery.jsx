import { motion } from 'framer-motion';

const Gallery = () => {
    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800', size: 'large', event: 'Summer Bash' },
        { id: 2, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', size: 'small', event: 'Midnight Sessions' },
        { id: 3, url: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800', size: 'medium', event: 'Summer Bash' },
        { id: 4, url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', size: 'large', event: 'Neon Nights' },
        { id: 5, url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800', size: 'small', event: 'Midnight Sessions' },
        { id: 6, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', size: 'medium', event: 'Neon Nights' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-white"
        >
            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">THE <span className="text-primary italic">VAULT</span></h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Capturing the raw energy, the sweat, and the magic. Relive the best moments of LVRN events.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((photo, idx) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group cursor-pointer overflow-hidden rounded-3xl"
                        >
                            <img
                                src={photo.url}
                                alt={photo.event}
                                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-primary font-black uppercase text-xs tracking-[0.2em] mb-2">LVRN ARCHIVE</span>
                                <h3 className="text-2xl font-bold text-white">{photo.event}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Instant Immersive CTA */}
            <section className="py-32 bg-accent flex items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                >
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-4 group-hover:text-primary transition-colors">WANT TO BE IN THE NEXT ONE?</h2>
                    <div className="h-1 w-20 bg-primary mx-auto group-hover:w-full transition-all duration-500" />
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Gallery;
