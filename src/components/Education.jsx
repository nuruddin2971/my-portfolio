import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-secondary/30 text-xs font-mono font-medium text-secondary"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight"
        >
          Education & <span className="text-gradient">Background</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"
        />
      </div>

      {/* Single Clean Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 border border-white/10 hover:border-tertiary/40 transition-all duration-300 relative overflow-hidden group shadow-2xl text-center">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary/20 transition-colors" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Icon */}
          <div className="relative z-10 flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-tertiary" />
            </div>
          </div>

          {/* Degree */}
          <h3 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-black text-white font-['Space_Grotesk'] mb-4 leading-snug group-hover:text-tertiary transition-colors">
            Bachelor of Business Administration (BBA) in Digital Marketing
          </h3>

          {/* Institution */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-lg font-semibold text-slate-300">
            <BookOpen className="w-5 h-5 text-tertiary shrink-0" />
            <span>Nilai University, Malaysia</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
