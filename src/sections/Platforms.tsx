import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Layers,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: 'Executive AI Architect Portfolio',
    description:
      'A production-grade GenAI showcase built with React, GSAP, and Tailwind. Features dynamic architecture visualization and high-performance animations.',
    tags: ['React', 'GSAP', 'Tailwind', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    status: 'Live',
    architecture: 'Single-page Agentic Mesh'
  },
  {
    name: 'MedFlow EMR Platform',
    description:
      'A specialized healthcare EMR system optimized for pediatric care. Integrated with RAG-based clinical decision support and rapid data migration pipelines.',
    tags: ['Next.js', 'PostgreSQL', 'LangChain', 'OpenAI'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dad99a01?q=80&w=2070&auto=format&fit=crop',
    link: 'https://emr-app-0909.onrender.com',
    status: 'Production',
    architecture: 'Multi-tenant RAG-ready'
  },
  {
    name: 'Deep-Insight AI Studio',
    description:
      'Real-time market sentiment analysis and live exchange feed visualization. Built to demonstrate high-frequency data orchestration in AI applications.',
    tags: ['Python', 'FastAPI', 'Redis', 'WebSockets'],
    imageUrl: 'https://images.unsplash.com/photo-1611974714151-030f209646b1?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    status: 'Beta',
    architecture: 'Event-driven Micro-agents'
  },
];

const ArchitectureFlowOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
    <div className="absolute top-0 left-1/4 w-px h-full bg-prof-blue/30" />
    <div className="absolute top-1/2 left-0 w-full h-px bg-prof-blue/30" />
    <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-prof-blue" />
    <div className="absolute top-[90%] left-[90%] w-2 h-2 rounded-full bg-prof-blue" />
  </div>
);

export default function Platforms() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.platform-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const slideScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} id="platforms" className="relative w-full py-20 bg-prof-bg">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white rounded-xl shadow-sm">
              <Cpu className="h-4 w-4 text-prof-blue" />
              <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">
                Live Architectures
              </span>
            </div>
            <h2 className="text-5xl font-black text-prof-navy leading-tight tracking-tight">
              Production <span className="text-prof-blue">Platforms</span>
            </h2>
            <p className="text-xl text-prof-text-dim max-w-2xl leading-relaxed font-medium">
              High-compliance technical implementations currently facilitating critical
              operations across Healthcare, BFSI, and Cloud Infrastructure.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => slideScroll('left')}
              className="p-5 bg-white border border-prof-border rounded-2xl hover:border-prof-blue hover:text-prof-blue transition-all transform active:scale-95 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => slideScroll('right')}
              className="p-5 bg-white border border-prof-border rounded-2xl hover:border-prof-blue hover:text-prof-blue transition-all transform active:scale-95 shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory px-4 -mx-4"
        >
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="platform-card flex-shrink-0 w-full md:w-[500px] lg:w-[600px] snap-center group"
            >
              <div className="prof-card bg-white border border-prof-border p-10 h-full flex flex-col relative overflow-hidden rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-prof-navy/5 transition-all duration-700">

                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-prof-navy rounded-2xl flex items-center justify-center text-white shadow-lg shadow-prof-navy/10">
                      <Layers className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-[10px] text-prof-slate font-black uppercase tracking-widest leading-none mb-1.5">Model Stack</p>
                      <p className="text-sm font-bold text-prof-navy">{platform.architecture}</p>
                    </div>
                  </div>
                  <span className={`badge ${platform.status === 'Live' ? 'badge-live' : platform.status === 'Production' ? 'badge-live' : 'badge-beta'
                    } scale-110`}>
                    {platform.status}
                  </span>
                </div>

                <div className="w-full h-56 mb-10 rounded-[32px] overflow-hidden relative group border border-prof-border shadow-inner bg-prof-bg-tertiary">
                  <img
                    src={platform.imageUrl}
                    alt={platform.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-prof-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <ArchitectureFlowOverlay />
                </div>

                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-black text-prof-navy mb-4 leading-[1.1] tracking-tight group-hover:text-prof-blue transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-prof-text-dim text-lg leading-relaxed font-medium">
                    {platform.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {platform.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-prof-bg-tertiary border border-prof-border rounded-xl text-[10px] text-prof-navy font-black tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full h-16 mt-10 bg-prof-navy text-white hover:bg-prof-blue font-black rounded-2xl transition-all text-lg shadow-xl shadow-prof-navy/10"
                >
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    Authorize Access
                    <ExternalLink size={20} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
