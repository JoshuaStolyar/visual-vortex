import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Visual Vortex",
  description: "The terms governing your use of the Visual Vortex website.",
};

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors mb-12">
            ← Back to Visual Vortex
          </Link>

          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm mb-14">Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-10 text-white/65 text-[15px] leading-relaxed">
            <section>
              <p>
                These terms govern your use of visualvrtx.com (the &ldquo;site&rdquo;), operated by Visual Vortex.
                By using the site or submitting the application form, you agree to these terms. This page covers the
                website itself — the specific terms of any paid engagement (scope, pricing, revenue share, etc.) are
                agreed separately once we start working together.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Use of the site</h2>
              <p>
                This site is provided to share information about Visual Vortex&apos;s services and to let prospective
                clients apply to work with us. You agree to use it only for lawful purposes and not to submit false
                or misleading information through the application form.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Services described</h2>
              <p>
                Descriptions of our services (Agency, Partnership, Revenue Streams) and past results on this site
                are informational and reflect real, verifiable outcomes we&apos;ve achieved for specific clients.
                They describe the kind of work we do — they are not an offer or guarantee of specific results for
                any new client. Individual outcomes depend on factors outside our control, including niche,
                consistency, platform algorithm changes, and market conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">No guarantee of results</h2>
              <p>
                Past performance shown in our case studies is not a promise of future results. Any partnership,
                pricing, or performance terms for a specific engagement will be set out in a separate agreement
                between Visual Vortex and the client.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Intellectual property</h2>
              <p>
                The content on this site — including copy, design, and visuals — belongs to Visual Vortex unless
                otherwise noted, and may not be copied or reused without permission. Client names, channel names, and
                statistics referenced in case studies remain the property of their respective owners and are used
                with their knowledge to showcase our work together.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Third-party links</h2>
              <p>
                This site links to third-party platforms (e.g. YouTube, Spotify, X). We aren&apos;t responsible for
                the content, availability, or practices of those external sites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Limitation of liability</h2>
              <p>
                The site and its content are provided &ldquo;as is,&rdquo; without warranties of any kind. Visual
                Vortex is not liable for any indirect or consequential damages arising from your use of the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use of the site after a change means you
                accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about these terms? Email{" "}
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
