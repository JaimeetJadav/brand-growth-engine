import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = ["All", "Branding", "Ads", "Social", "Video"];

const projects = [
  { title: "Luxe Fashion Rebrand", category: "Branding", color: "from-primary/10 to-primary/5" },
  { title: "Tech Startup Campaign", category: "Ads", color: "from-accent/10 to-accent/5" },
  { title: "Organic Skincare Launch", category: "Social", color: "from-primary/8 to-secondary" },
  { title: "Restaurant Brand Film", category: "Video", color: "from-accent/8 to-secondary" },
  { title: "Fintech App Identity", category: "Branding", color: "from-primary/12 to-primary/5" },
  { title: "E-commerce Ad Series", category: "Ads", color: "from-accent/12 to-accent/5" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tightest">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-medium tracking-wide transition-all duration-500 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.06}>
              <div className="glass-card rounded-lg overflow-hidden group cursor-pointer hover-lift">
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="font-heading text-base font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-500 tracking-tight">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-primary font-medium uppercase tracking-[0.15em]">{project.category}</span>
                  <h3 className="font-heading font-medium text-foreground mt-1 tracking-tight text-sm">{project.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
