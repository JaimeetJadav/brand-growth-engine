import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-lg font-semibold tracking-tight">
              <span className="text-primary">Apex</span>
              <span className="text-foreground">Studio</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-5 leading-relaxed font-light">
              We craft bold brands and high-performance digital campaigns that drive real results.
            </p>
            <div className="flex gap-3 mt-7">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-md bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-500"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-foreground mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3.5">
              {["Home", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                >
                  {item}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-foreground mb-5">Services</h4>
            <div className="flex flex-col gap-3.5">
              {["Branding & Design", "Advertising", "Content Production", "Social Media"].map((item) => (
                <span key={item} className="text-muted-foreground text-sm font-light">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-foreground mb-5">Contact</h4>
            <div className="flex flex-col gap-3.5 text-sm text-muted-foreground font-light">
              <span>hello@apexstudio.com</span>
              <span>+1 (555) 123-4567</span>
              <span>123 Creative Ave, Suite 100<br />New York, NY 10001</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} ApexStudio. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground font-light">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
