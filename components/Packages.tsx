"use client";

import { Button } from "@/components/ui/button";
import { Bot, Rocket, Code, Check } from "lucide-react";

const packages = [
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to automate processes and gain valuable insights.',
    icon: Bot,
    gradient: 'from-blue-500 to-purple-600',
    features: [
      'Custom AI model development',
      'API integration & automation',
      'Real-time data processing',
      '24/7 monitoring & support'
    ]
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive conversions.',
    icon: Rocket,
    gradient: 'from-green-500 to-teal-600',
    features: [
      'Mobile-responsive design',
      'A/B testing optimization',
      'SEO optimization',
      'Analytics integration'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Tailored software solutions built specifically for your unique business requirements.',
    icon: Code,
    gradient: 'from-purple-500 to-pink-600',
    features: [
      'Full-stack development',
      'Cloud deployment',
      'Scalable architecture',
      'Ongoing maintenance'
    ]
  }
];

export default function Packages() {
  const handleLearnMore = (packageId: string) => {
    console.log(`Learn more about ${packageId}`);
  };

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="packages-title">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="packages-subtitle">
            Choose from our comprehensive range of services designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                data-testid={`package-card-${pkg.id}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" data-testid={`package-icon-${pkg.id}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" data-testid={`package-title-${pkg.id}`}>
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`package-description-${pkg.id}`}>
                    {pkg.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground" data-testid={`package-features-${pkg.id}`}>
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleLearnMore(pkg.id)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors mt-auto"
                  data-testid={`button-learn-more-${pkg.id}`}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
