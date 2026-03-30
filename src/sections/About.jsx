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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

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

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0F0C]/60 via-transparent to-transparent" />

              {/* Availability badge */}
              {/* <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-2xl px-4 py-3 border border-green-500/20">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-sm text-green-400 font-semibold">Available for work</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Floating stat — projects */}
            {/* <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -right-4 top-16 hidden lg:block"
            >
              <div className={`px-4 py-3 rounded-2xl border shadow-xl ${isDark ? 'bg-[#111715] border-[#1F2A25]' : 'bg-white border-green-100 shadow-green-100/50'}`}>
                <div className="text-2xl font-black text-green-400">10+</div>
                <div className={`text-xs ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>Projects</div>
              </div>
            </motion.div> */}

            {/* Floating stat — commits */}
            {/* <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-4 bottom-24 hidden lg:block"
            >
              <div className={`px-4 py-3 rounded-2xl border shadow-xl ${isDark ? 'bg-[#111715] border-[#1F2A25]' : 'bg-white border-green-100 shadow-green-100/50'}`}>
                <div className="text-2xl font-black text-green-400">1K+</div>
                <div className={`text-xs ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>Commits</div>
              </div>
            </motion.div> */}
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

            {/* Highlights */}
            {/* <div className="flex flex-col gap-2 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={15} className="text-green-400 shrink-0" />
                  <span className={`text-sm ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>{text}</span>
                </div>
              ))}
            </div> */}

            {/* Tech badges */}
            {/* <div className="flex flex-wrap gap-2 mb-10">
              {TECH_HIGHLIGHTS.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div> */}

            <Button onClick={handleContact} variant="glow" size="lg">
              Let&apos;s Talk 👋
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
