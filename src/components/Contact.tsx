import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Github as GitHub,
  Instagram,
} from "lucide-react";

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_yoseazg", // Replace with your EmailJS service ID
        "template_q04yflp", // Replace with your EmailJS template ID
        formData,
        "SS7HbLkBbGpQYCQPi" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setFormStatus({
            success: true,
            message: "Thank you for your message! I will get back to you soon.",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setFormStatus(null);
          }, 5000);
        },
        () => {
          setFormStatus({
            success: false,
            message: "Oops! Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <h2 className="section-title ai-gradient-text mb-16">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="rounded-2xl p-8 bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-slate-300 mb-8">
                I'm always interested in new opportunities, collaborations, and
                projects. Feel free to reach out if you'd like to discuss how we
                can work together.
              </p>
            </div>
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900/70 border border-slate-700 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-400 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@aispecialist.com"
                    className="text-cyan-300 hover:text-emerald-400 transition-colors font-semibold"
                  >
                    ahmadislam2211@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900/70 border border-slate-700 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-400 mb-1">
                    Location
                  </h4>
                  <p className="text-slate-300 font-semibold">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900/70 border border-slate-700 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-400 mb-1">
                    Phone
                  </h4>
                  <p className="text-slate-300 font-semibold">
                    (+92) 304-4678811
                  </p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-4 text-slate-400">
                Connect with me on
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/ahmadislam/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all shadow"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mirzaahmad370/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-blue-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all shadow"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://github.com/ahmadislam786"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all shadow"
                >
                  <GitHub size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="rounded-2xl p-8 bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-white">
              Send Me a Message
            </h3>
            {formStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.success
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900/70 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900/70 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/70 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/70 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center space-x-2 text-base rounded-lg shadow-md hover:shadow-lg mt-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
