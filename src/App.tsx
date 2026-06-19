import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  GitBranch, 
  Cpu, 
  Database, 
  Layers, 
  TrendingUp, 
  Heart,
  ChevronRight,
  Monitor,
  Workflow
} from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Terminal } from './components/Terminal';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  // Determine starting dark mode value from localStorage or user pre-sets
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const cached = localStorage.getItem('theme');
      if (cached) return cached === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true; // Default to eye-safe dark mode
    }
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const isScrollingToRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Side-effect: Sync body CSS classes with Dark Mode toggle
  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark', 'theme-dark');
        document.documentElement.style.colorScheme = 'dark';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark', 'theme-dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.error('Error applying theme settings:', e);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Single Page Scroll Engine
  const handleNavClick = (section: string) => {
    setActiveTab(section);
    
    // Set lock to temporarily disable IntersectionObserver highlights while smooth-scrolling
    isScrollingToRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingToRef.current = false;
    }, 850);

    if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = 
      document.getElementById(`${section}-section`) || 
      document.getElementById(section);

    if (element) {
      const navbarHeight = 70; // sticky header offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 12;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSuggestNavigation = (section: string) => {
    handleNavClick(section);
  };

  // Dynamic Scroll Active Section Spy (Intersection Observer)
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -45% 0px', // detects active middle-band section focus
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // If we are currently transitioning via active navbar selection click, ignore reports
      if (isScrollingToRef.current) return;

      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        const id = visibleEntry.target.id;
        const tabId = id.replace('-section', '');
        if (sectionIds.includes(tabId)) {
          setActiveTab(tabId);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach(id => {
      const el = document.getElementById(`${id}-section`) || document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden font-sans bg-dot-matrix dark:bg-dot-matrix-dark">
      
      {/* Premium ambient glow backdrops */}
      <div className="absolute top-0 left-[-15%] w-[50%] h-[500px] bg-cyan-500/[0.03] dark:bg-cyan-500/[0.02] pointer-events-none rounded-full blur-3xl" />
      <div className="absolute top-24 right-[-15%] w-[45%] h-[400px] bg-indigo-500/[0.03] dark:bg-indigo-500/[0.02] pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[450px] bg-cyan-500/[0.02] dark:bg-cyan-500/[0.01] pointer-events-none rounded-full blur-3xl" />

      {/* Navigation header bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavClick} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Main viewport frame */}
      <main className="flex-grow flex flex-col relative z-10">
        <div className="max-w-5xl w-full mx-auto px-4 py-8 md:py-20 space-y-20 md:space-y-36 flex-grow animate-fade-in">

          {/* Section 1: Home / Hero intro */}
          <section id="home-section" className="space-y-12 scroll-mt-24">
            
            {/* Hero Title Intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-[9px] tracking-widest font-bold uppercase rounded-full py-1.5 px-3 select-none border border-cyan-500/20 glow-cyan-sm"
              >
                <GitBranch className="w-3.5 h-3.5 stroke-[2.5]" />
                SYSTEM_PORT EXECUTION COMPLIANT
              </motion.div>
              
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-950 dark:text-white leading-tight">
                Anes Bouattou <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 font-bold">Software Engineer.</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-550 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
                Assembling typesafe full-stack applications, responsive real-time data visualizers, and interactive sandbox matrices.
              </p>
            </div>

            {/* Terminal hero component panel */}
            <div className="relative">
              <Terminal onSuggestNavigation={handleSuggestNavigation} />
            </div>

            {/* Operational tech highlights bento row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-150 dark:border-zinc-900" id="home-telemetry-highlights">
              
              <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4.5 rounded-2xl border border-gray-200/50 dark:border-zinc-850/60 shadow-sm hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-1.5 text-cyan-500">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">01 // BUNDLE STATS</span>
                </div>
                <span className="text-sm font-bold text-gray-950 dark:text-gray-100 block mt-2 font-mono uppercase tracking-tight group-hover:text-cyan-500 transition-colors">CODE_OPT_200</span>
                <span className="text-[10px] text-gray-500 dark:text-zinc-400 mt-1 block leading-relaxed">Files split cleanly to guarantee minimal initial payload latency.</span>
              </div>

              <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4.5 rounded-2xl border border-gray-200/50 dark:border-zinc-850/60 shadow-sm hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400">
                  <Database className="w-4 h-4" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">02 // DATA ENGINE</span>
                </div>
                <span className="text-sm font-bold text-gray-950 dark:text-gray-100 block mt-2 font-mono uppercase tracking-tight group-hover:text-indigo-400 transition-colors">DURABLE_SQL</span>
                <span className="text-[10px] text-gray-500 dark:text-zinc-400 mt-1 block leading-relaxed">Relational database structures aligned with strict data safety.</span>
              </div>

              <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4.5 rounded-2xl border border-gray-200/50 dark:border-zinc-850/60 shadow-sm hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-1.5 text-cyan-500">
                  <Layers className="w-4 h-4" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">03 // LAYER SAFETY</span>
                </div>
                <span className="text-sm font-bold text-gray-950 dark:text-gray-100 block mt-2 font-mono uppercase tracking-tight group-hover:text-cyan-500 transition-colors">TYPESAFE</span>
                <span className="text-[10px] text-gray-500 dark:text-zinc-400 mt-1 block leading-relaxed">Explicit static types mapped fully to prevent system failures.</span>
              </div>

              <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4.5 rounded-2xl border border-gray-200/50 dark:border-zinc-850/60 shadow-sm hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">04 // Deployment</span>
                </div>
                <span className="text-sm font-bold text-gray-950 dark:text-gray-100 block mt-2 font-mono uppercase tracking-tight group-hover:text-indigo-400 transition-colors">Availability</span>
                <span className="text-[10px] text-gray-500 dark:text-zinc-400 mt-1 block leading-relaxed">Flawless deployment process.</span>
              </div>
            </div>

            {/* Suggestive action button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => handleSuggestNavigation('projects')}
                className="cursor-pointer font-mono font-bold text-[10px] text-gray-450 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-all border border-gray-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 py-1.5 px-3 rounded-xl shadow-sm hover:shadow"
              >
                DEPLOY LAB WORKSPACES <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>

          {/* Section Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800/60 to-transparent" />

          {/* Section 2: About Section */}
          <section id="about-section" className="scroll-mt-24">
            <About />
          </section>

          {/* Section Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800/60 to-transparent" />

          {/* Section 3: Projects Section */}
          <section id="projects-section" className="scroll-mt-24">
            <Projects />
          </section>

          {/* Section Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800/60 to-transparent" />

          {/* Section 4: Contact Section */}
          <section id="contact-section" className="scroll-mt-24">
            <Contact />
          </section>

        </div>
      </main>

      {/* Footer copyright with unified aesthetic */}
      <footer className="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border-t border-gray-200/60 dark:border-zinc-900/65 py-8 select-none mt-auto transition-colors duration-300 relative z-10 font-mono">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>© {new Date().getFullYear()} Anes. Handshake signals secure on port_443.</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>React 19 + Tailwind v4 + TS + Motion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}
