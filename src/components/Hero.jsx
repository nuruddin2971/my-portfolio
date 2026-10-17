import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Terminal, 
  Code2, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from './Icons';
import profilePhoto from '../assets/profile_pro.png';

const roles = [
  "Full Stack Developer",
  "Frontend Specialist",
  "MERN/PERN Stack Engineer",
  "Modern UI/UX Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(60);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }, 150);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nuruddin2971",
      icon: <GithubIcon className="w-5 h-5" />,
      color: "hover:text-[#4edea3] hover:border-[#4edea3]/40 hover:shadow-[0_0_15px_rgba(78,222,163,0.3)]"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-nur-uddin-dev/",
      icon: <LinkedinIcon className="w-5 h-5" />,
      color: "hover:text-[#38bdf8] hover:border-[#38bdf8]/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com/",
      icon: <TwitterIcon className="w-5 h-5" />,
      color: "hover:text-[#adc6ff] hover:border-[#adc6ff]/40 hover:shadow-[0_0_15px_rgba(173,198,255,0.3)]"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: <FacebookIcon className="w-5 h-5" />,
      color: "hover:text-[#818cf8] hover:border-[#818cf8]/40 hover:shadow-[0_0_15px_rgba(129,140,248,0.3)]"
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-tertiary/15 via-primary/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">


          {/* Main Greeting & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h2 className="text-lg md:text-xl font-mono text-tertiary font-semibold flex items-center justify-center lg:justify-start gap-2">
              <Terminal className="w-5 h-5 inline text-tertiary" />
              <span>Hello world, I am</span>
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight font-['Space_Grotesk']">
              Mohammad <br className="hidden sm:inline" />
              <span className="text-gradient">Nur Uddin</span>
            </h1>
          </motion.div>

          {/* Typewriter Role Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center justify-center lg:justify-start"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-slate-200">
              I build as a{' '}
              <span className="text-[#38bdf8] border-b-2 border-[#38bdf8] pb-0.5">
                {displayedText}
              </span>
              <span className="inline-block w-2.5 h-6 bg-tertiary ml-1 animate-pulse" />
            </span>
          </motion.div>

          {/* Elevator Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed font-['Inter']"
          >
            Full-stack engineer specialized in crafting high-performance, accessible, and scalable web applications. Leveraging modern JavaScript/TypeScript, React, Next.js, Node.js, and cutting-edge AI-assisted workflows to deliver exceptional digital products.
          </motion.p>

          {/* Action Buttons: Direct download/open for resume.pdf */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="/resume.pdf"
              download="Mohammad_Nur_Uddin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-tertiary via-emerald-400 to-primary text-slate-950 flex items-center gap-2 shadow-[0_0_25px_rgba(78,222,163,0.35)] hover:shadow-[0_0_35px_rgba(78,222,163,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-xl font-bold text-sm glass text-white border border-white/15 hover:border-tertiary/50 hover:bg-white/10 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-tertiary" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 pt-4"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">Connect:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 cursor-pointer ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual Avatar & Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Outer Rotating Glow Rings */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tertiary/20 via-primary/20 to-secondary/20 blur-2xl animate-pulse" />
            <div className="absolute -inset-4 rounded-full border border-dashed border-white/10 animate-[spin_35s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-white/5" />

            {/* Avatar Container */}
            <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/0 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <img
                src={profilePhoto}
                alt="Mohammad Nur Uddin"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 sm:right-0 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 border border-white/15 shadow-xl"
            >
              <Code2 className="w-4 h-4 text-tertiary" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-mono">Specialty</div>
                <div className="text-xs font-bold text-white">Full Stack JS/TS</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-2 sm:left-2 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 border border-white/15 shadow-xl"
            >
              <Layers className="w-4 h-4 text-primary" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-mono">Workflow</div>
                <div className="text-xs font-bold text-white">Clean Architecture</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-6 -translate-y-1/2 hidden sm:flex glass-card px-3 py-1.5 rounded-xl items-center gap-1.5 border border-white/15 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold text-white">AI-Powered</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
