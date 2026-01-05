import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from './Animations';

export function Transform() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="flex-1 text-center lg:text-left"
                >
                    <div className="inline-block text-accent font-bold mb-2 uppercase tracking-widest text-sm">Why Choose Us</div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-text-dark leading-tight">Let Us Transform<br />Your Space</h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Revival Painting, LLC brings 10 years of dedication to every project. We understand that a fresh coat of paint does more than just look good—it protects your investment and elevates your lifestyle.
                    </p>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                        From meticulous surface preparation to the final brushstroke, our team ensures a flawless finish that lasts. We treat your home with the same care and respect as our own.
                    </p>
                    <Link href="#about" className="bg-text-dark text-white px-10 py-4 rounded-lg font-bold hover:bg-black transition-all inline-block uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Read Our Story
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <div className="h-[500px] rounded-2xl shadow-2xl w-full relative overflow-hidden border-8 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
                            alt="Interior Living Room Transformation"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 lg:right-6 bg-accent text-white p-6 rounded-xl shadow-xl hidden md:block">
                        <div className="text-4xl font-black mb-1">10+</div>
                        <div className="text-sm font-bold uppercase">Years Experience</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
