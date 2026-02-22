import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Database, 
  Server, 
  Shield, 
  Cpu, 
  Layers,
  Code,
  Lock,
  GitBranch
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// GenAI Flow Steps
const genaiFlowSteps = [
  { id: 'client', label: 'Client', icon: Code, description: 'React/Vite Frontend' },
  { id: 'gateway', label: 'API Gateway', icon: Server, description: 'Express.js + Rate Limiting' },
  { id: 'auth', label: 'Auth Middleware', icon: Shield, description: 'JWT + Tenant Context' },
  { id: 'router', label: 'LLM Router', icon: GitBranch, description: 'Circuit Breaker Pattern' },
  { id: 'llm', label: 'LLM Providers', icon: Cpu, description: 'GPT-4 / Claude / Gemini' },
  { id: 'response', label: 'Response', icon: Layers, description: 'Formatted + Cached' },
];

// Multi-tenant Architecture
const tenantLayers = [
  {
    layer: 'Application',
    components: ['React Frontend', 'Express API', 'WebSocket Handler'],
    shared: false,
  },
  {
    layer: 'Tenant Context',
    components: ['JWT Validation', 'Tenant ID Extract', 'Permission Check'],
    shared: true,
  },
  {
    layer: 'Service Layer',
    components: ['Business Logic', 'AI Service', 'Data Service'],
    shared: false,
  },
  {
    layer: 'Data Isolation',
    components: ['MongoDB (per tenant)', 'ChromaDB (vectors)', 'Redis (cache)'],
    shared: false,
  },
];

// Tenant Databases
const tenantDBs = [
  { id: 'tenant_123', name: 'kidz-clinic', status: 'active', records: '2,500+' },
  { id: 'tenant_456', name: 'store-ai-prod', status: 'active', records: '10K+' },
  { id: 'tenant_789', name: 'stocksteward', status: 'active', records: '50K+' },
];

