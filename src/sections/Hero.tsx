import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Cpu, Database, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Clock, value: '25+', label: 'Years Experience' },
  { icon: Cpu, value: '4', label: 'Live GenAI Platforms' },
  { icon: Database, value: '99.9%', label: 'Uptime SLA' },
  { icon: Globe, value: '12+', label: 'Countries' },
];

const terminalLines = [
  { prompt: '> whoami', output: 'selvakumar-balakrishnan', delay: 0 },
  { prompt: '> role --current', output: 'Senior AI/ML Engineer & System Architect', delay: 0.5 },
  { prompt: '> expertise --list', output: 'GenAI Platforms • Multi-Tenant SaaS • System Design • MLOps', delay: 1 },
  { prompt: '> status', output: 'Building production-grade AI systems since 1999', delay: 1.5 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    // Animate terminal lines
    terminalLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, terminalLines[index].delay * 1000);
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-prof-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-prof-indigo/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Left: Professional Narrative */}
          <div className="space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-prof-bg-secondary/80 border border-prof-border rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-prof-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[11px] text-prof-slate font-bold uppercase tracking-widest">
                System Architect • GenAI Expert
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-prof-text leading-tight tracking-tighter">
                Selvakumar
                <br />
                <span className="bg-gradient-to-r from-prof-blue to-prof-indigo bg-clip-text text-transparent italic">
                  Balakrishnan
                </span>
              </h1>
              <p className="text-xl text-prof-slate max-w-xl leading-relaxed">
                Pioneering <span className="text-prof-text font-medium">Enterprise AI Systems</span> with 25+ years of architectural excellence.
                Specializing in high-scale GenAI platforms and multi-tenant SaaS.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-5">
              <Button
                onClick={() => scrollToSection('#platforms')}
                className="bg-prof-blue text-white hover:bg-prof-blue/90 font-bold px-8 h-12 rounded-lg shadow-lg shadow-prof-blue/20 transition-all hover:scale-105"
              >
                <Terminal className="mr-2.5 h-4 w-4" />
                Live Platforms
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('#architecture')}
                variant="outline"
                className="border-prof-border text-prof-text hover:bg-prof-bg-secondary h-12 px-8 rounded-lg"
              >
                <Cpu className="mr-2.5 h-4 w-4" />
                System Design
              </Button>
            </div>

            {/* Stats Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-slate-900">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="stat-card group"
                  >
                    <Icon className="h-5 w-5 text-prof-blue/60 mb-3 group-hover:text-prof-blue transition-colors" />
                    <p className="text-2xl font-bold text-prof-text mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-prof-slate font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div ref={terminalRef} className="hidden lg:block">
            <div className="terminal border-prof-border">
              <div className="terminal-header bg-prof-bg-secondary/50">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                </div>
                <span className="text-[10px] text-prof-slate font-bold tracking-widest ml-4">
                  TERMINAL SYSTEM v4.0
                </span>
              </div>

              <div className="terminal-body">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${visibleLines.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                  >
                    <div className="flex items-center">
                      <span className="terminal-prompt">❯</span>
                      <span className="terminal-command font-bold text-prof-blue">{line.prompt}</span>
                    </div>
                    {visibleLines.includes(index) && (
                      <div className="terminal-output">
                        {line.output}
                      </div>
                    )}
                  </div>
                ))}

                {/* Active Prompt */}
                <div className="flex items-center mt-2">
                  <span className="terminal-prompt">❯</span>
                  <span className="w-2 h-4 bg-prof-emerald animate-pulse" />
                </div>
              </div>
            </div>

            {/* Technical Context Card */}
            <div className="mt-8 prof-card p-[1px] bg-gradient-to-br from-prof-border/50 to-prof-bg-tertiary/50">
              <div className="bg-prof-bg rounded-[11px] overflow-hidden">
                <div className="px-5 py-3 bg-prof-bg-secondary/50 flex justify-between items-center border-b border-prof-border">
                  <span className="text-[10px] text-prof-slate font-bold tracking-widest">ARCHITECTURE.YAML</span>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-prof-blue/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-prof-blue/30" />
                  </div>
                </div>
                <div className="p-6 font-mono text-[13px] leading-relaxed relative">
                  <pre className="text-prof-slate/90">
                    <span className="text-prof-blue">genai_platform:</span>
                    <br />  <span className="text-prof-indigo">architecture:</span> multi-tenant-agentic
                    <br />  <span className="text-prof-indigo">llm_stack:</span> [gpt-4o, claude-3.5, gemini-1.5]
                    <br />  <span className="text-prof-indigo">vector_mesh:</span> hybrid-search-pinecone
                    <br />  <span className="text-prof-indigo">availability:</span> high-resilience-99.99
                    <br />  <span className="text-prof-indigo">production:</span> <span className="text-prof-emerald">true</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
