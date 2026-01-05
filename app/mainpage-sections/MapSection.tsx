import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function MapSection() {
    return (
        <section className="w-full h-[500px] relative bg-gray-200 overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198308.87707925562!2d-94.75702283995543!3d39.09158334863768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas%20City%2C%20MO!5e0!3m2!1sen!2sus!4v1709500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="outline-none"
            ></iframe>

            {/* 50-Mile Radius Service Circle Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-[450px] h-[450px] bg-accent/15 border-4 border-accent/30 rounded-full flex items-center justify-center relative"
                >
                    {/* Business Marker */}
                    <div className="z-10 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        <MapPin size={24} />
                    </div>

                    {/* Label Tag */}
                    <div className="absolute top-1/2 left-full ml-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl border border-accent/20 whitespace-nowrap">
                        <p className="font-extrabold text-[#111] leading-tight">50-Mile Service Area</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Serving Kansas City Metro</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
