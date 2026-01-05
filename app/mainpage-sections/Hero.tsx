import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative h-[800px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
                    alt="Luxury Home Exterior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row justify-between items-center w-full gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white max-w-2xl text-center lg:text-left pt-20 lg:pt-0"
                >
                    <div className="inline-block bg-accent/20 border border-accent/50 text-accent font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider backdrop-blur-sm">
                        Licensed & Insured Painting
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg text-[#f5f5f5]">
                        Kansas City's Premier<br />Painting Experts
                    </h1>
                    <p className="text-xl opacity-95 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                        Reviving homes and restoring beauty with premium residential and commercial painting services across the metro.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {['Licensed', 'Bonded', 'Insured', '5-Star Rated'].map((badge) => (
                            <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                                <CheckCircle2 className="text-accent w-5 h-5" />
                                <span className="font-semibold text-sm uppercase tracking-wide">{badge}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Hero Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-[420px] relative border-t-4 border-accent"
                >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-t-lg font-bold text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
                        Get Your Free Estimate
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2 text-text-dark">Ready to Transform?</h3>
                    <p className="text-center text-gray-500 mb-6 text-sm">Fill out the form below for a fast response.</p>
                    <form className="flex flex-col gap-4">
                        <div>
                            <input type="text" placeholder="Full Name" required className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address" required className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone Number" required className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                        </div>
                        <div>
                            <select className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-600 cursor-pointer">
                                <option>Service Needed...</option>
                                <option>Exterior House Painting</option>
                                <option>Residential Painting</option>
                                <option>Commercial Painting</option>
                                <option>Deck Cleaning & Staining</option>
                                <option>Deck Waterproofing</option>
                                <option>Wood Rot Repair</option>
                                <option>Fence Staining</option>
                                <option>Hand Painting</option>
                                <option>Staining Contractors</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-accent text-white font-extrabold py-4 rounded-lg hover:bg-accent-hover transition-all uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 mt-2">
                            Request Free Quote
                        </button>
                    </form>
                    <p className="text-center text-gray-400 text-xs mt-4">No obligation. 100% Privacy Guaranteed.</p>
                </motion.div>
            </div>
        </section>
    );
}
