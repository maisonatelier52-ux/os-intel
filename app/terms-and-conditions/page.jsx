"use client";

import Link from "next/link";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    text: "By accessing or using the PaperZilla website (www.paperzilla.com), you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our site. These terms apply to all visitors, registered users, and any others who access our services.",
  },
  {
    id: "use-of-site",
    title: "2. Use of the Site",
    text: "You agree to use PaperZilla only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site. You must not misuse our site by introducing viruses, trojans, worms, or other harmful material. You must not attempt to gain unauthorized access to our servers or any systems connected to our site. We reserve the right to restrict or terminate your access if we believe you have violated these terms.",
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    text: "All content on PaperZilla — including articles, photographs, graphics, logos, video clips, and audio files — is the property of PaperZilla or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, or publicly display any content from our site without prior written permission. Limited personal, non-commercial use is permitted, provided you include appropriate attribution.",
  },
  {
    id: "user-content",
    title: "4. User-Submitted Content",
    text: "If you submit comments, letters, or other content to PaperZilla, you grant us a non-exclusive, royalty-free, worldwide, perpetual license to use, publish, reproduce, modify, and distribute that content in any medium. You represent that you own or have the rights to submit such content and that it does not violate any third-party rights or applicable laws. We reserve the right to remove any user-submitted content at our discretion, including content that is defamatory, offensive, or otherwise inappropriate.",
  },
  {
    id: "accuracy",
    title: "5. Accuracy of Information",
    text: "PaperZilla strives to provide accurate, up-to-date information, but we make no warranties or representations — express or implied — regarding the completeness, accuracy, or reliability of any content on our site. News and information may be subject to change without notice. We are not responsible for any errors or omissions, or for the results obtained from the use of the information provided.",
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    text: "Our site may contain links to external websites that are not operated by PaperZilla. These links are provided for your convenience and information only. We have no control over the content or practices of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Inclusion of a link does not imply endorsement by PaperZilla.",
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers & Limitation of Liability",
    text: "PaperZilla and its affiliates, officers, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use our site or its content. This includes, without limitation, damages for loss of profits, data, or goodwill. Our site is provided on an 'as is' and 'as available' basis. We disclaim all warranties of any kind, whether express or implied.",
  },
  {
    id: "comments-policy",
    title: "8. Comments & Community Policy",
    text: "PaperZilla welcomes thoughtful discussion. Comments that are abusive, harassing, threatening, discriminatory, or otherwise harmful will be removed without notice. We reserve the right to ban users who repeatedly violate our community standards. By posting a comment, you agree that it does not contain false or misleading information, and that you take full responsibility for its content.",
  },
  {
    id: "advertising",
    title: "9. Advertising",
    text: "PaperZilla may display third-party advertisements. These advertisements are clearly distinguished from editorial content. We are not responsible for the content of any advertisement or for any product or service offered by an advertiser. Clicking on an advertisement may take you to a third-party website whose privacy practices and terms may differ from ours.",
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    text: "These Terms and Conditions are governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.",
  },
  {
    id: "changes",
    title: "11. Changes to These Terms",
    text: "We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Your continued use of our site after any changes constitutes your acceptance of the new terms. We recommend reviewing this page periodically.",
  },
  {
    id: "contact",
    title: "12. Contact",
    text: "If you have any questions about these Terms and Conditions, please contact us at: PaperZilla Editorial, 350 Fifth Avenue, New York, NY 10118. Email: legal@paperzilla.com",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Terms & Conditions</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-2 pb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-400 text-sm font-sans mb-8 border-b border-gray-200 pb-8">
          Effective date: <span className="text-gray-600 font-semibold">March 1, 2024</span>
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

            {/* Notice box */}
            <div className="mt-6 bg-gray-50 border-l-4 border-red-600 p-5">
              <p className="text-gray-700 text-xs font-sans leading-relaxed">
                <span className="font-bold block mb-1 text-gray-900">Please Read Carefully</span>
                These terms govern your use of PaperZilla. By continuing to use our site you agree to these conditions in full.
              </p>
            </div>

            {/* Quick links */}
            <div className="mt-6 border border-gray-200 p-5">
              <h3 className="text-xs font-black font-sans text-gray-900 uppercase tracking-widest mb-3">Related Policies</h3>
              <div className="flex flex-col gap-2">
                <Link href="/privacy-policy" className="text-xs font-sans text-gray-500 hover:text-red-600 transition-colors flex items-center gap-1.5">
                  <span className="text-red-600">›</span> Privacy Policy
                </Link>
                <Link href="/contact" className="text-xs font-sans text-gray-500 hover:text-red-600 transition-colors flex items-center gap-1.5">
                  <span className="text-red-600">›</span> Contact Us
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-[75%]">

            {/* Intro Banner */}
            <div className="mb-10 bg-gray-900 p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
              <p className="text-gray-300 text-sm font-sans leading-relaxed relative z-10">
                These Terms and Conditions outline the rules and regulations for the use of PaperZilla's website. Please read them carefully before using our services. If you have any questions, you can always <Link href="/contact" className="text-red-400 hover:text-red-300 transition-colors">contact our team</Link>.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center shrink-0 text-xs font-black font-sans mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-black font-serif text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 text-sm font-sans leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 mt-10" />
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-10 p-6 border border-gray-200 bg-gray-50">
              <p className="text-gray-500 text-xs font-sans leading-relaxed text-center">
                By using PaperZilla, you acknowledge that you have read and understood these Terms & Conditions and agree to be bound by them. For questions, contact us at <span className="text-red-600 font-semibold">legal@paperzilla.com</span>.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}