import Link from 'next/link';
import { PaintRollerIcon } from './Icons';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm h-[80px] flex items-center border-b border-gray-100">
            <div className="container mx-auto px-6 flex justify-between items-center w-full">
                <div className="flex items-center gap-2 font-extrabold text-2xl uppercase text-text-dark tracking-tight">
                    <PaintRollerIcon className="text-accent w-7 h-7" />
                    Revival Painting
                </div>
                <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
                    {['Home', 'Services', 'About', 'Projects', 'Testimonials'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors text-sm uppercase tracking-wide">
                            {item}
                        </Link>
                    ))}
                    <Link href="#contact" className="bg-text-dark text-white px-6 py-2.5 rounded hover:bg-black transition-all hover:scale-105 shadow-md text-sm font-bold uppercase tracking-wide">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
