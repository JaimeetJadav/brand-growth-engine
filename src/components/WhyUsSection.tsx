import { BarChart3, Lightbulb, Target, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: BarChart3, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and real performance data." },
  { icon: Lightbulb, title: "Creative Storytelling", desc: "Narratives that resonate, inspire, and move audiences to action." },
  { icon: Target, title: "ROI-Focused Campaigns", desc: "Measurable results that directly impact your bottom line." },
  { icon: Layers, title: "End-to-End Solutions", desc: "From concept to execution — one team, zero friction." },
];

const WhyUsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Why Apex</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tightest">
          Why Brands <span className="gradient-text">Choose Us</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <div className="text-center p-8 group">
                <div className="w-12 h-12 rounded-md bg-primary/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/12 group-hover:scale-105 transition-all duration-500">
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3 tracking-tight">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{r.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
