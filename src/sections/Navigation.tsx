import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Platforms', href: '#platforms' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'RAG Pipeline', href: '#rag-pipeline' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-prof-bg/80 backdrop-blur-xl border-b border-prof-border/50 py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-prof-blue rounded-lg flex items-center justify-center shadow-lg shadow-prof-blue/20 group-hover:scale-110 transition-transform">
                <Terminal className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-prof-text leading-none tracking-tight">Selvakumar</span>
                <span className="text-[10px] text-prof-blue font-bold tracking-widest uppercase mt-0.5">Architect</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center bg-prof-bg-secondary/40 border border-prof-border/50 rounded-full px-2 py-1 backdrop-blur-sm mr-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-prof-slate hover:text-prof-text transition-all rounded-full hover:bg-prof-bg-tertiary/50"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-prof-blue text-white hover:bg-prof-blue/90 font-bold px-6 h-10 rounded-lg shadow-lg shadow-prof-blue/20 transition-all hover:scale-105 ml-2"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-prof-text bg-prof-bg-secondary/50 rounded-lg border border-prof-border"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-prof-bg/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="group flex flex-col items-center"
            >
              <span className="text-[10px] text-prof-blue font-bold tracking-[0.3em] uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Section 0{index + 1}
              </span>
              <span className="text-3xl font-bold text-prof-text hover:text-prof-blue transition-colors">
                {link.label}
              </span>
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-8 bg-prof-blue text-white hover:bg-prof-blue/90 font-bold px-10 h-14 rounded-xl text-lg shadow-xl shadow-prof-blue/20"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
}
