import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Editorial Policy | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Editorial Policy. How we verify intelligence, maintain independence, handle sourcing, and uphold journalistic standards across all reporting.",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
  openGraph: {
    title: `Editorial Policy | ${SITE_NAME}`,
    description:
      "How OS-Intel verifies intelligence, maintains editorial independence, and upholds strict journalistic standards across all reporting.",
    url: `${SITE_URL}/editorial-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Editorial Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Editorial Policy | ${SITE_NAME}`,
    description:
      "How OS-Intel verifies intelligence and maintains editorial independence across all reporting.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "editorial-independence",
    title: "Editorial Independence",
    body: [
      "OS-Intel operates with full editorial independence. No government, intelligence agency, political body, corporate investor, or advertising partner has any authority over the stories we cover, the conclusions we draw, or the timing of our publications.",
      "Editorial decisions are made exclusively by our editorial team based on journalistic merit — the significance of the intelligence, its public interest value, and the strength of its verification. Revenue relationships are handled separately from the newsroom and have no bearing on coverage.",
      "Journalists at OS-Intel do not accept gifts, paid travel, event access, or any material consideration from sources, companies, or organisations they cover. Where a journalist has a personal, financial, or professional connection to a subject, they are recused from covering it.",
    ],
  },
  {
    id: "intelligence-verification",
    title: "Intelligence Verification Standards",
    body: [
      "OS-Intel applies open-source intelligence (OSINT) methodology to all reporting. This means every significant claim must be independently verifiable through primary documentation, firsthand sourcing, satellite imagery, technical analysis, or cross-referenced public records before publication.",
      "We do not publish intelligence based on a single unverified source. Where a claim can only be attributed to one source and cannot be independently confirmed, that limitation is stated explicitly in the article. Readers are not left to assume that unverified claims have been substantiated.",
      "For technical reporting — cybersecurity, signals intelligence, weapons systems — claims are reviewed by subject-matter experts before publication where the subject matter requires specialist assessment.",
    ],
  },
  {
    id: "source-handling",
    title: "Source Handling and Protection",
    body: [
      "OS-Intel takes source protection seriously. The identity of confidential sources is never disclosed without their explicit consent, and our editorial team uses compartmentalised information handling for sensitive submissions.",
      "When anonymity is granted to a source, the article provides readers with enough contextual information to assess the source's relevance and potential bias — without revealing identifying details. We do not use vague attributions like 'insiders say' without meaningful description of the source's position and basis of knowledge.",
      "Sources who submit classified or sensitive material are encouraged to use secure channels. OS-Intel supports end-to-end encrypted communications for whistleblowers and intelligence contacts.",
    ],
  },
  {
    id: "conflict-of-interest",
    title: "Conflicts of Interest",
    body: [
      "All OS-Intel journalists and editors must disclose any personal, financial, or professional relationship that could reasonably affect their impartiality on an assignment. Disclosures are reviewed by a senior editor, and recusal decisions are made case by case.",
      "OS-Intel does not treat conflicts of interest as internal HR matters when they affect reader trust. Where an undisclosed conflict is identified after publication and materially affected content, a disclosure is added to the article and a correction is issued where appropriate.",
    ],
  },
  {
    id: "labelling-separation",
    title: "Content Labelling and Separation",
    body: [
      "OS-Intel clearly distinguishes between the following content types so readers always know what they are reading:",
    ],
    list: [
      "Intelligence reporting — independently verified, factual articles with attributed sources",
      "Analysis — contextual and interpretive content, clearly labelled as analysis",
      "Opinion — viewpoints by named contributors, clearly identified as opinion and not the editorial position of OS-Intel",
      "Sponsored content — commercial or partner-funded material, always labelled prominently and kept visually separate from editorial content",
    ],
    body2: [
      "OS-Intel does not publish sponsored content that mimics the style or structure of intelligence reporting. For how commercial content is handled, see our Advertising Policy.",
    ],
  },
  {
    id: "national-security-sensitivity",
    title: "National Security and Sensitivity Review",
    body: [
      "OS-Intel covers conflict zones, cybersecurity threats, state-sponsored operations, and intelligence matters that may carry national security sensitivity. Before publishing material that could compromise ongoing operations, reveal the identity of covert personnel, or directly endanger individuals, we conduct an internal sensitivity review.",
      "This review does not mean OS-Intel withholds information from the public that it has a right to know. It means we consider whether the specific form of publication — naming individuals, disclosing locations, revealing technical methods — creates disproportionate harm relative to the public interest served.",
      "OS-Intel does not submit articles to government agencies for pre-publication review. Our sensitivity review is internal and independent.",
    ],
  },
  {
    id: "reader-feedback",
    title: "Reader Feedback and Accountability",
    body: [
      "OS-Intel reads every editorial message it receives. If you believe our reporting has contained an error, misrepresented a situation, or violated our stated standards — tell us. We review all substantive feedback seriously and respond where appropriate.",
      "For factual errors, see our Corrections Policy. For requests to respond to coverage, see our Right of Reply Policy.",
    ],
  },
];

export default function EditorialPolicyPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/editorial-policy#webpage`,
    name: `Editorial Policy | ${SITE_NAME}`,
    description:
      "OS-Intel's editorial standards covering intelligence verification, source protection, editorial independence, and content labelling.",
    url: `${SITE_URL}/editorial-policy`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
      ethicsPolicy: `${SITE_URL}/editorial-policy`,
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
    },
    dateModified: "2026-03-01",
    inLanguage: "en-US",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/editorial-policy#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Editorial Policy", item: `${SITE_URL}/editorial-policy` },
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
                <li><span className="text-gray-600">Editorial Policy</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Standards
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Editorial Policy
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              OS-Intel applies open-source intelligence methodology to every investigation we
              publish. This policy defines how we verify claims, protect sources, maintain
              editorial independence, and separate journalism from commercial content.
            </p>
          </div>
        </section>

        {/* ── Table of Contents ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans mb-4">
              Contents
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    title={`Jump to: ${s.title}`}
                    className="text-sm font-serif text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Sections ── */}
        <section className="w-full">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <div className="flex flex-col gap-0">
              {SECTIONS.map((section, si) => (
                <div
                  key={section.id}
                  id={section.id}
                  className={`py-10 ${si < SECTIONS.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <h2 className="text-2xl font-black font-playfair text-gray-900 mb-5">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.body.map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 font-serif leading-relaxed">
                        {para}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="flex flex-col gap-2 pl-1">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-serif">
                            <span className="text-red-600 mt-1 leading-none">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.body2 && section.body2.map((para, i) => (
                      <p key={`b2-${i}`} className="text-sm text-gray-600 font-serif leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section className="w-full border-t border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-10 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-2">
                  Editorial Contact
                </p>
                <p className="text-sm text-gray-600 font-serif leading-relaxed">
                  Questions about our editorial standards, sourcing decisions, or coverage? Contact
                  our editorial team directly.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-2 text-sm font-serif">
                <a
                  href="mailto:editorial@os-intel.com"
                  title="Contact the OS-Intel editorial team"
                  className="text-red-600 hover:underline"
                >
                  editorial@os-intel.com
                </a>
                <a
                  href="mailto:corrections@os-intel.com"
                  title="Submit a correction to OS-Intel"
                  className="text-red-600 hover:underline"
                >
                  corrections@os-intel.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related policies ── */}
        <section className="w-full border-t border-gray-200">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans mb-4">
              Related Policies
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Corrections Policy", href: "/corrections-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Right of Reply", href: "/right-of-reply" },
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