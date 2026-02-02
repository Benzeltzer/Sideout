import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "What happens if it rains?",
        answer: "We've got you covered! For light rain, we play on (it's part of the fun!). For heavy vibes, we offer free rescheduling or can move to an indoor beach volleyball arena subject to availability."
    },
    {
        question: "How many people can join?",
        answer: "Our packages are flexible. 'The Sandy Start' is great for small teams (6-12), while 'The Ultimate SideOut Experience' can accommodate large corporate groups of 50+. Contact us for custom large-scale events."
    },
    {
        question: "Do we need prior volleyball experience?",
        answer: "Not at all! Our pro coaches tailor the session to your group's level. We focus on fun, fundamentals, and getting everyone rallying, regardless of athletic ability."
    },
    {
        question: "What should we bring?",
        answer: "Just comfortable gym clothes, sunglasses, and sunscreen. We provide all the equipment, hydration, and good vibes. Sand socks are included in VIP packages!"
    }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-ocean relative z-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
                    <p className="text-light opacity-70 text-lg">Everything you need to know before hitting the sand.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={false}
            className="bg-slate/50 rounded-xl shadow-lg border border-white/5 overflow-hidden backdrop-blur-sm"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-light opacity-80 leading-relaxed">
                    {faq.answer}
                </div>
            </motion.div>
        </motion.div>
    );
}
