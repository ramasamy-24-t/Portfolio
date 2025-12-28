import menuIcon from '../assets/Icons/menu.svg';
import homeIcon from '../assets/Icons/home.svg';
import aboutIcon from '../assets/Icons/about.svg';
import projectIcon from '../assets/Icons/project.svg';
import skillsIcon from '../assets/Icons/skills.svg';
import platformIcon from '../assets/Icons/platform.svg';
import contactIcon from '../assets/Icons/contact.svg';

function Navbar({setActiveSession, activeSession}){
    return (
        <nav className="fixed left-0 top-0 z-50 h-screen w-10 lg:w-16 flex flex-col md:w-12  py-6 md:py-10 border-white/10 rounded-md lg:py-10 justify-between items-center border-r-2 bg-bg-dark  bg-white/15 backdrop-blur-lg">
            <div>
                <img src={menuIcon} className="invert h-6 w-6 mb-10"/>
            </div>
            <div className="flex flex-col gap-10">
                <img src={homeIcon} onClick={()=>setActiveSession('Home')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7"/>
                <img src={aboutIcon} onClick={()=>setActiveSession('About')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7"/>
                <img src={skillsIcon} onClick={()=>setActiveSession('Skills')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7"/>
                <img src={projectIcon} onClick={()=>setActiveSession('Projects')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7"/>
                <img src={contactIcon} onClick={()=>setActiveSession('Contact')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7"/>
            </div>
            <div>
                <img src={platformIcon} onClick={()=>setActiveSession('Platforms')} className="invert hover:backdrop-opacity-20 cursor-pointer hover:border-r-2 hover:border-r-blue hover:pr-0.5 h-7 w-7 ${activeSession === 'Contact' ? 'invert-0' : 'invert opacity-60 group-hover:opacity-100'}"/>
            </div>
        </nav>
    )
}
export default Navbar