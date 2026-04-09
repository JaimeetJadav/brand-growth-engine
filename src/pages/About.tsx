import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, Eye } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 section-padding">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            The Story Behind <span className="gradient-text">ApexStudio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            We're a team of strategists, designers, and marketers obsessed with building brands that make an impact.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded with a simple belief — that great brands are built at the intersection of bold creativity and sharp strategy. ApexStudio started as a small design studio and evolved into a full-service creative and digital marketing agency.
            </p>
            <p>
              Today, we partner with ambitious brands across industries to craft identities, launch campaigns, and create content that drives measurable growth. Every project we take on is treated as our own.
            </p>
            <p>
              Your content and story details will go here. We'd love to hear what makes your journey unique and share it with the world.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Target size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower brands with creative solutions and data-driven strategies that accelerate growth and build lasting market presence.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={22} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to creative partner for brands that refuse to blend in — driving innovation and excellence in every project.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Team placeholder */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Users size={24} className="text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our talented team of creatives, strategists, and tech enthusiasts will be introduced here. Stay tuned!
          </p>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
