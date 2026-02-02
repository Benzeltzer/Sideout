import { motion } from 'framer-motion';
import { GlassWater, Dumbbell, Trophy, Sunset } from 'lucide-react';

const timeline = [
    { time: "17:00", title: "Reception & Drinks", desc: "Kick off with chilled beers, wine, and great music.", icon: <GlassWater /> },
    { time: "17:30", title: "Light Warm-up", desc: "Fun ice-breakers and movement to get the energy flowing.", icon: <Dumbbell /> },
    { time: "18:00", title: "Friendly Tournament", desc: "Strategic teams, low-stakes games, high-fives everywhere.", icon: <Trophy /> },
    { time: "19:30", title: "Sunset Toast", desc: "Celebrate the winners and the sunset with a final cheer.", icon: <Sunset /> }
];

export default function Experience() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-ocean mb-4">The Experience</h2>
                    <p className="text-lg text-gray-500">A seamless flow from arrival to sunset.</p>
                </div>

                <div className="relative space-y-24">
                    {/* Connecting Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean/20 via-sunset to-ocean/20 hidden md:block" />

                    {timeline.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }) {
    const isEvent = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${isEvent ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="w-full md:w-1/2 flex justify-start md:justify-center">
                <div className="hidden md:block w-32" /> {/* Spacer */}
            </div>

            {/* Icon Marker */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-sunset shadow-lg flex items-center justify-center z-10">
                    <div className="text-ocean">
                        {item.icon}
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEvent ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-sunset"
                >
                    <span className="text-sunset font-bold text-lg block mb-2">{item.time}</span>
                    <h3 className="text-2xl font-bold text-ocean mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
