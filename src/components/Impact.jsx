import { motion } from 'framer-motion';
import { Users, Briefcase, Zap } from 'lucide-react';

const stats = [
    {
        label: "Happy Employees",
        value: "1000+",
        icon: <Users className="w-8 h-8 text-sunset" />
    },
    {
        label: "Corporate Events",
        value: "50+",
        icon: <Briefcase className="w-8 h-8 text-ocean" />
    },
    {
        label: "Energy Level",
        value: "100%",
        sub: "0% Gravity",
        icon: <Zap className="w-8 h-8 text-yellow-500" />
    }
];

export default function Impact() {
    return (
        <section className="py-20 bg-ocean relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate/50 p-8 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-cyan/5 transition-all border border-white/5 backdrop-blur-sm"
                        >
                            <div className="p-4 bg-white/5 rounded-xl text-white">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
                                <p className="text-blue-100 opacity-60 font-medium uppercase tracking-wider text-sm mt-1">{stat.label}</p>
                                {stat.sub && <p className="text-sm text-sunset font-bold">{stat.sub}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
