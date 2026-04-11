import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="relative rounded-lg overflow-hidden p-12 md:p-20 text-center bg-secondary">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tightest">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mt-5 text-base font-light leading-relaxed">
              Let's craft a strategy that puts your brand ahead of the competition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 gradient-btn px-8 py-4 rounded-md text-sm font-medium group tracking-wide"
            >
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
