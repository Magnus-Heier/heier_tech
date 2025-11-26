"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, ServerCog, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time business insights and reporting'
  },
  {
    icon: ServerCog,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks automatically'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless teamwork'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Security for your data'
  }
];

export default function Software() {
  const handleTryHeierCore = () => {
    console.log('Try HeierCore Free clicked');
  };

  const handleViewDemo = () => {
    console.log('View Demo clicked');
  };

  return (
    <section id="software" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="software-badge">
              Try Our Free Software (Coming Soon)
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="software-title">
              <span className="text-yellow-400">Heier.Tech</span> Software
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-testid="software-description">
              The all-in-one business management platform that streamlines operations, automates workflows, and provides real-time insights to help your business thrive in the digital age.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`software-feature-${index}`}>
                    <div className="bg-yellow-400 rounded-lg p-2 mr-4 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid={`software-feature-title-${index}`}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm" data-testid={`software-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleTryHeierCore}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                data-testid="button-try-heiercore"
              >
                Try For Free
              </Button>
              <Button
                onClick={handleViewDemo}
                variant="ghost"
                className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                data-testid="button-view-demo"
              >
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Software interface mockup */}
            <div className="bg-white rounded-xl p-6 shadow-2xl" data-testid="software-mockup">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-gray-500 text-sm font-semibold" data-testid="mockup-title">
                  Heier.Tech Dashboard
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white" data-testid="mockup-revenue-card">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm opacity-75">Total Revenue</div>
                      <div className="text-2xl font-bold">$847,293</div>
                    </div>
                    <div className="text-green-300">
                      <TrendingUp className="w-5 h-5 inline mr-1" />
                      +12.5%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center" data-testid="mockup-users-stat">
                    <div className="text-gray-600 text-xs mb-1">Active Users</div>
                    <div className="text-lg font-bold text-gray-800">2,847</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center" data-testid="mockup-tasks-stat">
                    <div className="text-gray-600 text-xs mb-1">Tasks Done</div>
                    <div className="text-lg font-bold text-gray-800">15,924</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center" data-testid="mockup-efficiency-stat">
                    <div className="text-gray-600 text-xs mb-1">Efficiency</div>
                    <div className="text-lg font-bold text-green-600">98.7%</div>
                  </div>
                </div>
                
                <div className="space-y-2" data-testid="mockup-progress">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Project Alpha</span>
                    <span className="text-sm font-semibold text-gray-800">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
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