export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFlowStep, setActiveFlowStep] = useState<number | null>(null);
  const [hoveredTenant, setHoveredTenant] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Flow diagram animation
      gsap.fromTo(
        '.flow-step',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.genai-flow',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Tenant architecture animation
      gsap.fromTo(
        '.tenant-layer',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tenant-architecture',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Auto-animate flow steps
  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      setActiveFlowStep(currentStep);
      currentStep = (currentStep + 1) % genaiFlowSteps.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
            <Cpu className="h-3.5 w-3.5 text-gh-blue" />
            <span className="text-xs text-gh-text-secondary font-mono">
              System Design
            </span>
          </div>
          <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
            Architecture & Design Patterns
          </h2>
          <p className="text-gh-text-secondary max-w-2xl mx-auto">
            Clean architecture for scalable, multi-tenant GenAI platforms. 
            Every system designed for production reliability.
          </p>
        </div>

        {/* GenAI Request Flow */}
        <div className="genai-flow mb-20">
          <h3 className="font-mono font-semibold text-xl text-gh-text mb-8 flex items-center gap-3">
            <GitBranch className="h-5 w-5 text-gh-purple" />
            GenAI Request Flow
          </h3>

          <div className="prof-card p-6 lg:p-8 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center gap-4 min-w-max">
              {genaiFlowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeFlowStep === index;
                
                return (
                  <div key={step.id} className="flex items-center gap-4">
                    <div
                      className={`flow-step diagram-node min-w-[140px] ${
                        isActive ? 'active border-gh-green' : ''
                      }`}
                    >
                      <Icon className={`h-5 w-5 mx-auto mb-2 ${
                        isActive ? 'text-gh-green' : 'text-gh-blue'
                      }`} />
                      <p className="font-mono font-semibold text-sm text-gh-text">
                        {step.label}
                      </p>
                      <p className="text-xs text-gh-text-secondary mt-1">
                        {step.description}
                      </p>
                    </div>
                    
                    {index < genaiFlowSteps.length - 1 && (
                      <ArrowRight className={`h-5 w-5 flex-shrink-0 transition-colors ${
                        isActive ? 'text-gh-green' : 'text-gh-border'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Flow Legend */}
            <div className="mt-6 pt-6 border-t border-gh-border flex flex-wrap gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-gh-border rounded bg-gh-bg-tertiary" />
                <span className="text-gh-text-secondary">Idle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-gh-green rounded bg-gh-green/10" />
                <span className="text-gh-text-secondary">Active Request</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-3 w-3 text-gh-green" />
                <span className="text-gh-text-secondary">Data Flow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Tenant Architecture */}
        <div className="tenant-architecture">
          <h3 className="font-mono font-semibold text-xl text-gh-text mb-8 flex items-center gap-3">
            <Database className="h-5 w-5 text-gh-green" />
            Multi-Tenant Data Architecture
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Layer Stack */}
            <div className="prof-card p-6">
              <p className="text-xs text-gh-text-secondary font-mono mb-4 uppercase tracking-wider">
                Tenant Isolation Layers
              </p>
              
              <div className="space-y-3">
                {tenantLayers.map((layer, index) => (
                  <div
                    key={layer.layer}
                    className="tenant-layer flex items-center gap-4 p-3 bg-gh-bg-tertiary rounded border border-gh-border"
                  >
                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${
                      layer.shared 
                        ? 'bg-gh-orange/20 text-gh-orange' 
                        : 'bg-gh-blue/20 text-gh-blue'
                    }`}>
                      <span className="font-mono text-xs font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-mono font-semibold text-sm text-gh-text">
                        {layer.layer}
                      </p>
                      <p className="text-xs text-gh-text-secondary">
                        {layer.components.join(' • ')}
                      </p>
                    </div>
                    {layer.shared && (
                      <span className="px-2 py-0.5 bg-gh-orange/20 text-gh-orange text-xs rounded">
                        Shared
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant Database Visualization */}
            <div className="prof-card p-6">
              <p className="text-xs text-gh-text-secondary font-mono mb-4 uppercase tracking-wider">
                Tenant Database Isolation
              </p>

              <div className="space-y-4">
                {tenantDBs.map((db) => (
                  <div
                    key={db.id}
                    className={`p-4 rounded border transition-all cursor-pointer ${
                      hoveredTenant === db.id
                        ? 'border-gh-blue bg-gh-blue/10'
                        : 'border-gh-border bg-gh-bg-tertiary'
                    }`}
                    onMouseEnter={() => setHoveredTenant(db.id)}
                    onMouseLeave={() => setHoveredTenant(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Database className="h-4 w-4 text-gh-green" />
                        <span className="font-mono text-sm text-gh-text">
                          {db.name}
                        </span>
                      </div>
                      <span className="badge-live text-xs">
                        <span className="w-1.5 h-1.5 bg-gh-green rounded-full" />
                        {db.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gh-text-secondary font-mono">
                        {db.id}
                      </span>
                      <span className="text-gh-text-secondary">
                        {db.records} records
                      </span>
                    </div>
                  </div>
                ))}

                {/* Shared Resources */}
                <div className="mt-4 pt-4 border-t border-gh-border">
                  <p className="text-xs text-gh-text-secondary font-mono mb-3">
                    SHARED RESOURCES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['config', 'audit_logs', 'feature_flags', 'tenant_registry'].map((resource) => (
                      <span
                        key={resource}
                        className="px-2 py-1 bg-gh-orange/10 border border-gh-orange/30 rounded text-xs text-gh-orange font-mono"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Tenant Isolation', value: 'Complete', icon: Lock },
            { label: 'DB per Tenant', value: 'Yes', icon: Database },
            { label: 'Shared Services', value: 'Auth/Config', icon: Server },
            { label: 'Scaling', value: 'Horizontal', icon: Cpu },
          ].map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="prof-card p-4 text-center">
                <Icon className="h-5 w-5 text-gh-blue mx-auto mb-2" />
                <p className="font-mono font-bold text-gh-text">{metric.value}</p>
                <p className="text-xs text-gh-text-secondary">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
