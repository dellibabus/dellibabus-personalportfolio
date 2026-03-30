import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { WORKFLOW_STEPS } from '../utils/data';
import { useThemeStore } from '../store/themeStore';

export default function Workflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useThemeStore();

  return (
    <section
      id="workflow"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-[#0B0F0C]' : 'bg-[#F0FDF4]'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>How I Work</SectionLabel>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
            You&apos;re Just{' '}
            <span className="text-green-400">4 Steps</span>{' '}
            From
            <br />
            Your Online Presence
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-base ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
            A proven process from idea to launch, designed to deliver exceptional results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6 z-10">
                    {/* Outer ring */}
                    <div className={`
                      absolute inset-0 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300
                      bg-green-500/5 border border-green-500/20
                    `} />

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        relative w-20 h-20 rounded-2xl flex items-center justify-center border-2
                        transition-all duration-300
                        ${isDark
                          ? 'bg-[#111715] border-[#1F2A25] group-hover:border-green-500/60 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                          : 'bg-white border-green-100 group-hover:border-green-400/60 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                        }
                      `}
                    >
                      <Icon size={28} className="text-green-400" />
                    </motion.div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-500 text-black text-xs font-black flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-200 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 text-black font-bold text-base hover:bg-green-400 transition-all duration-200 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] cursor-pointer"
          >
            Start Now <Rocket size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
