import { motion } from 'framer-motion';

const companies = [
    { name: "Wix", color: "hover:text-black" },
    { name: "Monday.com", color: "hover:text-[#F33142]" },
    { name: "Fiverr", color: "hover:text-[#1DBF73]" },
    { name: "Mobileye", color: "hover:text-[#EF2A31]" },
    { name: "Check Point", color: "hover:text-[#EB356D]" }
];

export default function TrustedBy() {
    return (
        <section className="py-20 bg-white border-b border-gray-100 relative z-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-4 text-ocean">
                    Trusted by Leading Companies & Partners
                </h3>

                <div className="flex justify-center gap-12 flex-wrap items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 my-10">
                    {companies.map((company, i) => (
                        <span
                            key={i}
                            className={`text-3xl font-black font-sans text-gray-400 transition-colors duration-300 cursor-default ${company.color}`}
                        >
                            {company.name}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 font-medium tracking-wide">
                    Join the ranks of teams that have elevated their spirit with SideOut.
                </p>
            </div>
        </section>
    );
}
