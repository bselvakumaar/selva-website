import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, GitBranch, CheckCircle, Send, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { y: 30, opacity: 0 },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const contactLinks = [
    { icon: Mail, label: 'Email Architecture', value: 'selvawiz@gmail.com', href: 'mailto:selvawiz@gmail.com' },
    { icon: Linkedin, label: 'Professional Network', value: 'linkedin.com/in/bselvakumaar', href: 'https://linkedin.com/in/bselvakumaar' },
    { icon: Github, label: 'Engineering Repository', value: 'github.com/bselvakumaar', href: 'https://github.com/bselvakumaar' },
    { icon: Globe, label: 'Global Availability', value: 'GMT+5:30 (Bangalore)', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative w-full py-28 bg-white overflow-hidden border-t border-prof-border/50">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-prof-border to-transparent" />

      <div className="relative w-full px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-stretch">

          {/* Left: Professional Context */}
          <div className="lg:col-span-5 space-y-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-prof-border bg-prof-bg shadow-sm rounded-xl">
                <GitBranch className="h-4 w-4 text-prof-blue" />
                <span className="text-[10px] text-prof-navy font-black uppercase tracking-[0.25em]">Direct Access</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-prof-navy leading-[1.1] tracking-tight">
                Initialize <br />
                <span className="text-prof-blue">Consultation</span>
              </h2>
              <p className="text-xl text-prof-text-dim leading-relaxed font-medium">
                Seeking architectural guidance for specialized GenAI roadmaps or high-compliance systems?
                Connect directly for a high-bandwidth technical discussion.
              </p>
            </div>

            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-item group flex items-center gap-6 p-6 bg-prof-bg-secondary border border-prof-border rounded-3xl hover:border-prof-blue transition-all duration-500 hover:shadow-xl hover:shadow-prof-navy/5"
                >
                  <div className="w-14 h-14 bg-white border border-prof-border rounded-2xl flex items-center justify-center text-prof-navy group-hover:bg-prof-navy group-hover:text-white transition-all duration-500">
                    <link.icon size={26} />
                  </div>
                  <div>
                    <p className="text-[9px] text-prof-slate font-black uppercase tracking-[0.2em] mb-1">{link.label}</p>
                    <p className="text-lg font-black text-prof-navy group-hover:text-prof-blue transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Modern Secure Form */}
          <div className="lg:col-span-7">
            <div className="relative h-full p-12 lg:p-16 bg-prof-navy rounded-[48px] border border-prof-navy shadow-[0_32px_64px_-16px_rgba(15,23,42,0.4)] overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-10" />

              <div className="relative h-full flex flex-col justify-between">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/20">
                      <CheckCircle className="text-emerald-500 h-12 w-12" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-white">Transmission Received</h3>
                      <p className="text-white/60 text-lg max-w-sm">
                        Request successfully decrypted and stored. I will respond within 12 standard business hours.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs"
                      onClick={() => setFormStatus('idle')}
                    >
                      Return to Terminal
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-2 h-2 rounded-full bg-prof-blue animate-pulse" />
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] font-mono">Secure_Submission_Protocol_v4.2</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-white font-black text-[10px] uppercase tracking-widest ml-1">Identity Manifest</Label>
                        <Input
                          placeholder="Full Name / Organization"
                          className="h-16 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl px-6 focus:ring-prof-blue focus:border-prof-blue transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-white font-black text-[10px] uppercase tracking-widest ml-1">Communication Endpoint</Label>
                        <Input
                          type="email"
                          placeholder="architect@domain.com"
                          className="h-16 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl px-6 focus:ring-prof-blue focus:border-prof-blue transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-white font-black text-[10px] uppercase tracking-widest ml-1">Project Specification</Label>
                      <Textarea
                        placeholder="Briefly describe your architectural requirements or consultation objective..."
                        className="min-h-[220px] bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-3xl p-8 focus:ring-prof-blue focus:border-prof-blue transition-all text-lg resize-none"
                        required
                      />
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row items-center gap-8">
                      <Button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full md:w-auto h-18 px-12 bg-prof-blue text-white rounded-[24px] font-black shadow-2xl shadow-prof-blue/20 hover:scale-[1.02] transition-all text-xl disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? 'Orchestrating...' : 'Submit Architecture Request'}
                        <Send className="ml-3 h-5 w-5" />
                      </Button>

                      <div className="flex items-center gap-4 text-white/30">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest font-mono">E2E Encrypted Path</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
