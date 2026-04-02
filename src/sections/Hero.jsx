import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import Button from "../components/ui/Button";
import { useThemeStore } from "../store/themeStore";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React Developer",
  "Frontend Developer",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        35,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-green-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { isDark } = useThemeStore();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? "bg-[#0B0F0C]" : "bg-[#F0FDF4]"}`}
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-green-500/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-green-400/4 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Availability badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span
            className={`text-sm font-medium ${isDark ? "text-[#9CA3AF]" : "text-gray-600"}`}
          >
            Available for new projects
          </span>
          <span className="text-xs px-2 py-0.5 bg-green-500/15 text-green-400 rounded-full font-semibold">
            Hire Me
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 ${isDark ? "gradient-text" : "gradient-text-light"}`}
        >
          Building Digital
          <br />
          <span>Products That</span>
          <br />
          <span className="text-green-400 glow-text">Matter.</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className={`text-xl md:text-2xl font-medium mb-6 ${isDark ? "text-[#9CA3AF]" : "text-gray-500"}`}
        >
          I&apos;m a <TypingText />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className={`max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 ${isDark ? "text-[#9CA3AF]" : "text-gray-500"}`}
        >
          Building high-performance, scalable Web & Mobile Apps. I help startups
          and businesses turn their ideas into beautiful, functional products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            onClick={() => handleScroll("contact")}
            variant="glow"
            size="lg"
          >
            Start a Project <ArrowRight size={16} />
          </Button>
          <Button
            onClick={() => handleScroll("contact")}
            variant="outline"
            size="lg"
          >
            Hire Me
          </Button>
        </motion.div>

        {/* Social + Resume */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: GithubIcon,
              href: "https://github.com/dellibabus",
              label: "GitHub",
            },
            {
              icon: LinkedinIcon,
              href: "https://linkedin.com/in/delli-babu-s",
              label: "LinkedIn",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                p-3 rounded-2xl border transition-all duration-200
                ${
                  isDark
                    ? "border-[#1F2A25] text-[#9CA3AF] hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/5 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    : "border-green-200 text-gray-500 hover:text-green-600 hover:border-green-400 hover:bg-green-50"
                }
              `}
            >
              <Icon size={18} />
            </a>
          ))}
          <div
            className={`w-px h-6 ${isDark ? "bg-[#1F2A25]" : "bg-green-200"}`}
          />
          <a
            href="https://drive.google.com/file/d/1jpNk5bTopwqtLbXKMckMqzX5lNITs44H/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className={`
              inline-flex items-center gap-2 text-sm font-medium transition-all duration-200
              ${isDark ? "text-[#9CA3AF] hover:text-green-400" : "text-gray-500 hover:text-green-600"}
            `}
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
