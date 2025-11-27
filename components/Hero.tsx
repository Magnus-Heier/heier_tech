"use client";
import { Button } from "@/components/ui/button";
import { logCTAClick } from "@/lib/analytics";

export default function Hero() {
  const handleGetStarted = () => {
    logCTAClick('hero_get_started');
    console.log('Get Started clicked');
  };

  const handleLearnMore = () => {
    logCTAClick('hero_learn_more');
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-blue-600 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-headline">
              Transform Your Business with{" "}
              <span className="text-yellow-300">Heier.Tech</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-subheadline">
              Unlock the power of AI integration, stunning landing pages, and custom software solutions tailored for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleGetStarted}
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                data-testid="button-get-started"
              >
                Get Started Today
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="ghost"
                className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Modern dashboard/app interface mockup */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" data-testid="hero-dashboard-mockup">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm" data-testid="dashboard-title">
                    Dashboard
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white" data-testid="revenue-card">
                    <div className="text-sm opacity-75">Revenue Growth</div>
                    <div className="text-2xl font-bold">+234%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg p-3 text-center" data-testid="ai-tasks-card">
                      <div className="text-gray-600 text-sm">AI Tasks</div>
                      <div className="text-xl font-semibold text-gray-800">1,247</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center" data-testid="users-card">
                      <div className="text-gray-600 text-sm">Active Users</div>
                      <div className="text-xl font-semibold text-gray-800">8,932</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
