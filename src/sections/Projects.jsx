import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Star } from 'lucide-react';
import { GithubIcon } from '../components/ui/SocialIcons';
import SectionLabel from '../components/ui/SectionLabel';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { PROJECTS } from '../utils/data';
import { useThemeStore } from '../store/themeStore';

function ProjectModal({ project, onClose }) {
  const { isDark } = useThemeStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-lg rounded-3xl border p-8 shadow-2xl ${isDark ? 'bg-[#111715] border-[#1F2A25]' : 'bg-white border-green-100'}`}
      >
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl transition-all cursor-pointer ${isDark ? 'text-[#9CA3AF] hover:text-[#E6F4EA] hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-black/5'}`}
        >
          <X size={18} />
        </button>

        <div
          className="w-full h-44 rounded-2xl mb-6 flex items-center justify-center text-6xl"
          style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`, border: `1px solid ${project.color}25` }}
        >
          🚀
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className={`text-2xl font-black mb-3 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
          {project.description}
        </p>

        <div className="flex gap-3">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="glow" className="w-full justify-center">
              Live Demo <ExternalLink size={14} />
            </Button>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full justify-center">
              GitHub <GithubIcon size={14} />
            </Button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, inView, onClick }) {
  const { isDark } = useThemeStore();
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className={`
        group relative rounded-3xl border overflow-hidden cursor-pointer
        transition-all duration-300
        ${isFeatured ? 'md:col-span-2' : ''}
        ${isDark
          ? 'bg-[#111715] border-[#1F2A25] hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.15),0_25px_50px_rgba(0,0,0,0.5)]'
          : 'bg-white border-green-100 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1),0_25px_50px_rgba(0,0,0,0.08)]'
        }
      `}
    >
      {/* Image area */}
      <div
        className={`relative w-full overflow-hidden ${isFeatured ? 'h-56' : 'h-44'}`}
        style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}06)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-7xl select-none">
          🚀
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              View Details
            </span>
          </div>
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-500 text-black text-xs font-bold shadow-lg">
              <Star size={11} fill="black" /> Featured
            </span>
          </div>
        )}

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline">+{project.tags.length - 3}</Badge>
          )}
        </div>

        <h3 className={`text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-200 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 line-clamp-2 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
          {project.description}
        </p>

        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`
              flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200
              bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40
            `}
          >
            <ExternalLink size={12} /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`
              flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200
              ${isDark
                ? 'border border-[#1F2A25] text-[#9CA3AF] hover:text-[#E6F4EA] hover:border-green-500/30'
                : 'border border-green-100 text-gray-500 hover:text-gray-900 hover:border-green-300'
              }
            `}
          >
            <GithubIcon size={12} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(null);
  const { isDark } = useThemeStore();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-[#0D110E]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>My Work</SectionLabel>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
            Featured{' '}
            <span className="text-green-400">Projects</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-base ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
            Real-world products built with clean architecture, modern design, and scalable code.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="https://github.com/dellibabus" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <GithubIcon size={16} /> See All on GitHub
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
