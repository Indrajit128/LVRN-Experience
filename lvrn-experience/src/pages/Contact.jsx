import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Artist Management',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [mapUrl, setMapUrl] = useState('');

    useEffect(() => {
        const fetchMap = async () => {
            const address = "B/702, Ng ocean pearl, Shivsena Galli, Near unique gardens, Kanakia road, Mira road east, Thane - 401107";
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
                const data = await response.json();
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    const bbox = `${parseFloat(lon) - 0.01},${parseFloat(lat) - 0.01},${parseFloat(lon) + 0.01},${parseFloat(lat) + 0.01}`;
                    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
                    setMapUrl(url);
                }
            } catch (error) {
                console.error('Error fetching map:', error);
            }
        };
        fetchMap();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setSubmitMessage('Please fill in all required fields.');
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setSubmitMessage('Thank you for your message! We will get back to you soon.');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: 'Artist Management',
                message: ''
            });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-lightGray"
        >
            <section className="py-10 md:py-20 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-10 italic uppercase">GET IN <span className="text-primary pt-2">TOUCH</span></h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 font-medium">
                            Have a project in mind? Want to book an artist or collaborate on an event? Our team is ready to bring the energy.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-lg border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiMail />
                                </div>
                                <div className="ml-6">
                                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                                    <p className="text-xl font-bold">info@lvrnexperience.com</p>
                                </div>
                            </div>

                            <div className="flex items-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-lg border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiInstagram />
                                </div>
                                <div className="ml-6">
                                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Follow Us</p>
                                    <p className="text-xl font-bold">@lvrn.experience</p>
                                </div>
                            </div>

                            <div className="flex items-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-lg border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiMapPin />
                                </div>
                                <div className="ml-6">
                                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Visit Us</p>
                                    <p className="text-xl font-bold">B/702, Ng ocean pearl, Shivsena Galli, Near unique gardens, Kanakia road, Mira road east, Thane - 401107</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold appearance-none">
                                    <option>Artist Management</option>
                                    <option>Event Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your vision..." className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold resize-none"></textarea>
                            </div>

                            {submitMessage && (
                                <p className={`text-center font-bold ${submitMessage.includes('Please') ? 'text-red-500' : 'text-green-500'}`}>
                                    {submitMessage}
                                </p>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-black transition-colors uppercase tracking-[0.2em]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map */}
            <section className="h-[400px] w-full bg-gray-200">
                {mapUrl ? (
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title="Location Map"
                    ></iframe>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <span className="text-gray-500">Loading map...</span>
                    </div>
                )}
            </section>
        </motion.div>
    );
};

export default Contact;
