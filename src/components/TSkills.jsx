import { motion } from 'framer-motion';
import skillSetIcon from '../assets/svg/Skill Set.svg';
import { skillCategories } from '../data/skills';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUpItem } from '../utils/animations';

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

function SkillCategoryCard({ category }) {
  return (
    <motion.article
      variants={fadeUpItem}
      className={`${tile} p-5 md:p-6 flex flex-col gap-4 hover:bg-white/[0.14] hover:border-accent/30 transition-all duration-300 group`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl md:text-3xl select-none group-hover:scale-110 transition-transform duration-300">
          {category.emoji}
        </span>
        <h2 className="text-accent font-mono text-base md:text-lg lg:text-xl leading-tight">
          {category.title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs md:text-sm px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-zinc-300 hover:bg-accent/15 hover:border-accent/40 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <div className="w-full min-h-screen bg-bg-dark px-4 py-10 md:py-14 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">Skills</h1>
            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Tools and technologies I work with.
            </p>
          </div>
          <img
            src={skillSetIcon}
            className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 opacity-90"
            alt="Skill set illustration"
          />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
