import Link from 'next/link';
import Image from 'next/image';

export function Blog() {
    const posts = [
        { title: "2026 Color Trends", date: "Jan 12, 2026", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80" },
        { title: "Exterior Maintenance Tips", date: "Dec 05, 2025", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" },
        { title: "Choosing the Right Satin", date: "Nov 20, 2025", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80" }
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
                            <p className="text-gray-500 mb-4 line-clamp-2">Learn the secrets to keeping your home paint looking fresh for years to come with our expert advice.</p>
                            <Link href="#" className="text-accent font-bold uppercase text-sm tracking-wider group-hover:underline">Read Article</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
