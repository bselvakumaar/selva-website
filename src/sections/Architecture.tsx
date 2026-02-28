import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cpu,
  Zap,
  Shield,
  Layers,
  Activity,
  Box,
  Network
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Network,
    title: 'Multi-Agent Mesh',
    description: 'Autonomous agents collaborating via asynchronous task queues for complex problem solving.',
  },
  {
    icon: Zap,
    title: 'Low-Latency Inference',
    description: 'SLA-driven inference orchestration with dynamic load balancing across multiple provider regions.',
  },
  {
    icon: Shield,
    title: 'Governance Layer',
    description: 'Production-grade security with real-time PII filtering and audit logging across all LLM interactions.',
  },
  {
    icon: Layers,
    title: 'Context Engineering',
    description: 'Sophisticated RAG pipelines using hybrid vector-keyword search and cross-encoder re-ranking.',
  },
];

const ArchitectureFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-[40px] border border-prof-navy p-12 overflow-hidden bg-prof-navy shadow-2xl">
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      <div className="relative h-full flex items-center justify-between gap-8">
        {[
          { id: 0, label: 'Client / API', icon: Activity },
          { id: 1, label: 'Agentic Core', icon: Cpu },
          { id: 2, label: 'Vector Mesh', icon: Box },
          { id: 3, label: 'Governance', icon: Shield }
        ].map((step, idx) => (
          <div key={step.id} className="relative flex-1 flex flex-col items-center group">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-700 ${activeStep === idx ? 'bg-prof-blue text-white shadow-[0_0_40px_rgba(29,78,216,0.3)] scale-110' : 'bg-white/5 text-slate-500 border border-white/10'
              }`}>
              <step.icon size={32} />
            </div>
            <p className={`mt-6 font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${activeStep === idx ? 'text-white' : 'text-slate-600'
              }`}>{step.label}</p>

            {idx < 3 && (
              <div className="absolute top-10 left-[60%] w-[80%] h-px bg-white/5">
                <div className={`h-full bg-prof-blue transition-all duration-[3000ms] ease-linear ${activeStep === idx ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-12 font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">
        System_Identity: Architecture_Mesh_v4.0
      </div>
    </div>
  );
};

export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feat-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
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
    <section ref={sectionRef} id="architecture" className="relative w-full py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-prof-border to-transparent" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-prof-bg shadow-sm rounded-xl">
                <Box className="h-4 w-4 text-prof-blue" />
                <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Modular Blueprint</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-prof-navy leading-[1.1] tracking-tight">
                High-Performance <br />
                <span className="text-prof-blue">Neural Mesh</span>
              </h2>
              <p className="text-xl text-prof-text-dim max-w-xl leading-relaxed font-medium">
                I design and deploy resilient AI systems that handle enterprise-scale orchestration.
                Focusing on strict governance, ultra-low latency, and adaptive context windows.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="feat-card group">
                  <div className="w-14 h-14 bg-white border border-prof-border rounded-2xl flex items-center justify-center text-prof-navy mb-6 group-hover:bg-prof-navy group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-prof-navy/10">
                    <feature.icon size={26} />
                  </div>
                  <h4 className="font-black text-xl text-prof-navy mb-3 tracking-tight group-hover:text-prof-blue transition-colors">{feature.title}</h4>
                  <p className="text-base text-prof-text-dim font-medium leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-prof-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <ArchitectureFlow />

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: 'Latency', val: '42ms', sub: 'P99' },
                { label: 'Integrity', val: '99.9%', sub: 'SLA' },
                { label: 'Precision', val: '98.4%', sub: 'RAG' }
              ].map(metric => (
                <div key={metric.label} className="p-6 bg-white border border-prof-border rounded-3xl flex flex-col items-center shadow-sm">
                  <p className="text-[10px] text-prof-blue font-black uppercase tracking-widest mb-1">{metric.label}</p>
                  <p className="text-2xl font-black text-prof-navy">{metric.val}</p>
                  <p className="text-[9px] text-prof-slate font-black uppercase tracking-tighter mt-1">{metric.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
