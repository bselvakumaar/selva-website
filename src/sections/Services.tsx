import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  Brain,
  Cloud,
  RefreshCw,
  ArrowRight,
  Terminal,
  Cpu,
  Shield,
  Database,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'fractional-cto',
    title: 'Fractional CTO',
    description: 'Executive technology leadership and strategic roadmaps for rapid enterprise scale.',
    icon: Users,
    features: [
      'Architectural Integrity Audits',
      'Team Scaling & Tech Hiring',
      'Innovation Strategy',
      'Vendor & Stack Optimization',
    ],
  },
  {
    id: 'genai-dev',
    title: 'GenAI Orchestration',
    description: 'Engineering production-ready cognitive systems with Multi-Agent designs.',
    icon: Brain,
    features: [
      'Fine-tuning (LoRA/QLoRA)',
      'High-Fidelity RAG Systems',
      'Agentic Workflow Design',
      'Hallucination Guardrails',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Resilient Cloud Ops',
    description: 'High-availability infrastructure designed for 99.9% production SLAs.',
    icon: Cloud,
    features: [
      'Kubernetes Mesh Systems',
      'Edge Inference Performance',
      'Hardened Security Identity',
      'Automated Zero-Downtime CI/CD',
    ],
  },
  {
    id: 'modernization',
    title: 'Nexus Modernization',
    description: 'Refactoring legacy bottlenecks into modern, reactive micro-architectures.',
    icon: RefreshCw,
    features: [
      'Reactive System Transformation',
      'Distributed DB Optimization',
      'Bottleneck Remediation',
      'Global Service Meshing',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.svc-card',
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative w-full py-28 bg-prof-bg overflow-hidden border-t border-prof-border/50">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white rounded-xl shadow-sm">
              <Zap className="h-4 w-4 text-prof-blue" />
              <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Capability Matrix</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-prof-navy leading-tight tracking-tight">
              Architectural <span className="text-prof-blue">Offerings</span>
            </h2>
            <p className="text-xl text-prof-text-dim max-w-2xl leading-relaxed font-medium">
              Specialized technical modules designed to solve complex enterprise challenges
              through cognitive engineering and high-availability design.
            </p>
          </div>
          <Button
            onClick={scrollToContact}
            className="h-16 px-10 bg-prof-navy text-white rounded-2xl font-black shadow-2xl shadow-prof-navy/10 hover:bg-prof-blue hover:scale-105 transition-all text-lg"
          >
            Initialize Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {services.map((svc) => (
            <div key={svc.id} className="svc-card group">
              <div className="bg-white border border-prof-border p-10 h-full flex flex-col hover:border-prof-blue hover:shadow-2xl hover:shadow-prof-navy/5 transition-all duration-700 rounded-[40px]">
                <div className="w-16 h-16 bg-prof-bg-tertiary rounded-2xl flex items-center justify-center text-prof-navy mb-8 group-hover:bg-prof-navy group-hover:text-white transition-all duration-500 group-hover:shadow-xl shadow-prof-navy/5">
                  <svc.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-prof-navy mb-4 group-hover:text-prof-blue transition-colors tracking-tight">{svc.title}</h3>
                <p className="text-prof-text-dim text-base font-medium leading-relaxed mb-10 flex-1">{svc.description}</p>

                <ul className="space-y-4 border-t border-prof-border pt-8">
                  {svc.features.map(feat => (
                    <li key={feat} className="flex items-center gap-4 text-[10px] font-black text-prof-slate uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-prof-blue/20" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Capability Badge Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 py-16 border-y border-prof-border/50">
          {[
            { icon: Terminal, label: 'Full-Stack Eng' },
            { icon: Cpu, label: 'MLOps Architect' },
            { icon: Shield, label: 'Security Nexus' },
            { icon: Database, label: 'Vector Data Mesh' },
          ].map(cap => (
            <div key={cap.label} className="flex items-center gap-5 group">
              <cap.icon className="h-6 w-6 text-prof-slate/30 group-hover:text-prof-blue transition-colors" />
              <span className="text-[12px] font-black text-prof-navy uppercase tracking-[0.4em]">{cap.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
