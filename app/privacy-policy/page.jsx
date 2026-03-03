import Link from "next/link";

const SITE_URL = "https://os-intel-bice.vercel.app";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const CONTACT_EMAIL = "privacy@os-intel.com";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

// ✅ FIXED: og:image, twitter:site added
export const metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Privacy Policy. Learn how we collect, use, and protect your personal information when you visit our news and investigation platform.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "Read the OS-Intel Privacy Policy — how we collect, use, and protect your data.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "Read the OS-Intel Privacy Policy — how we collect, use, and protect your data.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      { subtitle: "Information You Provide", text: "When you contact us, subscribe to our newsletter, or submit a tip, we may collect your name, email address, and the content of your communication. We do not require registration to read OS-Intel content." },
      { subtitle: "Automatically Collected Information", text: "When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, operating system, referring URLs, pages viewed, and the date and time of your visit. This information is collected through standard server logs and analytics tools." },
      { subtitle: "Cookies and Similar Technologies", text: "We use cookies and similar tracking technologies to improve your browsing experience, analyse site traffic, and understand where our visitors originate. You may instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly." },
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: [
      { subtitle: null, text: "OS-Intel uses the information we collect for the following purposes:" },
      { subtitle: "Site Operation", text: "To operate, maintain, and improve the OS-Intel website and its features; to monitor and analyse usage patterns and trends; and to diagnose technical problems." },
      { subtitle: "Communications", text: "To respond to your enquiries, comments, or requests; to send newsletters or updates you have subscribed to; and to notify you of changes to our policies or services." },
      { subtitle: "Security", text: "To detect, investigate, and prevent fraudulent transactions and other illegal activities, and to protect the rights and property of OS-Intel and its users." },
      { subtitle: "Legal Compliance", text: "To comply with applicable laws, regulations, legal processes, or governmental requests." },
    ],
  },
  {
    id: "information-sharing",
    title: "3. Information Sharing and Disclosure",
    content: [
      { subtitle: null, text: "OS-Intel does not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:" },
      { subtitle: "Service Providers", text: "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential." },
      { subtitle: "Legal Requirements", text: "We may disclose your information when required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency)." },
      { subtitle: "Business Transfers", text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction." },
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      { subtitle: null, text: "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), restricted access to personal data, and regular security assessments." },
      { subtitle: null, text: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security." },
    ],
  },
  {
    id: "third-party-links",
    title: "5. Third-Party Links",
    content: [
      { subtitle: null, text: "Our website may contain links to third-party websites. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. We encourage you to review the privacy policy of every website you visit." },
    ],
  },
  {
    id: "childrens-privacy",
    title: "6. Children's Privacy",
    content: [
      { subtitle: null, text: "OS-Intel does not knowingly collect personally identifiable information from children under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take the necessary steps to remove that information from our systems." },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      { subtitle: null, text: "Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access, correct, or delete personal data we hold about you. To exercise any of these rights, please contact us using the details provided below. We will respond to your request within 30 days." },
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: [
      { subtitle: null, text: `OS-Intel reserves the right to update or change this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date. Your continued use of our website after any modification constitutes your acceptance of the revised policy. This policy was last updated on ${LAST_UPDATED}.` },
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      { subtitle: null, text: `If you have any questions about this Privacy Policy or our data practices, please contact us at: ${CONTACT_EMAIL}. We aim to respond to all privacy-related enquiries within 5 business days.` },
    ],
  },
];

export default function PrivacyPolicyPage() {

  // ✅ FIXED: JSON-LD microdata
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy-policy#webpage`,
    name: `Privacy Policy | ${SITE_NAME}`,
    description: "OS-Intel Privacy Policy — how we collect, use, and protect your personal information.",
    url: `${SITE_URL}/privacy-policy`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    dateModified: "2026-03-01",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/privacy-policy#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="w-full border-b border-gray-200">
          <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl">

            {/* ✅ Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400">
                <li><Link href="/" title="Home — OS-Intel" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><span>›</span></li>
                <li><span className="text-gray-600">Privacy Policy</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              OS-Intel is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit{" "}
              <strong className="text-gray-800">os-intel-bice.vercel.app</strong>. Please read
              this policy carefully. If you disagree with its terms, please discontinue use of the site.
            </p>
          </div>
        </section>

        {/* ── Table of Contents ── */}
        <section className="w-full border-b border-gray-200 bg-gray-50">
          <div className="px-4 md:px-6 py-8 max-w-4xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans mb-4">
              Contents
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  {/* ✅ FIXED: title attribute added to all anchor links */}
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
          <div className="px-4 md:px-6 py-12 max-w-4xl">
            <div className="flex flex-col gap-0">
              {SECTIONS.map((section, si) => (
                <div
                  key={section.id}
                  id={section.id}
                  className={`py-8 ${si < SECTIONS.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <h2 className="text-xl font-black font-playfair text-gray-900 mb-5">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.content.map((block, bi) => (
                      <div key={bi}>
                        {block.subtitle && (
                          <h3 className="text-sm font-bold font-serif text-gray-800 mb-1">
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

      </div>
    </>
  );
}