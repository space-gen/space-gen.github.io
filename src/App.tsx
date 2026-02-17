import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Users, 
  Globe, 
  Zap, 
  Github, 
  Twitter, 
  Mail, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X,
  Star,
  Shield
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

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-sm"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Starfield Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">SpaceGen</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#missions">Missions</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#community">Community</NavItem>
            <NavItem href="#about">About</NavItem>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Join Mission
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
              className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-6 p-8 items-center text-center">
                <NavItem href="#missions">Missions</NavItem>
                <NavItem href="#projects">Projects</NavItem>
                <NavItem href="#community">Community</NavItem>
                <NavItem href="#about">About</NavItem>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-200">
                  Join Mission
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="w-3 h-3" />
              <span>Next Generation Exploration</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Democratizing the <br /> Final Frontier
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
              SpaceGen is a community-driven initiative dedicated to making space exploration accessible to everyone through open research, satellite data, and decentralized innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-blue-900/20">
                Launch Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-200">
                Read Whitepaper
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated Orbits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/5 rounded-full pointer-events-none"></div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-20 px-6 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Users, title: "12k+ Members", desc: "A global community of scientists, engineers, and enthusiasts collaborating daily." },
            { icon: Globe, title: "Open Satellite Network", desc: "Access real-time orbital data through our decentralized ground station network." },
            { icon: Shield, title: "Space Governance", desc: "Participate in shaping the future of space policy and ethics through community voting." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                <item.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Active Initiatives</h2>
              <p className="text-gray-400">Join a working group and start contributing to real-world space projects today.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
              View All Projects <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                tag: "Hardware", 
                title: "NanoSat-1", 
                desc: "Developing an open-source cube-sat architecture for affordable orbital experiments.",
                color: "bg-purple-500" 
              },
              { 
                tag: "Data", 
                title: "StarLight API", 
                desc: "A unified API for cross-referencing public space telescope and telemetry data.",
                color: "bg-blue-500" 
              },
              { 
                tag: "Policy", 
                title: "Orbital Ethics", 
                desc: "A framework for sustainable satellite deployment and debris management.",
                color: "bg-emerald-500" 
              }
            ].map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`${proj.color} w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6`}>
                  {proj.tag}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{proj.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(n => (
                      <div key={n} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-gray-700"></div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#020617] bg-blue-600 flex items-center justify-center text-[10px] font-bold">+12</div>
                  </div>
                  <button className="text-gray-400 group-hover:text-white transition-colors">
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to explore?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Our community is open to everyone. Whether you're an orbital dynamicist or a curious student, there's a place for you in SpaceGen.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                Join our Discord
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Contributor Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-blue-500" />
              <span className="text-2xl font-bold">SpaceGen</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Decentralizing space exploration through community collaboration and open-source innovation.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Org</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Manifesto</li>
                <li className="hover:text-white cursor-pointer transition-colors">Whitepaper</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Satellite API</li>
                <li className="hover:text-white cursor-pointer transition-colors">Ground Stations</li>
                <li className="hover:text-white cursor-pointer transition-colors">Data Portal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-500">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-white cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-white cursor-pointer transition-colors">Email</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SpaceGen Foundation. Open sourced under MIT License.
        </div>
      </footer>
    </div>
  );
};

export default SpaceGen;