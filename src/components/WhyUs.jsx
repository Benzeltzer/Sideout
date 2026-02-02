import { motion } from 'framer-motion';
import { Music, Users, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <Music className="w-12 h-12 text-[#FD5E53]" />,
        title: "Chill Mode",
        description: "No intense cardio. Just fun games, music, and vibes. Perfect for everyone."
    },
    {
        icon: <Users className="w-12 h-12 text-[#0F4C75]" />,
        title: "Strategic Bonding",
        description: "Designed by pros to improve communication and trust through cooperative play."
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-[#F5F5DC] fill-[#0F4C75]" />, // Styled specifically
        title: "All-Inclusive",
        description: "Suitable for all fitness levels, genders, and ages. We ensure everyone participates comfortably."
    }
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#0F4C75] mb-4">Why Sideout?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We redefine corporate events by focusing on connection rather than competition.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border-b-4 border-[#0F4C75]"
                        >
                            <div className="mb-6 flex justify-center">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
