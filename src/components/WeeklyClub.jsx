import { motion } from 'framer-motion';
import { Calendar, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WeeklyClub() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1628151016629-8a8b09339e1a?q=80&w=2000&auto=format&fit=crop"
                    alt="Team High Five"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate via-slate/90 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 text-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg mb-6">
                            Weekly Wellness
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Make Beach Volleyball <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-sunset">Your Weekly Ritual</span>
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
                            Why stop at one event? Boost your team's morale and health with a recurring weekly training slot. We handle the coaching, the court, and the vibes.
                        </p>

                        <div className="grid gap-6 mb-10">
                            {[
                                {
                                    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
                                    title: "Consistency",
                                    desc: "A fixed weekly slot at your preferred beach."
                                },
                                {
                                    icon: <HeartPulse className="w-6 h-6 text-sunset" />,
                                    title: "Physical & Mental Health",
                                    desc: "The best way to de-stress and stay active under the sun."
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
                                    title: "Low Friction",
                                    desc: "We handle everything—equipment, professional coaching, and court reservations."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-white">{item.title}</h3>
                                        <p className="text-blue-200 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="https://wa.me/972545909636?text=Hi%20Ben!%20I'm%20interested%20in%20starting%20a%20regular%20weekly%20training%20tradition"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-xl transition-colors"
                        >
                            Inquire About Weekly Training
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    {/* Decorative / Image Side (Optional, or just spacer since bg is image) */}
                    <div className="hidden md:block">
                        {/* Could be an illustration or simply empty to let background show */}
                    </div>

                </div>
            </div>
        </section>
    );
}
