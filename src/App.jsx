import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Workflow from './sections/Workflow';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ToastContainer from './components/ui/Toast';
import ScrollTop from './components/common/ScrollTop';

export default function App() {
  const { isDark, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme(isDark);
  }, []);

  return (
    <div className={isDark ? 'bg-[#0B0F0C] text-[#E6F4EA]' : 'bg-[#F0FDF4] text-[#0F172A]'}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Workflow />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />
      <ScrollTop />
    </div>
  );
}
