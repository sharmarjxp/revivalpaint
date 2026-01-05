import { motion } from 'framer-motion';
import { Home as HomeIcon, Briefcase, Brush, Hammer, CheckCircle2 } from 'lucide-react';
import { PaintRollerIcon } from './Icons';
import { fadeInUp, staggerContainer } from './Animations';

export function Services() {
    const services = [
        { icon: <HomeIcon size={40} />, title: 'Residential Painter', desc: 'Expert interior and exterior house painting for your home.' },
        { icon: <Briefcase size={40} />, title: 'Commercial Painting', desc: 'Professional contractors for large-scale commercial projects.' },
        { icon: <Brush size={40} />, title: 'Exterior House Painting', desc: 'Full exterior protection and beautification services.' },
        { icon: <Hammer size={40} />, title: 'Wood Rot Repair', desc: 'Complete restoration and repair for damaged wood surfaces.' },
        { icon: <PaintRollerIcon className="w-10 h-10" />, title: 'Deck & Fence Staining', desc: 'Premium staining and waterproofing for outdoor structures.' },
        { icon: <CheckCircle2 size={40} />, title: 'Staining Contractors', desc: 'Specialized staining for decks, fences, and more.' },
        { icon: <Brush size={40} />, title: 'Hand Painting', desc: 'Precise, detailed hand-painted finishes for trim and detail.' },
        { icon: <HomeIcon size={40} />, title: 'Deck Waterproofing', desc: 'Protect your outdoor living spaces from the elements.' },
    ];

    return (
        <section id="services" className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-text-dark">Our Painting Services</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-500 font-medium uppercase text-sm tracking-widest">Comprehensive solutions for every need</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-12"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="flex flex-col items-center group cursor-pointer w-full sm:w-[280px]"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-xl group-hover:rotate-3 group-hover:-translate-y-2 text-text-dark shadow-sm">
                                {s.icon}
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-text-dark group-hover:text-accent transition-colors">{s.title}</h4>
                            <p className="text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
                            <span className="text-sm text-accent font-bold uppercase tracking-wider group-hover:underline">Learn More</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
