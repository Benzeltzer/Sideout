import { motion } from 'framer-motion';
import { Calendar, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WeeklyClub() {
    return (
        <section className="relative py-24 overflow-hidden bg-blue-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sand/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                            SideOut Weekly
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                            SideOut Weekly: <br />
                            <span className="text-ocean">The Ultimate Employee Wellness Club</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                            Turn team bonding into a lifestyle. Boost morale, health, and productivity with a permanent beach volleyball slot for your company.
                        </p>

                        <div className="grid gap-6 mb-10">
                            {[
                                {
                                    icon: <Calendar className="w-6 h-6 text-ocean" />,
                                    title: "Consistency",
                                    desc: "A fixed weekly slot at your preferred beach."
                                },
                                {
                                    icon: <HeartPulse className="w-6 h-6 text-sunset" />,
                                    title: "Physical & Mental Health",
                                    desc: "The best way to de-stress and stay active under the sun."
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6 text-ocean" />,
                                    title: "Low Friction",
                                    desc: "We handle everything—equipment, professional coaching, and court reservations."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="https://wa.me/972545909636?text=Hi%20Ben!%20I'm%20interested%20in%20starting%20a%20regular%20weekly%20training%20tradition."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-ocean text-white hover:bg-[#0b3a59] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            Inquire About Weekly Training
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop"
                                alt="Team Weekly Training"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-xl">The Ultimate Employee Wellness Club</p>
                                <p className="text-sm opacity-90">Join leading companies on the sand</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
