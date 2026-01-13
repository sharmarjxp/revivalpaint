import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from './Animations';

export function RecentWork() {
    const projects = [
        "/images/hero.png",
        "/images/handyman.png",
        "/images/painting.png",
        "/images/carpentry.png",
        "/images/drywall.png",
        "/images/patio.png",
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-text-dark">Our Recent Work</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">See how we've transformed homes and commercial properties across Millcreek.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-72 rounded-xl overflow-hidden group relative shadow-md cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Project ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white text-text-dark px-6 py-2 rounded-full font-bold uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    View Project
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#gallery" className="border-2 border-text-dark text-text-dark px-10 py-3 rounded-lg font-bold hover:bg-text-dark hover:text-white transition-all inline-block uppercase tracking-wide">
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}
