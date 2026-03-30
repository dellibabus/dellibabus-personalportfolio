import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useToastStore } from '../store/toastStore';
import { useThemeStore } from '../store/themeStore';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'sdellibabu8@gmail.com', href: 'mailto:sdellibabu8@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9344262658', href: 'tel:+919344262658' },
  { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: null },
];

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { addToast } = useToastStore();
  const { isDark } = useThemeStore();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      addToast('Message sent! I\'ll get back to you soon. 🚀', 'success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-[#0D110E]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
            Let&apos;s Build Something{' '}
            <span className="text-green-400">Great</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-base ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
            Have a project in mind? Let&apos;s discuss and bring your idea to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
                Contact Information
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
                Feel free to reach out via email or phone. I typically respond within 24 hours.
              </p>
            </div>

            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className={`flex items-start gap-4 p-4 rounded-2xl border ${isDark ? 'border-[#1F2A25] bg-[#111715]' : 'border-green-100 bg-green-50'}`}>
                <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <div className={`text-xs font-semibold mb-0.5 ${isDark ? 'text-[#9CA3AF]' : 'text-gray-400'}`}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className={`text-sm font-medium hover:text-green-400 transition-colors ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className={`text-sm font-medium ${isDark ? 'text-[#E6F4EA]' : 'text-[#0F172A]'}`}>
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            {/* <div className="p-5 rounded-2xl border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-green-400">Currently Available</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#9CA3AF]' : 'text-gray-500'}`}>
                Open to freelance projects, full-time opportunities, and exciting collaborations.
              </p>
            </div> */}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-3xl border p-8 ${isDark ? 'bg-[#111715] border-[#1F2A25]' : 'bg-white border-green-100 shadow-sm'}`}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  label="Your Message"
                  name="message"
                  multiline
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  loading={loading}
                  className="self-end"
                >
                  <Send size={15} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
