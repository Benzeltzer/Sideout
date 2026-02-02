import { motion } from 'framer-motion';

const companies = ["Wix", "Monday.com", "Fiverr", "Mobileye", "Check Point"];

export default function TrustedBy() {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted by innovative teams across Tel Aviv
                </p>
                <div className="flex justify-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, i) => (
                        <span key={i} className="text-2xl font-bold font-mono text-gray-400 hover:text-ocean transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
