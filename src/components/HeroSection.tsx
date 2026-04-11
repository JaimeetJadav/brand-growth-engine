import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="inline-block px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase">
          Full-Service Creative Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tightest max-w-5xl mx-auto mt-8"
      >
        We Build Brands That{" "}
        <span className="gradient-text">Stand Out</span> & Sell
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mt-8 leading-relaxed font-light"
      >
        From stunning visuals to data-driven campaigns — we help ambitious brands dominate their market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
      >
        <Link to="/contact" className="gradient-btn px-8 py-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 group tracking-wide">
          Get Started
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-500" />
        </Link>
        <a href="#services" className="px-8 py-4 rounded-md border border-border/60 text-foreground/80 hover:text-foreground hover:border-border transition-all duration-500 text-sm font-medium text-center tracking-wide">
          Our Services
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="grid grid-cols-3 gap-12 max-w-md mx-auto mt-24 border-t border-border/30 pt-10"
      >
        {[
          { value: "150+", label: "Projects" },
          { value: "50+", label: "Clients" },
          { value: "98%", label: "Satisfaction" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
            <p className="text-muted-foreground text-xs mt-1.5 tracking-wider uppercase">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
