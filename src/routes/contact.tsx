import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LSJ Ncele Investments" },
      { name: "description", content: "Contact LSJ Ncele Investments in Mbabane, Eswatini. Call, WhatsApp, email or visit our office." },
      { property: "og:title", content: "Contact — LSJ Ncele Investments" },
      { property: "og:description", content: "Get in touch to start your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-[var(--brand-gold)]">Contact</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold">Let's build something together.</h1>
          <p className="mt-4 text-white/80 max-w-xl">Reach out for a free consultation, quote, or to ask any question about your project.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            { Icon: Phone, label: "Phone", value: "(+268) 7802 3392", href: "tel:+26878023392" },
            { Icon: MessageCircle, label: "WhatsApp", value: "(+268) 7604 7150", href: "https://wa.me/26876047150" },
            { Icon: Mail, label: "Email", value: "lsjncele@gmail.com", href: "mailto:lsjncele@gmail.com" },
            { Icon: MapPin, label: "Office", value: "Office #120, 1st Floor, African City Building, Gwamile Street, Mbabane", href: null },
            { Icon: MapPin, label: "Postal", value: "P.O Box 4579, Mbabane", href: null },
          ].map(({ Icon, label, value, href }) => {
            const body = (
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent transition">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-secondary text-primary grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 font-semibold">{value}</div>
                </div>
              </div>
            );
            return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{body}</a> : <div key={label}>{body}</div>;
          })}
        </div>

        <form
          className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)]"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>

          {sent ? (
            <div className="mt-8 rounded-lg bg-secondary p-6 text-center">
              <div className="font-display text-2xl text-accent">Message Sent</div>
              <p className="mt-2 text-sm text-muted-foreground">Thank you — we'll be in touch shortly.</p>
            </div>
          ) : (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
              <div className="sm:col-span-2"><Field label="Project type" name="project" placeholder="e.g. House plans, construction, renovation" /></div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input {...props} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
