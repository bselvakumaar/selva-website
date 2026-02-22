import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, Twitter, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        <div className="contact-content grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gh-bg-tertiary border border-gh-border rounded-full mb-4">
              <Mail className="h-3.5 w-3.5 text-gh-blue" />
              <span className="text-xs text-gh-text-secondary font-mono">
                Get In Touch
              </span>
            </div>
            
            <h2 className="font-mono font-bold text-3xl lg:text-4xl text-gh-text mb-4">
              Let's Build Something
            </h2>
            <p className="text-gh-text-secondary max-w-lg mb-8">
              Whether you need a fractional CTO or a full AI platform, let's talk. 
              Tell me what you're trying to predict, automate, or optimize. 
              I'll reply within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gh-blue/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gh-blue" />
                </div>
                <div>
                  <p className="text-xs text-gh-text-secondary font-mono">email</p>
                  <a
                    href="mailto:hello@selvakumar.dev"
                    className="text-gh-text hover:text-gh-blue transition-colors font-mono"
                  >
                    hello@selvakumar.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gh-bg-tertiary border border-gh-border rounded-lg flex items-center justify-center text-gh-text-secondary hover:text-gh-blue hover:border-gh-blue transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="gh-card p-6 lg:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gh-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-gh-green" />
                </div>
                <h3 className="font-mono font-bold text-xl text-gh-text mb-2">
                  Message Sent!
                </h3>
                <p className="text-gh-text-secondary">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6 border-gh-border text-gh-text hover:bg-gh-bg-secondary font-mono"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gh-text font-mono text-sm">
                      name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-gh-bg-tertiary border-gh-border text-gh-text placeholder:text-gh-text-tertiary focus:border-gh-blue font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gh-text font-mono text-sm">
                      email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="bg-gh-bg-tertiary border-gh-border text-gh-text placeholder:text-gh-text-tertiary focus:border-gh-blue font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gh-text font-mono text-sm">
                    company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-gh-bg-tertiary border-gh-border text-gh-text placeholder:text-gh-text-tertiary focus:border-gh-blue font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gh-text font-mono text-sm">
                    message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, challenges, and goals..."
                    required
                    rows={4}
                    className="bg-gh-bg-tertiary border-gh-border text-gh-text placeholder:text-gh-text-tertiary focus:border-gh-blue font-mono resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gh-blue text-gh-bg hover:bg-gh-blue/90 font-mono group"
                >
                  {isSubmitting ? (
                    'sending...'
                  ) : (
                    <>
                      send_message()
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
