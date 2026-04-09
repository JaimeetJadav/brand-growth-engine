import { useState } from "react";
import { Palette, Megaphone, Video, Smartphone, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Creatives & Design",
    description: "Stunning visual identities that capture attention and build lasting brand recognition.",
    items: ["Logo & Brand Identity", "Posters & Banners", "Social Media Creatives", "Packaging Design"],
  },
  {
    icon: Megaphone,
    title: "Advertising & Marketing",
    description: "Data-driven ad campaigns that maximize ROI across every digital platform.",
    items: ["Meta Ads (Facebook & Instagram)", "Campaign Strategy", "Audience Targeting", "Performance Optimization"],
  },
  {
    icon: Video,
    title: "Content & Production",
    description: "High-quality content that tells your story and converts viewers into customers.",
    items: ["Ad Shoots (Photo & Video)", "Video Editing", "Copywriting", "Motion Graphics"],
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Strategic social presence that grows your audience and drives meaningful engagement.",
    items: ["Content Strategy & Planning", "Content Creation", "Audience Engagement", "Analytics & Reporting"],
  },
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Services Built for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            End-to-end creative and marketing solutions designed to scale your brand.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const expanded = expandedIndex === i;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div
                  className="glass-card rounded-xl p-6 md:p-8 hover-lift cursor-pointer group"
                  onClick={() => setExpandedIndex(expanded ? null : i)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <ChevronRight
                          size={18}
                          className={`text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                        />
                      </div>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {service.description}
                      </p>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded ? "max-h-40 mt-4" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
