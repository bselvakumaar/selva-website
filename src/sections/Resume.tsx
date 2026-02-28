import { FileText, Download, GraduationCap, Code, Briefcase, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experience = [
    {
        title: 'Senior AI System Architect / Project Manager',
        company: 'Movate / Kidz-Clinic / MedFlow',
        period: '2021 — PRESENT',
        description: 'Architecting and managing production-grade Multi-Agent AI Platforms using LangGraph, CrewAI, and LoRA/QLoRA. Led the full-cycle development of MedFlow EMR with RAG-based clinical decision support.',
        skills: ['LangChain', 'LangGraph', 'CrewAI', 'LoRA', 'FastAPI', 'React']
    },
    {
        title: 'Lead Systems Engineer & Healthcare Architect',
        company: 'MedFlow EMR Solutions',
        period: '2016 — 2021',
        description: 'Successfully migrated 2,500+ patient records into a specialized pediatric EMR. Designed multi-tenant architecture supporting rapid clinics expansion in Hyderabad and Bangalore.',
        skills: ['PostgreSQL', 'System Migration', 'Multi-tenant Architecture', 'Azure']
    },
    {
        title: 'Senior Systems Engineer',
        company: 'Executive Intelligence Systems (Healthcare/BFSI)',
        period: '2008 — 2016',
        description: 'Developed advanced data orchestration systems for insurance and healthcare providers. Focused on high-availability systems with 99.9% uptime for mission-critical operations.',
        skills: ['Data Orchestration', 'Microservices', 'Enterprise Security', 'Redis']
    },
    {
        title: 'Systems & Network Engineer',
        company: 'Foundational Systems Engineering',
        period: '1999 — 2008',
        description: 'Early-stage architecture design and implementation of distributed networks and core systems infra. Built the foundational technical stack for multiple regional intelligence offices.',
        skills: ['Network Engineering', 'Core Systems', 'Infrastructure', 'Linux']
    }
];

export default function Resume() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" className="relative w-full py-28 bg-prof-bg overflow-hidden section-print border-t border-prof-border/50">
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none print:hidden" />

            <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1400px] mx-auto">
                {/* Header Actions */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 print:hidden">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-white rounded-xl shadow-sm">
                            <FileText className="h-4 w-4 text-prof-blue" />
                            <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Curriculum Vitae</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-prof-navy tracking-tight leading-tight">Professional <span className="text-prof-blue">Timeline</span></h2>
                        <p className="text-xl text-prof-text-dim max-w-2xl leading-relaxed font-medium">
                            A refined history of technical leadership, architectural evolution, and AI-driven enterprise transformation since 1999.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            onClick={handlePrint}
                            className="h-16 px-10 border-2 border-prof-border text-prof-navy rounded-2xl hover:bg-prof-bg-tertiary font-black text-sm uppercase tracking-widest gap-3 transition-all"
                        >
                            <Download size={20} />
                            Print to PDF
                        </Button>
                        <Button asChild className="h-16 px-10 bg-prof-navy text-white rounded-2xl shadow-xl shadow-prof-navy/10 hover:bg-prof-blue hover:scale-[1.02] transition-all font-black text-sm uppercase tracking-widest gap-3">
                            <a href="/docs/CV/Updated_Executive_AI_Resume_2026.md" target="_blank">
                                <Code size={20} />
                                MD Source
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Timeline Grid */}
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left: Experience */}
                    <div className="lg:col-span-8 space-y-12">
                        {experience.map((item, index) => (
                            <div key={index} className="relative pl-12 pb-16 last:pb-0 group">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-prof-border group-last:bg-transparent" />
                                <div className="absolute left-[-6px] top-4 w-3 h-3 rounded-full bg-prof-navy ring-4 ring-prof-bg transition-transform group-hover:scale-125 duration-500" />

                                <div className="bg-white border border-prof-border p-10 hover:border-prof-blue hover:shadow-2xl hover:shadow-prof-navy/5 transition-all duration-700 rounded-[40px] relative">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div>
                                            <div className="flex items-center gap-3 text-prof-blue mb-2">
                                                <Briefcase size={16} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{item.company}</span>
                                            </div>
                                            <h4 className="text-3xl font-black text-prof-navy leading-tight tracking-tight group-hover:text-prof-blue transition-colors">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <span className="px-5 py-2 bg-prof-bg-tertiary border border-prof-border rounded-xl text-[10px] font-black font-mono text-prof-navy uppercase tracking-widest whitespace-nowrap shadow-sm">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-prof-text-dim text-lg leading-relaxed mb-10 font-medium">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {item.skills.map(skill => (
                                            <span key={skill} className="px-4 py-2 bg-white border border-prof-border rounded-xl text-[10px] font-black text-prof-navy uppercase tracking-widest shadow-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Expertise & Education */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-prof-navy p-10 rounded-[48px] border border-prof-navy shadow-2xl shadow-prof-navy/10 space-y-10 relative overflow-hidden">
                            <div className="absolute inset-0 blueprint-grid opacity-10" />
                            <div className="relative">
                                <h4 className="flex items-center gap-4 text-2xl font-black text-white mb-10 tracking-tight">
                                    <Zap className="text-prof-blue" />
                                    Expertise
                                </h4>
                                <div className="space-y-8">
                                    {[
                                        { label: 'AI/ML Orchestration', val: 95 },
                                        { label: 'System Architecture', val: 98 },
                                        { label: 'Infrastucture (DevOps)', val: 92 },
                                        { label: 'Enterprise Compliance', val: 96 }
                                    ].map(skill => (
                                        <div key={skill.label} className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                                                <span>{skill.label}</span>
                                                <span className="text-prof-blue">{skill.val}%</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-prof-blue rounded-full shadow-[0_0_10px_rgba(29,78,216,0.6)]"
                                                    style={{ width: `${skill.val}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-prof-border p-10 rounded-[40px] shadow-sm">
                            <h4 className="flex items-center gap-4 text-2xl font-black text-prof-navy mb-10 tracking-tight">
                                <GraduationCap className="text-prof-blue" />
                                Academic
                            </h4>
                            <div className="space-y-10">
                                <div className="space-y-2">
                                    <p className="text-[10px] text-prof-blue font-black uppercase tracking-widest">Master of Computer App (MCA)</p>
                                    <p className="text-xl font-black text-prof-navy">Bharathidasan University</p>
                                    <p className="text-xs text-prof-slate font-mono font-bold uppercase tracking-widest">Class of 2003</p>
                                </div>
                                <div className="pt-10 border-t border-prof-border/50 space-y-2">
                                    <p className="text-[10px] text-prof-blue font-black uppercase tracking-widest">Bachelor of Science (Physics)</p>
                                    <p className="text-xl font-black text-prof-navy">Manonmaniam Sundaranar Univ</p>
                                    <p className="text-xs text-prof-slate font-mono font-bold uppercase tracking-widest">Class of 2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
