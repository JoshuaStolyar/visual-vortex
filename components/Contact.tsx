"use client";

import { useState } from "react";
import { Send, PhoneCall, Rocket, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const steps = [
  { icon: Send, title: "Apply" },
  { icon: PhoneCall, title: "Call" },
  { icon: Rocket, title: "Growth" },
];

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", channel: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", channel: "", message: "" });
      }, 4000);
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-accent/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-accent/15 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">

            {/* Left — text + socials */}
            <Reveal>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="eyebrow mb-5">Get in touch</p>
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
                    Want Similar<br />
                    <span className="text-accent">Results?</span>
                  </h2>
                  <p className="text-white/50 text-lg leading-relaxed max-w-sm">
                    Reach out now.
                  </p>
                </div>

                <div className="mt-14 md:mt-16">
                  <p className="text-white/30 text-sm mb-5">Or reach out directly</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://x.com/VisualV3rtex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-white hover:border-accent/50 hover:bg-accent/[0.06] transition-all duration-250"
                    >
                      <TwitterIcon />
                      <span className="text-sm font-medium">@VisualV3rtex</span>
                    </a>
                    <a
                      href="mailto:visualvortexcreators@gmail.com"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-white hover:border-accent/50 hover:bg-accent/[0.06] transition-all duration-250"
                    >
                      <MailIcon />
                      <span className="text-sm font-medium">Email us</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={150}>
              {status === "success" ? (
                <div className="p-12 rounded-2xl border border-accent/30 bg-white/[0.03] text-center animate-scaleIn">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,90,31,0.35)]">
                    <svg className="w-8 h-8 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Application Sent!</h3>
                  <p className="text-white/50">We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-7 md:p-8 space-y-5">

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">Name</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">Social Media Link</label>
                    <input name="channel" required value={form.channel} onChange={handleChange} placeholder="Type link here" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me a bit more about what you're looking for..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Magnetic className="flex" maxShift={6}>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                    >
                      {status === "loading" ? "Sending..." : "Submit Application"}
                    </button>
                  </Magnetic>

                  {status === "error" && (
                    <p className="text-center text-red-400 text-sm">
                      Something went wrong — email us at{" "}
                      <a href="mailto:visualvortexcreators@gmail.com" className="underline">visualvortexcreators@gmail.com</a>
                    </p>
                  )}
                </form>
              )}
            </Reveal>
          </div>

          {/* What happens next — slim reassurance strip right by the form */}
          <Reveal delay={250}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0 mt-16 md:mt-20 pt-10 border-t border-white/[0.08]">
              {steps.map((step, i) => (
                <div key={step.title} className="flex items-center sm:contents">
                  <div className="flex items-center gap-3.5 shrink-0">
                    <div className="shrink-0 w-9 h-9 rounded-full border border-accent/30 bg-accent/[0.07] flex items-center justify-center">
                      <step.icon size={15} strokeWidth={2} className="text-accent" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-accent/70 tabular-nums">0{i + 1}</span>
                      <h3 className="font-display text-sm font-bold text-white whitespace-nowrap">{step.title}</h3>
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="flex-1 flex items-center gap-1.5 mx-4 sm:mx-3">
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-accent/10 min-w-[1.5rem]" />
                      <ArrowRight size={13} strokeWidth={2} className="text-accent/40 shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
