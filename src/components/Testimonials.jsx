import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Highly recommended for any team! This was by far the most engaging and bonding activity we’ve ever done as a company. The VIP experience combined fun, teamwork, and unforgettable memories in a way that no office happy hour ever could",
        name: "Ilya Gringlaz",
        role: "CEO of Emater",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "We’ve tried many corporate activities, but SideOut’s VIP package is on another level. It’s more than just volleyball—it’s about creating lasting memories and a shared spirit. Best team day ever",
        name: "Gal Ezra",
        role: "Team Lead, Lusha",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Professional, organized, and incredible energy. The drone footage was the cherry on top!",
        name: "Maya Katz",
        role: "People Ops, Playtika",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
];

const companies = ["Emater", "Lusha", "Fiverr", "Mobileye", "Check Point"];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white text-gray-900 relative overflow-hidden text-center">
            <div className="max-w-7xl mx-auto px-4">

                {/* Trusted By Marquee */}


                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative text-left"
                        >
                            <Quote className="absolute top-8 right-8 text-ocean/10 w-12 h-12" />
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed relative z-10">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-sunset" />
                                <div>
                                    <h4 className="font-bold text-ocean">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
