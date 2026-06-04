import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Corrections Policy | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Corrections Policy. How we identify, review, and publicly correct errors in our intelligence reporting and investigations.",
  alternates: { canonical: `${SITE_URL}/corrections-policy` },
  openGraph: {
    title: `Corrections Policy | ${SITE_NAME}`,
    description:
      "How OS-Intel identifies, reviews, and corrects errors in intelligence reporting and investigations.",
    url: `${SITE_URL}/corrections-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Corrections Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Corrections Policy | ${SITE_NAME}`,
    description:
      "How OS-Intel corrects errors in intelligence reporting and investigations.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const ERROR_TYPES = [
  {
    icon: "◌",
    title: "Technical & Typographical Errors",
    body: "Spelling, punctuation, and formatting errors that do not affect the accuracy or meaning of intelligence content are corrected silently as routine maintenance. No correction note is appended.",
  },
  {
    icon: "◎",
    title: "Factual Errors",
    body: "Incorrect names, dates, coordinates, technical designations, casualty figures, or event descriptions are corrected directly in the article. A clearly labelled correction note is appended at the end of the article stating what was reported, what was wrong, and what the correct information is.",
  },
  {
    icon: "◉",
    title: "Contextual Errors",
    body: "Where missing context materially altered the meaning or fairness of reporting — for example, an omitted timeline or a misidentified actor — a clarification note is added that provides the missing information without erasing the original text.",
  },
  {
    icon: "△",
    title: "Intelligence Updates",
    body: "In fast-moving conflict or cybersecurity situations, articles on developing events are updated with timestamped update notes at the top of the article. Each update records what new intelligence was added and when.",
  },
  {
    icon: "⊗",
    title: "Significant or Systematic Errors",
    body: "Where an error fundamentally misrepresents a person, operation, or situation — particularly in investigation or conflict reporting — the article is escalated to a senior editor. Depending on the severity, a full correction, editor's note, or in extreme cases a retraction is issued.",
  },
];

