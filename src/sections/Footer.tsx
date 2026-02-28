import { Linkedin, Github, Terminal, GitBranch, Cpu, Shield, Globe, ExternalLink } from 'lucide-react';

const footerLinks = {
  platforms: [
    { label: 'StockSteward AI', href: 'https://steward-platform.onrender.com' },
    { label: 'MedFlow EMR', href: 'https://emr-app-0909.onrender.com' },
    { label: 'StoreAI', href: 'https://store-ai-prd.onrender.com' },
    { label: 'EduPortal', href: 'https://eduportal-new.onrender.com' },
  ],
  navigation: [
    { label: 'Platforms', href: '#platforms' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'RAG Pipeline', href: '#rag-pipeline' },
    { label: 'Case Studies', href: '#case-studies' },
  ],
  connect: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/selvakumar-balakrishnan-8305641/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/bselvakumaar' },
  { icon: GitBranch, label: 'Bitbucket', href: 'https://bitbucket.org/selva-projects' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative w-full bg-prof-bg border-t border-prof-border overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

          {/* Brand & Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-prof-navy rounded-2xl flex items-center justify-center shadow-xl shadow-prof-navy/10">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-black text-prof-navy leading-none text-xl tracking-tight">Selvakumar</p>
                <p className="text-[10px] text-prof-blue font-black tracking-[0.3em] uppercase mt-1.5">AI Architect</p>
              </div>
            </div>
            <p className="text-base text-prof-text-dim max-w-xs leading-relaxed font-medium">
              Architecting autonomous core intelligence and high-resiliency cognitive systems since 1999.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white border border-prof-border rounded-2xl flex items-center justify-center text-prof-slate hover:text-prof-blue hover:border-prof-blue transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-[11px] font-black text-prof-navy uppercase tracking-[0.3em] mb-10">
              Live Architectures
            </h4>
            <ul className="space-y-5">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-prof-text-dim hover:text-prof-blue transition-colors flex items-center group font-bold tracking-tight"
                  >
                    <ExternalLink size={14} className="mr-3 text-prof-slate/40 group-hover:text-prof-blue transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-black text-prof-navy uppercase tracking-[0.3em] mb-10">
              Platform Directory
            </h4>
            <ul className="space-y-5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-prof-text-dim hover:text-prof-blue transition-colors flex items-center group font-bold tracking-tight"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-prof-border mr-3 group-hover:bg-prof-blue transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* System Context Overlay */}
          <div className="space-y-10">
            <h4 className="text-[11px] font-black text-prof-navy uppercase tracking-[0.3em]">
              Operational Status
            </h4>
            <div className="p-8 bg-prof-navy rounded-[32px] space-y-6 shadow-2xl shadow-prof-navy/10 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-10" />
              <div className="relative space-y-5">
                <div className="flex items-center gap-4">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  <span className="text-[10px] font-mono text-white/60 font-black uppercase tracking-widest">Auth: SEALED</span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-4 w-4 text-prof-blue" />
                  <span className="text-[10px] font-mono text-white/60 font-black uppercase tracking-widest">CDX: OPTIMIZED</span>
                </div>
                <div className="flex items-center gap-4">
                  <Cpu className="h-4 w-4 text-prof-blue" />
                  <span className="text-[10px] font-mono text-white/60 font-black uppercase tracking-widest">Core: v4.2 PRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-24 pt-10 border-t border-prof-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] text-prof-slate font-black uppercase tracking-[0.3em]">
              © 2026 Selva Architecture • Technical Excellence
            </p>
            <div className="h-1 w-1 bg-prof-border hidden md:block rounded-full" />
            <p className="text-[10px] text-prof-slate font-black uppercase tracking-[0.3em]">
              All Protocols Reserved
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase">System Operational</span>
            </div>
            <p className="text-[10px] text-prof-slate font-black uppercase tracking-[0.1em] flex items-center gap-1">
              Engineered for Resilience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
