import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FAB() {
    return (
        <motion.a
            href="https://wa.me/972545909636?text=Hi%20Ben!%20I%20saw%20your%20website%20and%20would%20love%20to%20chat%20about%20your%20beach%20volleyball%20services."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
        >
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            <MessageCircle className="w-8 h-8" />

            {/* Tooltip text on desktop */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg hidden group-hover:block whitespace-nowrap">
                Book Your Date
            </span>
        </motion.a>
    );
}
