import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 bg-text-dark text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-accent" size={20} />
                                    <span>(816) 419-7453</span>
                                </div>
                                <div className="flex items-center  gap-4">
                                    <Mail className="text-accent flex-shrink-0"  size={20} />
                                    <span>revivalpaintingkansascity@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-accent" size={20} />
                                    <span>Kansas City, MO 64116-3231</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12 relative z-10">
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook size={18} /></Link>
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram size={18} /></Link>
                            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Youtube size={18} /></Link>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="md:w-3/5 p-10">
                        <h3 className="text-2xl font-bold mb-6 text-text-dark">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                                    <input type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent" placeholder="John" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                                    <input type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                                    <input type="email" className="border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent" placeholder="john@example.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone</label>
                                    <input type="tel" className="border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent" placeholder="(555) 123-4567" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Subject</label>
                                <div className="flex gap-4 text-sm text-gray-600">
                                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="subject" className="accent-accent" /> General Inquiry</label>
                                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="subject" className="accent-accent" /> Quote Request</label>
                                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="subject" className="accent-accent" /> Support</label>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                                <textarea className="border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent h-24 resize-none" placeholder="Write your message here..."></textarea>
                            </div>

                            <button className="bg-text-dark text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-accent hover:shadow-lg transition-all w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
