import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp } from './Animations';

export function PromiseSection() {
    return (
        <section className="py-24 relative bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
                    alt="Painting Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-start gap-10">
                <motion.div {...fadeInUp} className="max-w-2xl">
                    <h2 className="text-accent font-bold mb-4 uppercase tracking-widest">Our Guarantee</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">The Revival Painting<br />Promise</h3>

                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {[
                            { title: 'Detailed Prep', desc: 'We never skip the most important step.' },
                            { title: 'Premium Materials', desc: 'Only the best paints for lasting results.' },
                            { title: 'On-Time Completion', desc: 'We respect your schedule and time.' },
                            { title: 'Clean Job Site', desc: 'We leave your home spotless daily.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="bg-accent rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 size={16} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="#contact" className="bg-white text-text-dark px-8 py-4 rounded-lg font-bold hover:bg-accent hover:text-white transition-colors inline-block uppercase tracking-wide">
                        Experience the Difference
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
