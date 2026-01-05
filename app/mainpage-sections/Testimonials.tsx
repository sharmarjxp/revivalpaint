import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from './Animations';

export function Testimonials() {
    const reviews = [
        { text: "The team was fantastic. They arrived on time, worked hard, and the house looks brand new. I couldn't be happier.", name: "James Anderson", role: "Homeowner" },
        { text: "We hired specialized painters for our commercial building, and the difference is night and day. Professional from start to finish.", name: "Sarah Jenkins", role: "Business Owner" },
        { text: "Incredible attention to detail on our deck staining. Visual appeal extended our outdoor living season significantly.", name: "Mike & Lisa T.", role: "Happy Clients" }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-text-dark">Client Testimonials</h2>
                    <div className="flex justify-center gap-1 text-accent text-2xl mb-4">
                        {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                    </div>
                    <p className="text-gray-500 font-medium">Rated 5/5 by our verified customers</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-secondary p-10 rounded-2xl relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-8 text-6xl text-accent/20 font-serif leading-none">“</div>

                            <p className="text-gray-600 mb-8 text-lg relative z-10 mt-4 leading-relaxed">"{r.text}"</p>
                            <div className="mt-auto flex items-center justify-center gap-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden relative">
                                    <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt={r.name} fill className="object-cover" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-text-dark text-sm">{r.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase">{r.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
