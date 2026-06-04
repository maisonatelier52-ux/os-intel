import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Right of Reply | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Right of Reply policy. How we give individuals and organisations a fair opportunity to respond to coverage before and after publication.",
  alternates: { canonical: `${SITE_URL}/right-of-reply` },
  openGraph: {
    title: `Right of Reply | ${SITE_NAME}`,
    description:
      "How OS-Intel gives individuals and organisations the opportunity to respond to coverage before and after publication.",
    url: `${SITE_URL}/right-of-reply`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Right of Reply" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Right of Reply | ${SITE_NAME}`,
    description: "How OS-Intel handles reply requests and response opportunities.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const PRE_PUB_STEPS = [
  { num: "01", title: "Direct outreach", body: "Journalists contact subjects through official channels, public representatives, or legal counsel — and document every outreach attempt with a timestamp." },
  { num: "02", title: "Specific questions", body: "We tell the subject precisely what we intend to report and put specific questions — not vague summaries. Subjects know exactly what they are responding to." },
  { num: "03", title: "Defined response window", body: "The deadline is proportionate to the story's urgency. Fast-moving intelligence may require a shorter window; investigations provide more time where the situation allows." },
  { num: "04", title: "Response included in article", body: "Where a response is received, it appears in the article fairly and in full — or accurately summarised where length requires. Absence of response is also recorded." },
];

const NOT_GUARANTEED = [
  "Removal of verified, accurate intelligence or reporting",
  "Prior sight or approval of the article before publication",
  "Indefinite hold on a story pending a response",
  "Publication of a full statement without editorial review for factual accuracy",
  "Any guarantee that a reply request will result in a change to published content",
];

const WHEN_NOT_REQUIRED = [
  "Breaking intelligence where publication delay could enable destruction of evidence or cause public harm",
  "Situations where pre-publication contact would compromise an ongoing investigation or expose sources",
  "Reporting based on official public statements, court records, or verified government documents already in the public domain",
  "Subjects who have already made their position publicly and unambiguously known through official channels",
  "Cases where a subject has been given multiple prior opportunities to respond and declined without engaging",
];

export default function RightOfReply() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/right-of-reply#webpage`,
    name: `Right of Reply | ${SITE_NAME}`,
    description: "OS-Intel's right of reply policy for individuals and organisations featured in intelligence reporting.",
    url: `${SITE_URL}/right-of-reply`,
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
    "@id": `${SITE_URL}/right-of-reply#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Right of Reply", item: `${SITE_URL}/right-of-reply` },
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
                <li><span className="text-gray-600">Right of Reply</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Standards
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Right of Reply
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              OS-Intel covers intelligence matters involving governments, institutions, operators,
              and individuals. People and organisations subject to serious allegations or adverse
              findings in our reporting deserve a fair opportunity to respond. This policy explains
              exactly how that works.
            </p>
          </div>
        </section>

        {/* ── Pre-publication ── */}
        <section className="w-full border-b border-gray-200" id="pre-publication">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Pre-Publication
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-10">
              How we seek responses before publication.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {PRE_PUB_STEPS.map((item, i) => (
                <div
                  key={item.num}
                  className={`p-6 border-gray-200
                    ${i % 2 === 0 ? "md:border-r" : ""}
                    ${i < 2 ? "border-b" : ""}
                  `}
                >
                  <span className="text-5xl font-black font-playfair text-gray-100 block mb-3 leading-none">
                    {item.num}
                  </span>
                  <h3 className="text-base font-black font-serif text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── When outreach not required ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="exceptions">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Exceptions
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-4">
              When pre-publication outreach may not be possible.
            </h2>
            <p className="text-sm text-gray-500 font-serif mb-8 max-w-2xl">
              There are circumstances where pre-publication contact is impractical or where the public interest outweighs the notice requirement:
            </p>
            <div className="flex flex-col gap-3">
              {WHEN_NOT_REQUIRED.map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white border border-gray-200 px-5 py-4">
                  <span className="text-gray-400 font-bold text-base mt-0.5 shrink-0">—</span>
                  <p className="text-sm text-gray-700 font-serif leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-serif mt-6 leading-relaxed">
              Where outreach was not possible before publication, the article records that fact, and the subject is notified after publication with a standing invitation to respond.
            </p>
          </div>
        </section>

        {/* ── Post-publication ── */}
        <section className="w-full border-b border-gray-200" id="post-publication">
          <div className="px-4 md:px-6 py-14 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
              Post-Publication
            </p>
            <h2 className="text-3xl font-black font-playfair text-gray-900 mb-8">
              How we handle responses after publication.
            </h2>
            <div className="flex flex-col gap-4 font-serif text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">
              <p>
                If a person or organisation contacts OS-Intel after publication to dispute a factual
                claim or provide materially relevant context that was unavailable at the time, we
                will review the substance of the dispute and determine whether an update,
                clarification, correction, or follow-up investigation is warranted.
              </p>
              <p>
                Post-publication responses that are materially relevant and factually supportable
                may be added to the original article or addressed in a follow-up piece. We document
                all post-publication engagement with the subject.
              </p>
            </div>
            <div className="bg-gray-900 text-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-3">
                Important Distinction
              </p>
              <p className="text-sm font-serif text-gray-300 leading-relaxed">
                A right of reply is not a right of veto. OS-Intel does not remove verified,
                accurate intelligence reporting in response to a reply request, legal pressure,
                or demands from the subject of coverage. The purpose of this policy is
                fairness — not editorial capitulation.
              </p>
            </div>
          </div>
        </section>

        {/* ── What reply does not guarantee ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50" id="not-guaranteed">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <h2 className="text-2xl font-black font-playfair text-gray-900 mb-6">
              What a right of reply does not guarantee.
            </h2>
            <div className="flex flex-col gap-3">
              {NOT_GUARANTEED.map((item) => (
                <div key={item} className="flex items-start gap-4 bg-red-50 border border-red-200 px-5 py-4">
                  <span className="text-red-600 font-bold text-base mt-0.5 shrink-0">✕</span>
                  <p className="text-sm text-gray-700 font-serif leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to submit ── */}
        <section className="w-full border-b border-gray-200" id="submit-reply">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <h2 className="text-2xl font-black font-playfair text-gray-900 mb-4">
              How to submit a reply request.
            </h2>
            <p className="text-sm text-gray-600 font-serif leading-relaxed mb-8 max-w-2xl">
              To submit a reply request, contact us at the address below. Include the following so we can process your request efficiently:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {[
                { num: "01", title: "Article URL or headline" },
                { num: "02", title: "The specific claim you dispute or respond to" },
                { num: "03", title: "Your response or correction" },
                { num: "04", title: "Supporting documentation or evidence" },
                { num: "05", title: "Your contact details" },
                { num: "06", title: "Capacity (personal, representative, legal)" },
              ].map((item) => (
                <div key={item.num} className="border-l-2 border-red-600 pl-4">
                  <span className="text-3xl font-black font-playfair text-gray-100 block mb-1 leading-none">{item.num}</span>
                  <h3 className="text-sm font-black font-serif text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="mailto:editorial@os-intel.com"
                title="Submit a reply request to OS-Intel"
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors"
              >
                editorial@os-intel.com
              </a>
              <a
                href="mailto:corrections@os-intel.com"
                title="Submit a correction to OS-Intel"
                className="inline-block border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 text-xs font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors"
              >
                corrections@os-intel.com
              </a>
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
                { label: "Ownership & Funding", href: "/ownership-funding" },
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