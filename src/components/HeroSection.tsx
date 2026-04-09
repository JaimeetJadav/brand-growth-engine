import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Grid overlay */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
          Full-Service Creative Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto"
      >
        We Build Brands That{" "}
        <span className="gradient-text">Stand Out</span> & Sell
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        From stunning visuals to data-driven campaigns — we help ambitious brands dominate their market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
      >
        <Link to="/contact" className="gradient-btn px-8 py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a href="#services" className="px-8 py-4 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-base font-medium text-center">
          Our Services
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 border-t border-border/50 pt-8"
      >
        {[
          { value: "150+", label: "Projects" },
          { value: "50+", label: "Clients" },
          { value: "98%", label: "Satisfaction" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
