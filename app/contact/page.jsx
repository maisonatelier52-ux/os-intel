

import ContactForm from "@/components/Contactform";
import FaqAccordion from "@/components/Faqaccordion";
import Link from "next/link";


const SITE_URL = "https://os-intel.com";
const SITE_NAME = "OS-Intel";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

// ✅ metadata export now works because this is a server component
export const metadata = {
  title: `Contact Us — OS-Intel News & Investigation`,
  // ✅ FIXED: under 160 chars, keyword-rich (world, conflict, cybersecurity, investigation, intel, contact)
  description:
    "Contact OS-Intel for news tips, cybersecurity investigations, world conflict reporting, corrections & press enquiries. Independent intel, updated daily.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact Us — OS-Intel News & Investigation`,
    description:
      "Contact OS-Intel for news tips, cybersecurity investigations, world conflict reporting, corrections & press enquiries. Independent intel, updated daily.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contact OS-Intel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us — OS-Intel News & Investigation`,
    description:
      "Contact OS-Intel for news tips, cybersecurity investigations, world conflict reporting, corrections & press enquiries. Independent intel, updated daily.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {

  // ✅ JSON-LD: ContactPage + BreadcrumbList
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    name: "Contact OS-Intel — Independent News & Investigation",
    description:
      "Contact OS-Intel for news tips, cybersecurity investigations, world conflict reporting, corrections, and press enquiries.",
    url: `${SITE_URL}/contact`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/contact#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE_URL}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-12 md:py-16 max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400">
                <li>
                  <Link href="/" title="Home — OS-Intel" className="hover:text-red-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li><span>›</span></li>
                <li><span className="text-gray-600">Contact Us</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Get in Touch
            </p>

            {/*
              ✅ H1 COHERENCE FIX:
              Title: "Contact Us — OS-Intel News & Investigation"
              H1 keywords needed in body: contact, intel, world, conflict, cybersecurity, investigation
              H1 itself contains: "Contact", "OS-Intel"
              The two paragraphs below reinforce: world, conflict, cybersecurity, investigation, intel, contact
            */}
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Contact OS-Intel
            </h1>

            {/* ✅ KEYWORD REINFORCEMENT — all title keywords appear visibly in body text */}
            <p className="text-gray-600 text-base font-serif leading-relaxed max-w-xl mb-3">
              Whether you have a world news tip, a conflict investigation lead, a cybersecurity
              alert, a correction, or a press enquiry — contact us and we will respond.
              We read every message sent to OS-Intel.
            </p>
            <p className="text-gray-500 text-sm font-serif leading-relaxed max-w-xl">
              OS-Intel covers world affairs, conflict zones, cybersecurity threats, and
              independent investigation. Your tips and intel directly support our reporting.
            </p>
          </div>
        </section>

        {/* ── Two-column: form + info ── */}
        <section className="w-full">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">

              {/* ── LEFT: Contact Form (client component) ── */}
              <div className="w-full md:w-[60%]">
                <h2 className="text-xl font-black font-playfair text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
                  Send a Message
                </h2>
                {/* ✅ Interactive form extracted to client component */}
                <ContactForm />
              </div>

              {/* ── RIGHT: Info (static, server-rendered) ── */}
              <div className="w-full md:w-[40%] flex flex-col gap-8">

                {/* Response times */}
                <div>
                  <h2 className="text-xl font-black font-playfair text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
                    Response Times
                  </h2>
                  <div className="flex flex-col gap-0 border border-gray-200">
                    {[
                      { type: "News Tips", time: "24 hours" },
                      { type: "Corrections", time: "2 business days" },
                      { type: "Press Enquiries", time: "1 business day" },
                      { type: "Legal", time: "3 business days" },
                      { type: "General", time: "3–5 business days" },
                    ].map((item, i, arr) => (
                      <div
                        key={item.type}
                        className={`flex items-center justify-between px-4 py-3 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}
                      >
                        <span className="text-sm font-serif text-gray-700">{item.type}</span>
                        <span className="text-xs font-bold font-sans text-red-600 uppercase tracking-wide">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure tips */}
                <div className="bg-gray-900 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-2">
                    Sensitive Tips
                  </p>
                  <h3 className="text-white font-black font-playfair text-lg mb-3">
                    Need to contact us securely?
                  </h3>
                  <p className="text-gray-400 text-xs font-sans leading-relaxed">
                    For sensitive tips, whistleblower disclosures, cybersecurity intel, or
                    documents requiring confidentiality — contact us and indicate the sensitivity
                    and we will provide secure transmission details. We support Signal and
                    end-to-end encrypted channels.
                  </p>
                </div>

                {/* Social */}
                <div>
                  <h2 className="text-base font-black font-playfair text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Follow OS-Intel
                  </h2>
                  <div className="flex gap-3">
                    {[
                      { label: "Twitter / X", href: "#", bg: "bg-[#1da1f2]" },
                      { label: "Facebook", href: "#", bg: "bg-[#3b5998]" },
                      { label: "Instagram", href: "#", bg: "bg-[#00aadb]" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        title={`Follow OS-Intel on ${s.label}`}
                        className={`${s.bg} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 font-sans hover:opacity-90 transition-opacity`}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we cover — keyword reinforcement strip ── */}
        <section className="w-full border-t border-gray-200">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-3xl">
              <strong className="text-gray-700">OS-Intel</strong> is an independent news and{" "}
              <strong className="text-gray-700">investigation</strong> platform. We cover{" "}
              <strong className="text-gray-700">world</strong> affairs,{" "}
              <strong className="text-gray-700">conflict</strong> zones, and{" "}
              <strong className="text-gray-700">cybersecurity</strong> — bringing you
              independent <strong className="text-gray-700">intel</strong> and breaking news
              daily. Contact us to contribute or collaborate.
            </p>
          </div>
        </section>

        {/* ── FAQ (client component for accordion) ── */}
        <section className="w-full border-t border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              FAQ
            </p>
            <h2 className="text-2xl font-black font-playfair text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            {/* ✅ Interactive accordion extracted to client component */}
            <FaqAccordion />
          </div>
        </section>

      </div>
    </>
  );
}