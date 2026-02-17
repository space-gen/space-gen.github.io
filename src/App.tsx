import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Globe, 
  Map, 
  Database, 
  Github, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Menu,
  X,
  Star,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceGen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">SpaceGen</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('mission')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Mission</button>
            <button onClick={() => scrollToSection('maps')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Planetary Maps</button>
            <button onClick={() => scrollToSection('data')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Open Data</button>
            <button 
              onClick={() => window.open('https://github.com/space-gen', '_blank')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
            >
              Join the Org
            </button>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/10"
            >
              <div className="flex flex-col gap-6 p-8">
                <button onClick={() => scrollToSection('mission')} className="text-gray-300 text-left">Mission</button>
                <button onClick={() => scrollToSection('maps')} className="text-gray-300 text-left">Planetary Maps</button>
                <button onClick={() => scrollToSection('data')} className="text-gray-300 text-left">Open Data</button>
                <button 
                  onClick={() => window.open('https://github.com/space-gen', '_blank')}
                  className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Join the Org
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="w-3 h-3" />
              <span>Founded by Soumyadip Karforma</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              Mapping the Solar System <br /> with <span className="text-blue-500">Open Data</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
              SpaceGen is a new community-driven initiative dedicated to building highly detailed, open-source planetary maps using public space agency data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('maps')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                View Maps
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('data')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Explore Data Sources
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              SpaceGen was founded to bridge the gap between complex orbital data and visual planetary exploration. We believe that the secrets of our solar system should be accessible to everyone in a high-resolution, interactive format.
            </p>
            <div className="space-y-4">
              {[
                "Processing petabytes of raw NASA/ESA data",
                "Building open-source mapping pipelines",
                "Fostering a global community of contributors"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-600/20 p-1 rounded-full">
                    <Star className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
             <Globe className="w-48 h-48 text-blue-500 opacity-50 absolute animate-pulse" />
             <Map className="w-32 h-32 text-white relative z-10" />
          </div>
        </div>
      </section>

      {/* Planetary Maps Section */}
      <section id="maps" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Planetary Map Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mars Terrain", type: "Topographic", status: "In Progress" },
              { title: "Lunar North Pole", type: "High-Res Imagery", status: "Beta" },
              { title: "Europa Ice Sheets", type: "Multi-Spectral", status: "Planned" }
            ].map((map, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{map.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{map.type}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{map.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Database className="w-16 h-16 mx-auto mb-8 text-white" />
          <h2 className="text-4xl font-bold mb-6">Open Data First</h2>
          <p className="text-blue-100 text-xl mb-10">
            Everything we build is based on open-source datasets. We are currently integrating data from the PDS (Planetary Data System) to create the next generation of maps.
          </p>
          <button 
            onClick={() => window.open('https://pds.nasa.gov/', '_blank')}
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Browse Data Sources
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-500" />
            <span className="text-2xl font-bold">SpaceGen</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Founded by Soumyadip Karforma. SpaceGen Org.
          </p>
          <div className="flex gap-6">
            <button onClick={() => window.open('https://github.com/space-gen', '_blank')} className="text-gray-400 hover:text-white"><Github /></button>
            <button className="text-gray-400 hover:text-white"><Twitter /></button>
            <button className="text-gray-400 hover:text-white"><Mail /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpaceGen;
