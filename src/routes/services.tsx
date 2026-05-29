import { createFileRoute, Link } from "@tanstack/react-router";
import { Ruler, Compass, HardHat, Wrench, Zap, Droplets, PaintBucket, Hammer, Layers, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LSJ Ncele Investments" },
      { name: "description", content: "Architectural plans, costing, construction, electrical, plumbing, painting, tiling, carpentry and joinery in Eswatini." },
      { property: "og:title", content: "Services — LSJ Ncele Investments" },
      { property: "og:description", content: "A full suite of architectural and construction services." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Ruler, title: "Architectural House Plans", desc: "Custom residential and commercial designs drawn to your vision and approved for build." },
  { icon: Compass, title: "Building Material Costing & Estimation", desc: "Accurate, itemised quantity take-offs so you know exactly what your project will cost." },
  { icon: HardHat, title: "Building Construction", desc: "Full-service construction from foundation to roof, delivered on time and on budget." },
  { icon: Wrench, title: "Building Maintenance", desc: "Renovations, repairs and upkeep that protect the value of your property." },
  { icon: Layers, title: "Civil Works", desc: "Site preparation, foundations, retaining walls and drainage infrastructure." },
  { icon: Zap, title: "Electrical Installation", desc: "Safe, certified domestic and commercial electrical work and rewiring." },
  { icon: Droplets, title: "Plumbing Works", desc: "Water reticulation, sanitation, geysers and full bathroom installations." },
  { icon: PaintBucket, title: "Painting, Ceiling & Tiling", desc: "Premium interior and exterior finishes that bring your space to life." },
  { icon: Hammer, title: "Carpentry & Joinery", desc: "Bespoke cabinetry, doors, kitchen units and timber detailing." },
];

function Services() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-[var(--brand-gold)]">Our Services</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold max-w-3xl">Everything you need to build, finish and maintain.</h1>
          <p className="mt-5 text-white/80 max-w-2xl">From the first concept sketch to the final coat of paint — one trusted team handling every stage of your project.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group bg-card border border-border rounded-xl p-7 hover:border-accent hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="h-14 w-14 rounded-lg bg-secondary text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-2xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground">Talk to our consultant Lucky Sifiso Mavuso for guidance tailored to your project.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
