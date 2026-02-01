import { motion } from 'framer-motion';
import photo1 from '../assets/event_photo_1.jpg';
import photo2 from '../assets/event_photo_2.jpg';
import photo3 from '../assets/event_photo_3.jpg';
import g_photo1 from '../assets/gallery_photo_1.jpg';
import g_photo4 from '../assets/gallery_photo_4.jpg';
import g_photo5 from '../assets/gallery_photo_5.jpg';

const Gallery = () => {
    const photos = [
        { id: 1, url: g_photo4, size: 'large', event: 'Artist Focus' },
        { id: 2, url: photo3, size: 'small', event: 'Deep Resonance' },
        { id: 3, url: photo1, size: 'medium', event: 'Arctic Rhythm' },
        { id: 4, url: g_photo5, size: 'small', event: 'Event Highlights' },
        { id: 5, url: photo2, size: 'medium', event: 'Cultural Spectrum' },
        { id: 6, url: g_photo1, size: 'large', event: 'Live Performance' },
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

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {photos.map((photo, idx) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group cursor-pointer overflow-hidden rounded-3xl break-inside-avoid mb-6"
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
