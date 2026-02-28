import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Quote,
  Heart,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Clock, label: 'Implementation', value: '3 Weeks' },
  { icon: Users, label: 'Patient Records', value: '2,500+' },
  { icon: TrendingUp, label: 'Efficiency Gain', value: '40%' },
  { icon: CheckCircle, label: 'Uptime', value: '99.9%' },
];

const results = [
  { metric: '40%', label: 'reduction in admin time', description: 'Clinicians save 90+ minutes daily' },
  { metric: 'Zero', label: 'scheduling conflicts', description: 'Real-time multi-agent orchestration' },
  { metric: '100%', label: 'compliance score', description: 'Automated PII and HIPAA monitoring' },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
    <section ref={sectionRef} id="case-studies" className="relative w-full py-20 bg-prof-bg overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 banana-glass border-slate-200 mx-auto">
            <Zap className="h-4 w-4 text-prof-indigo" />
            <span className="text-[10px] text-prof-indigo font-black uppercase tracking-[0.2em]">Impact Analysis</span>
          </div>
          <h2 className="text-5xl font-black text-[#0F172A]">Real-World <span className="text-gradient">Case Studies</span></h2>
          <p className="text-xl text-prof-text-dim max-w-2xl mx-auto">
            Translating complex AI blueprints into measurable enterprise outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Case Card */}
          <div className="lg:col-span-8 case-item">
            <div className="banana-glass border-slate-100 p-10 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-prof-indigo/5 blur-[120px] rounded-full group-hover:bg-prof-indigo/10 transition-all duration-700" />

              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-prof-indigo rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-prof-indigo/20">
                      <Heart size={32} />
                    </div>
                    <div>
                      <span className="badge badge-beta mb-2">Healthcare</span>
                      <h3 className="text-3xl font-black text-prof-text">Kidz-Clinic AI Platform</h3>
                    </div>
                  </div>

                  <p className="text-lg text-prof-text-dim leading-relaxed">
                    Redesigning pediatric care workflows in Hyderabad. Integrated an Agentic AI mesh to handle
                    <span className="text-prof-indigo font-bold"> 2,500+ patient records</span> with automated dosage orchestration
                    and real-time clinical assistants.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map(stat => (
                      <div key={stat.label} className="p-4 bg-prof-bg-secondary border border-prof-border rounded-2xl text-center">
                        <p className="text-2xl font-black text-prof-indigo">{stat.value}</p>
                        <p className="text-[10px] text-prof-slate font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-prof-border/50">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <Quote className="h-10 w-10 text-prof-indigo/30 flex-shrink-0" />
                  <div className="flex-1">
                    <blockquote className="text-xl text-prof-text italic font-medium leading-[1.6]">
                      "MedFlow transformed how we operate. The AI assistant caught a drug interaction
                      I might have missed—it literally may have saved a child's life."
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-prof-bg-tertiary rounded-2xl flex items-center justify-center font-black text-prof-indigo">DS</div>
                      <div>
                        <p className="font-bold text-prof-text">Dr. Deepa Sharma</p>
                        <p className="text-xs text-prof-slate font-bold uppercase tracking-widest">Lead Pediatrician</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Highlights */}
          <div className="lg:col-span-4 space-y-8">
            {results.map((res, i) => (
              <div key={res.label} className={`case-item p-8 banana-glass border-slate-100 flex flex-col justify-between h-[180px] hover:border-prof-indigo/40 transition-all ${i === 0 ? 'bg-prof-indigo text-white' : ''}`}>
                <div>
                  <p className={`text-4xl font-black mb-2 ${i === 0 ? 'text-white' : 'text-prof-indigo'}`}>{res.metric}</p>
                  <p className={`font-bold uppercase tracking-widest text-xs ${i === 0 ? 'text-white/80' : 'text-prof-text'}`}>{res.label}</p>
                </div>
                <p className={`text-sm ${i === 0 ? 'text-white/70' : 'text-prof-text-dim'}`}>{res.description}</p>
              </div>
            ))}

            <div className="case-item">
              <Button asChild className="w-full h-16 bg-prof-blue text-white font-bold rounded-2xl shadow-xl shadow-prof-blue/20 hover:scale-[1.02] transition-all">
                <a href="https://emr-app-0909.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg">
                  Explore MedFlow Live
                  <ArrowRight size={22} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
