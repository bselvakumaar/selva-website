import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  Brain,
  Cloud,
  RefreshCw,
  ArrowRight,
  Code,
  GitBranch,
  Shield,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'fractional-cto',
    title: 'Fractional CTO',
    description: 'Strategic technology leadership without the full-time commitment.',
    icon: Users,
    features: [
      'Technical roadmap planning',
      'Architecture reviews',
      'Team mentorship & hiring',
      'Technology stack selection',
    ],
    color: 'from-cyan-500/20 to-cyan-600/10',
  },
  {
    id: 'genai-dev',
    title: 'GenAI Platform Development',
    description: 'End-to-end AI platform engineering with production-grade reliability.',
    icon: Brain,
    features: [
      'LLM integration & orchestration',
      'RAG system implementation',
      'Multi-tenant SaaS architecture',
      'AI workflow automation',
    ],
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and deployment automation.',
    icon: Cloud,
    features: [
      'Cloud-native migration',
      'Kubernetes orchestration',
      'CI/CD pipeline design',
      'Infrastructure hardening',
    ],
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: 'modernization',
    title: 'Legacy Modernization',
    description: 'Transform legacy systems into modern, scalable architectures.',
    icon: RefreshCw,
    features: [
      'Monolith-to-microservices',
      'Database optimization',
      'Performance tuning',
      'Security audits',
    ],
    color: 'from-orange-500/20 to-orange-600/10',
  },
];

const techCapabilities = [
  { icon: Code, label: 'Full-Stack Development' },
  { icon: GitBranch, label: 'MLOps & Pipelines' },
  { icon: Shield, label: 'Security & Compliance' },
  { icon: Database, label: 'Data Engineering' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    const capabilities = capabilitiesRef.current;

    if (!section || !header || !cards || !capabilities) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cardElements = cards.children;
      gsap.fromTo(
        cardElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Capabilities animation
      const capElements = capabilities.children;
      gsap.fromTo(
        capElements,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: capabilities,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
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
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 lg:py-32 z-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/team-collab-01.jpg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <p className="font-mono text-xs tracking-[0.12em] text-cyan mb-4 uppercase">
            What I Offer
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">
            Fractional CTO & Platform Development
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            I help startups and enterprises build, scale, and optimize their technology.
            From strategy to execution—senior hands at every step.
          </p>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group glass-panel rounded-2xl p-6 hover:border-cyan/30 transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tech Capabilities */}
        <div
          ref={capabilitiesRef}
          className="glass-panel rounded-2xl p-6"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-cyan mb-4 uppercase">
            Core Capabilities
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {techCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <Icon className="h-5 w-5 text-cyan" />
                  <span className="text-sm text-white">{cap.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={scrollToContact}
            className="bg-cyan text-navy hover:bg-cyan-400 font-semibold px-8 py-6 text-base group"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
