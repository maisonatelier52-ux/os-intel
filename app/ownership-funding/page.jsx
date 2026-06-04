import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Ownership & Funding | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Ownership & Funding disclosure. Who operates OS-Intel, how it is funded, and how commercial relationships are kept separate from editorial decisions.",
  alternates: { canonical: `${SITE_URL}/ownership-funding` },
  openGraph: {
    title: `Ownership & Funding | ${SITE_NAME}`,
    description:
      "Who operates OS-Intel, how it is funded, and how commercial relationships are kept separate from editorial decisions.",
    url: `${SITE_URL}/ownership-funding`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Ownership & Funding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ownership & Funding | ${SITE_NAME}`,
    description: "Who operates OS-Intel and how it is funded.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const REVENUE_STREAMS = [
  { title: "Display Advertising", body: "Programmatic and direct advertising served through standard ad placements. Advertisers have no access to editorial content before publication and no ability to influence coverage decisions." },
  { title: "Sponsored Content", body: "Clearly labelled commercial content produced in partnership with brands. Sponsorships are confined to labelled content units and do not extend to editorial reporting. See our Advertising Policy." },
  { title: "Affiliate Links", body: "Where content contains links to products or services that generate referral fees, this is disclosed in or near the relevant content. Affiliate relationships do not influence editorial assessments." },
  { title: "Newsletter & Subscription", body: "Where applicable, revenue from reader subscriptions or premium access. Subscriber status has no effect on coverage decisions or what intelligence OS-Intel reports." },
];

const FIREWALL_RULES = [
  { allowed: true, text: "Advertisers may purchase display ad placement across the platform." },
  { allowed: false, text: "Advertisers may NOT purchase favorable coverage, story placement, or editorial access." },
  { allowed: true, text: "Partners may sponsor clearly labelled content sections." },
  { allowed: false, text: "Partners may NOT alter, delay, or suppress independent intelligence reporting." },
  { allowed: true, text: "Revenue data is available to senior editorial leadership." },
  { allowed: false, text: "Revenue considerations may NOT influence whether or how a story is covered." },
  { allowed: true, text: "Commercial teams operate separately from the newsroom." },
  { allowed: false, text: "Commercial teams may NOT communicate directly with editorial staff about specific articles." },
];

export default function OwnershipFunding() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/ownership-funding#webpage`,
    name: `Ownership & Funding | ${SITE_NAME}`,
    description: "Disclosure of OS-Intel's ownership structure, funding sources, and editorial independence framework.",
    url: `${SITE_URL}/ownership-funding`,
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
    "@id": `${SITE_URL}/ownership-funding#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ownership & Funding", item: `${SITE_URL}/ownership-funding` },
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
                <li><span className="text-gray-600">Ownership &amp; Funding</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Transparency
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Ownership &amp; Funding
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              Readers of intelligence journalism deserve to know who operates the platform,
              how it is funded, and whether those funding relationships affect what gets reported.
              This page answers those questions directly.
            </p>
          </div>
        </section>

        {/* ── Who operates ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="md:w-[35%] shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-black font-playfair text-gray-900 leading-tight">
                  Independent. Not affiliated. Not for sale.
                </h2>
              </div>
              <div className="flex-1 flex flex-col gap-5 font-serif text-gray-600 text-sm leading-relaxed">
                <p>
                  OS-Intel is an independent news and investigation platform founded in 2024. It is
                  not owned by a media conglomerate, government entity, intelligence agency,
                  political organisation, or corporate holding group. Editorial control rests entirely
                  with the OS-Intel newsroom.
                </p>
                <p>
                  No external investor, owner, or partner has authority over coverage decisions,
                  publication timing, source selection, or editorial framing. The platform operates
                  with a strict editorial firewall between commercial operations and reporting.
                </p>
                <div className="bg-gray-900 text-white p-6 mt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-2">
                    Material Changes
                  </p>
                  <p className="text-xs font-sans leading-relaxed text-gray-300">
                    If OS-Intel undergoes a material change in ownership, strategic control, or funding
                    structure that a reasonable reader would consider relevant to editorial independence,
                    this page will be updated within 30 days of that change taking effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Revenue streams ── */}
        <section className="w-full border-b border-gray-200" id="how-funded">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Revenue Sources
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-4">
              How OS-Intel generates revenue.
            </h2>
            <p className="text-sm text-gray-500 font-serif mb-10 max-w-2xl">
              OS-Intel may generate revenue through the following channels. None of these give commercial partners any influence over editorial content or intelligence reporting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {REVENUE_STREAMS.map((item, i) => (
                <div
                  key={item.title}
                  className={`p-6 border-gray-200
                    ${i % 2 === 0 ? "md:border-r" : ""}
                    ${i < 2 ? "border-b" : ""}
                  `}
                >
                  <h3 className="text-base font-black font-serif text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Editorial firewall ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="editorial-firewall">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Editorial Firewall
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-10">
              Where the line between commerce and editorial is drawn.
            </h2>
            <div className="flex flex-col gap-3">
              {FIREWALL_RULES.map(({ allowed, text }) => (
                <div
                  key={text}
                  className={`flex items-start gap-4 px-5 py-4 border ${allowed ? "bg-white border-gray-200" : "bg-red-50 border-red-200"}`}
                >
                  <span className={`font-bold text-base mt-0.5 w-5 shrink-0 ${allowed ? "text-gray-500" : "text-red-600"}`}>
                    {allowed ? "✓" : "✕"}
                  </span>
                  <p className="text-sm text-gray-700 font-serif">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Conflicts & political ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 md:border-r border-b md:border-b-0 border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  Conflicts of Interest
                </p>
                <h2 className="text-2xl font-black font-playfair text-gray-900 mb-4">
                  Staff disclosure requirements.
                </h2>
                <div className="flex flex-col gap-3 text-sm text-gray-600 font-serif leading-relaxed">
                  <p>All OS-Intel journalists and editors must disclose personal, financial, or professional relationships that could affect their impartiality on any assignment. Recusal decisions are made by a senior editor.</p>
                  <p>Staff may not accept gifts, access, or consideration of value from organisations they cover. Undisclosed conflicts that affected published content are corrected publicly.</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
                  Political Independence
                </p>
                <h2 className="text-2xl font-black font-playfair text-gray-900 mb-4">
                  No affiliation. No alignment.
                </h2>
                <div className="flex flex-col gap-3 text-sm text-gray-600 font-serif leading-relaxed">
                  <p>OS-Intel is not affiliated with any government, intelligence service, political party, or advocacy group. No political body has funded, invested in, or made any donation to OS-Intel.</p>
                  <p>Our journalists do not publicly endorse political candidates or parties. Opinion content by named contributors reflects their individual views — not the editorial position of OS-Intel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="w-full border-t border-gray-200">
          <div className="px-4 md:px-6 py-10 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <h2 className="text-xl font-black font-playfair text-gray-900 mb-2">
                  Report a Missing Disclosure
                </h2>
                <p className="text-sm text-gray-600 font-serif leading-relaxed">
                  If you believe OS-Intel has an undisclosed commercial or financial relationship
                  relevant to a piece of coverage, contact us. We investigate all such concerns.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-2 text-sm font-serif">
                <a href="mailto:editorial@os-intel.com" title="Contact OS-Intel editorial" className="text-red-600 hover:underline">editorial@os-intel.com</a>
                <a href="mailto:corrections@os-intel.com" title="Contact OS-Intel corrections" className="text-red-600 hover:underline">corrections@os-intel.com</a>
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
                { label: "Advertising Policy", href: "/advertising-policy" },
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