import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — TradeFlo Systems',
  description: 'Privacy policy for TradeFlo Systems.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-blue hover:text-ink transition-colors mb-10 block">
          ← Back to Home
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">Legal</p>
        <h1 className="font-condensed text-4xl md:text-5xl text-ink mb-2 leading-none">Privacy Policy</h1>
        <div className="h-px w-16 bg-blue mb-8" />
        <p className="font-mono text-xs text-concrete mb-12">Last updated: June 2025</p>

        <div className="space-y-10 font-body text-concrete leading-relaxed">

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">1. Who We Are</h2>
            <p>TradeFlo Systems ("we", "us", "our") provides digital growth services for trade businesses. Our website is <strong>tradeflosystems.com</strong>. For questions about this policy, contact us at <a href="mailto:leads@tradeflosystems.com" className="text-blue hover:underline">leads@tradeflosystems.com</a>.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you voluntarily provide when you fill out our contact or audit request form, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and trade type</li>
              <li>Any details you include in your message</li>
            </ul>
            <p className="mt-3">We also collect standard web analytics data (pages visited, browser type, device, approximate location) through analytics tools.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To respond to your inquiry or audit request</li>
              <li>To deliver services you've requested</li>
              <li>To send follow-up communications related to your inquiry</li>
              <li>To improve our website and marketing</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">4. Third-Party Services</h2>
            <p>We use GoHighLevel (GHL) as our CRM to manage form submissions and client communications. Information submitted via our contact form is stored in GoHighLevel's platform. Their privacy policy governs how they handle that data.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">5. Cookies</h2>
            <p>Our website may use cookies for analytics purposes. You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use the site.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">6. Data Retention</h2>
            <p>We retain your information for as long as necessary to fulfill the purposes described in this policy or as required by law. You may request deletion of your data at any time by emailing <a href="mailto:leads@tradeflosystems.com" className="text-blue hover:underline">leads@tradeflosystems.com</a>.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:leads@tradeflosystems.com" className="text-blue hover:underline">leads@tradeflosystems.com</a>.</p>
          </section>

          <section>
            <h2 className="font-condensed text-2xl text-ink mb-3">8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our site after changes constitutes acceptance of the updated policy.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
