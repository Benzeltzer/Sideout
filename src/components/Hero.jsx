import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          {/* Placeholder video - easy for user to replace */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-playing-volleyball-on-the-beach-1209-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/80 via-transparent to-transparent" />
      </div>

      {/* Content with Glassmorphism */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg font-sans"
          >
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-yellow-400">Volleyball</span>
          </motion.h1>

          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100 max-w-3xl mx-auto leading-relaxed">
            The Ultimate Team Building Experience. Unite your team with a strategic, fun, and inclusive beach event.
            <span className="block mt-2 font-semibold">Sun, music, alcohol, and zero pressure.</span>
          </p>

          <motion.a
            href="https://wa.me/972545909636?text=Hi%20Ben!%20I%20saw%20the%20SideOut%20website%20and%20would%20love%20to%20get%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-sunset hover:bg-[#e04f44] text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-all border-2 border-white/20 backdrop-blur-sm"
          >
            Book a Date via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
