import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUpItem } from '../utils/animations';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUpItem}
      className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(13,255,5,0.08)] flex flex-col"
    >
      <div
        className={`relative h-44 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-6xl md:text-7xl select-none group-hover:scale-110 transition-transform duration-500">
          {project.emoji}
        </span>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bg-dark/80 to-transparent" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h2 className="text-xl md:text-2xl text-accent font-mono mb-3">{project.title}</h2>
        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-white/10 rounded-full hover:bg-accent/20 hover:text-accent transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold text-sm group/btn"
          >
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/30 text-accent rounded-xl hover:bg-accent hover:text-bg-dark transition-all duration-300 font-bold text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen text-text-muted px-4 py-10 md:p-10 flex flex-col w-full items-center">
      <ScrollReveal className="text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">Projects</h1>
        <p className="font-mono text-zinc-400">Where I turned ideas into working models</p>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
