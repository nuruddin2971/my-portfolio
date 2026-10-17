import { useState } from 'react';
import {
  ArrowUp,
  Terminal,
  Mail,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from './Icons';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('nuruddin2971@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nuruddin2971',
      icon: <GithubIcon className="w-4 h-4" />,
      color: 'hover:border-[#4edea3]/50 hover:text-[#4edea3] hover:shadow-[0_0_15px_rgba(78,222,163,0.3)]'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammad-nur-uddin-dev/',
      icon: <LinkedinIcon className="w-4 h-4" />,
      color: 'hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
    },
    {
      name: 'Twitter / X',
      href: 'https://twitter.com/',
      icon: <TwitterIcon className="w-4 h-4" />,
      color: 'hover:border-[#adc6ff]/50 hover:text-[#adc6ff] hover:shadow-[0_0_15px_rgba(173,198,255,0.3)]'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/',
      icon: <FacebookIcon className="w-4 h-4" />,
      color: 'hover:border-[#818cf8]/50 hover:text-[#818cf8] hover:shadow-[0_0_15px_rgba(129,140,248,0.3)]'
    }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-20 pb-12 px-6 md:px-12 bg-slate-950 border-t border-white/10 relative overflow-hidden font-['Space_Grotesk']">
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Column 1: Brand & Persona */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-tertiary/20 via-primary/15 to-transparent border border-white/15 flex items-center justify-center shadow-lg shadow-tertiary/10">
                <Terminal className="w-5 h-5 text-tertiary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                  Mohammad
                  <Sparkles className="w-4 h-4 text-tertiary" />
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-['Inter'] leading-relaxed">
              Crafting high-performance web applications, scalable architectures, and modern digital experiences. Dedicated to clean code, robust backend engineering, and intuitive design systems.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 cursor-pointer ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Quick Navigation</span>
            </h4>

            <div className="grid grid-cols-2 gap-2.5 font-['Inter']">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-3.5 py-2.5 rounded-xl glass border border-white/5 hover:border-white/20 text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all cursor-pointer text-xs flex items-center justify-between group"
                >
                  <span className="font-medium group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-tertiary group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary" />
              <span>Let's Connect</span>
            </h4>

            <div className="space-y-3 font-['Inter'] text-xs">
              {/* Email with 1-click copy */}
              <div className="p-3.5 rounded-2xl glass border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                    <div className="font-bold text-white font-['Space_Grotesk'] text-sm">
                      nuruddin2971@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp & Phone */}
              <a
                href="https://wa.me/60178152971"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/[0.04] flex items-center gap-3 transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">WhatsApp & Phone</div>
                  <div className="font-bold text-white font-['Space_Grotesk'] text-sm group-hover:text-emerald-400 transition-colors">
                    +60178152971
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-white">Mohammad Nur Uddin</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Crafted with React, Tailwind CSS & Framer Motion
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full glass border border-white/15 hover:border-tertiary/50 hover:bg-white/10 flex items-center gap-2 text-slate-300 hover:text-tertiary transition-all shadow-md cursor-pointer group active:scale-95"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <span className="text-[11px] font-bold">Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
