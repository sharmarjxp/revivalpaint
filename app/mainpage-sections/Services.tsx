import { motion } from 'framer-motion';
import { Home as HomeIcon, Briefcase, Brush, Hammer, CheckCircle2 } from 'lucide-react';
import { PaintRollerIcon } from './Icons';
import { fadeInUp, staggerContainer } from './Animations';

export function Services() {
    const services = [
        { icon: <HomeIcon size={40} />, title: 'Landscape Maintenance', desc: 'Professional lawn care, trimming, and landscape upkeep for beautiful outdoor spaces.' },
        { icon: <Hammer size={40} />, title: 'Handyman Services', desc: 'Expert repairs and maintenance for all your residential and commercial needs.' },
        { icon: <Brush size={40} />, title: 'Exterior House Painting', desc: 'Premium exterior painting services to protect and beautify your property.' },
        { icon: <PaintRollerIcon className="w-10 h-10" />, title: 'Carpentry', desc: 'Custom carpentry work including decks, fences, and structural repairs.' },
        { icon: <CheckCircle2 size={40} />, title: 'Drywall Services', desc: 'Professional drywall installation, repair, and finishing.' },
        { icon: <Briefcase size={40} />, title: 'Patio Installation', desc: 'Beautiful patio designs and construction for your outdoor living space.' },
        { icon: <Hammer size={40} />, title: 'Commercial Services', desc: 'Comprehensive maintenance solutions for commercial properties.' },
        { icon: <HomeIcon size={40} />, title: '24/7 Emergency Service', desc: 'Round-the-clock availability for urgent repairs and maintenance needs.' },
    ];

    return (
        <section id="services" className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-text-dark">Our Home Services</h2>
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
