import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  Eye, 
  EyeOff, 
  TrendingUp, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Zap,
  CheckCircle,
  GitBranch,
  Database,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'rolling-out';
  category: string;
  url: string;
  credentials?: {
    username: string;
    password: string;
  };
  techStack: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  icon: React.ElementType;
  color: string;
}

const platforms: Platform[] = [
  {
    id: 'stocksteward',
    name: 'StockSteward AI',
    tagline: 'Algorithmic Trading Intelligence',
    description: 'Real-time NSE/BSE market analysis with AI-driven trading decisions. Guardian Intelligence engine processes technical indicators, fundamental data, and news sentiment.',
    status: 'live',
    category: 'Financial Services',
    url: 'https://steward-platform.onrender.com',
    credentials: {
      username: 'alex@stocksteward.ai',
      password: 'trader123',
    },
    techStack: ['React', 'Node.js', 'MongoDB', 'ChromaDB', 'OpenAI', 'WebSocket'],
    metrics: [
      { label: 'Win Rate', value: '68%' },
      { label: 'Avg Return', value: '+10.2%' },
      { label: 'Response', value: '10ms' },
      { label: 'Markets', value: 'NSE/BSE' },
    ],
    features: [
      'Real-time market data feeds (Yahoo Finance API)',
      'Guardian Intelligence AI decision engine',
      'Risk Radar volatility monitoring',
      'Portfolio P&L tracking',
      'Role-based access (Trader/Dev modes)',
    ],
    icon: TrendingUp,
    color: '#3FB950',
  },
  {
    id: 'medflow',
    name: 'MedFlow EMR',
    tagline: 'Multi-Tenant Healthcare System',
    description: 'HIPAA-ready electronic medical records with AI-assisted clinical workflows. Live deployment at Kidz-Clinic with rapid onboarding pipeline.',
    status: 'live',
    category: 'Healthcare',
    url: 'https://emr-app-0909.onrender.com',
    credentials: {
      username: 'doctor.ehs@emr.local',
      password: 'Admin@123',
    },
    techStack: ['React', 'Node.js', 'MongoDB', 'ChromaDB', 'Multi-LLM RAG'],
    metrics: [
      { label: 'Active Tenant', value: 'Kidz-Clinic' },
      { label: 'Status', value: 'Onboarding' },
      { label: 'Compliance', value: 'HIPAA' },
      { label: 'Uptime', value: '99.9%' },
    ],
    features: [
      'Multi-tenant patient data isolation',
      'AI-assisted diagnostic workflows',
      'Clinical literature RAG (drug interactions)',
      'Appointment scheduling & resource management',
      'Semantic record search',
    ],
    icon: Heart,
    color: '#58A6FF',
  },
  {
    id: 'storeai',
    name: 'StoreAI Intelligence',
    tagline: 'Retail Operations & AI Assistant',
    description: 'Conversational AI-powered retail management with real-time inventory oversight. Version 3.0.4 Hyperion Architecture.',
    status: 'live',
    category: 'Retail',
    url: 'https://store-ai-prd.onrender.com',
    credentials: {
      username: 'admin@storeai.com',
      password: 'Admin@123',
    },
    techStack: ['React', 'Node.js', 'MongoDB', 'ChromaDB', 'Conversational AI'],
    metrics: [
      { label: 'Version', value: '3.0.4' },
      { label: 'Pipeline', value: 'LIVE' },
      { label: 'Architecture', value: 'Hyperion' },
      { label: 'Uptime', value: '99.9%' },
    ],
    features: [
      'Conversational AI Assistant (natural language)',
      'Live Pipeline real-time data monitoring',
      'Product Catalog & Stock Master',
      'Unified POS & Procurement Hub',
      'One-click Stock Health analysis',
    ],
    icon: ShoppingCart,
    color: '#A371F7',
  },
  {
    id: 'eduportal',
    name: 'EduPortal',
    tagline: 'GenAI Learning Management',
    description: 'Next-generation education platform with AI tutoring and personalized learning paths. Open registration for institutional access.',
    status: 'live',
    category: 'Education',
    url: 'https://eduportal-new.onrender.com',
    techStack: ['React', 'Node.js', 'MongoDB', 'ChromaDB', 'OpenAI'],
    metrics: [
      { label: 'Access', value: 'Open Reg' },
      { label: 'AI Features', value: 'Tutoring' },
      { label: 'Architecture', value: 'Cloud-native' },
      { label: 'Uptime', value: '99.9%' },
    ],
    features: [
      'AI-powered tutoring assistant',
      'Semantic course/content search',
      'Personalized learning path generation',
      'Progress tracking & analytics',
      'Institutional multi-tenancy',
    ],
    icon: GraduationCap,
    color: '#D29922',
  },
  {
    id: 'omnicore',
    name: 'OmniCore',
    tagline: 'Enterprise AI Orchestration',
    description: 'Unified cross-departmental workflow automation and data flow orchestration. Currently in phased rollout.',
    status: 'rolling-out',
    category: 'Enterprise',
    url: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Kubernetes', 'Multi-LLM'],
    metrics: [
      { label: 'Status', value: 'Q1 2026' },
      { label: 'Type', value: 'Enterprise' },
      { label: 'Clients', value: 'Select' },
      { label: 'Availability', value: 'Waitlist' },
    ],
    features: [
      'Cross-departmental AI automation',
      'Unified data pipeline orchestration',
      'Enterprise system integration hub',
      'AI-first process automation',
      'Role-based workflow management',
    ],
    icon: Zap,
    color: '#F0883E',
  },
];

