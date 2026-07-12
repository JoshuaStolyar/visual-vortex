import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Visual Vortex",
  description: "How Visual Vortex collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors mb-12">
            ← Back to Visual Vortex
          </Link>

          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm mb-14">Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-10 text-white/65 text-[15px] leading-relaxed">
            <section>
              <p>
                Visual Vortex (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates visualvrtx.com. This
                policy explains what information we collect through the site, why we collect it, and how it&apos;s
                used. We keep this simple on purpose — we don&apos;t collect more than we need.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Information we collect</h2>
              <p>
                When you submit the application form on this site, we collect the information you provide directly:
                your name, email address, social media / channel link, and any message you include. We do not
                collect this information anywhere else on the site — browsing the site without submitting the form
                does not send us any personal information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">How we use it</h2>
              <p>
                We use the information you submit solely to respond to your application and evaluate a potential
                working relationship. We do not sell, rent, or share your information with third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Third-party services</h2>
              <p>
                Form submissions are delivered to us via{" "}
                <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:brightness-110 transition">Resend</a>,
                a transactional email provider, so your submission passes through their infrastructure to reach our
                inbox. The site is hosted on Vercel, which may log standard technical information (like IP address
                and browser type) as part of normal web hosting — this is infrastructure-level logging, not
                something we actively collect or analyze. We do not currently use cookies, analytics, or advertising
                trackers on this site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Data retention</h2>
              <p>
                We retain application information for as long as reasonably necessary to evaluate and follow up on
                your inquiry, or until you ask us to delete it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Your rights</h2>
              <p>
                You can request a copy of the information we hold about you, or ask us to correct or delete it, at
                any time by emailing{" "}
                <a href="mailto:visualvortexcreators@gmail.com" className="text-accent hover:brightness-110 transition">visualvortexcreators@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Changes to this policy</h2>
              <p>
                If we change how we handle information, we&apos;ll update this page. Continued use of the site after
                a change means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href="mailto:visualvortexcreators@gmail.com" className="text-accent hover:brightness-110 transition">visualvortexcreators@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
