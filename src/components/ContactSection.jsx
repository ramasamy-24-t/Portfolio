import { useState } from 'react';
import { motion } from 'framer-motion';
import contactIcon from '../assets/Icons/contact1.png';
import ScrollReveal from './ScrollReveal';
import { fadeUpItem } from '../utils/animations';

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

const inputClass =
  'font-mono w-full bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-sm md:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent transition-colors';

const contactLinks = [
  {
    href: 'https://www.linkedin.com/in/ramasamy-24-t',
    label: 'LinkedIn',
    value: 'ramasamy-24-t',
    external: true,
    iconClassName: 'group-hover:bg-[#051afbc7] group-hover:border-blue-400',
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    ),
    extra: <><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  },
  {
    href: 'mailto:rsamy2426@gmail.com',
    label: 'Email',
    value: 'rsamy2426@gmail.com',
    iconClassName: 'group-hover:bg-accent group-hover:border-black group-hover:text-bg-dark',
    icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
    extra: <polyline points="22,6 12,13 2,6" />,
  },
];

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-xs md:text-sm text-accent font-bold uppercase tracking-wide">
      {children}
    </label>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        event.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full min-h-screen bg-bg-dark px-4 py-10 md:py-14 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Open to collaborations, opportunities, and questions.
            </p>
          </div>
          <img src={contactIcon} className="h-24 md:h-32 lg:h-36 w-auto mx-auto lg:mx-0 flex-shrink-0 invert opacity-90" alt="Contact" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-6 md:gap-8">
          <motion.aside variants={fadeUpItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className={`${tile} p-5 md:p-6 lg:p-7 flex flex-col gap-5`}>
            <div>
              <h2 className="font-mono text-accent text-lg md:text-xl mb-2">Reach out directly</h2>
              <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed">
                Prefer a direct line? Use any of the links below.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group"
                >
                  <span
                    className={`flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:scale-105 ${link.iconClassName}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {link.icon}
                      {link.extra}
                    </svg>
                  </span>
                  <p className="font-mono text-sm md:text-base text-zinc-300 truncate group-hover:text-white transition-colors min-w-0">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.div variants={fadeUpItem} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.1 }} className={`${tile} p-5 md:p-6 lg:p-8 hover:bg-white/[0.14] hover:border-accent/20 transition-all duration-300`}>
            <h2 className="font-mono text-accent text-lg md:text-xl mb-1">Send a message</h2>
            <p className="font-mono text-sm text-zinc-400 mb-6">Or fill out the form below.</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <input id="name" type="text" name="name" placeholder="Enter your name" className={inputClass} required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <input id="email" type="email" name="email" placeholder="Enter your email" className={inputClass} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <textarea id="message" name="message" rows="5" placeholder="Drop me a message." className={`${inputClass} resize-none`} required />
              </div>
              <button type="submit" disabled={status === 'sending'} className={`font-mono mt-1 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 active:scale-[0.98] ${status === 'sending' ? 'bg-zinc-600 text-zinc-300 cursor-not-allowed' : 'bg-accent text-bg-dark hover:bg-white hover:text-black'}`}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="font-mono text-green-400 text-sm text-center animate-fade-in">Message sent successfully.</p>}
              {status === 'error' && <p className="font-mono text-red-400 text-sm text-center animate-fade-in">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
