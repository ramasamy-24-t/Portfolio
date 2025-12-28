import { useState } from 'react'
import './App.css'
import Navbar from './components/TNavbar'
import Home from './components/THome'
import About from './components/TAbout'
import Projects from './components/TProjects'
import Contacts from './components/TContact'
import Skills from './components/TSkills'
import Platforms from './components/TPlatforms'
import Footer from './components/Tfooter'

function App() {
  const[activeSession, setActiveSession] = useState("Home");
  const renderSection=()=>{
    switch(activeSession){
      case "Home":
        return <Home/>;
      case "About":
        return <About/>;
      case "Skills":
        return <Skills/>;
      case "Projects":
        return <Projects/>;
      case "Contact":
        return <Contacts/>;
      case "Platforms":
        return <Platforms/>;
    }
  }
  return (
    <>
      <div className="flex bg-bg-dark min-h-screen w-full">
        <Navbar setActiveSession={setActiveSession} activeSession={activeSession}/>
        <main className='ml-10 flex-1 md:ml-12 lg:ml-16 min-h-screen overflow-x-hidden bg-bg-dark'>
          {renderSection()}
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App