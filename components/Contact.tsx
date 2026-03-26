"use client";

import { useState } from "react";

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    "w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.08] transition-all duration-200 text-sm";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-[-5%] w-[350px] h-[350px] rounded-full bg-blue-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left — text + socials */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Want Similar<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Results?
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-sm">
                  Reach out now.
                </p>
              </div>

              <div className="mt-16">
                <p className="text-white/30 text-sm mb-5">Or reach out directly</p>
                <div className="flex items-center gap-5">
                  <a
                    href="https://x.com/VisualV3rtex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <TwitterIcon />
                    <span className="text-sm">@VisualV3rtex</span>
                  </a>
                  <a
                    href="mailto:visualvortexcreators@gmail.com"
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <MailIcon />
                    <span className="text-sm">Email us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div className="p-12 rounded-2xl border border-purple-500/30 bg-white/[0.03] text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Application Sent!</h3>
                  <p className="text-white/50">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] space-y-5">

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-wider">Name</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-wider">Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-wider">Social Media Link</label>
                    <input name="channel" required value={form.channel} onChange={handleChange} placeholder="Type link here" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me a bit more about what you're looking for..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_50px_rgba(139,92,246,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Submit Application"}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-red-400 text-sm">
                      Something went wrong — email us at{" "}
                      <a href="mailto:visualvortexcreators@gmail.com" className="underline">visualvortexcreators@gmail.com</a>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 pt-8 border-t border-white/5 text-white/20 text-sm text-center">
            <p className="mb-4">© 2025 Visual Vortex. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
