import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Music, 
  Activity, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database,
  Terminal,
  ChevronRight,
  Sparkles,
  Link2
} from 'lucide-react';
import { Project } from '../types';

// Import high-resolution generated snapshots
import ecommerceImg from '../assets/images/ecommerce_preview_1781883639624.jpg';
import musicImg from '../assets/images/music_player_preview_1781883654813.jpg';
import dashboardImg from '../assets/images/dashboard_preview_1781883670559.jpg';

export function Projects() {
  const projectsData: Project[] = [
    {
      id: 'ecommerce',
      title: 'Aura Minimal Storefront',
      slogan: 'Curated Objects for Mindful Architectural Spaces',
      description: 'An exquisite high-end minimalist storefront showcasing curated items, tag filters, integrated cart additions, and beautiful dark typography.',
      longDescription: 'Aura represents the pinnacle of premium editorial e-commerce. Styled in high-contrast charcoal canvas, it processes sophisticated modular shopping cart operations, live subtotal increments, and secure mockup checkouts inside a gorgeous responsive interface.',
      tags: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Editorial Design', 'Client State'],
      iconName: 'ShoppingCart',
      highlights: [
        'Pragmatic cart state operations managing items, unit modifiers, and real-time totals.',
        'Fully responsive product grid adjusting fluidly across varying desktop rows and tap zones.',
        'Immersive product details container styling high-contrast imagery on deep obsidian panels.'
      ],
      metrics: [
        { label: 'Subtotal calculation', value: '< 1.0ms' },
        { label: 'Asset bundles', value: '11.8kb entry' },
        { label: 'Render rate', value: '60.0 fps stable' }
      ],
      githubUrl: 'https://github.com/anesbibo03/aura-minimal-store',
      liveUrl: 'https://aura-storefront.example.com',
      imageUrl: ecommerceImg,
      sandboxId: 'ecommerce'
    },
    {
      id: 'musicplayer',
      title: 'SoundStream Player',
      slogan: 'Tactile Audio Controls & Integrated Sourced Mixes',
      description: 'An immersive dark-themed digital music application featuring hardware media controller overlays, adjustable sound volume, and playlists.',
      longDescription: 'SoundStream features exceptional real-time playback simulation. Clicking play/pause triggers reactive, CSS keyframe animations resembling mechanical studio equalizer boards, linked cleanly to playlist selector hooks.',
      tags: ['React 18+', 'Sound Filters', 'Visualizer Loop', 'Cyber-Punk UI'],
      iconName: 'Music',
      highlights: [
        'Tactile audio playback handlers managing volume sliders and track skipping seamlessly.',
        'Graphic equalizer equalizer bars animating reactively with state-dependent play triggers.',
        'Curated library sections mapping dynamic play/pause cards with clean album designs.'
      ],
      metrics: [
        { label: 'Visual visual cycle', value: '120ms tick' },
        { label: 'UI layout latency', value: 'Immediate' },
        { label: 'Performance impact', value: '< 0.3% CPU' }
      ],
      githubUrl: 'https://github.com/anesbibo03/soundstream-player',
      liveUrl: 'https://soundstream-player.example.com',
      imageUrl: musicImg,
      sandboxId: 'musicplayer'
    },
    {
      id: 'dashboard',
      title: 'Aether Console Dashboard',
      slogan: 'Interactive Enterprise Telemetry & Reporting Portal',
      description: 'A state-of-the-art administrative terminal visualizing consolidated revenue, platform active users, and interactive graphs.',
      longDescription: 'Aether Console operates as a highly optimized enterprise telemetry board. It hooks responsive, custom-styled SVG area charts to telemetry toggles, redrawing bezier curves gracefully to depict real-time enterprise metrics.',
      tags: ['React 18+', 'Glow Shaders', 'Data Visualization', 'Interactive Cockpit'],
      iconName: 'Activity',
      highlights: [
        'Consolidated Enterprise metrics tracking monthly growth totals and revenue margins.',
        'Dynamic visual toggles redrawing area vectors effortlessly across different tabs.',
        'High-density dashboard layouts optimized for responsive viewpoints and dark mode.'
      ],
      metrics: [
        { label: 'Chart rendering', value: 'SVG Math (0ms)' },
        { label: 'Grid scale accuracy', value: '100% Fluid' },
        { label: 'Uptime simulation', value: '99.98% stable' }
      ],
      githubUrl: 'https://github.com/anesbibo03/aether-console-dashboard',
      liveUrl: 'https://aether-console.example.com',
      imageUrl: dashboardImg,
      sandboxId: 'dashboard'
    }
  ];

  const [activeProjectId, setActiveProjectId] = useState<string>('ecommerce');

  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];

  // Helper to map icon names to actual JSX elements
  const renderProjectIcon = (iconName: string, active: boolean) => {
    const cls = `w-4.5 h-4.5 transition-transform group-hover:scale-110 ${active ? 'text-cyan-500' : 'text-gray-400 dark:text-zinc-500'}`;
    if (iconName === 'ShoppingCart') return <ShoppingCart className={cls} />;
    if (iconName === 'Music') return <Music className={cls} />;
    return <Activity className={cls} />;
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 px-2" id="projects-section">
      
      {/* Header section with telemetry aesthetics */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-gray-200/60 dark:border-zinc-900 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">SEC: 02 // PROJECT PLAYGROUNDS</span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-gray-950 dark:text-white leading-tight">
            Performant Interfaces & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 font-bold">Functional Prototypes</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-550 dark:text-zinc-400 max-w-sm leading-relaxed">
          I build to explore. Below are three specialized web frontend applications that showcase what I can build. Click any option to load its interactive sandbox and explore its custom features.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Workspace Selector Selector Cards */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-2.5 lg:pb-0 scrollbar-none -mx-2 px-2 lg:mx-0 lg:px-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold px-1.5 lg:block hidden">
            CHOOSE WORKBENCH MODULE:
          </div>
          {projectsData.map((proj) => {
            const isActive = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`group text-left p-3.5 lg:p-4 rounded-xl border transition-all relative overflow-hidden flex items-center justify-between cursor-pointer shrink-0 min-w-[210px] sm:min-w-[245px] lg:min-w-0 lg:w-full ${
                  isActive 
                    ? 'bg-cyan-500/5 dark:bg-cyan-500/10 border-cyan-500 ring-1 ring-cyan-500/20 shadow-md shadow-cyan-500/10' 
                    : 'bg-white dark:bg-zinc-900 hover:bg-gray-55 dark:hover:bg-zinc-850/50 border-gray-150 dark:border-zinc-805 shadow-sm'
                }`}
              >
                {/* Active side indicator pill - horizontal bar on top for mobile list, left bar for desktop */}
                {isActive && (
                  <div className="absolute top-0 left-0 lg:bottom-0 lg:w-1 w-full lg:h-auto h-1 bg-cyan-500 lg:rounded-r rounded-b" />
                )}

                <div className="flex items-center gap-3.5">
                  <div className={`p-2 rounded-lg border flex items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-cyan-500/10 dark:bg-cyan-500/10 border-cyan-500/40' 
                      : 'bg-gray-50 dark:bg-zinc-950 border-gray-150 dark:border-zinc-900'
                  }`}>
                    {renderProjectIcon(proj.iconName, isActive)}
                  </div>
                  <div>
                    <h4 className={`font-display font-semibold text-sm transition-colors ${
                      isActive ? 'text-gray-950 dark:text-white' : 'text-gray-750 dark:text-zinc-350 font-medium'
                    }`}>
                      {proj.title}
                    </h4>
                    <span className="text-[9px] font-mono text-gray-450 dark:text-zinc-500 block leading-tight mt-1 uppercase tracking-wider">
                      {proj.tags[0]} • {proj.tags[proj.tags.length - 1] || 'Vite'}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 text-gray-400 dark:text-zinc-650 transition-all lg:block hidden ${
                  isActive ? 'translate-x-1 text-cyan-500' : 'group-hover:translate-x-0.5'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: In-depth project breakdown with its nested Simulator */}
        <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 rounded-2xl p-6 md:p-8 flex flex-col gap-6.5 shadow-xl relative overflow-hidden" id="project-detail-panel">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading meta information */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-zinc-855 pb-5">
            <div className="space-y-1">
              <span className="text-[8px] font-mono tracking-widest text-cyan-605 dark:text-cyan-500 uppercase px-1.5 py-0.5 bg-cyan-500/10 rounded font-bold">
                PORT_ID: {activeProject.id.toUpperCase()}_v3_PROD
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-gray-950 dark:text-white mt-1">
                {activeProject.title}
              </h3>
              <p className="text-xs font-mono text-zinc-450 dark:text-zinc-400 uppercase tracking-widest">
                {activeProject.slogan}
              </p>
            </div>

            {/* Simulated link buttons */}
            <div className="flex gap-2">
              <a 
                href={activeProject.githubUrl}
                target="_blank" 
                rel="noreferrer noopener"
                className="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-650 hover:text-cyan-500 dark:text-zinc-450 dark:hover:text-cyan-405 bg-white hover:bg-gray-55 dark:bg-zinc-950 dark:hover:bg-zinc-900 flex items-center justify-center transition-colors shadow-sm"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={activeProject.liveUrl}
                target="_blank" 
                rel="noreferrer noopener"
                className="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-650 hover:text-cyan-500 dark:text-zinc-455 dark:hover:text-cyan-405 bg-white hover:bg-gray-55 dark:bg-zinc-950 dark:hover:bg-zinc-900 flex items-center justify-center transition-colors shadow-sm"
                title="Launch Live Prototype"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* HIGH RESOLUTION PREVIEW IMAGE - ELEGANT BROWSER FRAME */}
          {(() => {
            const getPreviewDesign = (id: string) => {
              switch (id) {
                case 'ecommerce':
                  return {
                    bg: 'bg-gradient-to-br from-neutral-50 to-stone-100/80 dark:from-zinc-900 dark:to-neutral-950',
                    badge: 'border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-500/5',
                    url: 'aura.studio/curated-spaces',
                    shadow: 'shadow-amber-500/[0.03]'
                  };
                case 'musicplayer':
                  return {
                    bg: 'bg-gradient-to-br from-neutral-50 to-emerald-50/40 dark:from-zinc-900 dark:to-zinc-950',
                    badge: 'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5',
                    url: 'soundstream.audio/offline-player',
                    shadow: 'shadow-emerald-500/[0.03]'
                  };
                case 'dashboard':
                default:
                  return {
                    bg: 'bg-gradient-to-br from-neutral-50 to-cyan-50/40 dark:from-zinc-900 dark:to-zinc-950',
                    badge: 'border-cyan-500/20 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5',
                    url: 'aether-console.io/analytics',
                    shadow: 'shadow-cyan-500/[0.03]'
                  };
              }
            };
            const design = getPreviewDesign(activeProject.id);

            return (
              <div className={`relative flex flex-col w-full rounded-xl overflow-hidden border border-gray-150 dark:border-zinc-800 shadow-lg dark:shadow-2xl/40 ${design.bg} ${design.shadow} transition-all duration-350`}>
                {/* Browser Titlebar */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50/90 dark:bg-zinc-950/90 border-b border-gray-150/80 dark:border-zinc-850/80 backdrop-blur-sm select-none">
                  {/* Window dots */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 dark:bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/70" />
                  </div>
                  
                  {/* Search/Address bar */}
                  <div className="flex items-center justify-center bg-white dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800/80 rounded px-2.5 py-0.5 text-[9px] font-mono text-gray-400 dark:text-zinc-550 max-w-sm w-full mx-4 shadow-sm select-none truncate leading-none">
                    <span className="text-gray-300 dark:text-zinc-700 mr-0.5 select-none font-sans">https://</span>
                    <span className="text-gray-650 dark:text-zinc-400 font-medium">{design.url}</span>
                  </div>
                  
                  {/* Spacer to align */}
                  <div className="w-10 shrink-0 hidden sm:block" />
                </div>

                {/* Screenshot View Stage */}
                <div className="p-3 sm:p-5 md:p-6 lg:p-7 flex items-center justify-center relative group/preview">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 to-transparent blur-xl pointer-events-none opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative shadow-md sm:shadow-xl rounded-lg overflow-hidden border border-gray-200/80 dark:border-zinc-800 max-w-full transform group-hover/preview:scale-[1.008] transition-transform duration-500 bg-zinc-900 leading-none">
                    <img 
                      src={activeProject.imageUrl} 
                      alt={`${activeProject.title} Snapshot Preview`}
                      className="w-full h-auto object-contain max-h-[240px] sm:max-h-[300px] md:max-h-[360px] lg:max-h-[420px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4">
                  <div className={`text-[8px] font-mono font-bold px-2.5 py-1 rounded border shadow-sm flex items-center gap-1 leading-none select-none ${design.badge}`}>
                    <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                    LIVE VIEW
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Long Description and Highlights */}
          <div className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Architecture Overview
              </h4>
              <p className="text-xs sm:text-sm text-gray-655 dark:text-zinc-400 leading-relaxed italic">
                "{activeProject.longDescription}"
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeProject.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-mono bg-gray-100 dark:bg-zinc-950/70 border border-gray-150 dark:border-zinc-850 text-gray-600 dark:text-zinc-400 py-0.5 px-2 rounded-md font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Specific custom bullets highlights */}
          <div className="space-y-2 bg-gray-50/40 dark:bg-zinc-900/30 p-4 rounded-xl border border-gray-150 dark:border-zinc-850">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
              Key Engineering Achievements
            </h4>
            <ul className="space-y-2 pl-1">
              {activeProject.highlights.map((bullet, idx) => (
                <li key={idx} className="text-xs text-gray-655 dark:text-zinc-450 flex items-start gap-1.5 leading-snug">
                  <span className="text-cyan-500 font-mono mt-0.5 shrink-0">├─</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PROMINENT LAUNCH WEB APP CALLOUT */}
          <div className="bg-cyan-500/[0.02] dark:bg-cyan-500/[0.015] p-5 rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm mt-1">
            <div className="space-y-1 text-center sm:text-left select-none max-w-md">
              <span className="text-[9px] font-mono tracking-widest text-cyan-600 dark:text-cyan-400 block font-bold uppercase leading-none">
                DEPLOYED LINK ACCESS
              </span>
              <p className="text-xs text-gray-550 dark:text-zinc-400 leading-normal">
                This app is a static client-side frontend showcase with zero backend overhead. Access the live edge-deployed site directly.
              </p>
            </div>
            <a 
              href={activeProject.liveUrl}
              target="_blank" 
              rel="noreferrer noopener"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 border border-cyan-500/25 text-black font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.015] active:scale-95 tracking-widest font-mono transition-all glow-cyan-sm uppercase whitespace-nowrap cursor-pointer shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" /> Launch Live App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
