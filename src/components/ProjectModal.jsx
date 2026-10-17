import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Cpu, 
  Database,
  Globe,
  Dumbbell,
  UtensilsCrossed
} from 'lucide-react';
import { GithubIcon } from './Icons';

const projectThemes = {
  FitLog: {
    gradient: 'from-emerald-950 via-slate-900 to-slate-950',
    accent: 'from-emerald-500/20 to-teal-500/10',
    glow: 'bg-emerald-500/15',
    iconBg: 'bg-emerald-500/20 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    Icon: Dumbbell,
  },
  DevStack: {
    gradient: 'from-sky-950 via-slate-900 to-slate-950',
    accent: 'from-sky-500/20 to-blue-500/10',
    glow: 'bg-sky-500/15',
    iconBg: 'bg-sky-500/20 border-sky-500/30',
    iconColor: 'text-sky-400',
    Icon: Layers,
  },
  "Chef's Palette": {
    gradient: 'from-amber-950 via-slate-900 to-slate-950',
    accent: 'from-amber-500/20 to-orange-500/10',
    glow: 'bg-amber-500/15',
    iconBg: 'bg-amber-500/20 border-amber-500/30',
    iconColor: 'text-amber-400',
    Icon: UtensilsCrossed,
  },
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] glass-card bg-slate-900 border border-white/15 rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header: Real Screenshot */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden shrink-0 bg-slate-950">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-11 h-11 bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-full flex items-center justify-center text-white hover:bg-tertiary hover:text-slate-950 transition-all duration-200 cursor-pointer shadow-lg z-20"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Category */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-tertiary/20 text-tertiary border border-tertiary/30 backdrop-blur-md">
                  {project.category || "Full Stack Application"}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-['Space_Grotesk'] mt-2">
                  {project.title}
                </h3>
              </div>
            </div>




            {/* Modal Body / Scrollable Content */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto custom-scrollbar space-y-8 font-['Inter']">
              {/* Action Links Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono font-bold border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-tertiary to-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md shadow-tertiary/20 cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Production App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl glass text-white text-xs font-bold uppercase tracking-wider border border-white/15 flex items-center gap-2 hover:bg-white/10 hover:border-white/30 active:scale-95 transition-all cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Full Stack Architecture Block */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-tertiary" />
                  <span>Full Stack Architecture</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono text-tertiary font-bold mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Frontend Tier</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture?.frontend || "React, Tailwind CSS, Responsive UI architecture, Client-side state routing"}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono text-primary font-bold mb-1 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      <span>Backend & Infrastructure</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture?.backend || "Node.js REST endpoints, MongoDB/Firebase data stores, Edge CDN deployments"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Overview & Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Overview & Problem Solved</span>
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {project.keyFeatures && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Key Features:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tertiary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Engineering Challenges & How They Were Solved */}
              <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 space-y-2">
                <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 font-['Space_Grotesk']">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Engineering Challenges & Solutions</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Future Roadmap */}
              <div className="p-5 rounded-2xl bg-primary/[0.04] border border-primary/20 space-y-2">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 font-['Space_Grotesk']">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>Future Roadmap & Scalability</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
