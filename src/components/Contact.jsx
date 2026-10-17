import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending contact form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  const contactCards = [
    {
      title: "Email",
      value: "nuruddin2971@gmail.com",
      href: "mailto:nuruddin2971@gmail.com",
      icon: <Mail className="w-5 h-5 text-tertiary" />,
      actionText: "Send Email"
    },
    {
      title: "Phone",
      value: "+60178152971",
      href: "tel:+60178152971",
      icon: <Phone className="w-5 h-5 text-primary" />,
      actionText: "Call Me"
    },
    {
      title: "WhatsApp",
      value: "+60178152971",
      href: "https://wa.me/60178152971",
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      actionText: "Message on WhatsApp"
    },
    {
      title: "Location",
      value: "Nilai, Negeri Sembilan, Malaysia",
      href: null,
      icon: <MapPin className="w-5 h-5 text-secondary" />,
      actionText: "Relocation & Remote Ready"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tertiary/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-mono font-medium text-primary"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight"
        >
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg font-['Inter']"
        >
          Whether you have an ambitious full-stack project in mind, an exciting role to discuss, or just want to say hi, my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info Cards & Availability */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Availability Status Badge Card */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-mono font-bold uppercase tracking-wider text-emerald-400">
                Current Status
              </span>
            </div>
            <h3 className="text-lg font-black text-white font-['Space_Grotesk']">
              Open for Full-Time Roles & Freelance Projects
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-['Inter']">
              Ready to contribute to agile teams, fast-growing startups, and high-impact digital initiatives globally.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="space-y-3.5">
            {contactCards.map((card) => (
              <div 
                key={card.title}
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {card.title}
                    </div>
                    <div className="text-sm font-bold text-white font-['Space_Grotesk'] mt-0.5 break-all">
                      {card.value}
                    </div>
                  </div>
                </div>

                {card.href && (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-tertiary hover:border-tertiary/40 transition-colors shrink-0 ml-2 cursor-pointer"
                    title={card.actionText}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 font-['Inter'] mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm">
                  Thank you for reaching out. I have received your message and will reply promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-['Inter']">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, budget or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all resize-none custom-scrollbar"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-tertiary via-emerald-400 to-primary text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(78,222,163,0.35)] hover:shadow-[0_0_35px_rgba(78,222,163,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
