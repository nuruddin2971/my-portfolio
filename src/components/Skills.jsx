import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Bot, 
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "Crafting fast, responsive, and intuitive client-side experiences",
      icon: <Code2 className="w-6 h-6 text-[#38bdf8]" />,
      colorClass: "from-[#38bdf8]/20 to-transparent",
      badgeColor: "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10",
      skills: [
        { name: "HTML5", level: "Advanced", desc: "Semantic markup, SEO & accessibility standards", icon: "🌐" },
        { name: "Tailwind CSS", level: "Expert", desc: "Utility-first responsive layouts & design systems", icon: "🎨" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, DOM, Event loops & modular architecture", icon: "⚡" },
        { name: "TypeScript", level: "Proficient", desc: "Static typing, generics, interfaces & type safety", icon: "📘" },
        { name: "React", level: "Advanced", desc: "Hooks, Context API, state management & SPAs", icon: "⚛️" },
        { name: "Next.js", level: "Proficient", desc: "App Router, SSR, SSG & full-stack API routes", icon: "▲" },
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      subtitle: "Building secure, scalable, and high-performance server architectures",
      icon: <Server className="w-6 h-6 text-[#4edea3]" />,
      colorClass: "from-[#4edea3]/20 to-transparent",
      badgeColor: "text-[#4edea3] border-[#4edea3]/30 bg-[#4edea3]/10",
      skills: [
        { name: "Node.js", level: "Advanced", desc: "Asynchronous runtime, event-driven microservices", icon: "🟢" },
        { name: "Express.js", level: "Advanced", desc: "RESTful APIs, custom middlewares & route handling", icon: "🚀" },
        { name: "MongoDB", level: "Proficient", desc: "NoSQL document collections, indexing & aggregation", icon: "🍃" },
        { name: "Mongoose", level: "Proficient", desc: "Schema validation, population & ODM modelling", icon: "📊" },
        { name: "Better Auth", level: "Advanced", desc: "Modern session management, 2FA & secure auth flows", icon: "🔐" },
      ]
    },
    {
      id: "ai",
      title: "AI & Modern Tooling",
      subtitle: "Supercharging developer productivity and engineering velocity with AI",
      icon: <Bot className="w-6 h-6 text-[#c084fc]" />,
      colorClass: "from-[#c084fc]/20 to-transparent",
      badgeColor: "text-[#c084fc] border-[#c084fc]/30 bg-[#c084fc]/10",
      skills: [
        { name: "Claude Code", level: "Expert", desc: "Advanced agentic coding & deep codebase exploration", icon: "🤖" },
        { name: "Cursor AI", level: "Expert", desc: "AI-native IDE pairing, prompt engineering & refactoring", icon: "✨" },
        { name: "AI Code Review", level: "Advanced", desc: "Automated vulnerability scan, diff inspection & tests", icon: "🔍" },
        { name: "OpenAI", level: "Proficient", desc: "GPT APIs integration, embeddings & LLM prompting", icon: "🧠" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono font-medium text-primary"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL EXPERTISE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight"
        >
          My Technical <span className="text-gradient">Skillset</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg font-['Inter']"
        >
          A curated ecosystem of modern frontend frameworks, robust backend architectures, and AI-powered workflows.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"
        />
      </div>

      {/* 3 Skill Category Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top gradient highlight */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.colorClass}`} />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${category.badgeColor}`}>
                  {category.skills.length} Technologies
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white font-['Space_Grotesk'] mb-1">
                {category.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {category.subtitle}
              </p>

              {/* Skills Card Grid */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-bold text-sm text-white font-['Space_Grotesk']">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 pl-7 leading-snug">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Section {catIndex + 1} of 3</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Proficiency
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