function PlatformCard({ platform }: { platform: Platform }) {
  const [showCredentials, setShowCredentials] = useState(false);
  const Icon = platform.icon;

  const statusConfig = {
    live: { badge: 'badge-live', dot: 'bg-gh-green' },
    beta: { badge: 'badge-beta', dot: 'bg-gh-yellow' },
    'rolling-out': { badge: 'badge-wip', dot: 'bg-gh-blue' },
  };

  const status = statusConfig[platform.status];

  return (
    <div className="prof-card p-5 hover:border-gh-blue/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded flex items-center justify-center"
            style={{ backgroundColor: `${platform.color}20` }}
          >
            <Icon className="h-5 w-5" style={{ color: platform.color }} />
          </div>
          <div>
            <h3 className="font-mono font-bold text-gh-text">{platform.name}</h3>
            <p className="text-xs text-gh-text-secondary">{platform.tagline}</p>
          </div>
        </div>
        <span className={status.badge}>
          <span className={`w-1.5 h-1.5 ${status.dot} rounded-full animate-pulse`} />
          {platform.status === 'live' ? 'LIVE' : platform.status === 'beta' ? 'BETA' : 'WIP'}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gh-text-secondary mb-4 line-clamp-2">
        {platform.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {platform.metrics.map((metric) => (
          <div key={metric.label} className="bg-gh-bg-tertiary p-2 rounded text-center">
            <p className="font-mono text-xs text-gh-text-secondary uppercase">{metric.label}</p>
            <p className="font-mono font-semibold text-sm text-gh-text">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {platform.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-gh-bg-tertiary border border-gh-border rounded text-xs text-gh-text-secondary font-mono"
          >
            {tech}
          </span>
        ))}
        {platform.techStack.length > 4 && (
          <span className="px-2 py-0.5 text-xs text-gh-text-secondary font-mono">
            +{platform.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-1.5 mb-4">
        {platform.features.slice(0, 3).map((feature) => (
          <li key={feature} className="text-sm flex items-center gap-2 text-gh-text-secondary">
            <CheckCircle className="h-3.5 w-3.5 text-gh-green flex-shrink-0" />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Credentials */}
      {platform.credentials && (
        <div className="bg-gh-bg-tertiary rounded p-3 mb-4 border border-gh-border">
          <button
            onClick={() => setShowCredentials(!showCredentials)}
            className="flex items-center gap-2 text-sm text-gh-text w-full"
          >
            {showCredentials ? <EyeOff size={14} /> : <Eye size={14} />}
            <span className="font-mono">{showCredentials ? 'hide_credentials()' : 'show_credentials()'}</span>
          </button>
          {showCredentials && (
            <div className="mt-3 space-y-1.5 text-sm font-mono bg-gh-bg p-2 rounded border border-gh-border">
              <div className="flex justify-between">
                <span className="text-gh-text-secondary">user:</span>
                <span className="text-gh-blue">{platform.credentials.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gh-text-secondary">pass:</span>
                <span className="text-gh-blue">{platform.credentials.password}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="flex gap-2">
        <Button
          asChild
          className="flex-1 bg-gh-blue text-gh-bg hover:bg-gh-blue/90 font-mono text-sm"
          disabled={platform.status === 'rolling-out'}
        >
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={platform.status === 'rolling-out' ? 'pointer-events-none opacity-50' : ''}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {platform.status === 'rolling-out' ? 'join_waitlist()' : 'launch_demo()'}
          </a>
        </Button>
        <Button 
          variant="outline" 
          className="border-gh-border text-gh-text hover:bg-gh-bg-secondary"
        >
          <GitBranch className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function Platforms() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
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
      id="platforms"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
            <Cpu className="h-3.5 w-3.5 text-gh-green" />
            <span className="text-xs text-gh-text-secondary font-mono">
              Production Systems
            </span>
          </div>
          <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
            Live GenAI Platforms
          </h2>
          <p className="text-gh-text-secondary max-w-2xl mx-auto">
            All platforms are live and accessible. Built with multi-tenant architecture, 
            real-time AI, and 99.9% uptime.
          </p>
        </div>

        {/* Platform Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 prof-card p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <Database className="h-5 w-5 text-gh-blue mx-auto mb-2" />
              <p className="font-mono font-bold text-xl text-gh-text">4</p>
              <p className="text-xs text-gh-text-secondary">Live Platforms</p>
            </div>
            <div>
              <Cpu className="h-5 w-5 text-gh-green mx-auto mb-2" />
              <p className="font-mono font-bold text-xl text-gh-text">99.9%</p>
              <p className="text-xs text-gh-text-secondary">Uptime SLA</p>
            </div>
            <div>
              <GitBranch className="h-5 w-5 text-gh-purple mx-auto mb-2" />
              <p className="font-mono font-bold text-xl text-gh-text">Multi</p>
              <p className="text-xs text-gh-text-secondary">Tenant Architecture</p>
            </div>
            <div>
              <Zap className="h-5 w-5 text-gh-orange mx-auto mb-2" />
              <p className="font-mono font-bold text-xl text-gh-text">&lt;10ms</p>
              <p className="text-xs text-gh-text-secondary">API Response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
