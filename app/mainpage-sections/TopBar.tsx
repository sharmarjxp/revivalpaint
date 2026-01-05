import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function TopBar() {
    return (
        <div className="bg-footer-bg text-white py-2 text-sm">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 font-medium">
                        <Phone size={14} className="text-accent" /> (816) 419-7453
                    </span>
                    <span className="flex items-center gap-2 hidden sm:flex font-medium">
                        <Mail size={14} className="text-accent" /> revivalpaintingkansascity@gmail.com
                    </span>
                </div>
                <div className="flex gap-4">
                    <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={16} /></Link>
                    <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={16} /></Link>
                </div>
            </div>
        </div>
    );
}
