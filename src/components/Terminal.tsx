import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, Shield, ChevronRight, CornerDownLeft, Cpu } from 'lucide-react';
import { TerminalLine } from '../types';

interface TerminalProps {
  onSuggestNavigation: (section: string) => void;
}

export function Terminal({ onSuggestNavigation }: TerminalProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      text: '🤖 Loading portfolio terminal emulator v3.5.2-production...',
      type: 'command',
    },
    {
      id: 'init-2',
      text: '🖥️ Found host profile: Anes (Systems Architect). System: ACTIVE.',
      type: 'success',
    },
    {
      id: 'init-3',
      text: '✨ Type "help" to list instructions, or click quick injectors to execute commands.',
      type: 'output',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTypingSimulated, setIsTypingSimulated] = useState(false);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal container
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus terminal input
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  // Parse command responses
  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newItems: TerminalLine[] = [];
    const idSeed = Date.now().toString();

    // Push the command input into logs first
    newItems.push({
      id: `in-${idSeed}`,
      text: `guest@austin-space:~$ ${cmd}`,
      type: 'input',
    });

    if (trimmed === '') {
      setHistory(prev => [...prev, ...newItems]);
      return;
    }

    switch (trimmed) {
      case 'help':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '💡 Available terminal micro endpoints:',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-2`,
          text: '  skills    - View technical capabilities matrix',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-3`,
          text: '  projects  - Link programmatically to active playrooms',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-4`,
          text: '  about     - Extract biography structures & chronologies',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-5`,
          text: '  contact   - Command automated scrolling to mail gateway',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-6`,
          text: '  neofetch  - Output system metadata & hardware profiles',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-7`,
          text: '  clear     - Refresh terminal output streams',
          type: 'output',
        });
        break;

      case 'skills':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '🛠️ SYS.TECH PROFICIENCY DATASET',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-2`,
          text: '  ├─ FRONTEND: TypeScript, React 19, NextJS, Redux, Tailwind CSS',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-3`,
          text: '  ├─ BACKEND:  Node.js, Express, Supabase, Vercel, Postgres',
          type: 'output',
        });
        break;

      case 'projects':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '📂 SHIPPED DEMOS (Active playgrounds responsive below):',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-2`,
          text: '  1. Aura Minimal Storefront - An E-Commerce website with a modern and sleek looking design, along side some advanced functionality.',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-3`,
          text: '  2. SoundStream Player - An immersive dark-themed digital music application featuring hardware media controller overlays, adjustable sound volume, and playlists.',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-4`,
          text: '  3. Aether Console Dashboard   - A state-of-the-art administrative terminal visualizing consolidated revenue, platform active users, and interactive graphs.',
          type: 'output',
        });
        setTimeout(() => onSuggestNavigation('projects'), 800);
        break;

      case 'about':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '👨‍💻 ROOT RESUME PARAMS:',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-2`,
          text: '  • Anes | Full-Stack Software Engineer',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-3`,
          text: '  • Philosophy: High performance and clean visual systems.',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-4`,
          text: '  • Core Target: Scalable and Production-Ready Systems with luxurious designs.',
          type: 'output',
        });
        setTimeout(() => onSuggestNavigation('about'), 1000);
        break;

      case 'contact':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '📬 Establishing signal uplink... Redirecting viewport.',
          type: 'success',
        });
        setTimeout(() => onSuggestNavigation('contact'), 600);
        break;

      case 'neofetch':
        newItems.push({
          id: `out-${idSeed}-1`,
          text: '   /\\_/\\     anes@cloud-node-03',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-2`,
          text: '  ( >.< )    --------------------',
          type: 'success',
        });
        newItems.push({
          id: `out-${idSeed}-3`,
          text: '   > ^ <     OS: WorkspaceEngine v3.5 (Active)',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-4`,
          text: '             Uptime: 3+ Years Systems Dev Mastery',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-5`,
          text: '             Shell: TypeScript/ESM Environment',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-6`,
          text: '             Framework: React 19 + Tailwind v4',
          type: 'output',
        });
        newItems.push({
          id: `out-${idSeed}-7`,
          text: '             Backend: PostgreSQL + Supabase + Vercel',
          type: 'output',
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        newItems.push({
          id: `out-${idSeed}-err`,
          text: `❌ Command unrecognized: "${cmd}". Type "help" to review available endpoints.`,
          type: 'error',
        });
        break;
    }

    setHistory(prev => [...prev, ...newItems]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTypingSimulated) return;
    executeCommand(inputValue);
    setInputValue('');
  };

  // Automated custom letter typing routine for button helpers
  const simulateCommandType = (cmd: string) => {
    if (isTypingSimulated) return;
    setIsTypingSimulated(true);
    setInputValue('');
    focusInput();

    let currentIndex = 0;
    const interval = setInterval(() => {
      setInputValue(() => cmd.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= cmd.length) {
        clearInterval(interval);
        setTimeout(() => {
          executeCommand(cmd);
          setInputValue('');
          setIsTypingSimulated(false);
        }, 300);
      }
    }, 60);
  };

  const quickPills = ['help', 'about', 'skills', 'projects', 'neofetch', 'contact', 'clear'];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-3 font-mono">
      {/* Terminal Board Structure */}
      <div 
        onClick={focusInput}
        className="bg-zinc-950 text-cyan-400 border border-zinc-850 rounded-xl overflow-hidden shadow-2xl transition-all h-[340px] flex flex-col outline-none cursor-text ring-1 ring-cyan-500/10 focus-within:ring-cyan-500/30"
        id="terminal-card"
        tabIndex={0}
      >
        {/* Apple style terminal statusbar */}
        <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-900 select-none">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block pointer-events-none" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80 block pointer-events-none" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block pointer-events-none" />
          </div>
          <span className="text-[10px] text-zinc-500 tracking-wider flex items-center gap-1.5 font-bold uppercase">
            <TermIcon className="w-3.5 h-3.5 text-zinc-400" />
            guest@austin-space:~ -- bash
          </span>
          <span className="w-14" />
        </div>

        {/* Console lines logs */}
        <div 
          ref={terminalRef}
          className="flex-1 p-5 overflow-y-auto text-xs space-y-2 select-text scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-transparent md:text-[13px]"
        >
          {history.map((line) => (
            <div 
              key={line.id} 
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'input' 
                  ? 'text-zinc-200' 
                  : line.type === 'success'
                  ? 'text-cyan-400 font-semibold'
                  : line.type === 'error'
                  ? 'text-rose-400 font-medium'
                  : line.type === 'command'
                  ? 'text-violet-400/90 italic'
                  : 'text-zinc-400'
              }`}
            >
              {line.text}
            </div>
          ))}

          {/* Prompt line input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-1.5 pt-1 text-zinc-200">
            <span className="text-cyan-500 shrink-0 select-none">
              <span className="hidden sm:inline">guest@austin-space:~$</span>
              <span className="inline sm:hidden">guest@ast:~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTypingSimulated}
              className="bg-transparent flex-1 border-none outline-none focus:ring-0 p-0 text-zinc-100 select-text caret-cyan-400 text-xs md:text-[13px] "
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Terminal input"
            />
            {!inputValue && (
              <span className="w-1.5 h-4 bg-cyan-400 animate-cursor-blink shrink-0 -translate-x-[2px]" />
            )}
            <CornerDownLeft className="w-3 h-3 text-zinc-700 opacity-40 shrink-0 hidden md:inline" />
          </form>
        </div>
      </div>

      {/* Pill action shortcuts */}
      <div className="flex flex-wrap items-center gap-1.5 px-1 py-1 selection:hidden select-none" id="terminal-shortcuts">
        <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-bold mr-1.5 uppercase tracking-wider flex items-center gap-1 select-none">
          <Shield className="w-3 h-3 text-zinc-500" />
          Quick Injectors:
        </span>
        {quickPills.map(pill => (
          <button
            key={pill}
            type="button"
            disabled={isTypingSimulated}
            onClick={() => simulateCommandType(pill)}
            className="text-[11px] bg-white dark:bg-zinc-900 hover:bg-cyan-550 dark:hover:bg-cyan-500 hover:text-black dark:hover:text-black transition-all font-semibold py-1 px-3 border border-gray-150 dark:border-zinc-800 shadow-sm text-gray-600 dark:text-zinc-400 hover:border-cyan-500 rounded-lg select-none disabled:opacity-50 cursor-pointer"
          >
            {pill}
          </button>
        ))}
      </div>
    </div>
  );
}
