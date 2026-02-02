import { motion } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <footer className="bg-[#0F4C75] text-white py-20">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Social Proof / Methodology */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Led by Pros.</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Our events are curated by Ben Zeltzer & Team. We don't just teach volleyball; we engineer
                        <span className="text-[#FD5E53] font-bold"> social dynamics</span> that improve employee retention and team culture.
                    </p>
                    <div className="flex gap-4">
                        {/* Placeholder for social proof images */}
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold cursor-help" title="Ben Zeltzer">BZ</div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold cursor-help" title="Suf Amitai">SA</div>
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-bold mb-6">Ready to hit the sand?</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-lg hover:text-[#FD5E53] transition-colors cursor-pointer">
                            <Phone className="w-6 h-6" />
                            <a href="https://wa.me/972545909636?text=Hi%20Ben!%20I%20saw%20the%20SideOut%20website%20and%20would%20love%20to%20chat%20about%20an%20event." target="_blank" rel="noopener noreferrer">
                                054-590-9636
                            </a>
                        </li>
                        <li className="flex items-center gap-4 text-lg hover:text-[#FD5E53] transition-colors cursor-pointer">
                            <Mail className="w-6 h-6" />
                            <span>hello@sideout.com</span>
                        </li>
                        <li className="flex items-center gap-4 text-lg hover:text-[#FD5E53] transition-colors cursor-pointer">
                            <Instagram className="w-6 h-6" />
                            <span>@sideout</span>
                        </li>
                    </ul>
                    <a
                        href="https://wa.me/972545909636?text=Hi%20Ben!%20I%20saw%20the%20SideOut%20website%20and%20would%20love%20to%20chat%20about%20an%20event."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-8 bg-[#FD5E53] hover:bg-[#e04f44] text-white font-bold py-3 rounded-lg transition-colors text-center"
                    >
                        Contact Us
                    </a>
                </motion.div>

            </div>
            <div className="text-center mt-20 text-gray-400 text-sm">
                © {new Date().getFullYear()} Sideout. All rights reserved.
            </div>
        </footer>
    );
}
