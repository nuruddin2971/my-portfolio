import { motion } from 'framer-motion';
import {
  User,
  Terminal,
  Code,
  Trophy,
  Activity,
  BookOpen,
  Heart,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const highlights = [
    { title: "Clean Architecture", desc: "Writing maintainable, scalable, and modular code." },
    { title: "Performance First", desc: "Optimizing bundle sizes, Core Web Vitals, and queries." },
    { title: "AI-Augmented Dev", desc: "Using cutting-edge AI tools to accelerate development." },
    { title: "Continuous Learning", desc: "Rapidly adapting to modern web & cloud advancements." },
  ];

  const hobbies = [
    { name: "Open Source", icon: <Code className="w-4 h-4 text-tertiary" /> },
    { name: "Chess & Logic Games", icon: <Trophy className="w-4 h-4 text-amber-400" /> },
    { name: "Tech Video & Podcasts", icon: <BookOpen className="w-4 h-4 text-sky-400" /> },
    { name: "Outdoor Sports", icon: <Activity className="w-4 h-4 text-emerald-400" /> },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Core Technologies", value: "12+" },
    { label: "Problem Solver", value: "Logic & Execution" },
    { label: "Code Dedication", value: "24/7" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-tertiary/30 text-xs font-mono font-medium text-tertiary"
        >
          <User className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight"
        >
          Crafting Scalable Solutions with <span className="text-gradient">Passion & Precision</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-tertiary to-primary rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-slate-300 font-['Inter'] leading-relaxed text-base md:text-lg"
        >
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-5">
            <h3 className="text-xl md:text-2xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2.5">
              <Terminal className="w-6 h-6 text-tertiary" />
              <span>The Journey so far</span>
            </h3>

            <p>
              Hi, I am <strong className="text-white font-semibold">Mohammad Nur Uddin</strong>, a dedicated Full Stack Developer driven by a passion for solving complex real-world problems and building high-impact digital experiences.
            </p>

            <p>
              My journey began by building rigorous foundations with modern JavaScript (ES6+), React, and responsive UI engineering through Programming Hero. Rather than stopping at standard interfaces, I immersed myself in the full-stack landscape—designing robust backend APIs with Node.js and Express, architecting schemas with MongoDB and Mongoose, and implementing modern authentication mechanisms like Better Auth and Firebase.
            </p>

            <p>
              Today, I focus on combining elegant frontend engineering with reliable backend architecture, ensuring blazing-fast performance, accessibility, and clean maintainable code.
            </p>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{h.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Outside Tech & Stats Bento */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 text-center hover:border-tertiary/40 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-white font-['Space_Grotesk'] text-gradient">
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Human Touch / Hobbies */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <span>Beyond the Terminal</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              When I'm not writing code or experimenting with new web architectures, I prioritize maintaining a well-rounded and curious mind through diverse activities:
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-slate-300 font-medium"
                >
                  {hobby.icon}
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
