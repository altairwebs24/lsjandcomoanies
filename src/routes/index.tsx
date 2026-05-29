import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, HardHat, Ruler, Wrench, Zap, Droplets, PaintBucket, Hammer } from "lucide-react";
import hero from "@/assets/hero-house.jpg";
import construction from "@/assets/construction.jpg";
import plans from "@/assets/service-plans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LSJ Ncele Investments — The Home of Perfection" },
      { name: "description", content: "Architectural plans, construction, civil works and finishings. Turning your dream home into reality across Eswatini." },
      { property: "og:title", content: "LSJ Ncele Investments — The Home of Perfection" },
      { property: "og:description", content: "Architectural plans, construction and finishings across Eswatini." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Ruler, title: "Architectural Plans" },
  { icon: Compass, title: "Costing & Estimation" },
  { icon: HardHat, title: "Building Construction" },
  { icon: Wrench, title: "Maintenance" },
  { icon: Zap, title: "Electrical Installation" },
  { icon: Droplets, title: "Plumbing Works" },
  { icon: PaintBucket, title: "Painting & Tiling" },
  { icon: Hammer, title: "Carpentry & Joinery" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={hero} alt="Modern luxury home built by LSJ Ncele" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The Home of Perfection
            </div>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Turning your <span className="italic text-[var(--brand-gold)]">dream home</span> into reality.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              From the first sketch to the final brushstroke — LSJ Ncele Investments delivers
              architectural, construction and finishing services built on craftsmanship and trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
                Explore Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-md gap-6 text-white">
              <div><div className="font-display text-3xl text-accent">10+</div><div className="text-xs uppercase tracking-wider text-white/70">Years</div></div>
              <div><div className="font-display text-3xl text-accent">200+</div><div className="text-xs uppercase tracking-wider text-white/70">Projects</div></div>
              <div><div className="font-display text-3xl text-accent">100%</div><div className="text-xs uppercase tracking-wider text-white/70">Commitment</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">What we do</div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">Built to last. Designed to inspire.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">A full suite of architectural and construction services under one trusted roof.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title }) => (
            <div key={title} className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:-translate-y-1 transition-all shadow-[var(--shadow-card)]">
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center group-hover:bg-accent transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-semibold">{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={plans} alt="Architectural floor plan" className="rounded-xl shadow-[var(--shadow-elegant)] w-full" width={1024} height={768} loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-accent text-accent-foreground p-6 rounded-xl shadow-xl max-w-[220px]">
              <div className="font-display text-3xl leading-none">Custom</div>
              <div className="text-xs uppercase tracking-widest mt-1">House plans tailored to you</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our Approach</div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">Every detail, drawn with precision.</h2>
            <p className="mt-5 text-muted-foreground">
              We work shoulder-to-shoulder with our clients — listening, sketching, refining — until
              the design feels exactly like home. Then we build it with the same care.
            </p>
            <ul className="mt-6 space-y-3">
              {["Tailored architectural designs", "Transparent material costing", "Skilled in-house tradespeople", "On-time, on-budget delivery"].map((x) => (
                <li key={x} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent" /> <span>{x}</span></li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={construction} alt="Construction in progress" className="absolute inset-0 h-full w-full object-cover" width={1280} height={960} loading="lazy" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-navy)", opacity: 0.9 }} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-primary-foreground">
          <h2 className="text-3xl sm:text-5xl font-bold">Ready to build something exceptional?</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">Tell us about your project. We'll send a free, no-obligation consultation and estimate.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">Request a Quote</Link>
            <a href="https://wa.me/26876047150" target="_blank" rel="noreferrer" className="rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
