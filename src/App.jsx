import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/TNavbar';
import Home from './components/THome';
import About from './components/TAbout';
import Projects from './components/TProjects';
import Contacts from './components/ContactSection';
import Skills from './components/TSkills';
import Platforms from './components/TPlatforms';
import Internship from './components/TInternship';
import Footer from './components/Tfooter';
import { siteConfig } from './config/site';
import { pageTransition } from './utils/animations';

function App() {
  const [activeSession, setActiveSession] = useState('Home');

  useEffect(() => {
    if (!siteConfig.showInternshipSection && activeSession === 'Internship') {
      setActiveSession('Home');
    }
  }, [activeSession]);

  const renderSection = () => {
    switch (activeSession) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Internship':
        return siteConfig.showInternshipSection ? <Internship /> : <Home />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contacts />;
      case 'Platforms':
        return <Platforms />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="flex bg-bg-dark min-h-screen w-full">
        <Navbar setActiveSession={setActiveSession} activeSession={activeSession} />
        <main className="flex-1 min-h-screen overflow-x-hidden bg-bg-dark pt-14 md:pt-0 ml-0 md:ml-12 lg:ml-16 overflow-y-auto lg:overflow-y-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSession}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
              className={`w-full ${activeSession === 'Home' ? 'min-h-[calc(100dvh-3.5rem)] lg:h-dvh lg:overflow-hidden' : 'min-h-[calc(100dvh-3.5rem)] md:min-h-dvh'}`}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

export default App;
