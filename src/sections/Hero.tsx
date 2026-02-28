import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Cpu, Database, Globe, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Clock, value: '25+', label: 'Years Experience' },
  { icon: Cpu, value: '6', label: 'Live GenAI Platforms' },
  { icon: Database, value: '99.9%', label: 'Uptime SLA' },
  { icon: Globe, value: '12+', label: 'Countries' },
];

const terminalLines = [
  { prompt: '> system_init', output: 'Authorized: Selvakumar Balakrishnan', delay: 0 },
  { prompt: '> get_role', output: 'Senior AI System Architect & GenAI Specialist', delay: 0.5 },
  { prompt: '> query --status', output: 'Orchestrating production-grade Multi-Agent workflows.', delay: 1 },
  { prompt: '> uptime', output: '25 Years Linear Expertise across BFSI, Healthcare & AI.', delay: 1.5 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    setVisibleLines([]);
    const timers = terminalLines.map((_, index) => {
      return setTimeout(() => {
        setVisibleLines(prev => {
          if (prev.includes(index)) return prev;
          return [...prev, index];
        });
      }, terminalLines[index].delay * 1000);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
      );

      gsap.fromTo(
        '.hero-stats',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: 'back.out(1.7)' }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen pt-28 pb-16 overflow-hidden bg-prof-bg">
      {/* Enterprise Architecture Background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-prof-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Bold Typography */}
          <div className="lg:col-span-7 hero-content space-y-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white shadow-sm rounded-xl">
              <Sparkles className="h-4 w-4 text-prof-blue" />
              <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">
                Technical Architect • GenAI Strategist
              </span>
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-black text-prof-navy leading-[1.02] tracking-tight">
                Engineering <br />
                <span className="text-prof-blue underline decoration-8 decoration-prof-blue/10 underline-offset-[12px]">Intelligence</span>
              </h1>
              <p className="text-xl text-prof-text-dim max-w-xl leading-relaxed font-medium">
                Designing high-compliance <span className="text-prof-navy font-bold">GenAI Ecosystems</span> and
                <span className="text-prof-navy font-bold"> Autonomous Architectures</span> that transform
                legacy enterprise complexity into scalable competitive advantage.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="h-16 px-10 bg-prof-navy text-white rounded-2xl shadow-xl shadow-prof-navy/20 hover:bg-prof-blue hover:scale-[1.02] transition-all text-lg font-bold">
                Deploy Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 border-2 border-prof-border text-prof-navy rounded-2xl hover:bg-prof-bg-tertiary text-lg font-bold transition-all">
                Architecture Specs
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 hero-stats border-t border-prof-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex items-center gap-2 text-prof-blue">
                    <stat.icon className="h-4 w-4" />
                    <span className="font-black text-[10px] uppercase tracking-widest text-prof-slate">{stat.label}</span>
                  </div>
                  <p className="text-4xl font-black text-prof-navy">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Pro Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-10 bg-prof-blue/5 blur-[100px] rounded-full opacity-50" />

            <div className="terminal-window rounded-3xl border border-prof-navy shadow-[0_32px_64px_-16px_rgba(15,23,42,0.3)] bg-prof-navy relative overflow-hidden">
              <div className="terminal-header flex items-center justify-between px-8 py-5 bg-prof-navy/50 border-b border-white/5 backdrop-blur-md">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-700" />
                </div>
                <div className="text-[10px] text-white/40 font-mono font-black tracking-[0.3em] uppercase">
                  selva_architecture.sys
                </div>
              </div>

              <div className="terminal-body p-10 space-y-8 min-h-[420px] bg-gradient-to-b from-prof-navy to-[#020617]">
                {visibleLines.map((index) => (
                  <div key={index} className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="flex items-center font-mono">
                      <span className="text-prof-indigo font-bold mr-3">λ</span>
                      <span className="text-slate-400 font-bold">{terminalLines[index].prompt}</span>
                    </div>
                    <div className="pl-6 border-l-2 border-prof-indigo/20 py-1">
                      <p className="text-white text-base font-bold tracking-tight">
                        {terminalLines[index].output}
                      </p>
                    </div>
                  </div>
                ))}
                {visibleLines.length < terminalLines.length && (
                  <div className="flex items-center gap-2 text-prof-indigo font-mono animate-pulse ml-1 mt-4">
                    <div className="w-2 h-5 bg-prof-indigo" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Processing Context...</span>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-emerald-500 font-black tracking-widest uppercase">System Operational</span>
                </div>
                <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">v4.0.0-PRO</span>
              </div>
            </div>

            {/* Floating Technical Overlay */}
            <div className="absolute -bottom-10 -right-6 p-8 bg-white border border-prof-border shadow-2xl rounded-3xl animate-float [animation-delay:2s]">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-prof-navy rounded-2xl flex items-center justify-center text-white shadow-lg shadow-prof-navy/20">
                  <Cpu className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] text-prof-slate font-black uppercase tracking-widest mb-1">Inference Speed</p>
                  <p className="text-2xl font-black text-prof-navy">~140 t/s</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
