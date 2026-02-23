"use client";

import Link from "next/link";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        text: "When you register for an account, subscribe to our newsletter, submit a comment, or contact us, we collect information you voluntarily provide — such as your name, email address, and any message content.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you visit PaperZilla, we automatically collect certain information about your device and how you interact with our site. This includes your IP address, browser type, operating system, referring URLs, pages visited, and the date and time of your visit. We collect this data using cookies, web beacons, and similar tracking technologies.",
      },
      {
        subtitle: "Information from Third Parties",
        text: "We may receive information about you from third-party services, such as social media platforms if you interact with our content there, or analytics providers that help us understand how our site is being used.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: null,
        text: "We use the information we collect for the following purposes: to provide, maintain, and improve our services; to send newsletters and editorial updates you have subscribed to; to respond to your comments and inquiries; to monitor and analyze usage patterns and trends; to detect and prevent fraudulent or harmful activity; and to comply with applicable laws and regulations.",
      },
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: [
      {
        subtitle: null,
        text: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website (such as email delivery services and analytics providers), subject to confidentiality agreements. We may also disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect the rights, property, or safety of PaperZilla, our readers, or others.",
      },
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: [
      {
        subtitle: null,
        text: "PaperZilla uses cookies — small text files stored on your device — to enhance your experience on our site. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired). You can control cookie settings through your browser preferences. Please note that disabling certain cookies may affect the functionality of our site.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      {
        subtitle: null,
        text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including compliance with legal, accounting, or reporting requirements. When we no longer need your data, we will securely delete or anonymize it.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        subtitle: null,
        text: "Depending on your location, you may have certain rights regarding your personal data. These may include the right to access the personal information we hold about you; the right to request correction of inaccurate data; the right to request deletion of your data; the right to opt out of marketing communications at any time; and the right to lodge a complaint with a supervisory authority. To exercise any of these rights, please contact us at privacy@paperzilla.com.",
      },
    ],
  },
  {
    id: "security",
    title: "7. Security",
    content: [
      {
        subtitle: null,
        text: "We take the security of your information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      {
        subtitle: null,
        text: "PaperZilla is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can take appropriate action.",
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      {
        subtitle: null,
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will post the updated policy on this page with a revised effective date. We encourage you to review this policy periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        subtitle: null,
        text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: PaperZilla Editorial, 350 Fifth Avenue, New York, NY 10118. Email: privacy@paperzilla.com",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Privacy Policy</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-2 pb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm font-sans mb-8 border-b border-gray-200 pb-8">
          Last updated: <span className="text-gray-600 font-semibold">March 1, 2024</span>
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Sticky Table of Contents */}
          <aside className="w-full md:w-[25%] md:sticky md:top-24">
            <div className="border border-gray-200 p-5">
              <h2 className="text-sm font-black font-serif text-gray-900 uppercase tracking-widest mb-4 pb-3 border-b border-gray-200">
                Contents
              </h2>
              <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-gray-500 hover:text-red-600 text-xs font-sans py-1.5 border-b border-gray-100 last:border-b-0 transition-colors leading-relaxed"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Notice Box */}
            <div className="mt-6 bg-gray-50 border-l-4 border-red-600 p-5">
              <p className="text-gray-700 text-xs font-sans leading-relaxed">
                <span className="font-bold block mb-1 text-gray-900">Your Privacy Matters</span>
                PaperZilla is committed to protecting your personal data and being transparent about how we use it. This policy explains your rights and our responsibilities.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-[75%]">

            {/* Intro */}
            <div className="mb-10 p-6 bg-gray-50 border border-gray-200">
              <p className="text-gray-700 text-sm font-sans leading-relaxed">
                Welcome to PaperZilla. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard data when you visit our website at <span className="text-red-600 font-semibold">www.paperzilla.com</span> or interact with our services. By using our site, you agree to the practices described in this policy.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-xl font-black font-serif text-gray-900 mb-2">{section.title}</h2>
                  <div className="w-8 h-0.5 bg-red-600 mb-5" />
                  <div className="flex flex-col gap-5">
                    {section.content.map((block, i) => (
                      <div key={i}>
                        {block.subtitle && (
                          <h3 className="text-gray-900 font-bold font-sans text-sm mb-2 uppercase tracking-wide">{block.subtitle}</h3>
                        )}
                        <p className="text-gray-600 text-sm font-sans leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-b border-gray-100 mt-10" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}