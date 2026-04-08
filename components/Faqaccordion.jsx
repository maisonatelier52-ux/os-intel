"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How do I submit a news tip?",
    a: "Select 'News Tip or Lead' from the subject dropdown and describe your tip in as much detail as you are comfortable sharing. For sensitive tips, we recommend using an encrypted channel such as Signal or SecureDrop. Contact details for secure submissions are available on request.",
  },
  {
    q: "How does OS-Intel protect source confidentiality?",
    a: "Source protection is a cornerstone of our journalism. We use industry-standard operational security practices and will never reveal a source's identity without their explicit consent. For highly sensitive tips, please request our secure submission details.",
  },
  {
    q: "How do I report an error in an article?",
    a: "Select 'Corrections & Editorial' from the subject dropdown and provide the article URL, the specific error, and the correct information if known. We investigate all correction requests and respond within 2 business days.",
  },
  {
    q: "Can I republish OS-Intel content?",
    a: "OS-Intel content is protected by copyright. Brief quotations with proper attribution are permitted. For republication enquiries, please contact us via the form selecting 'Legal & Copyright' as your subject.",
  },
];

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="flex flex-col gap-0 max-w-3xl">
      {FAQS.map((faq, i) => (
        <div key={i} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left flex items-center justify-between py-4 gap-4 group cursor-pointer"
            aria-expanded={openFaq === i}
          >
            <h3 className="text-sm font-bold font-serif text-gray-900 group-hover:text-red-600 transition-colors">
              {faq.q}
            </h3>
            <span className="text-gray-400 text-lg font-sans shrink-0">
              {openFaq === i ? "−" : "+"}
            </span>
          </button>
          {openFaq === i && (
            <p className="text-sm text-gray-600 font-serif leading-relaxed pb-4 pr-8">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}