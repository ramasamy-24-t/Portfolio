import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuIcon from '../assets/Icons/menu.svg';
import homeIcon from '../assets/Icons/home.svg';
import aboutIcon from '../assets/Icons/about.png';
import projectIcon from '../assets/Icons/project.png';
import skillsIcon from '../assets/Icons/skills.png';
import platformIcon from '../assets/Icons/platform.png';
import contactIcon from '../assets/Icons/contact.png';
import internshipIcon from '../assets/Icons/internship.png';
import { siteConfig } from '../config/site';

const allNavItems = [
  { id: 'Home', icon: homeIcon, label: 'Home' },
  { id: 'About', icon: aboutIcon, label: 'About' },
  { id: 'Internship', icon: internshipIcon, label: 'Internship' },
  { id: 'Skills', icon: skillsIcon, label: 'Skills' },
  { id: 'Projects', icon: projectIcon, label: 'Projects' },
  { id: 'Contact', icon: contactIcon, label: 'Contact' },
  { id: 'Platforms', icon: platformIcon, label: 'Platforms' },
];

const navItems = siteConfig.showInternshipSection
  ? allNavItems
  : allNavItems.filter((item) => item.id !== 'Internship');

const mainNavItems = navItems.filter((item) => item.id !== 'Platforms');
const bottomNavItem = navItems.find((item) => item.id === 'Platforms');

function NavButton({ item, isActive, onClick, showLabel = false }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      aria-label={item.label}
      aria-current={isActive ? 'page' : undefined}
      title={item.label}
      className={`group relative flex items-center gap-3 cursor-pointer transition-all duration-300 ${
        showLabel ? 'w-full px-4 py-3 rounded-xl hover:bg-white/10' : 'p-1'
      } ${isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80'}`}
    >
      {isActive && !showLabel && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 w-1 h-7 bg-accent rounded-full shadow-[0_0_12px_var(--accent-glow)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {isActive && showLabel && (
        <span className="w-1 h-6 bg-accent rounded-full shadow-[0_0_10px_var(--accent-glow)] flex-shrink-0" />
      )}
      <img
        src={item.icon}
        alt=""
        className={`invert h-7 w-7 flex-shrink-0 transition-transform duration-300 ${
          isActive ? 'scale-110 drop-shadow-[0_0_8px_var(--accent)]' : 'group-hover:scale-105'
        }`}
      />
      {showLabel && (
        <span className={`font-mono text-sm ${isActive ? 'text-accent' : 'text-white'}`}>
          {item.label}
        </span>
      )}
    </button>
  );
}

function BrandLogo({ onClick, className = 'h-7 w-7 lg:h-8 lg:w-8' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go to home"
      title="Home"
      className="rounded-lg p-1 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src="/ram.svg"
        alt="Ram portfolio"
        className={`${className} invert opacity-90 select-none`}
      />
    </button>
  );
}

function Navbar({ setActiveSession, activeSession }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (section) => {
    setActiveSession(section);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 border-b border-white/10 bg-bg-dark/95 backdrop-blur-lg">
        <BrandLogo onClick={() => navigate('Home')} className="h-7 w-7" />
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <img src={menuIcon} className="invert h-6 w-6" alt="" />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="md:hidden fixed left-0 top-0 z-50 h-full w-64 flex flex-col py-6 px-4 border-r border-white/10 bg-bg-dark/98 backdrop-blur-xl"
            >
              <div className="font-mono text-accent text-lg mb-8 px-2">Navigation</div>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavButton
                    key={item.id}
                    item={item}
                    isActive={activeSession === item.id}
                    onClick={navigate}
                    showLabel
                  />
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <nav
        aria-label="Main navigation"
        className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-12 lg:w-16 flex-col py-8 lg:py-10 border-r border-white/10 justify-between items-center bg-bg-dark/90 backdrop-blur-lg"
      >
        <BrandLogo onClick={() => navigate('Home')} />
        <div className="flex flex-col gap-6 lg:gap-8">
          {mainNavItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={activeSession === item.id}
              onClick={navigate}
            />
          ))}
        </div>
        {bottomNavItem && (
          <NavButton
            item={bottomNavItem}
            isActive={activeSession === bottomNavItem.id}
            onClick={navigate}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
