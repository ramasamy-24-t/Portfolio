import { motion } from 'framer-motion';
import Abt from '../assets/svg/Abt.png';
import aboutIcon from '../assets/svg/about.svg';
import educationIcon from '../assets/svg/Education.png';
import schoolIcon from '../assets/svg/school.svg';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUpItem } from '../utils/animations';

const tile =
  'bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10';

function SectionCard({ children, className = '' }) {
  return (
    <motion.article
      variants={fadeUpItem}
      className={`${tile} p-5 md:p-6 lg:p-7 hover:bg-white/[0.14] hover:border-accent/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.article>
  );
}

function Label({ children }) {
  return (
    <h3 className="text-accent font-mono text-xs md:text-sm font-bold uppercase tracking-wide mb-2">
      {children}
    </h3>
  );
}

export default function About() {
  return (
    <div className="w-full min-h-screen bg-bg-dark px-4 py-10 md:py-14 lg:px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-white font-mono mb-3">About me</h1>
            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Background, education, and what drives my work in AI and software.
            </p>
          </div>
          <img
            src={Abt}
            className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 opacity-90"
            alt="About illustration"
          />
        </ScrollReveal>

        <motion.div
          className="flex flex-col gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Intro */}
          <SectionCard>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <img
                src={aboutIcon}
                className="h-28 md:h-36 lg:h-40 w-auto mx-auto md:mx-0 flex-shrink-0 object-contain opacity-90"
                alt=""
              />
              <p className="font-mono text-sm md:text-base text-zinc-300 leading-relaxed">
                Hi, I&apos;m{' '}
                <span className="text-accent font-medium">Ramasamy T</span>, an aspiring Machine
                Learning Engineer and a Pre-final year Artificial Intelligence &amp; Machine Learning
                student. I am passionate about building autonomous systems and AI agents that solve real-world problems. 
                Alongside my academic learning, I actively practice Competitive Programming to strengthen problem-solving,
                logical thinking, and algorithmic efficiency. I also value clear communication — explaining ideas and
                collaborating well is essential for building practical, impactful AI solutions.
              </p>
            </div>
          </SectionCard>

          {/* College */}
          <SectionCard>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6 md:gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h2 className="font-mono text-xl md:text-2xl text-white">KIT-CBE</h2>
                    <p className="font-mono text-accent text-sm md:text-base mt-1">
                      B.E. in Artificial Intelligence &amp; Machine Learning
                    </p>
                  </div>
                  <span className="font-mono text-zinc-400 text-sm whitespace-nowrap">2024 – 2028</span>
                </div>

                <div className="space-y-3 font-mono text-sm md:text-base text-zinc-300 leading-relaxed">
                  <p>
                    <span className="text-white font-medium">Current Status:</span> Pursuing a
                    Bachelor of Engineering as a{' '}
                      <span className="text-accent">Pre-final year AI & ML student</span>, I am focused on building autonomous systems and AI agents.
                  </p>
                  <p>
                    <span className="text-white font-medium">Relevant Coursework:</span> DBMS, 
                    Data Structures &amp; Algorithms (DSA), Machine Learning, Probability &amp; Statistics,
                    and Object-Oriented Programming (OOP).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 mt-5 border-t border-white/10">
                  <div>
                    <Label>Technical Focus</Label>
                    <p className="font-mono text-sm md:text-base text-zinc-300">
                    Designing AI agents and autonomous systems that combine reasoning, workflows, and real-world automation.
                    </p>
                  </div>
                  <div>
                    <Label>Logic &amp; Efficiency</Label>
                    <p className="font-mono text-sm md:text-base text-zinc-300">
                      Consistent practice in Competitive Programming to sharpen problem-solving.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={educationIcon}
                className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 object-contain"
                alt="Education illustration"
              />
            </div>
          </SectionCard>

          {/* School */}
          <SectionCard>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8">
              <img
                src={schoolIcon}
                className="h-32 md:h-40 lg:h-44 w-auto mx-auto lg:mx-0 flex-shrink-0 object-contain"
                alt="School illustration"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <h2 className="font-mono text-xl md:text-2xl text-white">
                    SJSVM Hr. Sec. School — CBE
                  </h2>
                  <span className="font-mono text-zinc-400 text-sm whitespace-nowrap">2021 – 2024</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <Label>HSC</Label>
                    <ul className="font-mono text-sm md:text-base text-zinc-300 space-y-1 list-disc list-outside pl-4 marker:text-accent">
                      <li>Percentage: 93.3%</li>
                      <li>Score: 560/600</li>
                      <li>Science and Mathematics specialization</li>
                    </ul>
                  </div>
                  <div>
                    <Label>SSLC</Label>
                    <ul className="font-mono text-sm md:text-base text-zinc-300 space-y-1 list-disc list-outside pl-4 marker:text-accent">
                      <li>Percentage: 94.4%</li>
                      <li>Score: 472/500</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </motion.div>
      </div>
    </div>
  );
}
