import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo 4.jpeg';

const Footer = () => {
    return (
        <footer className="bg-accent text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="LVRN Experience" className="h-10 w-auto rounded" />
                            <span className="text-2xl font-black text-white">LVRN <span className="text-primary">EXPERIENCE</span></span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6 font-medium">
                            Creating unforgettable music and event experiences for the youth culture. From artist management to live shows, we are the pulse of nightlife.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/lvrn.experience?igsh=bDBycXJidzAzZTlr" target="_blank" rel="noreferrer" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white hover:scale-110">
                                <FaInstagram size={20} />
                            </a>
                            {/* Other socials can remain as placeholders or follow the same pattern */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 underline decoration-primary decoration-2 underline-offset-8">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 underline decoration-primary decoration-2 underline-offset-8">Stay Updated</h4>
                        <p className="text-gray-400 mb-4 font-medium">Subscribe for exclusive updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/10 border-none px-4 py-2 rounded-l-md focus:ring-1 focus:ring-primary w-full outline-none text-white font-bold placeholder-gray-500"
                            />
                            <button className="bg-primary px-4 py-2 rounded-r-md font-bold hover:bg-red-700 transition-colors text-white">Join</button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
                    <p>© 2026 LVRN Experience (Est. Oct 2025). All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Business</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