export default function CorrectionsPolicy() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/corrections-policy#webpage`,
    name: `Corrections Policy | ${SITE_NAME}`,
    description: "OS-Intel's corrections policy for handling factual errors in intelligence reporting.",
    url: `${SITE_URL}/corrections-policy`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
      correctionsPolicy: `${SITE_URL}/corrections-policy`,
    },
    dateModified: "2026-03-01",
    inLanguage: "en-US",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/corrections-policy#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Corrections Policy", item: `${SITE_URL}/corrections-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-12 md:py-16 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400">
                <li><Link href="/" title="Home — OS-Intel" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><span>›</span></li>
                <li><span className="text-gray-600">Corrections Policy</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Standards
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Corrections Policy
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              Intelligence reporting demands precision. When OS-Intel publishes an error — whether in
              a conflict report, a cybersecurity investigation, or a geopolitical analysis — we
              correct it openly, promptly, and in the original article where readers can find it.
            </p>
          </div>
        </section>

        {/* ── Stat strip ── */}
        <section className="w-full bg-gray-900 text-white">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-700">
              {[
                { stat: "In-Article", label: "Where corrections appear" },
                { stat: "Timestamped", label: "Every correction dated" },
                { stat: "No Deletion", label: "Errors never silently removed" },
                { stat: "Public", label: "All corrections visible" },
              ].map((item) => (
                <div key={item.label} className="md:px-8 first:pl-0 last:pr-0">
                  <p className="text-xl md:text-2xl font-black font-playfair text-red-500 mb-1">{item.stat}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-sans">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Error types ── */}
        <section className="w-full border-b border-gray-200" id="error-types">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Error Classification
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-2">
              How we classify and respond to errors.
            </h2>
            <p className="text-sm text-gray-500 font-serif mb-10">
              Not all errors require the same response. OS-Intel classifies errors by their impact on the accuracy and fairness of published intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {ERROR_TYPES.map((item, i) => (
                <div
                  key={item.title}
                  className={`p-6 border-gray-200
                    ${i % 2 === 0 ? "md:border-r" : ""}
                    ${i < ERROR_TYPES.length - (ERROR_TYPES.length % 2 === 0 ? 2 : 1) ? "border-b" : ""}
                    ${i === ERROR_TYPES.length - 1 && ERROR_TYPES.length % 2 !== 0 ? "md:col-span-2 border-t md:border-t-0" : ""}
                  `}
                >
                  <span className="text-4xl font-black font-playfair text-gray-100 block mb-3 leading-none">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-black font-serif text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where corrections appear ── */}
        <section className="w-full border-b border-gray-200" id="where-corrections-appear">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="md:w-[35%] shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  Correction Placement
                </p>
                <h2 className="text-3xl font-black font-playfair text-gray-900 leading-tight">
                  Where corrections appear.
                </h2>
              </div>
              <div className="flex-1 flex flex-col gap-5 font-serif text-gray-600 text-sm leading-relaxed">
                <p>
                  All corrections appear in the original article — not on a separate page that
                  most readers will never visit. OS-Intel does not delete inaccurate content and
                  rewrite it as though the error never happened.
                </p>
                <p>
                  Factual correction notes appear at the bottom of the article with the date the
                  correction was issued. For developing intelligence stories, update notes are
                  placed at the top of the article with timestamps so readers can track how
                  the reported picture has changed.
                </p>
                <p>
                  Where an error affected the headline or central intelligence claim of a story,
                  the corrected headline and a prominent editor's note are placed at the top of
                  the article, not buried in the body text.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How to submit ── */}
        <section className="w-full border-b border-gray-200" id="submit-correction">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Submit a Correction
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-8">
              What to include in a correction request.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Article URL or headline", body: "Link directly to the article containing the error." },
                { num: "02", title: "The specific error", body: "Identify the exact sentence, figure, name, or claim that is incorrect." },
                { num: "03", title: "Correct information", body: "State what the correct information is and how you know it." },
                { num: "04", title: "Supporting evidence", body: "Include documents, official records, links, or other verifiable sources." },
                { num: "05", title: "Your contact details", body: "In case we need to follow up on your request." },
                { num: "06", title: "Your capacity", body: "Whether you are writing personally, as a representative, or in a legal capacity." },
              ].map((item) => (
                <div key={item.num} className="border-l-2 border-red-600 pl-4">
                  <span className="text-3xl font-black font-playfair text-gray-100 block mb-1 leading-none">{item.num}</span>
                  <h3 className="text-base font-black font-serif text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-serif leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our commitment ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="our-commitment">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-8">
              What OS-Intel commits to on corrections.
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "We do not remove errors without acknowledgment — every change to published content is documented.",
                "We do not favour any party in corrections decisions. If the intelligence is wrong, we correct it regardless of who it implicates.",
                "Correction requests from readers are treated with the same rigour as internal review.",
                "We do not consider legal pressure alone as a basis for removing accurate, verified reporting.",
                "Corrections are placed where they can be found — not hidden in fine print or a page with no inbound links.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-gray-200 last:border-0">
                  <span className="text-red-600 font-sans text-sm font-bold w-6 shrink-0">✓</span>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="w-full border-t border-gray-200">
          <div className="px-4 md:px-6 py-10 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <h2 className="text-xl font-black font-playfair text-gray-900 mb-2">
                  Submit a Correction
                </h2>
                <p className="text-sm text-gray-600 font-serif leading-relaxed">
                  If you believe OS-Intel has published inaccurate intelligence or reporting, contact
                  us directly. Every substantive correction request is reviewed and responded to.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:corrections@os-intel.com"
                  title="Submit a correction to OS-Intel"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors"
                >
                  corrections@os-intel.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related policies ── */}
        <section className="w-full border-t border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans mb-4">
              Related Policies
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Right of Reply", href: "/right-of-reply" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Legal", href: "/legal" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  title={label}
                  className="border border-gray-300 px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}