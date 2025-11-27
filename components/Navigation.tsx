"use client";
 
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logNavigationClick } from "@/lib/analytics";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // If not on home page, set overHero to false
    if (pathname !== '/') {
      setOverHero(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setOverHero(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    logNavigationClick(sectionId, `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={
        `fixed top-0 left-0 right-0 z-50 transition-colors ${
          overHero
            ? "bg-blue-600/50 backdrop-blur-sm border-transparent"
            : "bg-card/60 backdrop-blur-md border-b border-border"
        }`
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-2xl font-bold ${overHero ? "text-white" : "text-primary"} hover:opacity-80 transition-opacity`}
              data-testid="brand-logo"
            >
              Heier.Tech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('hero')}
                  className={`${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-sm font-medium transition-colors`}
                  data-testid="nav-home"
                >
                  Home
                </button>
              ) : (
                <Link
                  href="/"
                  className={`${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-sm font-medium transition-colors`}
                  data-testid="nav-home"
                >
                  Home
                </Link>
              )}
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-sm font-medium transition-colors`}
                data-testid="nav-testimonials"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className={`${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-sm font-medium transition-colors`}
                data-testid="nav-packages"
              >
                Packages
              </button>
              <Link
                href="/software"
                onClick={() => logNavigationClick('nav_software', '/software')}
                className={`${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-sm font-medium transition-colors`}
                data-testid="nav-software"
              >
                My Software
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${overHero ? "text-white hover:text-white" : "text-muted-foreground hover:text-foreground"} p-2`}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border ${overHero ? 'bg-transparent' : ''}">
              {pathname === '/' ? (
                <button
                  onClick={() => scrollToSection('hero')}
                  className={`block ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-base font-medium w-full text-left`}
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
              ) : (
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-base font-medium w-full text-left`}
                  data-testid="mobile-nav-home"
                >
                  Home
                </Link>
              )}
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`block ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-base font-medium w-full text-left`}
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className={`block ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-base font-medium w-full text-left`}
                data-testid="mobile-nav-packages"
              >
                Packages
              </button>
              <Link
                href="/software"
                onClick={() => {
                  logNavigationClick('mobile_nav_software', '/software');
                  setIsOpen(false);
                }}
                className={`block ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} px-3 py-2 text-base font-medium w-full text-left`}
                data-testid="mobile-nav-software"
              >
                My Software
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
