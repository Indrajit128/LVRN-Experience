import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-lightGray"
        >
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 italic uppercase">GET IN <span className="text-primary pt-2">TOUCH</span></h1>
                        <p className="text-xl text-gray-600 mb-12 font-medium">
                            Have a project in mind? Want to book an artist or collaborate on an event? Our team is ready to bring the energy.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl shadow-lg border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiMail />
                                </div>
                                <div className="ml-6">
                                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                                    <p className="text-xl font-bold">hello@lvrnexperience.com</p>
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
                                    <p className="text-xl font-bold">Downtown Creative Hub, NY</p>
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                                <select className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold appearance-none">
                                    <option>Artist Management</option>
                                    <option>Event Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                                <textarea rows="5" placeholder="Tell us about your vision..." className="w-full bg-lightGray border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-bold resize-none"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-black transition-colors uppercase tracking-[0.2em]"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-accent relative overflow-hidden grayscale opacity-50 contrast-125">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-9xl font-black rotate-12">LOCATIONS</span>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
