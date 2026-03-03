"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "general",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // Simulate submission — connect to your email API / form provider
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <div className="w-8 h-px bg-[#b08d57]" />
        <p
          className="font-display text-2xl text-[#f7f4ef]"
          style={{ fontStyle: "italic", fontWeight: 300 }}
        >
          Thank you.
        </p>
        <p className="text-[#8f7555] text-sm font-body font-light leading-relaxed">
          We&rsquo;ve received your message and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[#8f7555] text-xs tracking-[0.2em] uppercase font-body font-light mb-2"
          >
            Name <span className="text-[#b08d57]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#100d08] border border-[#1e1710] px-4 py-3 text-[#f7f4ef] text-sm font-body font-light focus:outline-none focus:border-[#b08d57] transition-colors duration-300 placeholder:text-[#3a2d22]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[#8f7555] text-xs tracking-[0.2em] uppercase font-body font-light mb-2"
          >
            Email <span className="text-[#b08d57]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#100d08] border border-[#1e1710] px-4 py-3 text-[#f7f4ef] text-sm font-body font-light focus:outline-none focus:border-[#b08d57] transition-colors duration-300 placeholder:text-[#3a2d22]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-[#8f7555] text-xs tracking-[0.2em] uppercase font-body font-light mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#100d08] border border-[#1e1710] px-4 py-3 text-[#f7f4ef] text-sm font-body font-light focus:outline-none focus:border-[#b08d57] transition-colors duration-300 placeholder:text-[#3a2d22]"
            placeholder="(optional)"
          />
        </div>
        <div>
          <label
            htmlFor="enquiryType"
            className="block text-[#8f7555] text-xs tracking-[0.2em] uppercase font-body font-light mb-2"
          >
            Enquiry Type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full bg-[#100d08] border border-[#1e1710] px-4 py-3 text-[#f7f4ef] text-sm font-body font-light focus:outline-none focus:border-[#b08d57] transition-colors duration-300 appearance-none cursor-pointer"
          >
            <option value="general">General</option>
            <option value="private-dining">Private Dining</option>
            <option value="large-groups">Large Groups (8+)</option>
            <option value="media">Media / Press</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[#8f7555] text-xs tracking-[0.2em] uppercase font-body font-light mb-2"
        >
          Message <span className="text-[#b08d57]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#100d08] border border-[#1e1710] px-4 py-3 text-[#f7f4ef] text-sm font-body font-light focus:outline-none focus:border-[#b08d57] transition-colors duration-300 placeholder:text-[#3a2d22] resize-none"
          placeholder="Tell us about your enquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center gap-3 px-8 py-4 bg-[#b08d57] text-[#100d08] text-xs tracking-[0.3em] uppercase font-body font-light hover:bg-[#c4a267] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-[#3a2d22] text-xs font-body font-light">
        For reservations, please use our{" "}
        <a
          href="https://reservations.example.com/stone-and-flame"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#72593e] hover:text-[#b08d57] transition-colors duration-300 underline underline-offset-2"
        >
          reservations system
        </a>
        .
      </p>
    </form>
  );
}
