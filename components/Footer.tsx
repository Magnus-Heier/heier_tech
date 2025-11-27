"use client";

import { Twitter, Linkedin, Github } from "lucide-react";
import { logCTAClick, logNavigationClick } from "@/lib/analytics";

const footerLinks = {
  services: [
    { name: 'AI Integration', href: '#packages' },
    { name: 'Landing Pages', href: '#packages' },
    { name: 'Custom Software', href: '#packages' },
    { name: 'Consulting', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]
};

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const sectionName = sectionId.substring(1);
      logNavigationClick(`footer_${sectionName}`, sectionId);
      const element = document.getElementById(sectionName);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4" data-testid="footer-brand">
              Heier.Tech
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Empowering businesses with cutting-edge AI integration, stunning landing pages, and custom software solutions that drive real results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logCTAClick('footer_social_twitter');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logCTAClick('footer_social_linkedin');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logCTAClick('footer_social_github');
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="social-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid={`footer-service-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#') {
                        e.preventDefault();
                      }
                      logNavigationClick(`footer_company_${link.name.toLowerCase().replace(/\s+/g, '_')}`, link.href);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-company-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
              © 2024 Heier App. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0" data-testid="footer-tagline">
              Made with ❤️ for businesses ready to transform
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
