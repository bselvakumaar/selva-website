import { Linkedin, Github, Twitter, Terminal, Heart } from 'lucide-react';

const footerLinks = {
  platforms: [
    { label: 'StockSteward AI', href: 'https://steward-platform.onrender.com' },
    { label: 'MedFlow EMR', href: 'https://emr-app-0909.onrender.com' },
    { label: 'StoreAI', href: 'https://store-ai-prd.onrender.com' },
    { label: 'EduPortal', href: 'https://eduportal-new.onrender.com' },
  ],
  navigation: [
    { label: 'Platforms', href: '#platforms' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'RAG Pipeline', href: '#rag-pipeline' },
    { label: 'Case Studies', href: '#case-studies' },
  ],
  connect: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative w-full bg-gh-bg border-t border-gh-border">
      <div className="w-full px-6 lg:px-12 xl:px-20 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 font-mono font-bold text-gh-text mb-4">
              <Terminal className="h-4 w-4 text-gh-blue" />
              <span>sb</span>
              <span className="text-gh-text-secondary">~</span>
              <span className="text-gh-blue">dev</span>
            </a>
            <p className="text-sm text-gh-text-secondary max-w-xs mb-4">
              Senior AI/ML Engineer & System Architect. 
              Building production-grade GenAI platforms.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-gh-bg-tertiary border border-gh-border rounded-lg flex items-center justify-center text-gh-text-secondary hover:text-gh-blue hover:border-gh-blue transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-mono font-semibold text-gh-text mb-4 text-sm">
              Live Platforms
            </h4>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gh-text-secondary hover:text-gh-blue transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono font-semibold text-gh-text mb-4 text-sm">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gh-text-secondary hover:text-gh-blue transition-colors font-mono"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-semibold text-gh-text mb-4 text-sm">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gh-text-secondary hover:text-gh-blue transition-colors font-mono"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gh-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gh-text-secondary font-mono">
            © 2026 Selvakumar Balakrishnan. All rights reserved.
          </p>
          <p className="text-xs text-gh-text-secondary font-mono flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-gh-red fill-gh-red" /> using React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
