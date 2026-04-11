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
        <AnimatedSection className="text-center mb-20">
          <p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tightest">
            Services Built for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-5 font-light leading-relaxed">
            End-to-end creative and marketing solutions designed to scale your brand.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const expanded = expandedIndex === i;
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div
                  className="glass-card rounded-lg p-7 md:p-9 hover-lift cursor-pointer group"
                  onClick={() => setExpandedIndex(expanded ? null : i)}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-500">
                      <Icon size={20} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-lg font-semibold text-foreground tracking-tight">
                          {service.title}
                        </h3>
                        <ChevronRight
                          size={16}
                          className={`text-muted-foreground transition-transform duration-500 ${expanded ? "rotate-90" : ""}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-muted-foreground text-sm mt-2.5 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          expanded ? "max-h-40 mt-5" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs px-3 py-1.5 rounded-md bg-secondary/80 text-secondary-foreground font-light"
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
