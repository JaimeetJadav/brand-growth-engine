import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
              <span className="gradient-text">Apex</span>
              <span className="text-foreground">Studio</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              We craft bold brands and high-performance digital campaigns that drive real results.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {item}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {["Branding & Design", "Advertising", "Content Production", "Social Media"].map((item) => (
                <span key={item} className="text-muted-foreground text-sm">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>hello@apexstudio.com</span>
              <span>+1 (555) 123-4567</span>
              <span>123 Creative Ave, Suite 100<br />New York, NY 10001</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} ApexStudio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
