import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, LuxeBrand Co.",
    text: "ApexStudio completely transformed our brand identity. Their creative vision and strategic thinking led to a 3x increase in our conversion rates.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder, TechPulse",
    text: "The ad campaigns they built for us were exceptional. We saw a 280% ROI within the first quarter. Truly data-driven excellence.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, GreenLeaf",
    text: "Their social media strategy took us from 5K to 50K followers in just 4 months. The content quality is unmatched.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
          What Our Clients <span className="gradient-text">Say</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
