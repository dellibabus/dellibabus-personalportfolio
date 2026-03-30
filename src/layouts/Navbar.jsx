import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_LINKS } from '../utils/data';
import Button from '../components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'workflow', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? isDark
              ? 'glass shadow-[0_1px_0_rgba(31,42,37,0.8)] py-3'
              : 'glass-light shadow-[0_1px_0_rgba(187,247,208,0.6)] py-3'
            : 'py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="text-xl font-black tracking-tight cursor-pointer"
          >
            <span className={isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}>Delli</span>
            <span className="text-green-400">Babu</span>
            <span className="text-green-500">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
                    ${isActive
                      ? 'text-green-400 bg-green-500/10'
                      : isDark
                        ? 'text-[#9CA3AF] hover:text-[#E6F4EA] hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                    }
                  `}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`
                p-2 rounded-xl border transition-all duration-200 cursor-pointer
                ${isDark
                  ? 'border-[#1F2A25] text-[#9CA3AF] hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/5'
                  : 'border-green-200 text-gray-500 hover:text-green-600 hover:border-green-400'
                }
              `}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <Button
              onClick={() => handleNav('#contact')}
              variant="glow"
              size="sm"
              className="hidden md:inline-flex"
            >
              Let&apos;s Talk ✦
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`
                md:hidden p-2 rounded-xl border cursor-pointer transition-all duration-200
                ${isDark ? 'border-[#1F2A25] text-[#9CA3AF]' : 'border-green-200 text-gray-600'}
              `}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed top-[60px] left-0 right-0 z-40 overflow-hidden
              ${isDark ? 'glass border-b border-[#1F2A25]' : 'glass-light border-b border-green-100'}
            `}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => handleNav(href)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium cursor-pointer
                      transition-all duration-200
                      ${isActive
                        ? 'text-green-400 bg-green-500/10'
                        : isDark
                          ? 'text-[#9CA3AF] hover:text-[#E6F4EA] hover:bg-white/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
              <div className="pt-2 pb-1">
                <Button onClick={() => handleNav('#contact')} variant="glow" className="w-full justify-center">
                  Let&apos;s Talk ✦
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
