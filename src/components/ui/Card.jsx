import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, glow = false }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.25 }}
      className={`
        rounded-2xl border p-6
        bg-[#111715] border-[#1F2A25]
        dark-card
        transition-all duration-300
        ${hover ? 'hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.15),0_20px_40px_rgba(0,0,0,0.4)]' : ''}
        ${glow ? 'glow-green' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
