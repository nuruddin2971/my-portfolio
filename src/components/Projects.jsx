import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Eye
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import fitLogImg from '../assets/fit_log.png';
import devStackImg from '../assets/dev_stack.png';
import bookVibeImg from '../assets/book_vibe.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "FitLog",
      category: "Full Stack Fitness Platform",
      description: "A dark-themed, high-performance workout companion and library. Features 12+ categorized lifts across major muscle groups, interactive routine planning, set logging, and live exercise trackers.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
      image: fitLogImg,
      liveLink: "https://fit-dguc7z6vm-shojib2.vercel.app/",
      githubLink: "https://github.com/nuruddin2971/fit-log",
      architecture: {
        frontend: "React with custom hooks, fluid responsive grid layout, and Tailwind CSS dark-mode design system.",
        backend: "Stateful workout tracking, persistent routine store, and Vercel edge infrastructure."
      },
      keyFeatures: [
        "Comprehensive workout library (Chest, Back, Legs, Arms, Core, Full Body)",
        "Interactive routine planner ('Lock into today's plan')",
        "Live set logging with target reps, weights, and estimated calorie burn",
        "Sleek visual hierarchy with animated exercise preview cards"
      ],
      challenges: "Structuring multi-category workout filters with instantaneous search and responsive set counters without triggering layout shifts. Solved using optimized state selectors and memoized filter hooks.",
      futurePlans: "Integrating smartwatch biometric telemetry (Apple Health / Google Fit), community leaderboards, and AI workout recommendations."
    },
    {
      title: "DevStack",
      category: "Developer Tools & Stack Builder",
      description: "An interactive platform for engineers and architects to explore, compare, and assemble their ideal development stack across frontend, backend, databases, and DevOps tools.",
      tech: ["React", "Tailwind CSS", "JavaScript (ES6+)", "Netlify"],
      image: devStackImg,
      liveLink: "https://assignment-05-dev-stack.netlify.app/",
      githubLink: "https://github.com/nuruddin2971/Assignment-05",
      architecture: {
        frontend: "React SPA with component-driven architecture, custom badge pills, and Tailwind CSS.",
        backend: "Client-side state synchronization with persistent stack builder and Netlify edge deployment."
      },
      keyFeatures: [
        "Multi-tier tech catalog (React, Next.js, Node.js, PostgreSQL, Redis, Docker, etc.)",
        "Real-time 'Your Stack' builder sidebar with instant stack counter",
        "Categorized tags with difficulty ratings and popularity badges",
        "Instant add/remove technology controls with clean responsive drawers"
      ],
      challenges: "Enabling dynamic category-based selection while maintaining an accessible, responsive sidebar on mobile viewports. Resolved with modular context states.",
      futurePlans: "One-click starter boilerplate generation (`npx create-my-stack`), cloud architecture cost estimator, and exportable stack diagrams."
    },
    {
      title: "Book Vibe",
      category: "Book Discovery Platform",
      description: "A beautifully designed book discovery platform to explore amazing books, discover new stories, and find your next favorite read — all in one place. Features a curated collection with detailed book info.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
      image: bookVibeImg,
      liveLink: "https://b14-book-vibe-xi.vercel.app/",
      githubLink: "https://github.com/nuruddin2971/b14-book-vibe",
      architecture: {
        frontend: "React SPA with clean component architecture, responsive grid layout, and Tailwind CSS styling.",
        backend: "Client-side state management with local read-list tracking and Vercel CDN deployment."
      },
      keyFeatures: [
        "Curated popular books collection with cover images and ratings",
        "Detailed book pages with author, pages, publisher, and year info",
        "Read list and wishlist tracking with local persistence",
        "Clean light-themed UI with smooth navigation and book filtering"
      ],
      challenges: "Building an intuitive read-list system that persists across navigation without a backend, solved with localStorage-based state management and React context.",
      futurePlans: "Adding user authentication, community reviews, personalized reading goals, and integration with Google Books API for extended catalog."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-tertiary/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-tertiary/30 text-xs font-mono font-medium text-tertiary"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO SHOWCASE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg font-['Inter']"
        >
          Carefully crafted full-stack applications showcasing modern web technologies, scalable architectures, and interactive UX.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-tertiary to-primary rounded-full"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-tertiary/40 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-2"
          >
            <div>
              {/* Screenshot Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-slate-950/80 backdrop-blur-md text-slate-200 border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Quick Icon Links */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 hover:text-tertiary hover:border-tertiary/50 transition-all cursor-pointer shadow-md"
                      title="Open Live App"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer shadow-md"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-2 group-hover:text-tertiary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-['Inter'] leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-mono font-semibold text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3.5 px-4 rounded-2xl glass text-white text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-tertiary/40 hover:bg-tertiary/10 hover:text-tertiary flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group/btn"
              >
                <Eye className="w-4 h-4 text-tertiary group-hover/btn:scale-110 transition-transform" />
                <span>View Full Details & Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
