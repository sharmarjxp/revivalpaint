import { motion } from 'framer-motion';
import { Briefcase, Brush, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
    const benefits = [
        { title: "Experience", desc: "20 years of delivering quality services.", icon: <Briefcase size={32} /> },
        { title: "24/7 Availability", desc: "Round-the-clock service, 365 days a year.", icon: <CheckCircle2 size={32} /> },
        { title: "Licensed & Insured", desc: "Fully bonded for your peace of mind.", icon: <CheckCircle2 size={32} /> },
        { title: "Free Estimates", desc: "No obligation quotes on all services.", icon: <Brush size={32} /> },
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 text-text-dark">Why Choose Us?</h2>
                    <p className="text-gray-600">Setting the standard for home services in Millcreek and surrounding areas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                        >
                            <div className="text-accent mb-4 bg-accent/10 p-4 rounded-full">{b.icon}</div>
                            <h4 className="font-bold text-xl mb-2">{b.title}</h4>
                            <p className="text-gray-500 text-sm">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
