import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Home as HomeIcon, Brush, Briefcase, Users } from 'lucide-react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate(val) {
                node.textContent = Math.round(val).toLocaleString() + suffix;
            },
        });

        return () => controls.stop();
    }, [value, suffix, isInView]);

    return <span ref={nodeRef}>0{suffix}</span>;
}

export function Stats() {
    const stats = [
        { icon: <HomeIcon size={32} />, val: 6000, suffix: '+', label: 'Jobs Completed' },
        { icon: <Users size={32} />, val: 764, suffix: '+', label: 'Happy Customers' },
        { icon: <Brush size={32} />, val: 186, suffix: 'k', label: 'Sq. Feet Painted' },
        { icon: <Briefcase size={32} />, val: 10, suffix: '', label: 'Years in Service' },
    ];

    return (
        <section className="py-20 bg-secondary relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-accent text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                                {s.icon}
                            </div>
                            <h3 className="text-5xl font-black text-text-dark mb-2">
                                <Counter value={s.val} suffix={s.suffix} />
                            </h3>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
