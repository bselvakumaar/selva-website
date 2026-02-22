import { useRef } from 'react';
import { Download, Printer, MapPin, Globe, Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experience = [
    {
        company: 'Kidz-Clinic',
        role: 'Lead Architect (MedFlow EMR)',
        period: '2024 - Present',
        description: 'Architected and deployed a multi-tenant HIPAA-ready EMR platform. Integrated RAG-based clinical assistant reducing doctor admin time by 40%.',
    },
    {
        company: 'StockSteward AI',
        role: 'System Architect',
        period: '2023 - Present',
        description: 'Developed Guardian Intelligence engine for real-time market analysis and automated trading strategies with 99.9% uptime SLA.',
    },
    {
        company: 'Retail Intelligence Labs',
        role: 'Senior Systems Engineer',
        period: '2020 - 2023',
        description: 'Designed Hyperion Architecture for StoreAI, managing 10K+ inventory items with conversational AI integration.',
    },
    {
        company: 'Enterprise Solutions Group',
        role: 'AI/ML Architect',
        period: '1999 - 2020',
        description: '20+ years of delivering scalable enterprise systems across 12+ countries, spanning Finance, Healthcare, and E-commerce.',
    },
];

const education = [
    {
        degree: 'Systems Architecture & Engineering',
        institution: 'Advanced Technical Institute',
        year: '1999',
    },
];

export default function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" className="relative w-full py-24 bg-prof-bg section-print">
            <div className="absolute inset-0 grid-bg opacity-30 print:hidden" />

            <div className="relative w-full px-6 lg:px-12 xl:px-20 max-w-5xl mx-auto">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-12 print:hidden">
                    <h2 className="font-mono font-bold text-3xl text-prof-text">Professional Resume</h2>
                    <div className="flex gap-4">
                        <Button asChild className="bg-prof-bg-secondary text-prof-text border border-prof-border hover:bg-prof-bg-tertiary">
                            <a href="/resume/Selvakumar_Balakrishnan_Resume.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </a>
                        </Button>
                        <Button onClick={handlePrint} className="bg-prof-blue text-white hover:bg-prof-blue/90">
                            <Printer className="mr-2 h-4 w-4" />
                            Print Page
                        </Button>
                    </div>
                </div>

                {/* Resume Content */}
                <div
                    ref={resumeRef}
                    className="bg-prof-bg-secondary/50 border border-prof-border rounded-2xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm print:bg-white print:text-black print:border-none print:shadow-none print:p-0"
                >
                    {/* Resume Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-prof-border pb-8 mb-8 print:border-black">
                        <div>
                            <h1 className="text-4xl font-extrabold text-prof-text mb-2 print:text-black">Selvakumar Balakrishnan</h1>
                            <p className="text-xl text-prof-blue font-mono font-semibold print:text-black">AI/ML Solution Architect / Manager</p>
                        </div>
                        <div className="space-y-2 text-sm text-prof-slate print:text-black">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Hyderabad, India (Global Presence)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <span>selva-website.pages.dev</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Left Column: Summary & Skills */}
                        <div className="md:col-span-1 space-y-10">
                            {/* Executive Summary */}
                            <div>
                                <h3 className="flex items-center gap-2 text-prof-text font-bold uppercase tracking-widest text-sm mb-4 print:text-black">
                                    <Briefcase className="h-4 w-4 text-prof-blue" />
                                    Experience Summary
                                </h3>
                                <p className="text-sm text-prof-slate leading-relaxed print:text-black">
                                    25+ years of architectural excellence, building high-scale production systems for startups and enterprises across 12 countries. Specialist in high-scale GenAI platforms and multi-tenant SaaS.
                                </p>
                            </div>

                            {/* Core Skills */}
                            <div>
                                <h3 className="flex items-center gap-2 text-prof-text font-bold uppercase tracking-widest text-sm mb-4 print:text-black">
                                    <Code className="h-4 w-4 text-prof-blue" />
                                    Tech Stack
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] text-prof-blue font-bold uppercase mb-2">AI & Data</p>
                                        <p className="text-xs text-prof-slate print:text-black">OpenAI, Claude, LangChain, ChromaDB, RAG, MLOps, MongoDB, Redis</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-prof-blue font-bold uppercase mb-2">Backend & Architecture</p>
                                        <p className="text-xs text-prof-slate print:text-black">Node.js, Python, FastAPI, Microservices, Multi-tenant SaaS, Kubernetes</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-prof-blue font-bold uppercase mb-2">Frontend</p>
                                        <p className="text-xs text-prof-slate print:text-black">React, TypeScript, Vite, Tailwind CSS, GSAP</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="flex items-center gap-2 text-prof-text font-bold uppercase tracking-widest text-sm mb-4 print:text-black">
                                    <GraduationCap className="h-4 w-4 text-prof-blue" />
                                    Education
                                </h3>
                                {education.map((edu) => (
                                    <div key={edu.institution} className="mb-4">
                                        <p className="text-sm font-bold text-prof-text print:text-black">{edu.degree}</p>
                                        <p className="text-xs text-prof-slate print:text-black">{edu.institution}</p>
                                        <p className="text-[10px] text-prof-blue font-mono mt-1">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Experience Timeline */}
                        <div className="md:col-span-2">
                            <h3 className="flex items-center gap-2 text-prof-text font-bold uppercase tracking-widest text-sm mb-6 print:text-black">
                                <Calendar className="h-4 w-4 text-prof-blue" />
                                Professional Timeline
                            </h3>

                            <div className="space-y-10">
                                {experience.map((exp) => (
                                    <div key={exp.period} className="relative pl-6 border-l border-prof-border print:border-black">
                                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-prof-blue" />
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                                            <h4 className="text-lg font-bold text-prof-text print:text-black">{exp.role}</h4>
                                            <span className="text-[10px] bg-prof-blue/10 text-prof-blue px-2 py-1 rounded font-mono font-bold print:border print:border-black print:text-black">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-bold text-prof-blue mb-2 print:text-black">{exp.company}</p>
                                        <p className="text-sm text-prof-slate leading-relaxed print:text-black">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .section-print, .section-print * {
            visibility: visible;
          }
          .section-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
