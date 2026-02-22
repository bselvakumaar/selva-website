import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  Brain, 
  FileText, 
  Database, 
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// RAG Pipeline Steps
const ragSteps = [
  {
    id: 'query',
    title: 'User Query',
    description: 'Natural language question from user',
    icon: MessageSquare,
    code: `query = "What are side effects of Amoxicillin?"`,
  },
  {
    id: 'embed',
    title: 'Embedding Generation',
    description: 'Convert query to vector representation',
    icon: Sparkles,
    code: `embedding = model.encode(query)
# 1536-dimensional vector`,
  },
  {
    id: 'search',
    title: 'Vector Search',
    description: 'Find similar documents in ChromaDB',
    icon: Search,
    code: `results = chromaDB.similarity_search(
    embedding, 
    k=4,
    threshold=0.85
)`,
  },
  {
    id: 'context',
    title: 'Context Assembly',
    description: 'Combine retrieved documents',
    icon: Layers,
    code: `context = "\n\n".join([
    doc.page_content for doc in results
])`,
  },
  {
    id: 'llm',
    title: 'LLM Generation',
    description: 'Generate response with context',
    icon: Brain,
    code: `response = llm.generate(
    system=prompt,
    context=context,
    query=query
)`,
  },
  {
    id: 'response',
    title: 'Response + Citations',
    description: 'Return answer with sources',
    icon: FileText,
    code: `return {
    "answer": response,
    "sources": results.sources,
    "confidence": 0.94
}`,
  },
];

// Sample documents
const sampleDocs = [
  { id: 1, title: 'Amoxicillin Pediatric Guidelines', similarity: 0.94, content: 'Amoxicillin is generally well-tolerated in pediatric patients...' },
  { id: 2, title: 'Common Side Effects in Children', similarity: 0.91, content: 'Common side effects include diarrhea (5-10%), rash (2-5%)...' },
  { id: 3, title: 'Dosage Chart by Weight', similarity: 0.89, content: 'Standard dosage is 20-40mg/kg/day divided into 2-3 doses...' },
  { id: 4, title: 'Drug Interactions Pediatric', similarity: 0.85, content: 'Monitor for interactions with warfarin, methotrexate...' },
];

export default function RAGPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.rag-step',
        { x: -30, opacity: 0 },
        {
          x: 0,
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

  // Animation for steps
  useEffect(() => {
    if (!showAnimation) return;
    
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step);
      step = (step + 1) % ragSteps.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [showAnimation]);

  return (
    <section
      ref={sectionRef}
      id="rag-pipeline"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
            <Database className="h-3.5 w-3.5 text-gh-purple" />
            <span className="text-xs text-gh-text-secondary font-mono">
              Technical Deep Dive
            </span>
          </div>
          <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
            RAG Pipeline Architecture
          </h2>
          <p className="text-gh-text-secondary max-w-2xl mx-auto">
            Retrieval-Augmented Generation enables accurate, context-aware AI responses 
            by combining vector search with LLM generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Pipeline Steps */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-semibold text-lg text-gh-text">
                Pipeline Flow
              </h3>
              <button
                onClick={() => setShowAnimation(!showAnimation)}
                className="px-3 py-1.5 bg-gh-blue/20 text-gh-blue text-sm font-mono rounded hover:bg-gh-blue/30 transition-colors"
              >
                {showAnimation ? 'Stop' : 'Animate'} Flow
              </button>
            </div>

            {ragSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`rag-step gh-card p-4 transition-all cursor-pointer ${
                    isActive ? 'border-gh-purple bg-gh-purple/5' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${
                      isActive 
                        ? 'bg-gh-purple/20 text-gh-purple' 
                        : 'bg-gh-bg-tertiary text-gh-text-secondary'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-gh-text-secondary">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className="font-mono font-semibold text-gh-text">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gh-text-secondary mb-2">
                        {step.description}
                      </p>
                      
                      {/* Code snippet */}
                      <div className="code-block">
                        <div className="code-content text-xs">
                          <pre className="syntax-comment">{step.code}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visualization */}
          <div className="space-y-6">
            {/* Vector Search Visualization */}
            <div className="gh-card p-6">
              <h3 className="font-mono font-semibold text-lg text-gh-text mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-gh-green" />
                Vector Search Results
              </h3>

              <div className="space-y-3">
                {sampleDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-3 rounded border transition-all ${
                      activeStep >= 2 && activeStep <= 4
                        ? 'border-gh-green bg-gh-green/5'
                        : 'border-gh-border bg-gh-bg-tertiary'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-gh-text">
                        {doc.title}
                      </span>
                      <span className="px-2 py-0.5 bg-gh-green/20 text-gh-green text-xs rounded font-mono">
                        {doc.similarity}
                      </span>
                    </div>
                    <p className="text-xs text-gh-text-secondary line-clamp-2">
                      {doc.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Similarity Score Bar */}
              <div className="mt-4 pt-4 border-t border-gh-border">
                <p className="text-xs text-gh-text-secondary font-mono mb-2">
                  SIMILARITY THRESHOLD
                </p>
                <div className="h-2 bg-gh-bg-tertiary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gh-green to-gh-blue rounded-full transition-all duration-1000"
                    style={{ width: activeStep >= 2 ? '85%' : '0%' }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gh-text-secondary">0.0</span>
                  <span className="text-xs text-gh-green font-mono">0.85 threshold</span>
                  <span className="text-xs text-gh-text-secondary">1.0</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="gh-card p-6">
              <h3 className="font-mono font-semibold text-lg text-gh-text mb-4">
                Pipeline Performance
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gh-bg-tertiary rounded border border-gh-border">
                  <p className="font-mono text-2xl font-bold text-gh-green">
                    &lt;500ms
                  </p>
                  <p className="text-xs text-gh-text-secondary">End-to-end latency</p>
                </div>
                <div className="p-4 bg-gh-bg-tertiary rounded border border-gh-border">
                  <p className="font-mono text-2xl font-bold text-gh-blue">
                    94%
                  </p>
                  <p className="text-xs text-gh-text-secondary">Relevance score</p>
                </div>
                <div className="p-4 bg-gh-bg-tertiary rounded border border-gh-border">
                  <p className="font-mono text-2xl font-bold text-gh-purple">
                    1536
                  </p>
                  <p className="text-xs text-gh-text-secondary">Vector dimensions</p>
                </div>
                <div className="p-4 bg-gh-bg-tertiary rounded border border-gh-border">
                  <p className="font-mono text-2xl font-bold text-gh-orange">
                    4
                  </p>
                  <p className="text-xs text-gh-text-secondary">Top-K results</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="gh-card p-6">
              <h3 className="font-mono font-semibold text-lg text-gh-text mb-4">
                RAG Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['ChromaDB', 'OpenAI Embeddings', 'LangChain', 'Python', 'FastAPI'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded text-sm text-gh-text-secondary font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
