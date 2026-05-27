import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully!"
        });
        // Clear Form fields on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (err: any) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Failed to connect to the server. Please check your network."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have an idea to discuss or an internship position? Fill out the form or reach out directly now!
          </p>
        </div>

        {/* Form and Contact Meta Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info nodes */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`font-display text-xl font-bold ${
              darkMode ? "text-slate-200" : "text-slate-900"
            }`}>
              Contact Information
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I am usually responsive and love collaborating with global teams on modern React & MERN software systems.
            </p>

            <div className="space-y-4">
              {/* Email Node */}
              <div className={`p-5 rounded-2xl border flex items-center space-x-4 ${
                darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <span className={`block text-xs uppercase font-bold tracking-wide ${darkMode ? "text-slate-500" : "text-slate-450"}`}>
                    Email Me At
                  </span>
                  <a href="mailto:ndayiragijerobert830@gmail.com" className={`text-xs sm:text-sm font-semibold hover:underline ${darkMode ? "text-slate-200" : "text-slate-850"}`}>
                    ndayiragijerobert830@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Node */}
              <div className={`p-5 rounded-2xl border flex items-center space-x-4 ${
                darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <span className={`block text-xs uppercase font-bold tracking-wide ${darkMode ? "text-slate-500" : "text-slate-450"}`}>
                    Call / Phone
                  </span>
                  <a href={`tel:${personalInfo.socials.phone}`} className={`text-xs sm:text-sm font-semibold hover:underline ${darkMode ? "text-slate-200" : "text-slate-850"}`}>
                    {personalInfo.socials.phone}
                  </a>
                </div>
              </div>

              {/* Location Node */}
              <div className={`p-5 rounded-2xl border flex items-center space-x-4 ${
                darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className={`block text-xs uppercase font-bold tracking-wide ${darkMode ? "text-slate-500" : "text-slate-450"}`}>
                    Location
                  </span>
                  <p className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-slate-200" : "text-slate-850"}`}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp Chat Button */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? "bg-gradient-to-tr from-emerald-950/20 to-slate-900/40 border-slate-800" : "bg-gradient-to-tr from-emerald-50/30 to-slate-50 border-slate-200"
            }`}>
              <h4 className={`font-display font-semibold text-sm sm:text-base mb-2 flex items-center gap-2 ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}>
                <MessageSquare className="text-emerald-500" size={18} />
                <span>Need Instant Answers?</span>
              </h4>
              <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Spawn a chat loop with me directly on WhatsApp! I keep notifications active 24/7.
              </p>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all text-sm"
              >
                <span>Chat on WhatsApp</span>
                <span className="font-mono text-xs">(0795823088)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive HTML Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border ${
              darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <h3 className={`font-display text-lg sm:text-xl font-bold mb-6 ${
                darkMode ? "text-slate-150" : "text-slate-950"
              }`}>
                Send a Secure Message
              </h3>

              {/* Status Notification Banner */}
              {status.type && (
                <div className={`p-4 rounded-xl mb-6 flex items-start space-x-2.5 border text-xs sm:text-sm ${
                  status.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-555"
                    : "bg-rose-500/10 border-rose-500/25 text-rose-555"
                }`}>
                  {status.type === "success" ? (
                    <CheckCircle className="shrink-0 mt-0.5" size={18} />
                  ) : (
                    <AlertCircle className="shrink-0 mt-0.5" size={18} />
                  )}
                  <span className="font-medium">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Robert Ribbon"
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-550/20 transition-all ${
                        darkMode
                          ? "bg-slate-900 border-slate-800 text-slate-100 focus:border-emerald-500/30 placeholder-slate-600"
                          : "bg-slate-50 border-slate-200 text-slate-955 focus:border-emerald-500/30 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Robert Ribbon"
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-550/20 transition-all ${
                        darkMode
                          ? "bg-slate-900 border-slate-800 text-slate-100 focus:border-emerald-500/30 placeholder-slate-600"
                          : "bg-slate-50 border-slate-200 text-slate-955 focus:border-emerald-500/30 placeholder-slate-400"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Internship Opportunities / Project Quote"
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-550/20 transition-all ${
                      darkMode
                        ? "bg-slate-900 border-slate-800 text-slate-100 focus:border-emerald-500/30 placeholder-slate-600"
                        : "bg-slate-50 border-slate-200 text-slate-955 focus:border-emerald-500/30 placeholder-slate-400"
                    }`}
                  />
                </div>

                {/* Message body field */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    ref={textareaRef}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Type your message body details here..."
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-550/20 transition-all resize-none overflow-hidden ${
                      darkMode
                        ? "bg-slate-900 border-slate-800 text-slate-100 focus:border-emerald-500/30 placeholder-slate-600"
                        : "bg-slate-50 border-slate-200 text-slate-955 focus:border-emerald-500/30 placeholder-slate-400"
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  id="submit-contact-form"
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4.5 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg active:scale-98 flex items-center justify-center space-x-2 cursor-pointer ${
                    isLoading
                      ? "bg-emerald-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-500 to-teal-555 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/15"
                  }`}
                >
                  <Send size={16} className={isLoading ? "animate-ping" : ""} />
                  <span>{isLoading ? "Sending Message..." : "Send Secure Message"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
