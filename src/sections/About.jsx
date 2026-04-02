import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Coffee, Zap } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useThemeStore } from '../store/themeStore';
import DelliBabuImage from '../assets/DelliBabu.jpeg';

const HIGHLIGHTS = [
  { icon: MapPin, text: 'Tamil Nadu, India' },
  { icon: Coffee, text: 'Coffee-fueled coder' },
  { icon: Zap, text: 'Open to freelance' },
];

const TECH_HIGHLIGHTS = ['React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'Tailwind'];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useThemeStore();

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-[#0D110E]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center">

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-green-500/5 blur-2xl" />

            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#1F2A25] aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <img
                src={DelliBabuImage}
                alt="Dellibabu S"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ── Content column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <SectionLabel>Know Me Better</SectionLabel>

            <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
              Crafting{' '}
              <span className="text-green-400">Digital</span>
              <br />
              Realities
            </h2>

            <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
              I&apos;m Dellibabu S, a Full-Stack Developer specializing in the MERN stack, building scalable web and mobile applications using MongoDB, Express.js, React, and Node.js. I focus on creating responsive user interfaces and reliable backend systems that power modern digital products.
            </p>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
              My work includes API integrations, microservice-based architectures, and cross-platform development with React Native. I handle deployments using cPanel, Vercel, Netlify, Firebase, and Docker, while exploring emerging technologies such as Web3 and AI/ML fundamentals.
            </p>

            <Button onClick={handleContact} variant="glow" size="lg">
              Let&apos;s Talk
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
