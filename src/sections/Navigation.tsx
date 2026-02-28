import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'RAG Pipeline', href: '#rag-pipeline' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? 'py-4'
          : 'py-10'
          }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-24">
          <div className={`flex items-center justify-between transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl px-8 py-3 rounded-full border border-prof-border shadow-2xl shadow-prof-navy/5' : ''
            }`}>
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-prof-navy rounded-2xl flex items-center justify-center shadow-2xl shadow-prof-navy/20 group-hover:scale-110 transition-transform duration-700">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-prof-navy text-xl leading-none tracking-tight">Selvakumar</span>
                <span className="text-[10px] text-prof-blue font-black tracking-[0.3em] uppercase mt-1">AI Architect</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-prof-slate hover:text-prof-blue transition-all relative group/item"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-prof-blue transition-all duration-500 group-hover/item:w-1/2 group-hover/item:left-1/4" />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-6 pl-8 border-l border-prof-border">
                <ThemeToggle />
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-prof-navy text-white hover:bg-prof-blue font-black px-10 h-14 rounded-2xl shadow-xl shadow-prof-navy/10 transition-all hover:scale-[1.05] text-sm"
                >
                  Consultation
                </Button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-12 h-12 flex items-center justify-center text-prof-navy bg-white rounded-2xl border border-prof-border shadow-sm active:scale-90 transition-transform"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${isMobileMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full'
          }`}
      >
        <div className="absolute inset-0 bg-prof-navy/98 backdrop-blur-3xl" />
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="relative h-full flex flex-col p-12">
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Terminal className="h-6 w-6 text-prof-navy" />
              </div>
              <span className="font-black text-white text-2xl tracking-tight">Selvakumar</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="group flex flex-col items-start"
              >
                <span className="text-[11px] text-prof-blue font-black tracking-[0.4em] uppercase mb-1 opacity-60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-5xl font-black text-white hover:text-prof-blue transition-all duration-500 tracking-tighter">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-prof-blue text-white font-black h-20 rounded-3xl text-2xl shadow-3xl shadow-prof-blue/20"
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
