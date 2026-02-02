import { motion } from 'framer-motion';
import { Award, Clock, GraduationCap, Flame } from 'lucide-react';

const coaches = [
    {
        name: "Ben Zeltzer",
        title: "Founder & Head Coach",
        image: "/ben-action-new.jpg",
        bio: "With 9 years of coaching experience, Ben brings elite-level expertise to the sand. A former U.S. College League player, he reached the Semi-Finals of the Israeli National Championship. Ben combines his professional background as a Beach Volleyball coach and his current studies in Sports Therapy to create a training environment that is high-energy, technical, and safe.",
        badges: [
            { text: "9+ Years Exp", icon: <Clock className="w-4 h-4" /> },
            { text: "National Semi-Finalist", icon: <Award className="w-4 h-4" /> },
            { text: "Sports Therapy", icon: <GraduationCap className="w-4 h-4" /> }
        ],
        color: "from-blue-600 to-ocean"
    },
    {
        name: "Suf Amitai",
        title: "Lead Coach",
        image: "/suf-action.jpg",
        imageClass: "object-contain object-bottom",
        bio: "An active player in the Israeli National Championships for several years, Sof has been coaching for over 3 years. His deep understanding of game dynamics and his passion for the sport make him an expert at transforming team energy and sharpening skills on the court.",
        badges: [
            { text: "3+ Years Coaching", icon: <Clock className="w-4 h-4" /> },
            { text: "National Player", icon: <Flame className="w-4 h-4" /> }
        ],
        color: "from-orange-500 to-sunset"
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-ocean overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        The Pros Behind the Game
                    </h2>
                    <div className="h-1 w-24 bg-sunset mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {coaches.map((coach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate rounded-3xl shadow-xl overflow-hidden group border border-white/5 relative"
                        >
                            {/* Image Section with Zoom Effect */}
                            <div className="h-80 overflow-hidden relative">
                                <motion.img
                                    src={coach.image}
                                    alt={coach.name}
                                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${coach.imageClass || 'object-cover object-top'}`}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${coach.color} opacity-40 mix-blend-multiply`} />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                                    <h3 className="text-3xl font-bold text-white mb-1">{coach.name}</h3>
                                    <p className="text-gray-200 font-medium tracking-wide uppercase text-sm">{coach.title}</p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 relative bg-slate">
                                {/* Badges */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {coach.badges.map((badge, i) => (
                                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                            {badge.icon}
                                            {badge.text}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-light opacity-80 leading-relaxed text-lg">
                                    {coach.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
