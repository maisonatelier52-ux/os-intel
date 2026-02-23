"use client";

import { useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Our Address",
    value: "350 Fifth Avenue, Floor 18\nNew York, NY 10118",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "editorial@paperzilla.com\npress@paperzilla.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (212) 555-0192\nMon–Fri, 9am–6pm EST",
  },
];

const departments = [
  { value: "editorial", label: "Editorial Team" },
  { value: "press", label: "Press & Media Inquiries" },
  { value: "advertising", label: "Advertising" },
  { value: "corrections", label: "Corrections & Feedback" },
  { value: "tips", label: "News Tips" },
  { value: "other", label: "General Inquiry" },
];

const faqs = [
  {
    q: "How do I submit a news tip?",
    a: "You can submit tips via our contact form by selecting 'News Tips' as the department, or email us directly at tips@paperzilla.com. For sensitive tips, we recommend using a secure channel.",
  },
  {
    q: "How do I request a correction?",
    a: "We take accuracy seriously. If you believe something we published is incorrect, please contact us via the form and select 'Corrections & Feedback'. We aim to respond within 24 hours.",
  },
  {
    q: "How can I advertise on PaperZilla?",
    a: "For advertising inquiries, select 'Advertising' in the contact form or email advertising@paperzilla.com. Our team will get back to you with our media kit and rates.",
  },
  {
    q: "Can I republish or license PaperZilla content?",
    a: "All content on PaperZilla is copyright protected. Syndication and licensing requests should be directed to our editorial team via the contact form.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    department: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Contact Us</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4 border-b border-gray-200">
          Contact Us
        </h1>

        {/* Top contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-14 border border-gray-200">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className={`p-8 flex gap-5 items-start ${i < contactInfo.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""}`}
            >
              <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-900 font-black font-serif text-sm mb-1">{item.label}</p>
                {item.value.split("\n").map((line, j) => (
                  <p key={j} className="text-gray-500 text-sm font-sans">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main content: Form + Sidebar */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-14">

          {/* Contact Form */}
          <div className="w-full md:w-[65%]">
            <h2 className="text-2xl font-black font-serif text-gray-900 mb-2">Send Us a Message</h2>
            <div className="w-12 h-0.5 bg-red-600 mb-8" />

            {submitted ? (
              <div className="border border-gray-200 p-10 text-center">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-xl font-black font-serif mb-2">Message Sent</h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your message and get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", department: "", subject: "", message: "" }); }}
                  className="mt-6 text-xs font-bold font-sans uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-sans uppercase tracking-widest text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-300 focus:border-gray-800 text-sm px-4 py-3 font-sans text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-sans uppercase tracking-widest text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 focus:border-gray-800 text-sm px-4 py-3 font-sans text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-sans uppercase tracking-widest text-gray-700 mb-2">
                      Department <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="department"
                      value={formState.department}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-gray-800 text-sm px-4 py-3 font-sans text-gray-700 focus:outline-none transition-colors bg-white appearance-none"
                    >
                      <option value="">Select a department...</option>
                      {departments.map((d) => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-sans uppercase tracking-widest text-gray-700 mb-2">
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief subject line..."
                      className="w-full border border-gray-300 focus:border-gray-800 text-sm px-4 py-3 font-sans text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans uppercase tracking-widest text-gray-700 mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 focus:border-gray-800 text-sm px-4 py-3 font-sans text-gray-700 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" required id="consent" className="mt-0.5 shrink-0 accent-red-600" />
                  <label htmlFor="consent" className="text-xs font-sans text-gray-500 leading-relaxed cursor-pointer">
                    I agree to the <Link href="/privacy-policy" className="text-red-600 hover:underline">Privacy Policy</Link> and consent to PaperZilla storing my submitted information.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-8 py-3.5 font-sans uppercase transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[35%] flex flex-col gap-8">

            {/* Office Hours */}
            <div className="border border-gray-200 p-6">
              <h3 className="text-gray-900 font-black font-serif text-lg mb-2">Office Hours</h3>
              <div className="w-8 h-0.5 bg-red-600 mb-5" />
              <div className="flex flex-col gap-3">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM EST" },
                  { day: "Saturday", hours: "10:00 AM – 2:00 PM EST" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-sm border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-gray-700 font-sans font-semibold">{row.day}</span>
                    <span className="text-gray-500 font-sans">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border border-gray-200 p-6">
              <h3 className="text-gray-900 font-black font-serif text-lg mb-2">Follow Us</h3>
              <div className="w-8 h-0.5 bg-red-600 mb-5" />
              <div className="flex flex-col gap-3">
                {[
                  { name: "Twitter / X", handle: "@PaperZillaNews", color: "bg-[#1da1f2]" },
                  { name: "Facebook", handle: "facebook.com/PaperZilla", color: "bg-[#3b5998]" },
                  { name: "Instagram", handle: "@paperzilla", color: "bg-[#e1306c]" },
                ].map((s, i) => (
                  <a key={i} href="#" className="flex items-center gap-3 group">
                    <div className={`w-7 h-7 ${s.color} text-white text-xs flex items-center justify-center font-bold font-sans shrink-0`}>
                      {s.name[0]}
                    </div>
                    <div>
                      <p className="text-gray-900 text-xs font-bold font-sans">{s.name}</p>
                      <p className="text-gray-400 text-xs font-sans group-hover:text-red-600 transition-colors">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tip Box */}
            <div className="bg-gray-900 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }} />
              <h3 className="text-white font-black font-serif text-base mb-2 relative z-10">Submit a News Tip</h3>
              <p className="text-gray-400 text-xs font-sans leading-relaxed mb-4 relative z-10">
                Have a story we should know about? We protect our sources and take every tip seriously.
              </p>
              <a href="mailto:tips@paperzilla.com" className="inline-block bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors relative z-10">
                Send a Tip
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-black font-serif text-gray-900 mb-2">Frequently Asked Questions</h2>
          <div className="w-12 h-0.5 bg-red-600 mb-8" />
          <div className="flex flex-col gap-0 border border-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length - 1 ? "border-b border-gray-200" : ""}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-black font-serif text-base pr-4">{faq.q}</span>
                  <span className={`text-red-600 text-xl font-bold shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-5 text-gray-500 text-sm font-sans leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}