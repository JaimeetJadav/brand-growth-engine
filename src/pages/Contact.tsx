import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-36 section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tightest">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mt-5 text-base font-light">
              Have a project in mind? We'd love to hear about it.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-lg p-7 md:p-9 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-2 block tracking-wide">Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-secondary/60 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-500 font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground mb-2 block tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-secondary/60 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-500 font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-2 block tracking-wide">Phone</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary/60 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-500 font-light"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-2 block tracking-wide">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary/60 border border-border/40 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-500 resize-none font-light"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="gradient-btn w-full py-3.5 rounded-md text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60 tracking-wide"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <Send size={14} strokeWidth={1.5} />
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-2 flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email", value: "adiatormedia@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 94094 21234\n+91 96879 53803" },
                { icon: MapPin, label: "Office", value: "Ahmedabad, Gujarat" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="glass-card rounded-lg p-6 flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-md bg-primary/8 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground tracking-tight">{item.label}</p>
                      <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line font-light">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
