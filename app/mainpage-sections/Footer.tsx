import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { PaintRollerIcon } from './Icons';

export function Footer() {
    return (
        <footer className="bg-footer-bg text-gray-400 pt-24 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4  gap-12 mb-20">
                <div className="lg:col-span-1  p-6 rounded-lg">
                    <div className="flex items-center gap-2 text-white font-extrabold text-2xl uppercase mb-8">
                        <PaintRollerIcon className="w-8 h-8 text-accent" /> ALL AROUND SERVICE
                    </div>
                    <p className="mb-8 leading-relaxed text-sm text-gray-400">
                        Get in touch today and get a FREE quote on any of our services. No commitments, no obligations.
                    </p>
                    <div className="space-y-4 text-sm mb-6">
                        <p className="flex items-start gap-4">
                            <span className="font-bold text-white w-5 flex-shrink-0">Hrs</span>
                            <span className="text-gray-400">24/7 - 365 Days a Year</span>
                        </p>
                        <p className="flex items-start gap-4">
                            <Phone className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>(385) 484-3525</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <Mail className="text-accent w-5 h-5 flex-shrink-0 " /> info@allaroundservice.com
                        </p>
                        <p className="flex items-start gap-4">
                            <MapPin className="text-accent w-5 h-5 mt-0.5 flex-shrink-0" /> Millcreek, UT 84106-2936
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1"><Facebook size={18} /></Link>
                        <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1"><Instagram size={18} /></Link>
                        <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1"><Youtube size={18} /></Link>
                    </div>
                </div>

                <div className=" p-6 rounded-lg">
                    <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                    <ul className="space-y-3 text-sm">
                        {[
                            'Landscape Maintenance', 'Handyman Services', 'Exterior House Painting',
                            'Carpentry', 'Drywall Services', 'Patio Installation',
                            'Deck Repair', 'Commercial Services', '24/7 Emergency Service'
                        ].map(s => (
                            <li key={s}><Link href="#" className="hover:text-white hover:pl-1 transition-all">{s}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className=" p-6 rounded-lg">
                    <h4 className="text-white font-bold text-lg mb-6">Links</h4>
                    <ul className="space-y-3 text-sm">
                        {['Home', 'Services', "About", 'Projects', 'Testimonials', 'Contact'].map(s => (
                            <li key={s}><Link href="#" className="hover:text-white hover:pl-1 transition-all">{s}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className=" p-6 rounded-lg">
                    <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm">
                        {['Maintenance Tips', 'Home Improvement Trends', 'Service Guide', 'FAQ', 'Blog', 'Careers'].map(s => (
                            <li key={s}><Link href="#" className="hover:text-white hover:pl-1 transition-all">{s}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                    <p>Copyright © 2026 ALL AROUND SERVICE, LLC. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
