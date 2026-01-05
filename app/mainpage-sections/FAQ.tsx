export function FAQ() {
    const faqs = [
        { q: "Do you provide free estimates?", a: "Yes, we provide completely free, no-obligation estimates for all residential and commercial projects. Just contact us to schedule." },
        { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and insured for your peace of mind and protection." },
        { q: "What brand of paint do you use?", a: "We primarily recommend Sherwin-Williams and Benjamin Moore for their superior durability and finish, but we can use any brand you prefer." },
    ];

    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4 text-text-dark">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <details key={i} className="group bg-white rounded-xl shadow-sm cursor-pointer overflow-hidden transition-all duration-300 open:shadow-md">
                            <summary className="flex justify-between items-center font-bold text-lg p-6 list-none select-none">
                                {f.q}
                                <span className="transition-transform group-open:rotate-180 bg-secondary w-8 h-8 flex items-center justify-center rounded-full text-text-dark text-xl">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                {f.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
