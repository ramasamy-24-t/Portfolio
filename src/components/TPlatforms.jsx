import { motion } from 'framer-motion';
import platformIcon from '../assets/Icons/platform1.svg';
import { codingPlatforms } from '../data/platforms';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUpItem } from '../utils/animations';

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

function Label({ children }) {
  return (
    <span className="text-accent font-mono text-xs font-bold uppercase tracking-wide">
      {children}
    </span>
  );
}

function PlatformCard({ platform }) {
  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUpItem}
      className={`${tile} group block p-5 md:p-6 hover:bg-white/[0.14] hover:-translate-y-1 transition-all duration-300 ${platform.hoverBorder} ${platform.hoverGlow}`}
    >
      <div
        className="h-1 w-full rounded-full mb-5 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: platform.accentColor }}
      />

      <div className="flex items-center gap-4 mb-5">
        <img
          src={platform.icon}
          className="h-12 md:h-14 w-12 md:w-14 bg-white p-1.5 rounded-xl object-contain group-hover:scale-110 transition-transform duration-300"
          alt={platform.name}
        />
        <h2 className="text-white font-mono text-lg md:text-xl leading-tight group-hover:text-accent transition-colors">
          {platform.name}
        </h2>
      </div>

      <div className="space-y-3 border-t border-white/10 pt-4 font-mono">
        <div className="flex justify-between items-center gap-4">
          <Label>Max Rating</Label>
          <span className="text-white text-lg md:text-xl font-medium">{platform.rating}</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Label>Global Rank</Label>
          <span className="text-zinc-300 text-sm md:text-base">{platform.rank}</span>
        </div>
      </div>

      <p className="mt-5 pt-4 border-t border-white/10 font-mono text-xs md:text-sm text-zinc-400 group-hover:text-accent transition-colors flex items-center gap-1">
        View profile
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </p>
    </motion.a>
  );
}

export default function Platforms() {
  return (
    <div className="w-full min-h-screen bg-bg-dark px-4 py-10 md:py-14 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">Platforms</h1>
            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Competitive programming profiles where I sharpen problem-solving and DSA skills.
            </p>
          </div>
          <img
            src={platformIcon}
            className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 opacity-90 invert"
            alt="Platforms illustration"
          />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {codingPlatforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
