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
              <span className="text-primary">Adiator</span>
              <span className="text-foreground"> Media</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-5 leading-relaxed font-light">
              We craft bold brands and high-performance digital campaigns that drive real results.
            </p>
            <div className="flex gap-3 mt-7">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/adiatormedia" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              <span>adiatormedia@gmail.com</span>
              <span>+91 94094 21234</span>
              <span>+91 96879 53803</span>
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} Adiator Media. All rights reserved.
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
