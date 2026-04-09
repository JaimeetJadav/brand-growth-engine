import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = ["All", "Branding", "Ads", "Social", "Video"];

const projects = [
  { title: "Luxe Fashion Rebrand", category: "Branding", color: "from-blue-600/20 to-purple-600/20" },
  { title: "Tech Startup Campaign", category: "Ads", color: "from-orange-500/20 to-red-500/20" },
  { title: "Organic Skincare Launch", category: "Social", color: "from-green-500/20 to-teal-500/20" },
  { title: "Restaurant Brand Film", category: "Video", color: "from-pink-500/20 to-rose-500/20" },
  { title: "Fintech App Identity", category: "Branding", color: "from-cyan-500/20 to-blue-500/20" },
  { title: "E-commerce Ad Series", category: "Ads", color: "from-amber-500/20 to-orange-500/20" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover-lift">
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="font-heading text-lg font-semibold text-foreground/80 group-hover:scale-105 transition-transform duration-500">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">{project.title}</h3>
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
