import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "var(--gradient-primary)" }}>
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mt-4 text-lg">
              Let's craft a strategy that puts your brand ahead of the competition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-background text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
