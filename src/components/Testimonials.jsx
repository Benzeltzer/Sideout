import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "The best team building we've ever had. It wasn't just volleyball; it was strategic bonding.",
        name: "Noa Cohen",
        role: "HR Director, Wix",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Zero pressure, 100% fun. Even our non-sporty employees loved every minute.",
        name: "Omer Levi",
        role: "CEO, StartUp Nation",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Professional, organized, and incredible energy. The drone footage was the cherry on top!",
        name: "Maya Katz",
        role: "People Ops, Playtika",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
];

const companies = ["Wix", "Monday.com", "Fiverr", "Mobileye", "Check Point"];

export default function Testimonials() {
    return (
        <section className="py-24 bg-ocean text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* Trusted By Marquee */}
                <div className="text-center mb-20 opacity-60">
                    <p className="text-sm uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
                    <div className="flex justify-center gap-12 flex-wrap grayscale opacity-70">
                        {companies.map((company, i) => (
                            <span key={i} className="text-2xl font-bold font-mono">{company}</span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
                            <p className="text-lg text-gray-200 mb-8 leading-relaxed relative z-10">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-sunset" />
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
