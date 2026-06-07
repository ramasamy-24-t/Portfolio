import { motion } from 'framer-motion';

export default function SkillBar({ name, level, icon, subtitle, delay = 0 }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/15 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <img src={icon} className="w-10 h-10 object-contain" alt="" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="font-medium text-lg text-white truncate block">{name}</span>
          {subtitle && <p className="text-accent/80 text-sm mt-0.5 truncate">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent shadow-[0_0_12px_var(--accent-glow)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}
