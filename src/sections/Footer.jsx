import { motion } from "framer-motion";
import { Mail, ArrowUp, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import { useThemeStore } from "../store/themeStore";

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/dellibabus", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/delli-babu-s",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sdellibabu8@gmail.com", label: "Email" },
];

export default function Footer() {
  const { isDark } = useThemeStore();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative py-20 overflow-hidden ${isDark ? "bg-[#0B0F0C]" : "bg-[#F0FDF4]"}`}
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-green-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Big CTA */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 ${isDark ? "text-[#E6F4EA]" : "text-[#0F172A]"}`}
          >
            LET&apos;S WORK
            <br />
            <span className="text-green-400 glow-text">TOGETHER</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 text-black font-bold text-base hover:bg-green-400 transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] cursor-pointer mb-10"
          >
            Start a Project <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-10 ${isDark ? "bg-[#1F2A25]" : "bg-green-100"}`}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="mailto:sdellibabu8@gmail.com"
              className={`flex items-center gap-2 text-sm transition-colors duration-200 ${isDark ? "text-[#9CA3AF] hover:text-green-400" : "text-gray-500 hover:text-green-600"}`}
            >
              <Mail size={14} />
              sdellibabu8@gmail.com
            </a>
            <a
              href="tel:+919344262658"
              className={`flex items-center gap-2 text-sm transition-colors duration-200 ${isDark ? "text-[#9CA3AF] hover:text-green-400" : "text-gray-500 hover:text-green-600"}`}
            >
              <Phone size={14} />
              +91 9344262658
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`
                  p-2.5 rounded-xl border transition-all duration-200
                  ${
                    isDark
                      ? "border-[#1F2A25] text-[#9CA3AF] hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/5"
                      : "border-green-200 text-gray-500 hover:text-green-600 hover:border-green-400 hover:bg-green-50"
                  }
                `}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`h-px my-8 ${isDark ? "bg-[#1F2A25]" : "bg-green-100"}`}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className={`text-sm ${isDark ? "text-[#9CA3AF]" : "text-gray-400"}`}
          >
            © 2026 Delli Babu S. All Rights Reserved. Designed to impress.
          </p>
          <button
            onClick={scrollTop}
            className={`
              flex items-center gap-2 text-sm font-medium transition-all duration-200 cursor-pointer
              ${isDark ? "text-[#9CA3AF] hover:text-green-400" : "text-gray-400 hover:text-green-600"}
            `}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
