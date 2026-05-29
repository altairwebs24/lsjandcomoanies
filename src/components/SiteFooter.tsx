import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy-deep)] text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 bg-white rounded-md p-1" width={48} height={48} />
            <div>
              <div className="font-display text-2xl">LSJ NCELE INVESTMENTS</div>
              <div className="text-xs uppercase tracking-widest text-white/60">The Home of Perfection</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md">
            Turning your dream home into reality. Architectural plans, construction and finishing
            services trusted across Eswatini.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> (+268) 7802 3392</li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-accent" /> (+268) 7604 7150</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> lsjncele@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Office #120, African City Building, Gwamile St, Mbabane</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} LSJ Ncele Investments (Pty) Ltd. All rights reserved.</span>
          <span>Consultant: Lucky Sifiso Mavuso</span>
        </div>
      </div>
    </footer>
  );
}
