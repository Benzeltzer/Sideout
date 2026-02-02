import { motion } from 'framer-motion';

const companies = [1, 2, 3, 4, 5, 6];

export default function TrustedBy() {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted by innovative teams across Tel Aviv
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos */}
                    {companies.map((_, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            className="h-8 w-24 bg-gray-300 rounded-md animate-pulse"
                            title="Company Logo"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
