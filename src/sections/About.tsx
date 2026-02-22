import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle,
  Target,
  Shield,
  FileText,
  Code,
  Globe,
  Zap,
  Award,
  Terminal
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '40+', label: 'Systems Built', icon: Code },
  { value: '4', label: 'Live GenAI Platforms', icon: Zap },
  { value: '12+', label: 'Countries Served', icon: Globe },
  { value: '99.9%', label: 'System Reliability', icon: Award },
];

const principles = [
  {
    icon: Target,
    title: 'Explainability by Default',
    description: 'Every AI decision should be understandable and traceable.',
  },
  {
    icon: Code,
    title: 'Reproducible Pipelines',
    description: 'Version-controlled, tested, and documented workflows.',
  },
  {
    icon: Shield,
    title: 'Security & Governance',
    description: 'Built-in compliance, not an afterthought.',
  },
  {
    icon: FileText,
    title: 'Documentation That Survives',
    description: 'Clear handoffs that outlast any single developer.',
  },
];

const techStack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
  { category: 'AI/ML', items: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'ChromaDB'] },
  { category: 'Data', items: ['MongoDB', 'PostgreSQL', 'Redis', 'ChromaDB'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Render'] },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
            <Terminal className="h-3.5 w-3.5 text-gh-blue" />
            <span className="text-xs text-gh-text-secondary font-mono">
              About Me
            </span>
          </div>
          <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
            25+ Years Building High-Scale Systems
          </h2>
          <p className="text-gh-text-secondary max-w-3xl mx-auto">
            I've spent over two decades architecting technology solutions for startups and 
            enterprises across 12+ countries. From high-frequency trading systems to healthcare 
            records, I specialize in production-grade GenAI platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="about-card grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="prof-card p-6 text-center"
              >
                <Icon className="h-6 w-6 text-gh-blue mx-auto mb-3" />
                <p className="font-mono font-bold text-3xl text-gh-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gh-text-secondary">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Principles */}
          <div className="about-card space-y-4">
            <h3 className="font-mono font-semibold text-xl text-gh-text mb-6">
              Working Principles
            </h3>
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="prof-card p-4 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-gh-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-gh-blue" />
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-gh-text mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-gh-text-secondary">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tech Stack */}
          <div className="about-card">
            <h3 className="font-mono font-semibold text-xl text-gh-text mb-6">
              Technology Stack
            </h3>
            <div className="prof-card p-6 space-y-4">
              {techStack.map((category) => (
                <div key={category.category}>
                  <p className="text-xs text-gh-text-secondary font-mono uppercase mb-2">
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gh-bg-tertiary border border-gh-border rounded text-sm text-gh-text font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-6 prof-card p-6">
              <h4 className="font-mono font-semibold text-gh-text mb-4">
                Current Focus
              </h4>
              <p className="text-gh-text-secondary text-sm mb-4">
                Building multi-tenant SaaS platforms with AI-native workflows. 
                Every platform is live, serving real users, and generating business value.
              </p>
              <div className="space-y-2">
                {[
                  'Multi-tenant SaaS architecture',
                  'AI-native workflows',
                  'Real-time data processing',
                  'Production-grade reliability',
                ].map((focus) => (
                  <div
                    key={focus}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-gh-green flex-shrink-0" />
                    <span className="text-gh-text">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
