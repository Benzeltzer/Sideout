import { motion } from 'framer-motion';
import { Volleyball, Trophy, GlassWater, UtensilsCrossed, Music, Camera, Shirt, Users, Video, Crown, Check, Beer } from 'lucide-react';

const packages = [
    {
        name: "The Sandy Start",
        tagline: "Perfect for a high-energy team refresh.",
        price: "Basic",
        features: [
            { icon: <Volleyball className="w-5 h-5 text-ocean" />, text: "Pro Volleyball Training" },
            { icon: <Trophy className="w-5 h-5 text-ocean" />, text: "Friendly Tournament" },
            { icon: <Beer className="w-5 h-5 text-ocean" />, text: "Energy Drinks, Beers & Snacks" },
            { icon: <Music className="w-5 h-5 text-ocean" />, text: "Chill Beach Music Playlist" },
        ],
        cta: "Get Started",
        highlight: false,
        color: "ocean",
        whatsappLink: "https://wa.me/972545909636?text=Hi%20Ben!%20I%20saw%20the%20SideOut%20website%20and%20would%20love%20to%20chat."
    },
    {
        name: "The Coastal Comp",
        tagline: "Elevate your team spirit with a full-day experience.",
        price: "Premium",
        features: [
            { icon: <Volleyball className="w-5 h-5 text-sunset" />, text: "Pro Volleyball Training" },
            { icon: <Trophy className="w-5 h-5 text-sunset" />, text: "Managed Tournament" },
            { icon: <UtensilsCrossed className="w-5 h-5 text-sunset" />, text: "Fresh Fruits, Sweet Treats & Premium Sandwiches" },
            { icon: <Beer className="w-5 h-5 text-sunset" />, text: "Cold Soft Drinks & Beers" },
            { icon: <Camera className="w-5 h-5 text-sunset" />, text: "Action Photo Pack (High-res shots)" },
        ],
        cta: "Elevate Your Team",
        highlight: false,
        color: "sunset",
        whatsappLink: "https://wa.me/972545909636?text=Hi%20Ben!%20I'd%20love%20to%20get%20more%20details%20about%20The%20Coastal%20Comp%20(Premium)%20package."
    },
    {
        name: "The Ultimate SideOut Experience",
        tagline: "The gold standard of corporate bonding.",
        price: "VIP",
        features: [
            { icon: <Check className="w-5 h-5 text-white" />, text: "Elite Pro Coaching" },
            { icon: <Trophy className="w-5 h-5 text-white" />, text: "Professional Tournament with Referee" },
            { icon: <UtensilsCrossed className="w-5 h-5 text-white" />, text: "Full Catering & Premium Bar (Open)" },
            { icon: <Shirt className="w-5 h-5 text-white" />, text: "Exclusive Company Merchandise" },
            { icon: <Video className="w-5 h-5 text-white" />, text: "Professional Photographer & Drone Footage" },
            { icon: <Crown className="w-5 h-5 text-white" />, text: "Premium Prizes for Tournament Winners" },
        ],
        cta: "Book the Ultimate Experience",
        highlight: true,
        color: "gold",
        whatsappLink: "https://wa.me/972545909636?text=Hi%20Ben!%20I%20want%20the%20VIP%20Ultimate%20SideOut%20Experience.%20Let's%20make%20it%20unforgettable!"
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sand/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-4 tracking-tight">
                        Corporate Team Building
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                        Sun, Sand, and Success. Choose the perfect package for your team.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            className={`
                            relative flex flex-col p-8 rounded-2xl transition-all duration-300 overflow-hidden h-full
                            ${pkg.highlight
                                    ? 'bg-ocean text-white border-2 border-sunset shadow-xl z-10'
                                    : 'bg-white text-gray-800 border border-gray-100 hover:shadow-lg'}
                        `}
                        >
                            {/* Animated Border for VIP */}
                            {pkg.highlight && (
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-ocean z-10 m-[2px] rounded-2xl" />
                                    <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#FD5E53_360deg)] animate-spin-slow opacity-75" />
                                </div>
                            )}

                            <div className="relative z-20 flex flex-col flex-grow">
                                {pkg.highlight && (
                                    <div className="absolute -top-4  left-1/2 transform -translate-x-1/2 bg-sunset text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        Recommended
                                    </div>
                                )}

                                <div className="mb-0 mt-2">
                                    <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-ocean'}`}>
                                        {pkg.name}
                                    </h3>
                                    <p className={`text-sm ${pkg.highlight ? 'text-white' : 'text-gray-500'}`}>
                                        {pkg.tagline}
                                    </p>
                                </div>

                                <div className="my-8 space-y-4 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className={`mt-0.5 ${pkg.highlight ? 'text-white' : 'text-ocean'}`}>
                                                {feature.icon}
                                            </div>
                                            <span className={`text-sm font-medium ${pkg.highlight ? 'text-white' : 'text-gray-600'}`}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="mt-auto pt-8 w-full z-20">
                                <a
                                    href={pkg.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold transition-all duration-300
                                ${pkg.highlight
                                            ? 'bg-sunset text-white hover:bg-[#e04f44] shadow-lg'
                                            : 'bg-white text-ocean border-2 border-ocean hover:bg-ocean hover:text-white'}
                            `}>
                                    {pkg.cta}
                                </a>

                                <div className="mt-4 text-center">
                                    <button className={`text-xs underline underline-offset-4 ${pkg.highlight ? 'text-white hover:text-white' : 'text-gray-400 hover:text-ocean'}`}>
                                        Compare Features
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
