import Link from 'next/link';
import Image from 'next/image';

export function Blog() {
    const posts = [
        { title: "Essential Landscape Maintenance", date: "Jan 12, 2026", img: "/images/hero.png", desc: "Keep your lawn and garden thriving all year round with our professional seasonal tips." },
        { title: "Top Handyman Hacks for 2026", date: "Dec 05, 2025", img: "/images/handyman.png", desc: "Expert advice on preventive home maintenance to save you time and money." },
        { title: "Carpentry & Custom Decks", date: "Nov 20, 2025", img: "/images/carpentry.png", desc: "Explore the latest trends in outdoor living spaces and custom patio designs." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-text-dark">From Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {posts.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="h-60 rounded-xl overflow-hidden mb-6 relative shadow-md">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase text-text-dark">
                                    {p.date}
                                </div>
                            </div>
                            <h4 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">{p.title}</h4>
                            <p className="text-gray-500 mb-4 line-clamp-2">{p.desc}</p>
                            <Link href="#" className="text-accent font-bold uppercase text-sm tracking-wider group-hover:underline">Read Article</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
