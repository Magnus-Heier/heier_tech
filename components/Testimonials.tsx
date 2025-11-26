import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "Heier App transformed our business operations completely. Their AI integration saved us countless hours and their custom software solution exceeded all expectations."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Marketing Director, GrowthCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "The landing page they created for us increased our conversion rate by 300%. Professional, responsive, and exactly what we needed to scale our business."
  },
  {
    id: 3,
    name: "David Rodriguez",
    title: "Founder, InnovateNow",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "Working with Heier App was a game-changer. Their expertise in custom software development helped us build exactly what our customers needed."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-subtitle">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with Heier App.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  data-testid={`testimonial-image-${testimonial.id}`}
                />
                <div>
                  <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-title-${testimonial.id}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic" data-testid={`testimonial-quote-${testimonial.id}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
