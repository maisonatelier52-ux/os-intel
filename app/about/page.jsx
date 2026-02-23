"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    img: "https://i.pravatar.cc/300?img=11",
    name: "Jonathan Marsh",
    role: "Editor-in-Chief",
    bio: "20 years covering politics and international affairs. Former correspondent for Reuters and the Associated Press.",
  },
  {
    img: "https://i.pravatar.cc/300?img=5",
    name: "Sarah Collins",
    role: "Senior Political Editor",
    bio: "Pulitzer Prize-nominated journalist with a decade of experience covering Capitol Hill and the White House.",
  },
  {
    img: "https://i.pravatar.cc/300?img=15",
    name: "David Okafor",
    role: "Head of Digital",
    bio: "Leads our digital strategy and audience development. Previously at The Atlantic and The New Yorker.",
  },
  {
    img: "https://i.pravatar.cc/300?img=25",
    name: "Maria Espinoza",
    role: "Culture Editor",
    bio: "Award-winning writer covering arts, culture, and society. Her work has appeared in The Guardian and TIME.",
  },
];

const stats = [
  { value: "2.4M", label: "Monthly Readers" },
  { value: "142", label: "Published Authors" },
  { value: "18", label: "Years of Journalism" },
  { value: "34", label: "Countries Covered" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Editorial Independence",
    desc: "Our journalism is guided solely by facts and public interest — never by advertisers, political affiliations, or external pressures.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Radical Transparency",
    desc: "We correct our mistakes openly, disclose our sources where possible, and explain our editorial decisions to our readers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community First",
    desc: "We are accountable to our readers above all else. Their trust is the foundation on which every story is built.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Relentless Curiosity",
    desc: "We pursue stories that matter — from local communities to global movements — with rigor, depth, and unwavering curiosity.",
  },
];

const faqs = [
  {
    question: "Why do you Choose Us",
    answer: "Vestibulum non nisi non leo ornare hendrerit. In sit amet erat eget lorem lacinia hendrerit a lacinia nisl. Sed imperdiet mauris eget nisl mattis luctus. Nunc interdum vel ante eget.",
  },
  {
    question: "How to Submit a Post",
    answer: "Send your article proposal to our editorial desk with a brief outline and credentials. We review all submissions within 5 business days and will contact you if we are interested.",
  },
  {
    question: "Why this Site is Useful",
    answer: "Vestibulum non nisi non leo ornare hendrerit. In sit amet erat eget lorem lacinia hendrerit a lacinia nisl. Sed imperdiet mauris eget nisl mattis luctus. Nunc interdum vel ante eget.",
  },
  {
    question: "How to Become an Author",
    answer: "Register for an author account, submit three sample articles for review, and our editorial team will assess your writing. Successful applicants are onboarded within two weeks.",
  },
  {
    question: "Why we are the Leaders",
    answer: "With over 2.4 million monthly readers across 180 countries, we are one of the fastest-growing independent news platforms. Our commitment to accuracy and depth sets us apart.",
  },
];

