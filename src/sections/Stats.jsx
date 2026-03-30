import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { STATS } from '../utils/data';
import { useThemeStore } from '../store/themeStore';

function StatCard({ stat, inView }) {
  const count = useCounter(stat.value, 2000, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#1F2A25] bg-[#111715] hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.12),0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-default"
    >
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 group-hover:bg-green-500/15 group-hover:glow-green-sm transition-all duration-300">
        <Icon size={20} />
      </div>
      <div className="text-3xl font-black text-[#E6F4EA]">
        {count}
        <span className="text-green-400">{stat.suffix}</span>
      </div>
      <div className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useThemeStore();

  return (
    <section ref={ref} className={`py-16 ${isDark ? 'bg-[#0B0F0C]' : 'bg-[#F0FDF4]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
