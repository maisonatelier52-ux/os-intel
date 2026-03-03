"use client";

import { useState } from "react";

const CONTACT_REASONS = [
  "News Tip or Lead",
  "Press Enquiry",
  "Corrections & Editorial",
  "Advertising",
  "Legal & Copyright",
  "General Enquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("sending");
    // Replace with your actual API call
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="bg-gray-900 text-white p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-red-500 font-playfair mb-3">
          Message Received
        </p>
        <h3 className="text-2xl font-black font-playfair mb-3">
          Thank you for reaching out.
        </h3>
        <p className="text-gray-300 text-sm font-serif leading-relaxed mb-6">
          We have received your message and will respond within 2–3 business days.
          If your enquiry is time-sensitive, please indicate that in a follow-up.
        </p>
        <button
          onClick={() => setStatus(null)}
          className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors font-sans border-b border-red-500 hover:border-red-400 pb-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-600 font-sans mb-1.5">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-4 py-3 text-sm font-sans text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 transition-colors bg-white`}
        />
        {errors.name && <p className="text-red-600 text-xs font-sans mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-600 font-sans mb-1.5">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-4 py-3 text-sm font-sans text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 transition-colors bg-white`}
        />
        {errors.email && <p className="text-red-600 text-xs font-sans mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-gray-600 font-sans mb-1.5">
          Subject <span className="text-red-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`w-full border ${errors.subject ? "border-red-500" : "border-gray-300"} px-4 py-3 text-sm font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors bg-white appearance-none cursor-pointer`}
        >
          <option value="">Select a subject…</option>
          {CONTACT_REASONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.subject && <p className="text-red-600 text-xs font-sans mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-600 font-sans mb-1.5">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Write your message here…"
          className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} px-4 py-3 text-sm font-sans text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 transition-colors bg-white resize-none`}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.message
            ? <p className="text-red-600 text-xs font-sans">{errors.message}</p>
            : <span />
          }
          <p className="text-xs text-gray-400 font-sans ml-auto">{form.message.length} chars</p>
        </div>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white text-xs font-bold tracking-widest px-8 py-3.5 font-sans uppercase transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm font-sans">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}