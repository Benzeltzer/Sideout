import { motion } from 'framer-motion';
import { GlassWater, Dumbbell, Trophy, Sunset, Volleyball } from 'lucide-react';

const timeline = [
    { title: "Reception & Drinks", desc: "Kick off with chilled beers, wine, and great music.", icon: <GlassWater /> },
    { title: "Light Warm-up", desc: "Fun ice-breakers and movement to get the energy flowing.", icon: <Dumbbell /> },
    { title: "Beach Volleyball Practice", desc: "Learn the fundamentals from the pros with guided drills.", icon: <Volleyball /> },
    { title: "Friendly Tournament", desc: "Strategic teams, low-stakes games, high-fives everywhere.", icon: <Trophy /> },
    { title: "Sunset Toast", desc: "Celebrate the winners and the sunset with a final cheer.", icon: <Sunset /> }
];

export default function Experience() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-4">The SideOut Flow</h2>
                    <p className="text-gray-500 text-lg">A perfectly curated schedule for maximum engagement.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sunset via-orange-300 to-transparent opacity-20 hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className={`p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        <div className={`inline-block p-3 rounded-full bg-orange-100 text-sunset mb-4 md:hidden`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-ocean mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white border-4 border-sunset rounded-full shadow-lg">
                                    <div className="text-sunset transform scale-75">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
