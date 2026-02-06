import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import juggySandhu from '../assets/juggy_sandhu_new.jpg';
import rangoverPoster from '../assets/Rangover poster.jpeg';

const Events = () => {
    const [filter, setFilter] = useState('upcoming');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            id: 1,
            name: 'Rangover',
            date: '4th March, 2026',
            time: '10:00 AM to 4:00 PM',
            location: 'Bangur Sports Complex, Goregaon West, Mumbai',
            type: 'upcoming',
            image: rangoverPoster,
            details: {
                fullTitle: 'RANGOVER',
                fullVenue: {
                    name: 'Bangur Sports Complex (Bramha Mahesh Ground)',
                    area: 'Bangur Nagar, Goregaon West',
                    city: 'Mumbai, Maharashtra'
                },
                artists: [
                    {
                        name: 'Juggy Sandhu',
                        role: 'Live Performance Experience'
                    },
                    {
                        name: 'DJ Dastan',
                        role: 'High-Energy Bollywood & EDM Set'
                    },
                    {
                        name: 'Shumayl Malik',
                        role: 'Live Performance Experience'
                    },
                    {
                        name: 'DJ Mannat',
                        role: 'High-Energy Bollywood & EDM Set'
                    },
                    {
                        name: 'DJ Sunny',
                        role: 'High-Energy Bollywood & EDM Set'
                    }
                ],
                experience: [
                    'Colors & Energy',
                    'Live Music Performances',
                    'DJ Beats',
                    'Festive Vibes',
                    'Food & Entertainment'
                ]
            }
        },
        {
            id: 2,
            name: 'Gujarati Music Event',
            date: 'Coming Soon',
            time: '',
            location: 'To be announced',
            type: 'upcoming',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
            details: {
                fullTitle: 'Gujarati Music Event',
                comingSoon: true
            }
        },
        {
            id: 3,
            name: 'Upcoming Winter Concert',
            date: 'Coming Soon',
            time: '',
            location: 'Kora Kendra Ground No. 4, Borivali (W)',
            type: 'upcoming',
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
            details: {
                fullTitle: 'Upcoming Winter Concert',
                comingSoon: true
            }
        },
        {
            id: 4,
            name: 'Kailash Kher Live Concert',
            date: '21st Dec, 2025',
            time: '7:00 PM',
            location: 'Infinity Mall, Malad West, Mumbai',
            type: 'past',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
            details: {
                fullTitle: 'Kailash Kher Live Concert',
                fullVenue: {
                    name: 'Infinity Mall',
                    area: 'Malad West, Mumbai',
                    city: ''
                },
                recap: 'Experience an unforgettable evening of soulful music and powerful live performance as Kailash Kher takes the stage with his signature energy and timeless hits. A night filled with passion, devotion, and electrifying vibes — bringing together music lovers for a magical winter concert in Mumbai.',
                highlights: [
                    'Live Performance by Kailash Kher',
                    'Iconic Bollywood & Sufi Hits',
                    'Premium Concert Atmosphere',
                    'Unmatched Crowd Energy',
                    'A Night to Remember'
                ]
            }
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
                    <h1 className="text-4xl md:text-7xl font-black mb-8 italic">THE <span className="text-primary">LINEUP</span></h1>

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
                                        <img src={event.image} alt={event.name} className="w-full h-full object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-primary text-white font-black px-4 py-2 rounded-xl text-sm italic">
                                            {event.type.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors">{event.name}</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="flex items-center text-gray-400 font-medium">
                                                <FiCalendar className="mr-3 text-primary" /> {event.date}
                                            </div>
                                            <div className="flex items-center text-gray-400 font-medium">
                                                <FiMapPin className="mr-3 text-primary" /> {event.location}
                                            </div>
                                            <div className="flex items-center text-gray-400 font-medium col-span-2">
                                                <FiClock className="mr-3 text-primary" /> {event.time || 'Coming Soon'}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => event.details && setSelectedEvent(event)}
                                            className="w-full py-4 bg-primary text-white rounded-2xl font-black hover:bg-red-700 transition-colors uppercase tracking-widest"
                                        >
                                            {event.type === 'upcoming' ? 'Know More' : 'Event Recap'}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Event Detail Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-accent text-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all z-10"
                            >
                                <span className="text-2xl font-light">✕</span>
                            </button>

                            <div className="flex-grow overflow-y-auto p-8 md:p-16">
                                <div className="max-w-3xl">
                                    {/* Event Title */}
                                    <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight uppercase tracking-tight">
                                        {selectedEvent.details.fullTitle}
                                    </h2>

                                    {selectedEvent.details.comingSoon ? (
                                        /* Coming Soon Content */
                                        <div className="text-center py-16">
                                            <div className="mb-8">
                                                <span className="text-6xl md:text-8xl">🎵</span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black mb-6 text-primary">Coming Soon</h3>
                                            <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
                                                We're working on bringing you an incredible experience. Stay tuned for updates on dates, venue, and artist lineup!
                                            </p>
                                        </div>
                                    ) : selectedEvent.details.recap ? (
                                        /* Event Recap Content for Past Events */
                                        <>
                                            {/* Venue Details */}
                                            <div className="mb-12">
                                                <div className="flex items-center mb-4">
                                                    <FiMapPin className="text-primary text-2xl mr-3" />
                                                    <h3 className="text-2xl font-black uppercase tracking-wide">Venue Details</h3>
                                                </div>
                                                <div className="pl-11 text-gray-300 font-medium leading-relaxed">
                                                    <p className="text-xl mb-1">{selectedEvent.details.fullVenue.name}</p>
                                                    {selectedEvent.details.fullVenue.area && <p className="text-lg">{selectedEvent.details.fullVenue.area}</p>}
                                                    {selectedEvent.details.fullVenue.city && <p className="text-lg">{selectedEvent.details.fullVenue.city}</p>}
                                                </div>
                                            </div>

                                            {/* Event Timing */}
                                            <div className="mb-12">
                                                <div className="flex items-center mb-4">
                                                    <FiClock className="text-primary text-2xl mr-3" />
                                                    <h3 className="text-2xl font-black uppercase tracking-wide">Event Timing</h3>
                                                </div>
                                                <div className="pl-11">
                                                    <p className="text-xl text-gray-300 font-bold">Time: {selectedEvent.time} Onwards</p>
                                                </div>
                                            </div>

                                            {/* Event Recap */}
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">
                                                    Event Recap
                                                </h3>
                                                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                                                    {selectedEvent.details.recap}
                                                </p>
                                            </div>

                                            {/* Event Highlights */}
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">
                                                    Event Highlights
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {selectedEvent.details.highlights.map((item, i) => (
                                                        <div key={i} className="flex items-center text-gray-300 font-bold">
                                                            <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Venue Details */}
                                            <div className="mb-12">
                                                <div className="flex items-center mb-4">
                                                    <FiMapPin className="text-primary text-2xl mr-3" />
                                                    <h3 className="text-2xl font-black uppercase tracking-wide">Venue Details</h3>
                                                </div>
                                                <div className="pl-11 text-gray-300 font-medium leading-relaxed">
                                                    <p className="text-xl mb-1">{selectedEvent.details.fullVenue.name}</p>
                                                    <p className="text-lg">{selectedEvent.details.fullVenue.area}</p>
                                                    <p className="text-lg">{selectedEvent.details.fullVenue.city}</p>
                                                </div>
                                            </div>

                                            {/* Event Timing */}
                                            <div className="mb-12">
                                                <div className="flex items-center mb-4">
                                                    <FiClock className="text-primary text-2xl mr-3" />
                                                    <h3 className="text-2xl font-black uppercase tracking-wide">Event Timing</h3>
                                                </div>
                                                <div className="pl-11">
                                                    <p className="text-xl text-gray-300 font-bold">Time: {selectedEvent.time}</p>
                                                </div>
                                            </div>

                                            {/* Featured Artists */}
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">
                                                    Featured Artists
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {selectedEvent.details.artists.map((artist, i) => (
                                                        <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                            <p className="text-xl font-black mb-2 text-primary">{artist.name}</p>
                                                            <p className="text-gray-400 font-medium">{artist.role}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>

                                            {/* Event Experience */}
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">
                                                    Event Experience
                                                </h3>
                                                <p className="text-lg text-gray-300 font-medium mb-6">
                                                    Get ready for an unforgettable Holi celebration filled with:
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {selectedEvent.details.experience.map((item, i) => (
                                                        <div key={i} className="flex items-center text-gray-300 font-bold">
                                                            <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 md:px-16 md:pb-12 bg-white/5 flex items-center justify-center border-t border-white/10">
                                <span className="text-sm font-black text-white tracking-widest uppercase">LVRN EXPERIENCE</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Events;
