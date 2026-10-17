import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const TopAppBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'py-3.5 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo: Changed to "Mohammad" */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tertiary/20 to-primary/20 border border-white/15 flex items-center justify-center group-hover:border-tertiary/50 transition-all duration-300 shadow-lg shadow-tertiary/5">
            <Terminal className="w-5 h-5 text-tertiary group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white font-['Space_Grotesk'] flex items-center gap-1">
              Mohammad
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Stack
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation (without Experience) */}
        <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full glass bg-slate-900/50 border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-tertiary/20 via-primary/20 to-secondary/20 rounded-full border border-white/15"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-tertiary via-emerald-400 to-primary text-slate-950 flex items-center gap-1.5 shadow-[0_0_20px_rgba(78,222,163,0.3)] hover:shadow-[0_0_28px_rgba(78,222,163,0.5)] transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-white border border-white/10 hover:border-tertiary/40 transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-tertiary" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-tertiary/10 text-tertiary border border-tertiary/20' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-tertiary" />}
                  </a>
                );
              })}
              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-tertiary to-primary text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-tertiary/20 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopAppBar;
