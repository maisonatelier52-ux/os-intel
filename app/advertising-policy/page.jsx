import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Advertising Policy | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Advertising Policy. How we separate commercial content from intelligence reporting and label all advertising and sponsored material clearly.",
  alternates: { canonical: `${SITE_URL}/advertising-policy` },
  openGraph: {
    title: `Advertising Policy | ${SITE_NAME}`,
    description:
      "How OS-Intel separates commercial content from intelligence reporting and labels all advertising clearly.",
    url: `${SITE_URL}/advertising-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Advertising Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Advertising Policy | ${SITE_NAME}`,
    description: "How OS-Intel labels all advertising and separates it from intelligence reporting.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const CONTENT_TYPES = [
  {
    title: "Display Advertising",
    tag: "Label: Advertisement",
    body: "Standard banner and sidebar ads served programmatically or via direct sale. All display ads are clearly marked 'Advertisement' and use a visually distinct format from editorial content. Advertisers have no access to articles before publication.",
  },
  {
    title: "Sponsored Content",
    tag: "Label: Sponsored / Paid Partnership",
    body: "Articles, videos, or features produced in collaboration with a commercial partner. These always carry a prominent 'Sponsored by' or 'Paid Partnership' label at the top and use a different visual template from OS-Intel intelligence reporting.",
  },
  {
    title: "Affiliate Links",
    tag: "Label: Contains affiliate links",
    body: "Where OS-Intel links to products or services and may receive a referral fee, this is disclosed in the content itself — not hidden in a general policy page. The presence of an affiliate link does not influence the editorial assessment of any linked product or service.",
  },
  {
    title: "Newsletter Sponsorships",
    tag: "Label: Presented by / Sponsored",
    body: "Where sponsor messages appear in OS-Intel newsletters, they are labelled at the point of placement and visually separated from editorial content. Newsletter sponsors do not influence the editorial content of the newsletter.",
  },
];

const NOT_PERMITTED = [
  "Purchasing editorial coverage, positive reviews, or story placement in exchange for advertising spend",
  "Requesting that critical or negative coverage be removed, softened, or delayed",
  "Receiving advance sight of articles that mention or affect them",
  "Using OS-Intel editorial bylines, templates, or formatting for commercial content without clear labelling",
  "Exerting any direct influence over OS-Intel's intelligence reporting or investigation output",
];

export default function AdvertisingPolicy() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/advertising-policy#webpage`,
    name: `Advertising Policy | ${SITE_NAME}`,
    description: "OS-Intel's advertising and sponsored content policy.",
    url: `${SITE_URL}/advertising-policy`,
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
    "@id": `${SITE_URL}/advertising-policy#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Advertising Policy", item: `${SITE_URL}/advertising-policy` },
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
                <li><span className="text-gray-600">Advertising Policy</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Transparency
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Advertising Policy
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              OS-Intel carries advertising to sustain its operations. This policy defines how
              advertising is kept separate from intelligence reporting, how commercial content
              is labelled, and what advertisers can and cannot do.
            </p>
          </div>
        </section>

        {/* ── Core principle ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="md:w-[35%] shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  Core Principle
                </p>
                <h2 className="text-3xl md:text-4xl font-black font-playfair text-gray-900 leading-tight">
                  Advertising does not buy journalism.
                </h2>
              </div>
              <div className="flex-1 flex flex-col gap-5 font-serif text-gray-600 text-sm leading-relaxed">
                <p>
                  A reader visiting OS-Intel should never have to guess whether what they are
                  reading is independent intelligence reporting or commercial content. That
                  distinction must be immediately obvious from how the content is labelled and
                  how it looks.
                </p>
                <p>
                  Purchasing advertising space on OS-Intel grants commercial access to the
                  platform's audience — nothing more. It does not grant editorial access, prior
                  review rights, or any influence over the content that appears around it.
                </p>
                <p>
                  If an advertiser attempts to exert editorial influence as a condition of
                  commercial engagement, the relationship is terminated. This has been a
                  founding principle of OS-Intel since 2024.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content types ── */}
        <section className="w-full border-b border-gray-200" id="content-types">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Commercial Content Types
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-10">
              How each type of commercial content is labelled.
            </h2>
            <div className="flex flex-col gap-4">
              {CONTENT_TYPES.map((item) => (
                <div key={item.title} className="border border-gray-200">
                  <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-200 bg-gray-50 flex-wrap">
                    <h3 className="text-base font-black font-playfair text-gray-900">{item.title}</h3>
                    <span className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-sans">
                      {item.tag}
                    </span>
                  </div>
                  <p className="px-5 py-4 text-sm text-gray-600 font-serif leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What advertisers cannot do ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="advertiser-restrictions">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Advertiser Restrictions
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-8">
              What advertisers and sponsors cannot do at OS-Intel.
            </h2>
            <div className="flex flex-col gap-3">
              {NOT_PERMITTED.map((item) => (
                <div key={item} className="flex items-start gap-4 bg-red-50 border border-red-200 px-5 py-4">
                  <span className="text-red-600 font-bold text-base mt-0.5 shrink-0">✕</span>
                  <p className="text-sm text-gray-700 font-serif leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-serif mt-6 leading-relaxed">
              Any attempt to breach these restrictions results in immediate termination of the commercial relationship and, where relevant, a disclosure in the affected content.
            </p>
          </div>
        </section>

        {/* ── Political advertising ── */}
        <section className="w-full border-b border-gray-200" id="political-advertising">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <h2 className="text-2xl font-black font-playfair text-gray-900 mb-4">
              Political Advertising
            </h2>
            <p className="text-sm text-gray-600 font-serif leading-relaxed mb-4 max-w-3xl">
              Where OS-Intel accepts political or issue-based advertising, it is clearly labelled
              as commercial content and is not permitted to use editorial formatting, headlines,
              or design elements that could cause it to be mistaken for OS-Intel intelligence reporting.
            </p>
            <p className="text-sm text-gray-600 font-serif leading-relaxed max-w-3xl">
              Acceptance of political advertising does not constitute OS-Intel's endorsement of any
              candidate, party, policy, or campaign claim. OS-Intel reserves the right to decline
              any advertising submission without explanation.
            </p>
          </div>
        </section>

        {/* ── Complaints ── */}
        <section className="w-full border-t border-gray-200">
          <div className="px-4 md:px-6 py-10 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <h2 className="text-xl font-black font-playfair text-gray-900 mb-2">
                  Complaints About Commercial Content
                </h2>
                <p className="text-sm text-gray-600 font-serif leading-relaxed">
                  If you believe OS-Intel commercial content is mislabelled or that an advertising
                  relationship has influenced editorial content, contact us. We investigate every
                  substantive complaint.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-2 text-sm font-serif">
                <a href="mailto:editorial@os-intel.com" title="Editorial contact" className="text-red-600 hover:underline">editorial@os-intel.com</a>
                <a href="mailto:corrections@os-intel.com" title="Corrections contact" className="text-red-600 hover:underline">corrections@os-intel.com</a>
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
                { label: "Source Methodology", href: "/source-methodology" },
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