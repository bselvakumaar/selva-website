import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Brain, Code, Award, Shield, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    icon: Brain,
    title: 'Executive Vision',
    description: 'Bridging the gap between high-level business objectives and complex AI engineering reality.',
    color: 'text-prof-blue',
    bg: 'bg-prof-blue/5'
  },
  {
    icon: Code,
    title: 'Architectural Mastery',
    description: 'Expertise in full-stack orchestration, from React frontends to robust Python/Go AI services.',
    color: 'text-prof-navy',
    bg: 'bg-prof-navy/5'
  },
  {
    icon: Shield,
    title: 'Compliance-First',
    description: 'Deep specialization in BFSI and Healthcare standards, ensuring audit-ready AI implementations.',
    color: 'text-prof-blue',
    bg: 'bg-prof-blue/5'
  },
  {
    icon: Cpu,
    title: 'Agentic Systems',
    description: 'Building autonomous, self-healing agentic workflows using LangGraph and advanced MLOps.',
    color: 'text-prof-navy',
    bg: 'bg-prof-navy/5'
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full py-28 bg-prof-bg overflow-hidden border-t border-prof-border/50">
      <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white rounded-xl shadow-sm">
                <Terminal className="h-4 w-4 text-prof-blue" />
                <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Technical Profile</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black text-prof-navy leading-[1.1] tracking-tight">
                Engineering Integrity <span className="text-prof-blue">Since 1999</span>
              </h2>

              <p className="text-xl text-prof-text-dim leading-relaxed font-medium max-w-2xl">
                With over <span className="text-prof-navy font-bold">25 years of linear progression</span> in systems engineering,
                I deliver the technical gravitas required for enterprise-scale transformation.
                My focus is architecting AI systems that don't just predict, but truly reason and orchestrate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {strengths.map((str) => (
                <div key={str.title} className="about-card p-8 bg-white border border-prof-border rounded-3xl transition-all hover:border-prof-blue hover:shadow-2xl hover:shadow-prof-navy/5 duration-500">
                  <div className={`w-14 h-14 ${str.bg} ${str.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <str.icon size={26} />
                  </div>
                  <h4 className="font-black text-xl text-prof-navy mb-3 tracking-tight">{str.title}</h4>
                  <p className="text-base text-prof-text-dim leading-relaxed font-medium">{str.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="absolute -inset-10 bg-prof-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl shadow-prof-navy/10 ring-1 ring-prof-border">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop"
                alt="Architecture Planning"
                className="w-full aspect-[4/5] object-cover contrast-[1.05] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prof-navy/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px]">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-prof-navy shadow-xl">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="text-white text-2xl font-black leading-tight">Expert Execution</p>
                    <p className="text-white/60 text-xs mt-1 font-mono font-black tracking-[0.3em] uppercase">Enterprise Standard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Blueprint Detail */}
            <div className="absolute -top-6 -right-6 p-6 bg-prof-navy rounded-3xl border border-white/10 shadow-3xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Shield size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest leading-none">Hardened Mesh</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
