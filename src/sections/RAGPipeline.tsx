import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search,
  Brain,
  Database,
  MessageSquare,
  Sparkles,
  Activity,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ragSteps = [
  {
    id: 'query',
    title: 'Input Synthesis',
    description: 'Deconstructing natural language into semantic tokens for multi-agent reasoning.',
    icon: MessageSquare,
    code: `query = "Synthesize pediatric dosage for Amoxicillin based on 22kg body mass."`,
  },
  {
    id: 'embed',
    title: 'Vector Encoding',
    description: 'Transforming context into 3072-dimensional high-fidelity embeddings.',
    icon: Sparkles,
    code: `embedding = banana_pro.encode(query, dimensions=3072)`,
  },
  {
    id: 'search',
    title: 'Hybrid Retrieval',
    description: 'Simultaneous vector-similarity and keyword-matching across local medical corpus.',
    icon: Search,
    code: `context = corpus.hybrid_search(embedding, k=6, re-rank=True)`,
  },
  {
    id: 'llm',
    title: 'Neural Generation',
    description: 'Final synthesis via context-injected inference mesh with hallucination guardrails.',
    icon: Brain,
    code: `response = architect_v3.inference(query, context, temperature=0.2)`,
  },
];

const PerformanceNode = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
  <div className="flex-1 p-6 bg-white border border-prof-border rounded-3xl flex flex-col items-center shadow-sm">
    <p className="text-[10px] text-prof-blue font-black uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl font-black text-prof-navy">{value}</p>
    <p className="text-[10px] text-prof-slate font-black uppercase mt-1 tracking-tighter">{sub}</p>
  </div>
);

export default function RAGPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ragSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.rag-node',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
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
    <section ref={sectionRef} id="rag-pipeline" className="relative w-full py-28 bg-prof-bg overflow-hidden border-t border-prof-border/50">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white rounded-xl shadow-sm">
                <Database className="h-4 w-4 text-prof-blue" />
                <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Data Orchestration</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-prof-navy leading-[1.1] tracking-tight">
                Enterprise <span className="text-prof-blue">RAG Pipelines</span>
              </h2>
              <p className="text-xl text-prof-text-dim leading-relaxed font-medium">
                I architect sophisticated Retrieval-Augmented Generation workflows that eliminate
                hallucinations and provide high-compliance grounding for critical enterprise data assets.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <PerformanceNode label="Latency" value="120ms" sub="P99 INF" />
              <PerformanceNode label="Precision" value="99.4%" sub="SCORE" />
              <PerformanceNode label="Scale" value="2B+" sub="TOKENS" />
            </div>
          </div>

          <div className="relative p-12 bg-prof-navy rounded-[48px] border border-prof-navy shadow-[0_32px_64px_-16px_rgba(15,23,42,0.4)] overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <div className="relative space-y-12">
              <div className="flex justify-between items-center bg-white/5 p-6 rounded-[32px] border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-prof-blue rounded-2xl flex items-center justify-center text-white shadow-xl shadow-prof-blue/20">
                    <Activity size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Inference State</p>
                    <p className="text-white text-lg font-black tracking-tight">System_Mesh_v4.0.1</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Active</span>
                  <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {ragSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`rag-node p-8 rounded-[36px] border transition-all duration-700 flex flex-col items-center text-center ${activeStep === idx
                      ? 'bg-prof-blue border-prof-blue shadow-[0_0_50px_rgba(29,78,216,0.4)] scale-105'
                      : 'bg-white/5 border-white/10 opacity-30'
                      }`}
                  >
                    <step.icon size={32} className={activeStep === idx ? 'text-white' : 'text-slate-500'} />
                    <h4 className={`mt-5 font-black text-xs uppercase tracking-[0.2em] ${activeStep === idx ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical CLI Interface */}
        <div className="terminal-window rounded-[40px] border border-prof-border shadow-2xl bg-white overflow-hidden">
          <div className="flex items-center justify-between px-10 py-6 border-b border-prof-border bg-prof-bg-tertiary">
            <div className="flex gap-2.5">
              <div className="w-4 h-4 rounded-full bg-slate-300" />
              <div className="w-4 h-4 rounded-full bg-slate-300" />
              <div className="w-4 h-4 rounded-full bg-slate-300" />
            </div>
            <div className="text-[10px] font-mono text-prof-slate font-black tracking-[0.3em] uppercase">
              orchestration_manifest.py
            </div>
          </div>
          <div className="bg-prof-navy p-12 min-h-[200px] flex items-center">
            <div className="w-full space-y-6">
              <div className="flex items-center text-prof-blue font-mono text-base font-black uppercase tracking-widest">
                <ChevronRight size={20} className="mr-3" />
                <span className="opacity-40">execution_node_{activeStep + 1}</span>
              </div>
              <pre className="text-2xl font-mono font-bold text-white pl-8 border-l-4 border-prof-blue/40 animate-in fade-in slide-in-from-left-4 duration-700">
                {ragSteps[activeStep].code}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
