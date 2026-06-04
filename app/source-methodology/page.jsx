import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Source Methodology | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Source Methodology. How we gather, verify, and assess intelligence from open sources, signals data, documents, and human contacts.",
  alternates: { canonical: `${SITE_URL}/source-methodology` },
  openGraph: {
    title: `Source Methodology | ${SITE_NAME}`,
    description:
      "How OS-Intel gathers, verifies, and assesses intelligence from open sources, signals data, and documents.",
    url: `${SITE_URL}/source-methodology`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Source Methodology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Source Methodology | ${SITE_NAME}`,
    description:
      "How OS-Intel gathers and verifies intelligence for its reporting.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const SOURCE_TIERS = [
  {
    tier: "Primary Intelligence",
    tag: "Highest Weight",
    tagColor: "bg-red-600",
    items: [
      "Official government documents, declassified filings, and verified state communications",
      "Satellite and geospatial imagery from accredited providers",
      "Court records, legal filings, and tribunal transcripts",
      "Firsthand on-the-record accounts from direct witnesses or participants",
      "Original technical data from verified institutional or research datasets",
    ],
  },
  {
    tier: "Secondary Sources",
    tag: "Standard Weight",
    tagColor: "bg-gray-700",
    items: [
      "Verified reporting from established international news organisations with identified primary sources",
      "Technical analysis supported by documented methodology and peer review",
      "Official statements cross-referenced against independent corroboration",
      "Publicly accessible signals data and open-source geospatial records",
    ],
  },
  {
    tier: "Tertiary & Unverified",
    tag: "Contextual Use Only",
    tagColor: "bg-gray-400",
    items: [
      "Social media posts — used as leads for further investigation, never as standalone evidence",
      "Anonymous tips without corroboration — treated as starting points only",
      "Aggregated or secondary reporting without identified primary sources",
    ],
  },
];

const OSINT_METHODS = [
  {
    area: "Geospatial Analysis",
    desc: "Satellite imagery, mapping data, and georeferencing used to verify locations, troop positions, infrastructure damage, and event timelines in conflict reporting.",
  },
  {
    area: "Technical SIGINT",
    desc: "Where publicly available signals data, network traffic analysis, or technical indicators are used to support cybersecurity and dark web investigations.",
  },
  {
    area: "Document Verification",
    desc: "Leaked or submitted documents are assessed for metadata authenticity, internal consistency, and cross-referencing against known official formats and records.",
  },
  {
    area: "Social Media OSINT",
    desc: "Video and imagery shared on social platforms is geolocated, reverse-searched, and dated using open-source tools before use in any published report.",
  },
  {
    area: "Financial & Corporate Records",
    desc: "Company registries, beneficial ownership databases, and financial filings used for investigations into illicit finance, sanctions evasion, and dark web operations.",
  },
  {
    area: "Human Intelligence (HUMINT)",
    desc: "Firsthand accounts from sources in the field. All HUMINT is corroborated against documentary or signals evidence where possible before publication.",
  },
];

export default function SourceMethodology() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/source-methodology#webpage`,
    name: `Source Methodology | ${SITE_NAME}`,
    description: "OS-Intel's OSINT-based source methodology, verification standards, and approach to intelligence gathering.",
    url: `${SITE_URL}/source-methodology`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    dateModified: "2026-03-01",
    inLanguage: "en-US",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/source-methodology#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Source Methodology", item: `${SITE_URL}/source-methodology` },
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
                <li><span className="text-gray-600">Source Methodology</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Standards
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Source Methodology
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              OS-Intel is built on open-source intelligence. This page explains how we gather,
              classify, verify, and attribute the intelligence behind every story we publish —
              from satellite imagery to leaked documents to human sources in the field.
            </p>
          </div>
        </section>

        {/* ── OSINT foundation ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="md:w-[35%] shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  OSINT Foundation
                </p>
                <h2 className="text-3xl md:text-4xl font-black font-playfair text-gray-900 leading-tight">
                  Open-source. Verifiable. Independent.
                </h2>
              </div>
              <div className="flex-1 flex flex-col gap-5 font-serif text-gray-600 text-sm leading-relaxed">
                <p>
                  The OS in OS-Intel stands for open-source. Every report we publish is grounded
                  in information that exists in the public domain or can be independently verified
                  through open-source techniques — satellite analysis, technical signals, official
                  records, geolocation, and documentary evidence.
                </p>
                <p>
                  We do not publish based on unverified leaks, single anonymous tips, or social
                  media claims without independent corroboration. Intelligence — regardless of how
                  it is obtained — must be tested against at least one independent verification
                  pathway before it appears in a published article.
                </p>
                <p>
                  Where an intelligence claim cannot be verified to the standard the article would
                  imply, that limitation is stated explicitly. We do not present partially
                  confirmed information as fact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Source hierarchy ── */}
        <section className="w-full border-b border-gray-200" id="source-hierarchy">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Source Hierarchy
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-10">
              How we weight different intelligence sources.
            </h2>
            <div className="flex flex-col gap-6">
              {SOURCE_TIERS.map((tier) => (
                <div key={tier.tier} className="border border-gray-200">
                  <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-base font-black font-playfair text-gray-900 flex-1">{tier.tier}</h3>
                    <span className={`${tier.tagColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-sans`}>
                      {tier.tag}
                    </span>
                  </div>
                  <ul className="px-5 py-4 flex flex-col gap-2">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-serif">
                        <span className="text-red-600 mt-1 leading-none">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OSINT methods ── */}
        <section className="w-full border-b border-gray-200" id="osint-methods">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              OSINT Methods
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-10">
              Six intelligence disciplines, one verification standard.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {OSINT_METHODS.map((m) => (
                <div key={m.area} className="border-l-2 border-red-600 pl-4">
                  <h3 className="text-base font-black font-serif text-gray-900 mb-1">{m.area}</h3>
                  <p className="text-sm text-gray-500 font-serif leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Anonymous sources ── */}
        <section className="w-full border-b border-gray-200" id="anonymous-sources">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Anonymous Sources
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-6">
              When and how anonymity is granted.
            </h2>
            <div className="flex flex-col gap-4 font-serif text-sm text-gray-600 leading-relaxed max-w-3xl">
              <p>
                OS-Intel grants source anonymity only when the information is in the public
                interest and cannot be responsibly attributed without exposing the source to
                genuine risk. Anonymity is not a default — it is a last resort.
              </p>
              <p>
                Before granting anonymity, the editor reviewing the article must independently
                assess the source's firsthand knowledge, potential bias, and the availability
                of corroborating evidence. Sources are not anonymous to the newsroom —
                only to the public.
              </p>
              <p>
                Articles with anonymous sources describe the source in terms that give readers
                meaningful context — for example, "a current signals analyst with direct access
                to the communications" rather than a vague "source familiar with the matter."
              </p>
            </div>
          </div>
        </section>

        {/* ── Uncertainty handling ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="uncertainty">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Uncertainty Handling
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-8">
              What we say when intelligence is incomplete.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                { title: "We do not", items: ["Convert uncertainty into certainty for a stronger headline", "Present single-source claims as confirmed fact", "Use passive constructions that hide the limits of verification", "Publish technical claims without specialist review when the subject demands it"] },
                { title: "We do", items: ["State explicitly when a claim is unconfirmed or from a single source", "Update articles with timestamped notes when new intelligence changes the picture", "Use language that accurately reflects the confidence level of the intelligence", "Mark developing situations clearly so readers know the picture may change"] },
              ].map((col, i) => (
                <div key={col.title} className={`p-6 ${i === 0 ? "md:border-r border-b md:border-b-0 border-gray-200" : ""}`}>
                  <h3 className="text-base font-black font-playfair text-gray-900 mb-4">{col.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-serif">
                        <span className={`mt-1 leading-none font-bold ${i === 0 ? "text-red-600" : "text-green-600"}`}>{i === 0 ? "✕" : "✓"}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  Questions About Our Sources
                </h2>
                <p className="text-sm text-gray-600 font-serif leading-relaxed">
                  For questions about how a specific story was sourced or to submit intelligence
                  to our newsroom — including sensitive materials — contact us directly.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-2 text-sm font-serif">
                <a href="mailto:editorial@os-intel.com" title="Editorial contact" className="text-red-600 hover:underline">editorial@os-intel.com</a>
                <a href="mailto:tips@os-intel.com" title="Submit intelligence tips" className="text-red-600 hover:underline">tips@os-intel.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related policies ── */}
        <section className="w-full border-t border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans mb-4">Related Policies</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Corrections Policy", href: "/corrections-policy" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Right of Reply", href: "/right-of-reply" },
                { label: "Legal", href: "/legal" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} title={label}
                  className="border border-gray-300 px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors">
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