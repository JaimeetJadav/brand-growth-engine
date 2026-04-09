import { BarChart3, Lightbulb, Target, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: BarChart3, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and real performance data." },
  { icon: Lightbulb, title: "Creative Storytelling", desc: "Narratives that resonate, inspire, and move audiences to action." },
  { icon: Target, title: "ROI-Focused Campaigns", desc: "Measurable results that directly impact your bottom line." },
  { icon: Layers, title: "End-to-End Solutions", desc: "From concept to execution — one team, zero friction." },
];

const WhyUsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Apex</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
          Why Brands <span className="gradient-text">Choose Us</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="text-center p-6 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
