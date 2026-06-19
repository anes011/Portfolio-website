import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Laptop, 
  Clock, 
  Copy, 
  Check, 
  Github, 
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailVal = "anesbibo03@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 px-2" id="contact-section">
      
      {/* Upper header section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-gray-200/60 dark:border-zinc-900 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">SEC: 03 // SECURE UPLINK PORTAL</span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-gray-950 dark:text-white leading-tight">
            Initiate Connection & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 font-bold">Collaborate On Systems</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-550 dark:text-zinc-400 max-w-sm leading-relaxed">
          Interested in working together or want to explore one of my showcased frontends further? Reach out directly via any channel below.
        </p>
      </div>

      {/* Bento Grid Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Email Card (Spans 6 cols on md, 4 on lg) */}
        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[195px] shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
          <div className="space-y-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-xl w-fit">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Direct Communication Route
              </h4>
              <p className="font-display font-bold text-lg text-gray-955 dark:text-white mt-1 break-all">
                {emailVal}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2.5 mt-5">
            <button
              onClick={handleCopyEmail}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider font-mono transition-all glow-cyan-sm cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" /> COPIED_OK
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" /> COPY ADDRESS
                </>
              )}
            </button>
            <a
              href={`mailto:${emailVal}`}
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-701 dark:text-zinc-300 hover:text-cyan-550 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-zinc-950 flex items-center justify-center transition-all bg-white dark:bg-transparent font-mono text-xs gap-1.5"
            >
              SEND EMAIL <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* WhatsApp Card (Spans 6 cols on md, 4 on lg) */}
        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[195px] shadow-sm relative overflow-hidden group glow-emerald-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
          <div className="space-y-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl w-fit flex items-center justify-center">
              <FaWhatsapp size={20} />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Instant Chat Route
              </h4>
              <p className="font-display font-bold text-lg text-gray-955 dark:text-white mt-1">
                WhatsApp Chat
              </p>
            </div>
          </div>
          
          <div className="flex gap-2.5 mt-5">
            <a
              href="https://wa.me/213673824153"
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider font-mono transition-all glow-emerald-sm cursor-pointer whitespace-nowrap text-center"
            >
              START CHATS <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Location & Timezone Card (Spans 12 cols on md, 4 on lg) */}
        <div className="md:col-span-12 lg:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-855 p-6 rounded-2xl flex flex-col justify-between min-h-[195px] shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
          <div className="space-y-3">
            <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 rounded-xl w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Operational Base Region
              </h4>
              <p className="font-display font-bold text-lg text-gray-955 dark:text-white mt-1">
                Algeria
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-950/40 border border-gray-150 dark:border-zinc-850 p-3 rounded-xl flex justify-between items-center text-xs mt-3 select-none">
            <span className="font-medium text-gray-600 dark:text-zinc-450 font-sans">Active Sync Interval</span>
            <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold">SUN — THU // 09:00 — 17:00 (GMT+1)</span>
          </div>
        </div>

        {/* GitHub / Workspace Profiles (Spans 8 cols) */}
        <div className="md:col-span-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.03] rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-3">
            <div className="p-2.5 bg-zinc-100 dark:bg-zinc-950/70 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 rounded-xl w-fit">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Developer Index & Repositories
              </h4>
              <h3 className="font-display font-bold text-base text-gray-950 dark:text-white mt-1 leading-snug">
                Review complete codebases and modular assets across my repository list.
              </h3>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="https://github.com/anesbibo03"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-zinc-950 hover:bg-zinc-900 text-cyan-400 hover:text-cyan-300 border border-zinc-850 text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-widest font-mono transition-all uppercase cursor-pointer w-full sm:w-fit"
            >
              <Github className="w-4 h-4" /> VISIT MY GITHUB <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Availability Status Card (Spans 4 cols) */}
        <div className="md:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-855 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl w-fit">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                Current Status
              </h4>
              <p className="font-display font-extrabold text-base text-emerald-600 dark:text-emerald-400 mt-1 uppercase tracking-wide leading-tight">
                Active & Available
              </p>
            </div>
          </div>

          <div className="text-[11px] text-gray-550 dark:text-zinc-400 leading-normal font-sans border-t border-gray-100 dark:border-zinc-850 pt-3 select-none flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0 animate-pulse" />
            <span>Available for project reviews & consults.</span>
          </div>
        </div>

      </div>

    </div>
  );
}
