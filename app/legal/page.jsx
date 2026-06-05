import Link from "next/link";

const SITE_URL = "https://www.os-intel.com";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

export const metadata = {
  title: `Legal | ${SITE_NAME}`,
  description:
    "Legal information for OS-Intel covering copyright, content reuse, formal notices, permissions, complaints about accuracy or rights, and how to contact us for legal matters.",
  alternates: { canonical: `${SITE_URL}/legal` },
  openGraph: {
    title: `Legal | ${SITE_NAME}`,
    description:
      "Copyright, content reuse, permissions, formal notices, and legal contact information for OS-Intel.",
    url: `${SITE_URL}/legal`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Legal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Legal | ${SITE_NAME}`,
    description:
      "Copyright, reuse, permissions, and legal contact information for OS-Intel.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "informational-use",
    title: "Informational Use of OS-Intel Content",
    content: [
      {
        subtitle: null,
        text: "OS-Intel publishes intelligence reporting, investigation, analysis, and explanatory content for informational purposes. Articles are edited to newsroom standards and reflect the state of verified intelligence at the time of publication.",
      },
      {
        subtitle: null,
        text: "Nothing published on OS-Intel constitutes professional legal, financial, military, or security advice. For topics where professional advice is necessary — sanctions compliance, legal proceedings, cybersecurity incident response — readers should consult qualified professionals. OS-Intel content is intended to inform, not to substitute for expert guidance.",
      },
      {
        subtitle: null,
        text: "In fast-moving intelligence situations — active conflict, live cybersecurity incidents, ongoing legal proceedings — articles may be updated as the verified picture changes. Readers relying on time-sensitive information for operational purposes should verify against primary sources before acting.",
      },
    ],
  },
  {
    id: "copyright",
    title: "Copyright and Intellectual Property",
    content: [
      {
        subtitle: null,
        text: "All original content published on OS-Intel — including articles, investigation reports, headlines, analysis, graphics, data visualisations, and photographic imagery — is protected by copyright law and is the intellectual property of OS-Intel or its contributing authors and licensors.",
      },
      {
        subtitle: "What is permitted",
        text: "Readers may link to OS-Intel articles and quote brief excerpts with clear attribution to OS-Intel and a direct link to the original article, where applicable law permits. Brief quotation for journalistic commentary, academic citation, and educational use — with attribution — is permitted under standard fair use or fair dealing principles.",
      },
      {
        subtitle: "What requires written permission",
        text: "Republication of full articles or substantial portions in any medium; commercial licensing or syndication of OS-Intel content; systematic scraping, copying, or automated archiving of platform content; derivative works based on original OS-Intel reporting or data visualisations; and use of OS-Intel branding, logos, or visual identity assets.",
      },
      {
        subtitle: null,
        text: "To request reuse permissions, syndication licences, or to enquire about content partnerships, contact us at editorial@os-intel.com with a description of the intended use.",
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints About Accuracy, Rights, or Fairness",
    content: [
      {
        subtitle: null,
        text: "If you believe an OS-Intel article contains a material factual error, misrepresents your position, infringes your rights, or raises a serious legal concern, contact the newsroom directly. Different types of complaints are handled through different processes:",
      },
      {
        subtitle: "Factual errors",
        text: "Reviewed under our Corrections Policy. Include the article URL, the specific claim you believe is incorrect, the correct information, and any supporting documentation.",
      },
      {
        subtitle: "Fairness and response requests",
        text: "Handled under our Right of Reply Policy. If you were the subject of coverage and believe your position was not fairly represented, contact editorial@os-intel.com.",
      },
      {
        subtitle: "Copyright, defamation, or privacy complaints",
        text: "Directed to legal@os-intel.com. Include the article URL, the specific content at issue, the legal basis for your complaint, and your contact details and capacity (personal, representative, or legal counsel).",
      },
    ],
  },
  {
    id: "formal-requests",
    title: "Removal, Restriction, and Formal Requests",
    content: [
      {
        subtitle: null,
        text: "OS-Intel reviews substantive requests for correction, clarification, update, or removal of published content. Submission of a formal request does not guarantee removal or immediate depublication.",
      },
      {
        subtitle: null,
        text: "Our standard is to evaluate each request against the public record, our editorial standards, applicable law, and the public interest value of the content. In many cases the appropriate response is a correction, clarification note, or follow-up investigation — not removal of accurate intelligence reporting.",
      },
      {
        subtitle: "Legal threats",
        text: "OS-Intel does not remove verified, accurate reporting in response to legal threats alone. If you have a legitimate legal basis for a formal request, describe it clearly and specifically. Our legal team will assess it on its merits. Speculative or pressure-based legal correspondence without a clearly stated legal basis will not result in editorial changes.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Sources and External Links",
    content: [
      {
        subtitle: null,
        text: "OS-Intel links to third-party sources — official government databases, court records, satellite imagery providers, cybersecurity research institutions, and other news organisations — for sourcing transparency and reader context. Those external properties are governed by their own terms, policies, and accuracy standards.",
      },
      {
        subtitle: null,
        text: "A link to a third-party source does not mean OS-Intel endorses all content or policies on that site. We link to primary sources and public records to give readers access to the underlying intelligence — not to validate everything that source publishes elsewhere.",
      },
      {
        subtitle: null,
        text: "OS-Intel is not responsible for the accuracy, availability, or content of external sites, including sites that host documents or data referenced in our reporting.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      {
        subtitle: null,
        text: "OS-Intel content is provided for informational purposes only. To the fullest extent permitted by applicable law, OS-Intel and its editors, authors, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or reliance on content published on this platform.",
      },
      {
        subtitle: null,
        text: "OS-Intel makes no warranties, express or implied, regarding the completeness, accuracy, or reliability of any content. Intelligence information changes rapidly; articles reflect verified information at the time of publication. No content on OS-Intel should be treated as a guarantee of current accuracy in fast-moving situations.",
      },
    ],
  },
  {
    id: "formal-notices",
    title: "Formal Notices and Legal Contact",
    content: [
      {
        subtitle: null,
        text: "For legal notices, DMCA takedown requests, rights complaints, formal permissions requests, and other legal correspondence, contact the newsroom at the appropriate address below. Include sufficient detail for the request to be routed to the correct reviewer.",
      },
    ],
  },
];

export default function LegalPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/legal#webpage`,
    name: `Legal | ${SITE_NAME}`,
    description:
      "Legal information for OS-Intel covering copyright, content reuse, formal notices, permissions, and complaints.",
    url: `${SITE_URL}/legal`,
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
    "@id": `${SITE_URL}/legal#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Legal", item: `${SITE_URL}/legal` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-12 md:py-16 max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400">
                <li>
                  <Link
                    href="/"
                    title="Home — OS-Intel"
                    className="hover:text-red-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li><span>›</span></li>
                <li><span className="text-gray-600">Legal</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Legal Information
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              This page provides a plain-language overview of the legal frameworks that apply
              to OS-Intel and its readers — covering copyright, content reuse, complaints
              about accuracy or rights, formal removal requests, and how to contact us for
              legal matters.
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

        {/* ── Policy Sections ── */}
        <section className="w-full">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <div className="flex flex-col gap-0">
              {SECTIONS.map((section, si) => (
                <div
                  key={section.id}
                  id={section.id}
                  className={`py-10 ${si < SECTIONS.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <h2 className="text-2xl font-black font-playfair text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-5">
                    {section.content.map((block, bi) => (
                      <div key={bi}>
                        {block.subtitle && (
                          <h3 className="text-sm font-bold font-serif text-gray-800 mb-2 uppercase tracking-wide">
                            {block.subtitle}
                          </h3>
                        )}
                        <p className="text-sm text-gray-600 font-serif leading-relaxed">
                          {block.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact directory ── */}
        <section className="w-full border-t border-gray-200 bg-gray-900">
          <div className="px-4 md:px-6 py-12 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-3">
              Legal Contact Directory
            </p>
            <h2 className="text-2xl font-black font-playfair text-white mb-8">
              Route your enquiry to the right team.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
              {[
                {
                  label: "General Legal & Formal Notices",
                  email: "legal@os-intel.com",
                  desc: "DMCA notices, rights complaints, formal permissions, and legal correspondence.",
                },
                {
                  label: "Editorial & Corrections",
                  email: "editorial@os-intel.com",
                  desc: "Factual disputes, correction requests, reply submissions, and editorial questions.",
                },
                {
                  label: "Corrections Specifically",
                  email: "corrections@os-intel.com",
                  desc: "Dedicated inbox for factual error reports and correction requests.",
                },
                {
                  label: "Permissions & Syndication",
                  email: "editorial@os-intel.com",
                  desc: "Reuse requests, syndication licences, and content partnership enquiries.",
                },
                {
                  label: "Privacy Matters",
                  email: "privacy@os-intel.com",
                  desc: "Data subject requests, privacy policy questions, and GDPR-related correspondence.",
                },
                {
                  label: "Secure Tips & Intelligence",
                  email: "tips@os-intel.com",
                  desc: "Confidential tip submissions, whistleblower contacts, and sensitive document transfers.",
                },
              ].map(({ label, email, desc }, i, arr) => (
                <div
                  key={label}
                  className={`p-6 border-gray-700
                    ${i % 3 !== 2 ? "md:border-r" : ""}
                    ${i < arr.length - (arr.length % 3 === 0 ? 3 : arr.length % 3) ? "border-b" : ""}
                  `}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans mb-2">
                    {label}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    title={`Contact OS-Intel — ${label}`}
                    className="text-red-400 hover:text-red-300 transition-colors font-serif text-sm block mb-2 underline"
                  >
                    {email}
                  </a>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Acknowledgement ── */}
        <section className="w-full border-t border-gray-700 bg-gray-900">
          <div className="px-4 md:px-6 py-8 max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-3">
              Note
            </p>
            <p className="text-white font-serif text-sm leading-relaxed max-w-2xl">
              OS-Intel does not remove verified, accurate reporting in response to legal pressure
              alone. All formal requests are assessed on their legal merits by our editorial and
              legal teams. Correspondence that does not identify a specific legal basis for a
              claim will not result in editorial changes.
            </p>
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
                { label: "Corrections Policy", href: "/corrections-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Right of Reply", href: "/right-of-reply" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-condition" },
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