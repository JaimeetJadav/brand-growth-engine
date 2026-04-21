import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, LuxeBrand Co.",
    text: "Adiator Media completely transformed our brand identity. Their creative vision and strategic thinking led to a 3x increase in our conversion rates.",
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
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tightest">
          What Our Clients <span className="gradient-text">Say</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.08}>
            <div className="glass-card rounded-lg p-7 md:p-9 h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 font-light">"{t.text}"</p>
              <div className="mt-7 pt-5 border-t border-border/30">
                <p className="font-heading font-medium text-foreground text-sm tracking-tight">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
