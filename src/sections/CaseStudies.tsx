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
  Database,
  Cpu,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Clock, label: 'Implementation', value: '3 Weeks' },
  { icon: Users, label: 'Patient Records', value: '2,500+' },
  { icon: TrendingUp, label: 'Efficiency Gain', value: '40%' },
  { icon: CheckCircle, label: 'Uptime', value: '99.9%' },
];

const problems = [
  {
    title: 'Inefficient Workflows',
    description: 'Doctors spent 2+ hours daily on paperwork instead of patient care',
  },
  {
    title: 'No Data Insights',
    description: 'Unable to identify trends in common illnesses or vaccination schedules',
  },
  {
    title: 'Scalability Concerns',
    description: 'Opening a second location seemed impossible with current systems',
  },
];

const solutions = [
  {
    number: '01',
    title: 'Rapid Data Migration',
    description: '2,500+ patient records digitized in 5 days using OCR + manual verification hybrid approach',
  },
  {
    number: '02',
    title: 'AI-Assisted Clinical Workflows',
    description: 'Integrated RAG-based clinical assistant providing drug interaction checks and pediatric dosage guidelines',
  },
  {
    number: '03',
    title: 'Multi-Location Ready',
    description: 'Architecture supports second clinic opening with zero additional infrastructure work',
  },
  {
    number: '04',
    title: 'Parent Portal',
    description: 'Secure access for parents to view vaccination schedules, growth charts, and appointment booking',
  },
];

const results = [
  { metric: '40%', label: 'reduction in admin time', description: 'Doctors now spend 25 mins vs 120 mins daily' },
  { metric: 'Zero', label: 'scheduling conflicts', description: 'Real-time availability prevents double-booking' },
  { metric: '10x', label: 'faster record retrieval', description: 'Patient history in 30 seconds vs 5-10 minutes' },
  { metric: '100%', label: 'vaccination compliance', description: 'Automated reminders + stock tracking' },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-card',
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
      id="case-studies"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
            <Database className="h-3.5 w-3.5 text-gh-purple" />
            <span className="text-xs text-gh-text-secondary font-mono">
              Case Study
            </span>
          </div>
          <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
            Proven Results
          </h2>
          <p className="text-gh-text-secondary max-w-2xl mx-auto">
            Real-world impact through production-grade GenAI platforms.
          </p>
        </div>

        {/* Case Study Content */}
        <div className="space-y-6">
          {/* Client Overview */}
          <div className="case-card gh-card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Client Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gh-blue/20 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-gh-blue" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 bg-gh-blue/20 text-gh-blue text-xs rounded font-mono">
                      Healthcare
                    </span>
                    <h3 className="font-mono font-bold text-xl text-gh-text mt-1">
                      Kidz-Clinic
                    </h3>
                  </div>
                </div>
                <p className="text-gh-text-secondary text-sm mb-3">
                  Pediatric healthcare provider in Hyderabad, India. 3 practicing pediatricians, 
                  50+ daily patient visits. Previously used paper-based records + Excel.
                </p>
                <p className="text-sm text-gh-text-secondary">
                  <span className="text-gh-blue font-mono">challenge:</span> Scaling without adding administrative overhead
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="gh-card p-3 text-center"
                    >
                      <Icon className="h-4 w-4 text-gh-blue mx-auto mb-2" />
                      <p className="font-mono font-bold text-gh-text">{stat.value}</p>
                      <p className="text-xs text-gh-text-secondary">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Problems & Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Problems */}
            <div className="case-card gh-card p-6">
              <h4 className="font-mono font-semibold text-lg text-gh-text mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-gh-red" />
                The Challenge
              </h4>
              <div className="space-y-3">
                {problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="p-3 bg-gh-red/10 border-l-2 border-gh-red/50 rounded-r"
                  >
                    <h5 className="font-mono font-semibold text-gh-red text-sm mb-1">
                      {problem.title}
                    </h5>
                    <p className="text-xs text-gh-text-secondary">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="case-card gh-card p-6">
              <h4 className="font-mono font-semibold text-lg text-gh-text mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-gh-green" />
                The Solution
              </h4>
              <div className="space-y-3">
                {solutions.map((solution) => (
                  <div key={solution.number} className="flex gap-3">
                    <div className="w-7 h-7 bg-gh-blue/20 rounded flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs text-gh-blue font-bold">
                        {solution.number}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-mono font-semibold text-gh-text text-sm mb-0.5">
                        {solution.title}
                      </h5>
                      <p className="text-xs text-gh-text-secondary">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="case-card gh-card p-6">
            <h4 className="font-mono font-semibold text-lg text-gh-text mb-4">
              Results & Impact
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map((result) => (
                <div key={result.label} className="p-4 bg-gh-bg-tertiary rounded border border-gh-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gh-green/20 text-gh-green px-2 py-0.5 rounded text-sm font-mono font-bold">
                      {result.metric}
                    </span>
                  </div>
                  <p className="font-mono font-semibold text-gh-text text-sm mb-1">{result.label}</p>
                  <p className="text-xs text-gh-text-secondary">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="case-card gh-card p-6 border-gh-blue/30">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <Quote className="h-8 w-8 text-gh-blue/50 flex-shrink-0" />
              <div className="flex-1">
                <blockquote className="text-lg text-gh-text italic mb-4 leading-relaxed">
                  "MedFlow transformed how we operate. I can now see my last patient at 6 PM 
                  and be home by 6:30 PM instead of 8 PM. The AI assistant caught a drug 
                  interaction I might have missed—it literally may have saved a child's life."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gh-blue/20 rounded-full flex items-center justify-center font-mono font-bold text-gh-blue">
                    DS
                  </div>
                  <div>
                    <p className="font-mono font-semibold text-gh-text">Dr. Deepa Sharma</p>
                    <p className="text-sm text-gh-text-secondary">Lead Pediatrician, Kidz-Clinic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gh-blue text-gh-bg hover:bg-gh-blue/90 font-mono group"
            >
              <a
                href="https://emr-app-0909.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                launch_medflow_demo()
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
