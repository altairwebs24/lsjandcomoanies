import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, Sparkles } from "lucide-react";
import blueprints from "@/assets/lucky-mavuso.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LSJ Ncele Investments" },
      { name: "description", content: "LSJ Ncele Investments is a trusted Eswatini-based construction and architectural firm led by consultant Lucky Sifiso Mavuso." },
      { property: "og:title", content: "About — LSJ Ncele Investments" },
      { property: "og:description", content: "The team behind The Home of Perfection." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "We treat every project as our own — finished to the highest standard." },
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent pricing, honest timelines and clear communication." },
  { icon: Users, title: "Partnership", desc: "We listen first. Your vision drives every decision." },
  { icon: Sparkles, title: "Perfection", desc: "It's in our promise — and in every detail we deliver." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">About Us</div>
            <h1 className="mt-3 text-4xl sm:text-6xl font-bold">A name Eswatini trusts to build.</h1>
            <p className="mt-6 text-muted-foreground text-lg">
              LSJ Ncele Investments (Pty) Ltd is an architectural and construction consultancy based in
              Mbabane. Under the leadership of consultant <strong className="text-foreground">Lucky Sifiso Mavuso</strong>,
              we have spent over a decade turning blueprints into beautiful, lasting homes.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our promise is simple — and it's stitched into our motto: <em className="text-primary">The Home of Perfection</em>.
              From your first sketch to the day you turn the key, we treat your project as our own.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/services" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">Our Services</Link>
              <Link to="/contact" className="rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition">Contact Us</Link>
            </div>
          </div>
          <div className="relative">
            <img src={blueprints} alt="Lucky Sifiso Mavuso, Consultant at LSJ Ncele Investments" className="rounded-xl shadow-[var(--shadow-elegant)] w-full object-cover" width={1280} height={1920} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-center">What we stand for</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 border border-border">
                <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground grid place-items-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl text-primary leading-relaxed">
          “We don't just build houses. We turn dreams into homes our clients are proud to call their own.”
        </blockquote>
        <div className="mt-6 font-semibold">Lucky Sifiso Mavuso</div>
        <div className="text-sm text-muted-foreground">Consultant — LSJ Ncele Investments</div>
      </section>
    </>
  );
}
