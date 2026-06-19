import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code,
  Layers,
  Cpu, 
  Sparkles,
  Heart,
  Globe,
  Terminal,
  Compass,
  FileText,
  FileDown,
  Eye,
  ShieldCheck
} from 'lucide-react';

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export function About() {
  const certifications = [
    {
      title: 'CS50X Harvard University\'s Computer Science Certificate',
      issuer: 'Harvard University',
      link: "./src/assets/CS50X.pdf"
    },
    {
      title: 'Foundational C# with Microsoft Certificate',
      issuer: 'Microsoft - freeCodeCamp',
      link: "./src/assets/Microsoft_certificate.pdf"
    },
    {
      title: 'Responsive Web Design Certificate',
      issuer: 'freeCodeCamp',
      link: "./src/assets/Web_Dev_certificate.pdf"
    }
  ];

  const experiences: Experience[] = [
    {
      year: '2024 - Present',
      role: 'Software Developer',
      company: 'Sila Marketing Agency',
      description: 'Led the design and development of three different versions of the Marketing Platform architecture to enhance performance and deliver marketing services to 2K+ users.'
    },
    {
      year: '2024 - Present',
      role: 'Software Developer',
      company: 'Sila Marketing Agency',
      description: 'Integrated cloud services, to maintain solid infrastructure across the entire project, which saved my manager a 70% amount of money from other services.'
    },
    {
      year: '2024 - Present',
      role: 'Software Developer',
      company: 'Sila Marketing Agency',
      description: 'Communicated with clients about their SaaS projects and helped more than 10 clients design and solve issues related to their software applications.'
    },
    {
      year: '2024 - Present',
      role: 'Software Developer',
      company: 'Sila Marketing Agency',
      description: 'Integrated Online payment gateways to facilitate the payment process for clients and led to achieve more than 1000$/week.'
    },
    {
      year: '2024 - Present',
      role: 'Software Developer',
      company: 'Sila Marketing Agency',
      description: 'Collaborated with my developer colleague in a Node.js Backend to solve an issue related to currency conversion as well as designing a chat feature for the support team to communicate with clients, which led to a 30% increase in user engagement.'
    },
  ];

  const skillBadges = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Go (Golang)', 'SQL', 'Python', 'HTML5/CSS3', 'C', 'C++', 'Java'] },
    { category: 'Frameworks & Tools', items: ['React 19', 'Next.js', 'Vite', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS v4'] },
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 px-2" id="about-section">
      
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-gray-200/60 dark:border-zinc-900 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">SEC: 01 // AUTOBIOGRAPHY</span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-gray-950 dark:text-white leading-tight">
            Systems Engineer & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 font-bold">Workspace Craftsman</span>
          </h2>
        </div>
        <div className="font-mono text-[10px] text-gray-400 dark:text-zinc-500 self-end text-left md:text-right">
          <span>COORDINATES: Node-03 // Active</span><br />
          <span>SYS.TELEMETRY: COMPLIANT</span>
        </div>
      </div>

      {/* Biography */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h3 className="font-display font-medium text-lg text-gray-900 dark:text-zinc-100">
            Forging high-performance client layers and bulletproof backend modules.
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-655 dark:text-zinc-400 leading-relaxed">
            I am a specialized software systems architect with a passion for building robust developer platforms, low-latency API networks, and responsive interactive layouts. Guided by the principle of **architectural modesty**, I believe real engineering beauty is clean, decoupled, and transparent to maintain over time.
          </p>

          <p className="text-xs sm:text-sm text-gray-655 dark:text-zinc-400 leading-relaxed">
            My technical focus spans robust typesafe environments using **TypeScript** and backend architectures. When I am not building, I evaluate operational logs, study performance structures, and construct custom system widgets.
          </p>
        </div>

        {/* Core Values Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur border border-gray-150 dark:border-zinc-800/80 rounded-xl hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-2 text-cyan-500 mb-1.5">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">01 // LATENCY EXCELLENCE</span>
            </div>
            <p className="text-[11px] text-gray-550 dark:text-zinc-400 leading-normal">
              Structuring components, and optimizing code to ensure instantaneous response metrics.
            </p>
          </div>

          <div className="p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur border border-gray-150 dark:border-zinc-800/80 rounded-xl hover:border-indigo-500/50 transition-colors">
            <div className="flex items-center gap-2 text-indigo-505 dark:text-indigo-400 mb-1.5">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">02 // DECOUPLED CODE</span>
            </div>
            <p className="text-[11px] text-gray-550 dark:text-zinc-400 leading-normal">
              Adhering to pristine, modular file patterns with solid boundaries to defeat system bloat.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Matrix with beautiful dark tabs styling */}
      <div className="border border-gray-200 dark:border-zinc-850 bg-white/40 dark:bg-zinc-950/20 rounded-2xl p-6 relative">
        <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gray-50 dark:bg-zinc-950 px-3 py-0.5 border border-gray-200 dark:border-zinc-800 rounded-full font-mono text-[9px] text-gray-400 dark:text-zinc-500">
          [SYS_PROFILING: ENABLED]
        </div>

        <h3 className="font-display font-medium text-base text-cyan-500 dark:text-zinc-150 mb-6 flex items-center gap-2">
          <Code className="w-4.5 h-4.5 text-cyan-500" />
          Technical Proficiency Matrix
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillBadges.map((cat, idx) => (
            <div key={idx} className="space-y-4 bg-white/80 dark:bg-zinc-900/70 p-4 rounded-xl border border-gray-150 dark:border-zinc-850 shadow-sm transition-all hover:shadow-md">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold border-b border-gray-100 dark:border-zinc-800 pb-2">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((skill, l) => (
                   <span 
                    key={l}
                    className="text-[11px] bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-850 text-gray-700 dark:text-zinc-300 px-2 py-1 rounded hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono cursor-default"
                   >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 pt-4">
        <h3 className="font-display font-medium text-base text-cyan-500 dark:text-zinc-150 flex items-center gap-2">
          <Briefcase className="w-4.5 h-4.5 text-cyan-500" />
          Professional Milestones
        </h3>

        <div className="relative border-l-2 border-gray-150 dark:border-zinc-900 ml-4 pl-6 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Outer timeline node sphere with glowing effects */}
              <span className="absolute -left-[32px] top-1 bg-white dark:bg-zinc-950 border-2 border-cyan-500 w-4 h-4 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow group-hover:bg-cyan-500">
                <span className="w-1.5 h-1.5 bg-cyan-500 group-hover:bg-white rounded-full" />
              </span>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-2.5 py-0.5 rounded text-[10px] font-mono text-gray-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
                  <span>{exp.year}</span>
                </div>
                
                <h4 className="font-display font-medium text-sm text-gray-800 dark:text-gray-100 pt-1 group-hover:text-cyan-500 transition-colors">
                  {exp.role} <span className="text-gray-400 dark:text-zinc-650 font-normal font-sans">at</span> <span className="underline decoration-cyan-500/30 decoration-wavy">{exp.company}</span>
                </h4>
                
                <p className="text-xs text-gray-550 dark:text-zinc-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800/60 to-transparent" />

      {/* Credentials & Downloads Section */}
      <div className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-display font-medium text-base text-cyan-500 dark:text-zinc-150 flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-cyan-500" />
              Verified Credentials & Resume
            </h3>
            <p className="text-xs text-gray-450 dark:text-zinc-550 max-w-xl leading-normal">
              Instant access routes to formal qualifications, technical resumes, and authorized capability benchmarks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary Resume (PDF) Card */}
          <div className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-xl w-fit">
                  <FileText className="w-5 h-5 animate-pulse" />
                </div>
                <span className="font-mono text-[9px] text-gray-400 dark:text-zinc-500 border border-gray-200 dark:border-zinc-800 px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                  ATS Ready PDF
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold">
                  Technical Architecture CV
                </h4>
                <p className="font-display font-bold text-lg text-gray-950 dark:text-white mt-0.5">
                  Anes_Bouattou_CV.pdf
                </p>
                <p className="text-[11px] text-gray-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  Consolidated technical roadmap mapping system design competencies, Sila marketing accomplishments, and low-latency client integrations.
                </p>
              </div>

              {/* PDF specifications details */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono border-t border-gray-100 dark:border-zinc-850/60 pt-3">
                <div className="text-gray-400 dark:text-zinc-500 text-right">
                  LANG: <span className="text-gray-700 dark:text-zinc-300 font-bold">EN (US)</span>
                </div>
              </div>
            </div>

            <div className="flex mt-5">
              <a href="./src/assets/Anes_Bouattou_CV.pdf" target="_blank"
                className="flex-grow bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-wider font-mono transition-all glow-cyan-sm cursor-pointer whitespace-nowrap"
              >
                <FileDown className="w-3.5 h-3.5 stroke-[2.5]" /> DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Certifications Card (Horizontal Spans) */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 p-6 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-850/60 pb-3">
                <h4 className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-zinc-500 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 animate-pulse" /> Authorized Academic Accreditations
                </h4>
                <span className="font-mono text-[9px] text-emerald-500 font-semibold uppercase tracking-wider">
                  ● verified secure
                </span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-zinc-850/60">
                {certifications.map((cert, index) => (
                  <div key={index} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group/item">
                    <div className="space-y-1.5">
                      <span className="inline-block font-mono text-[8px] text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/5 border border-cyan-500/15 px-2 py-0.5 rounded uppercase font-bold tracking-wider leading-none">
                        {cert.issuer}
                      </span>
                      <h5 className="font-display font-bold text-xs sm:text-sm text-gray-800 dark:text-gray-100 group-hover/item:text-cyan-500 transition-colors">
                        {cert.title}
                      </h5>
                    </div>

                    <a href={cert.link} target="_blank"
                      className="cursor-pointer shrink-0 font-mono text-[9px] font-bold text-gray-500 dark:text-zinc-405 hover:text-cyan-500 border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 py-1.5 px-3 rounded-xl flex items-center gap-1.5 hover:border-cyan-500/40 transition-all select-none w-fit"
                    >
                      <FileDown className="w-3 h-3" /> DOWNLOAD PROOF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
