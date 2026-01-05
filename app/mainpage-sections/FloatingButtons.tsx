import Link from 'next/link';
import { ArrowUp, Phone } from 'lucide-react';

export function FloatingButtons() {
    return (
        <>
            <Link href="#" className="fixed bottom-6 left-6 w-12 h-12 bg-white text-text-dark flex items-center justify-center rounded-full shadow-2xl hover:-translate-y-1 transition-transform z-50 border border-gray-100 group">
                <ArrowUp size={24} className="group-hover:text-accent transition-colors" />
            </Link>
            <Link href="tel:8164197453" className="fixed bottom-6 right-6 bg-accent text-white pl-5 pr-6 py-3.5 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform z-50 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-white/20 p-1.5 rounded-full">
                    <Phone size={18} fill="currentColor" />
                </div>
                Call Now
            </Link>
        </>
    );
}
