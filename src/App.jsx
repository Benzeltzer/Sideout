import Hero from './components/Hero';
import Impact from './components/Impact';
import WhyUs from './components/WhyUs';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAB from './components/FAB';
import TrustedBy from './components/TrustedBy';
import FAQ from './components/FAQ';
import WeeklyClub from './components/WeeklyClub';

function App() {
  return (
    <div className="font-sans antialiased text-light bg-ocean selection:bg-cyan selection:text-ocean">
      {/* Fixed Logo */}
      <div className="fixed top-6 left-6 z-50">
        <img
          src="/logo.jpg"
          alt="Sideout Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      <Hero />
      <Impact />
      <WhyUs />
      <Experience />
      <Team />
      <Pricing />
      <FAQ />
      <TrustedBy />
      <Testimonials />

      <Contact />
      <FAB />
    </div>
  );
}

export default App;
