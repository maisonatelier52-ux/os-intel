import Link from "next/link";

const SITE_URL = "https://os-intel-bice.vercel.app";
const SITE_NAME = "OS-Intel";
const LAST_UPDATED = "March 1, 2026";
const CONTACT_EMAIL = "legal@os-intel.com";
const OG_IMAGE = `${SITE_URL}/images/os-intel-og-image.webp`;

// ✅ FIXED: og:image, twitter:site added
export const metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description:
    "Read the OS-Intel Terms and Conditions. These terms govern your use of our independent news and investigation platform.",
  alternates: { canonical: `${SITE_URL}/terms-and-condition` },
  openGraph: {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description: "Read the OS-Intel Terms and Conditions governing use of our platform.",
    url: `${SITE_URL}/terms-and-condition`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "OS-Intel Terms & Conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms & Conditions | ${SITE_NAME}`,
    description: "Read the OS-Intel Terms and Conditions governing use of our platform.",
    images: [OG_IMAGE],
    site: "@osintel",
    creator: "@osintel",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the OS-Intel website at os-intel-bice.vercel.app (the "Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions of this agreement, you may not access or use the Site. OS-Intel reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of those changes. These Terms were last updated on ${LAST_UPDATED}.`,
  },
  {
    id: "use-of-site",
    title: "2. Use of the Site",
    content: "You agree to use OS-Intel solely for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else's use of the Site. Prohibited behaviour includes, but is not limited to: transmitting unsolicited commercial email; posting defamatory, offensive, or fraudulent content; attempting to gain unauthorised access to our systems; scraping or harvesting content in an automated manner without our express written consent; and impersonating any person or entity.",
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content: "All content published on OS-Intel — including articles, photographs, graphics, videos, and other materials — is the intellectual property of OS-Intel or its respective content creators and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, transmit, reuse, re-post, or use the content of OS-Intel for public or commercial purposes without the express written permission of OS-Intel. Brief quotations for journalistic or educational purposes, with appropriate attribution, are permitted under fair use principles.",
  },
  {
    id: "user-submissions",
    title: "4. User Submissions and Tips",
    content: "OS-Intel welcomes tips, documents, and information from members of the public. By submitting any content, tip, or information to OS-Intel, you grant us a non-exclusive, royalty-free, perpetual licence to use, publish, and distribute that content in connection with our journalistic activities. You represent that you have the right to submit such information and that doing so does not violate any third-party rights or applicable law. OS-Intel will handle all submissions with appropriate journalistic care and source protection practices.",
  },
  {
    id: "accuracy-disclaimer",
    title: "5. Accuracy and Editorial Disclaimer",
    content: "OS-Intel strives for accuracy in all reporting. However, we make no warranties or representations regarding the completeness, accuracy, or reliability of any content published on the Site. News and intelligence information changes rapidly; articles reflect the information available at the time of publication. OS-Intel is not responsible for errors or omissions, or for any actions taken in reliance on information contained herein. Opinions expressed in commentary and analysis pieces are those of the individual authors and do not necessarily represent the editorial position of OS-Intel.",
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    content: "The Site may contain links to external websites or resources. OS-Intel provides these links for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of any link does not imply endorsement by OS-Intel of the linked site or its content.",
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    content: "To the fullest extent permitted by applicable law, OS-Intel and its editors, authors, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, goodwill, or other intangible losses, arising out of or in connection with your access to or use of (or inability to access or use) the Site or its content. In no event shall OS-Intel's total liability exceed the amount paid by you, if any, for accessing the Site in the preceding twelve months.",
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content: "You agree to defend, indemnify, and hold harmless OS-Intel, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.",
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    content: "These Terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law provisions. Any dispute arising from these Terms or your use of the Site shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration.",
  },
  {
    id: "termination",
    title: "10. Termination",
    content: "OS-Intel reserves the right to terminate or suspend access to the Site, at our sole discretion, without notice and without liability, for any reason — including if we believe you have violated these Terms. All provisions of these Terms which by their nature should survive termination shall do so, including intellectual property provisions, disclaimers, indemnity, and limitations of liability.",
  },
  {
    id: "contact",
    title: "11. Contact",
    content: `If you have any questions regarding these Terms and Conditions, please contact us at: ${CONTACT_EMAIL}. We will endeavour to respond to all legal enquiries within 10 business days.`,
  },
];

export default function TermsPage() {

  // ✅ FIXED: JSON-LD microdata
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms-and-condition#webpage`,
    name: `Terms & Conditions | ${SITE_NAME}`,
    description: "OS-Intel Terms and Conditions — the terms governing use of our independent news and investigation platform.",
    url: `${SITE_URL}/terms-and-condition`,
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
    "@id": `${SITE_URL}/terms-and-condition#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${SITE_URL}/terms-and-condition` },
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
                <li><span className="text-gray-600">Terms &amp; Conditions</span></li>
              </ol>
            </nav>

            <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black font-playfair text-gray-900 leading-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last updated: <strong className="text-gray-700">{LAST_UPDATED}</strong>
            </p>
            <p className="text-gray-600 text-sm font-serif leading-relaxed mt-4 max-w-2xl">
              Please read these Terms and Conditions carefully before using the OS-Intel website.
              By accessing our platform, you agree to be bound by these terms. If you do not
              agree with any part of these terms, you must not use our site.
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

        {/* ── Terms Sections ── */}
        <section className="w-full">
          <div className="px-4 md:px-6 py-12 max-w-4xl">
            <div className="flex flex-col gap-0">
              {SECTIONS.map((section, si) => (
                <div
                  key={section.id}
                  id={section.id}
                  className={`py-8 ${si < SECTIONS.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <h2 className="text-xl font-black font-playfair text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Acknowledgement box ── */}
        <section className="w-full border-t border-gray-200 bg-gray-900">
          <div className="px-4 md:px-6 py-10 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-3">
              Acknowledgement
            </p>
            <p className="text-white font-serif text-sm leading-relaxed max-w-2xl">
              By using the OS-Intel website, you acknowledge that you have read, understood, and
              agree to be bound by these Terms and Conditions and our{" "}
              <Link
                href="/privacy-policy"
                title="Read the OS-Intel Privacy Policy"
                className="text-red-400 hover:text-red-300 transition-colors underline"
              >
                Privacy Policy
              </Link>.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}