// ── FAQ accordion item (needs client state) ──
function FaqItem({ faq, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${open ? "bg-white" : "hover:bg-gray-50"}`}
      >
        <span className={`text-sm font-bold font-serif ${open ? "text-red-600" : "text-gray-800"}`}>
          {faq.question}
        </span>
        <span className={`text-xl leading-none shrink-0 ml-3 transition-transform duration-200 ${open ? "text-red-600 -rotate-90" : "text-gray-300 rotate-90"}`}>
          ›
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-sm font-sans text-gray-500 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-600">About Us</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4 border-b border-gray-200">
          About Us
        </h1>

        {/* Hero Banner */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-14 bg-gray-900">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80"
            alt="About PaperZilla"
            fill
            className="object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <span className="inline-block bg-red-600 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 font-sans uppercase mb-4 w-fit">
              Our Story
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-black font-serif leading-tight mb-4">
              Journalism That Holds Power to Account
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-sans leading-relaxed">
              Since 2006, PaperZilla has been a trusted voice in independent journalism — delivering fearless reporting on politics, culture, and the stories that shape our world.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-14 border border-gray-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-10 flex flex-col items-center justify-center text-center ${i < stats.length - 1 ? "border-r border-gray-200" : ""} ${i >= 2 ? "border-t md:border-t-0 border-gray-200" : ""}`}
            >
              <p className="text-4xl font-black font-serif text-gray-900 leading-none mb-2">{stat.value}</p>
              <p className="text-gray-400 text-xs font-sans uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="w-full md:w-[55%]">
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mb-2">Our Mission</h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6" />
            <p className="text-gray-600 text-base font-sans leading-relaxed mb-4">
              PaperZilla was founded on a simple but powerful conviction: that quality journalism is the cornerstone of a functioning democracy. In an era of information overload, we believe the world needs more reporting that is careful, courageous, and committed to the truth.
            </p>
            <p className="text-gray-600 text-base font-sans leading-relaxed mb-4">
              We cover politics, business, culture, science, and international affairs — not just the headlines, but the context and analysis that help our readers make sense of a complex world.
            </p>
            <p className="text-gray-600 text-base font-sans leading-relaxed">
              Our team of editors, reporters, photographers, and producers are united by a shared belief: that the facts matter, that stories have power, and that honest journalism can change things for the better.
            </p>
          </div>
          <div className="w-full md:w-[45%]">
            <div className="relative w-full h-[300px] overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80"
                alt="Newsroom"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white text-sm font-serif font-bold">Our newsroom in New York City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mb-2">Our Values</h2>
          <div className="w-12 h-0.5 bg-red-600 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex gap-5 items-start p-6 border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all duration-300">
                <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-gray-900 font-black font-serif text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* ── Meet the Team — always 4 cols on laptop, 2 on tablet, 1 on mobile ── */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mb-2">Meet the Team</h2>
          <div className="w-12 h-0.5 bg-red-600 mb-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Circular photo */}
                <div className="relative w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-sm">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Role badge */}
                <span className="bg-red-600 text-white text-[10px] font-bold px-4 py-1 font-sans mb-3 uppercase tracking-wide">
                  {member.role}
                </span>
                {/* Name */}
                <h3 className="text-gray-900 font-black font-serif text-sm lg:text-base leading-tight mb-2">
                  {member.name}
                </h3>
                {/* Bio */}
                <p className="text-gray-500 text-xs font-sans leading-relaxed mb-4 hidden lg:block">
                  {member.bio}
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <a href="#" title="Twitter" className="text-gray-400 hover:text-[#1da1f2] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a href="#" title="Facebook" className="text-gray-400 hover:text-[#3b5998] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" title="LinkedIn" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H8V9h4v1.76C13.16 9.66 14.5 9 16 9z" />
                      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" title="YouTube" className="text-gray-400 hover:text-[#ff0000] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Review Form + FAQ — polished 2-column row ── */}
        <div className="flex flex-col lg:flex-row gap-0 mb-16 border-t-2 border-gray-100 pt-14">

          {/* LEFT — Post Your Review */}
          <div className="w-full lg:w-[55%] lg:pr-14 lg:border-r border-gray-100 pb-12 lg:pb-0">
            <p className="text-red-600 text-[11px] font-bold tracking-[0.25em] uppercase font-sans mb-2">
              Share Your Thoughts
            </p>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mb-2">
              Post Your Review
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-8" />

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-semibold text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm font-sans text-gray-700 focus:outline-none focus:border-red-400 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-semibold text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email..."
                    className="w-full border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm font-sans text-gray-700 focus:outline-none focus:border-red-400 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-sans font-semibold text-gray-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={8}
                  className="w-full border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm font-sans text-gray-700 focus:outline-none focus:border-red-400 transition-all resize-y placeholder:text-gray-300"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT — Some Facts About Us */}
          <div className="w-full lg:w-[45%] lg:pl-14 pt-12 lg:pt-0">
            <p className="text-red-600 text-[11px] font-bold tracking-[0.25em] uppercase font-sans mb-2">
              Get to Know Us
            </p>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-gray-900 mb-2">
              Some Facts About Us
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-8" />

            <div className="border border-gray-200 divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} defaultOpen={i === 2} />
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-gray-900 p-10 md:p-16 text-center mb-4">
          <h2 className="text-white text-2xl md:text-3xl font-black font-serif mb-4">Join the PaperZilla Community</h2>
          <p className="text-gray-400 text-sm font-sans max-w-xl mx-auto mb-8 leading-relaxed">
            Subscribe to our newsletter and get the most important stories of the day delivered directly to your inbox — no noise, no spin, just the news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-4 py-3 font-sans focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}