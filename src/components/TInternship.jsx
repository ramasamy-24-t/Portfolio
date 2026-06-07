import { motion } from 'framer-motion';
import internshipIcon from '../assets/Icons/internship.png';
import { internships } from '../data/internships';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUpItem } from '../utils/animations';

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

function Label({ children }) {
  return (
    <h3 className="text-accent font-mono text-xs md:text-sm font-bold uppercase tracking-wide mb-2">
      {children}
    </h3>
  );
}

function InternshipCard({ internship }) {
  const CardWrapper = internship.url ? motion.a : motion.article;
  const linkProps = internship.url
    ? { href: internship.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      variants={fadeUpItem}
      className={`${tile} block p-5 md:p-6 lg:p-7 hover:bg-white/[0.14] hover:border-accent/20 transition-all duration-300 group`}
    >
      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
        <div>
          <h2 className="font-mono text-xl md:text-2xl text-white group-hover:text-accent transition-colors">
            {internship.company}
          </h2>
          <p className="font-mono text-accent text-sm md:text-base mt-1">{internship.role}</p>
        </div>
        <span className="font-mono text-zinc-400 text-sm whitespace-nowrap">{internship.period}</span>
      </div>

      {internship.location && (
        <p className="font-mono text-zinc-500 text-xs md:text-sm mb-4">{internship.location}</p>
      )}

      <p className="font-mono text-sm md:text-base text-zinc-300 leading-relaxed mb-5">
        {internship.description}
      </p>

      {internship.highlights?.length > 0 && (
        <div className="mb-5 pt-4 border-t border-white/10">
          <Label>Key contributions</Label>
          <ul className="font-mono text-sm md:text-base text-zinc-300 space-y-1.5 list-disc list-outside pl-4 marker:text-accent">
            {internship.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {internship.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {internship.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </CardWrapper>
  );
}

function PlaceholderCard() {
  return (
    <motion.article
      variants={fadeUpItem}
      className={`${tile} p-5 md:p-6 lg:p-7 border-dashed border-white/20`}
    >
      <Label>Coming soon</Label>
      <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed">
        Internship details will appear here once you share the content — company, role, dates,
        and what you worked on.
      </p>
    </motion.article>
  );
}

export default function Internship() {
  return (
    <div className="w-full min-h-screen bg-bg-dark px-4 py-10 md:py-14 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">Internship</h1>
            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Professional experience and hands-on learning in industry settings.
            </p>
          </div>
          <img
            src={internshipIcon}
            className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 opacity-90 invert"
            alt="Internship illustration"
          />
        </ScrollReveal>

        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {internships.length > 0
            ? internships.map((internship) => (
                <InternshipCard key={internship.id} internship={internship} />
              ))
            : <PlaceholderCard />}
        </motion.div>
      </div>
    </div>
  );
}
