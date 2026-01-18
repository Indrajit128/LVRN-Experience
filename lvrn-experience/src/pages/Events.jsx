import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const Events = () => {
    const [filter, setFilter] = useState('upcoming');

    const events = [
        {
            id: 1,
            name: 'Upcoming Winter Concert',
            date: 'Coming Soon',
            time: '',
            location: 'Kora Kendra Ground No. 4, Borivali (W)',
            type: 'upcoming',
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            name: 'Holi Bash',
            date: 'Coming Soon',
            time: '',
            location: 'To be announced',
            type: 'upcoming',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            name: 'Gujarati Music Event',
            date: 'Coming Soon',
            time: '',
            location: 'To be announced',
            type: 'upcoming',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 4,
            name: 'Kailash Kher Live Concert',
            date: '21st Dec, 2025',
            time: '7:00 PM',
            location: 'Infinity Mall, Malad West, Mumbai',
            type: 'past',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const filteredEvents = events.filter(e => e.type === filter);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 italic">THE <span className="text-primary">LINEUP</span></h1>

                    <div className="flex space-x-6 border-b border-white/10 mb-12">
                        {['upcoming', 'past'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`pb-4 text-xl font-bold uppercase tracking-widest transition-all relative ${filter === type ? 'text-primary' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {type}
                                {filter === type && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => (
                                <motion.div
                                    key={event.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors border border-white/10"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-primary text-white font-black px-4 py-2 rounded-xl text-sm italic">
                                            {event.type.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{event.name}</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="flex items-center text-gray-400 font-medium">
                                                <FiCalendar className="mr-3 text-primary" /> {event.date}
                                            </div>
                                            <div className="flex items-center text-gray-400 font-medium">
                                                <FiMapPin className="mr-3 text-primary" /> {event.location}
                                            </div>
                                            <div className="flex items-center text-gray-400 font-medium col-span-2">
                                                <FiClock className="mr-3 text-primary" /> {event.type === 'upcoming' ? 'Coming Soon' : event.time}
                                            </div>
                                        </div>
                                        <button className="w-full py-4 bg-primary text-white rounded-2xl font-black hover:bg-red-700 transition-colors uppercase tracking-widest">
                                            {event.type === 'upcoming' ? 'Get Tickets' : 'Event Recap'}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Events;
