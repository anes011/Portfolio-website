import React, { useState } from 'react';
import { Sun, Moon, Cpu, Menu, X, Code } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    // Scroll and set tab immediately inside the user gesture tap cycle
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-b border-gray-200/60 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand Label */}
        <button 
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer z-50"
        >
          <div className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/25 text-cyan-500 flex items-center justify-center transition-all group-hover:bg-cyan-500/20">
            <Code className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-display font-bold text-sm text-gray-950 dark:text-gray-50 block tracking-tight leading-none group-hover:text-cyan-500 transition-colors">
              Anes
            </span>
            <span className="font-mono text-[9px] text-gray-400 dark:text-zinc-550 block uppercase tracking-widest leading-none mt-1">
              Systems Architect
            </span>
          </div>
        </button>

        {/* Navigation Tabs and Controls */}
        <div className="flex items-center gap-3">
          {/* Desktop Nav Tabs (Hidden on mobile) */}
          <div className="hidden sm:flex items-center bg-gray-100/70 dark:bg-zinc-900/60 p-1 rounded-xl border border-gray-200/50 dark:border-zinc-850/60">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg cursor-pointer transition-all font-semibold ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-gray-200/30 dark:border-zinc-700/60'
                      : 'text-gray-500 hover:text-gray-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-500 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 shrink-0 cursor-pointer transition-all flex items-center justify-center shadow-sm"
            aria-label="Toggle dark mode theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-cyan-500" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-gray-200 dark:border-zinc-850 text-gray-500 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 sm:hidden flex items-center justify-center cursor-pointer shadow-sm z-50 transition-all"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer Overlay */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-900 shadow-xl transition-all duration-300 ease-in-out z-[100] overflow-hidden ${
          isOpen
            ? 'opacity-100 max-h-[300px] py-4 pointer-events-auto visible'
            : 'opacity-0 max-h-0 py-0 pointer-events-none invisible'
        }`}
      >
        <div className="px-4 flex flex-col gap-2">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`text-left w-full px-4 py-3 rounded-xl cursor-pointer text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-between border ${
                  isActive
                    ? 'bg-cyan-500/5 border-cyan-500/30 text-cyan-500'
                    : 'bg-gray-50/50 dark:bg-zinc-900/40 border-gray-200/50 dark:border-zinc-850/60 text-gray-700 dark:text-zinc-400'
                }`}
              >
                <span>{tab.label.toUpperCase()}</span>
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-500' : 'text-gray-450 dark:text-zinc-600'}`}>
                  {isActive ? 'ACTIVE_CONN' : 'ROUTE_AVAIL'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
