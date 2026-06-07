import { motion } from 'framer-motion';
import Ram from '../assets/svg/Ram.jpeg';
import Focus from '../assets/Icons/focus.svg';
import Location from '../assets/Icons/location.svg';
import Ongoing from '../assets/Icons/ongoing.svg';
import Typewriter from './Typewriter';
import { staggerContainer, fadeUpItem } from '../utils/animations';

const roles = ['Building AI-Powered Workflows ','Automation Engineer', 'Developer', 'Problem Solver', 'AI Enthusiast'];

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

const listClass =
  'text-left text-[11px] sm:text-xs md:text-sm lg:text-base space-y-0.5 md:space-y-1 text-zinc-300 list-disc list-outside pl-4 marker:text-accent';

const infoCards = [
  {
    icon: Focus,
    title: 'Focusing on',
    content: (
      <ul className={listClass}>
        <li>Building Autonomous Systems</li>
        <li>AI Agents</li>
        <li>DSA</li>
      </ul>
    ),
  },
  {
    icon: Ongoing,
    title: 'Ongoing Projects',
    content: (
      <ul className={listClass}>
        <li>Legal Contract Assistant</li>
        <li>Agentic Customer Support</li>
        <li>Health Triage Agent</li>
      </ul>
    ),
  },
  {
    icon: Location,
    title: 'Location',
    content: (
      <p className="text-left text-[11px] sm:text-xs md:text-sm lg:text-base leading-snug text-zinc-300">
        Coimbatore, Tamil Nadu. <br /> Open to remote learning, internships, and tech opportunities.
      </p>
    ),
  },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/ramasamy-24-t',
    label: 'LinkedIn',
    external: true,
    className: 'hover:bg-[#051afbc7] hover:border-blue-400',
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    ),
    extra: <><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  },
  {
    href: 'mailto:rsamy2426@gmail.com',
    label: 'Email',
    className: 'hover:bg-accent hover:text-bg-dark hover:border-white',
    icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
    extra: <polyline points="22,6 12,13 2,6" />,
  },
  {
    href: 'https://github.com/ramasamy-24-t',
    label: 'GitHub',
    external: true,
    className: 'hover:border-black hover:bg-black hover:border-white',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
];

function ProfileBlock({ desktop = false }) {
  return (
    <div className={`flex flex-col items-center ${desktop ? 'gap-5 lg:gap-6 w-full' : 'gap-3 sm:gap-4'}`}>
      <motion.div
        className="w-full flex justify-center"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={Ram}
          alt="Ramasamy T"
          className={`w-auto h-auto object-contain rounded-xl lg:rounded-2xl border-2 border-accent/25 shadow-lg ${
            desktop
              ? 'max-w-[min(100%,300px)] lg:max-w-[min(100%,340px)] xl:max-w-[min(100%,380px)] max-h-[46vh] lg:max-h-[50vh]'
              : 'max-w-full max-h-[240px] sm:max-h-[280px] md:max-h-[320px]'
          }`}
        />
      </motion.div>
      <div className="text-center w-full">
        <h1
          className={`font-mono tracking-tight text-white ${
            desktop ? 'text-2xl lg:text-3xl xl:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'
          }`}
        >
          Ramasamy T
        </h1>
        <p
          className={`text-accent font-medium mt-1 min-h-[1.25rem] ${
            desktop ? 'text-base lg:text-lg xl:text-xl' : 'text-sm sm:text-base md:text-lg'
          }`}
        >
          <Typewriter words={roles} />
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100dvh-3.5rem)] lg:h-dvh lg:overflow-hidden text-white box-border px-3 py-4 sm:px-5 md:px-6 lg:px-10 xl:px-12 pb-8 lg:py-8">
      <div className="w-full lg:h-full lg:min-h-0 grid lg:grid-cols-[minmax(300px,34%)_1fr] xl:grid-cols-[minmax(320px,36%)_1fr] gap-4 md:gap-6 lg:gap-10 xl:gap-12 lg:items-center">
        {/* Mobile & tablet — stacked, scrollable */}
        <div className="lg:hidden">
          <ProfileBlock />
        </div>

        {/* Laptop+ left column */}
        <aside className="hidden lg:flex flex-col items-center justify-center min-h-0 w-full">
          <ProfileBlock desktop />
        </aside>

        {/* Right panel */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full min-h-0 lg:h-full lg:justify-center">
          <div className={`${tile} w-full flex-shrink-0 px-5 py-5 sm:px-6 sm:py-5 md:px-7 md:py-6 lg:px-10 lg:py-7 hover:bg-white/[0.14]`}>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug text-center lg:text-left font-mono">
              Hi there, this is{' '}
              <span className="text-accent">Ramasamy T</span>
            </h2>
            <p className="text-center lg:text-left text-zinc-400 font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-3 md:mt-4 max-w-3xl lg:mx-0 mx-auto">
              At the intersection of AI and modern web technologies, I&apos;m learning, designing, and
              building systems that embody clarity, efficiency, and innovation.
            </p>
            <div className="flex justify-center lg:justify-start gap-3 mt-4 md:mt-5 lg:mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className={`p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:scale-105 ${link.className}`}
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
                    className="lg:w-[22px] lg:h-[22px]"
                  >
                    {link.icon}
                    {link.extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full flex-shrink-0"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUpItem}
                className={`${tile} p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col group hover:bg-white/[0.14] transition-colors`}
              >
                <div className="flex flex-col items-center text-center w-full">
                  <img
                    src={card.icon}
                    alt=""
                    className="invert w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-1.5 md:mb-2 group-hover:scale-110 transition-transform flex-shrink-0"
                  />
                  <h3 className="text-accent font-bold mb-1 md:mb-2 uppercase tracking-wide text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div className="w-full text-left">{card.content}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
