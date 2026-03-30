import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/ui/SectionLabel';
import { SKILLS } from '../utils/data';
import { useThemeStore } from '../store/themeStore';

const CATEGORIES = ['Frontend', 'Backend', 'Tools'];

function SkillCard({ skill, index, inView }) {
  const { isDark } = useThemeStore();
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.04 }}
      className={`
        group relative flex flex-col items-center gap-3 p-5 rounded-2xl border
        cursor-default transition-all duration-300
        ${isDark
          ? 'bg-[#111715] border-[#1F2A25] hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.15),0_12px_30px_rgba(0,0,0,0.4)]'
          : 'bg-white border-green-100 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.1),0_12px_30px_rgba(0,0,0,0.05)]'
        }
      `}
    >
      <span className="text-3xl text-green-400 group-hover:scale-110 transition-transform duration-200">
        <Icon size={28} />
      </span>
      <span className={`text-sm font-semibold text-center ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
        {skill.name}
      </span>

      {/* Hover glow dot */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState('Frontend');
  const { isDark } = useThemeStore();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-[#0B0F0C]' : 'bg-[#F0FDF4]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Technical Arsenal</SectionLabel>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
            Technologies I{' '}
            <span className="text-green-400">Work With</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-base ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
            A comprehensive list of tools and technologies I use to build digital products.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                ${active === cat
                  ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                  : isDark
                    ? 'border border-[#1F2A25] text-[#9CA3AF] hover:text-green-400 hover:border-green-500/30'
                    : 'border border-green-200 text-gray-500 hover:text-green-600 hover:border-green-400'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
          >
            {SKILLS[active].map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
