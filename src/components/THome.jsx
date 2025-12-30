import Ram from '../assets/svg/Ram.jpeg'
import Focus from '../assets/Icons/focus.svg'
import Location from '../assets/Icons/location.svg'
import Ongoing from '../assets/Icons/ongoing.svg'

export default function Home(){
    return (<div className="min-h-screen w-full flex flex-col md:flex-row gap-6 p-4 md:p-10 text-white overflow-x-hidden">
        <div className="flex flex-col justify-around items-center bg-white/10 backdrop-blur-lg rounded-3xl w-full md:w-1/3 p-8 md:p-12 md:ml-4 shadow-2xl border border-white/5">
            <div className='p-2'>
                <img src={Ram} className='rounded-2xl w-32 h-32 md:w-52 md:h-52 object-cover shadow-2xl border-2 border-accent/20'/>
            </div>
            <div className="text-center mt-4">
                <h1 className='text-accent font-mono block'>Ramasamy T</h1>
                <h2 className='text-lg md:text-xl text-accent font-medium mt-1'>Developer</h2>
                <div className='flex justify-center gap-4 mt-8'>
                    <a 
                        href="https://www.linkedin.com/in/ramasamy-24-t" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#051afbc7] hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a 
                        href="mailto:rsamy2426@gmail.com" 
                        className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:text-bg-dark hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a 
                        href="https://github.com/ramasamy-24-t" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-black hover:border-white/40 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="flex flex-col flex-1 gap-6 justify-center items-center">    
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-14 w-full max-w-4xl border border-white/5 shadow-2xl flex flex-col items-center justify-center">
                <h1 className='text-3xl md:text-5xl lg:text-6xl leading-tight text-center mb-6'>
                    Hi there, this is <span className='text-accent font-bold'>Ramasamy T</span>
                </h1>
                <p className='text-center text-zinc-400 font-mono text-sm md:text-base leading-relaxed max-w-2xl'>
                    At the intersection of AI and modern web technologies, I’m on a journey of learning, 
                    designing, and building systems that embody clarity, efficiency, and innovation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <div className='p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 border border-white/5 group'>
                    <img src={Focus} alt="Focus" className='invert w-10 h-10 mb-4 group-hover:scale-110 transition-transform' />
                    <h3 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">Currently Focusing on</h3>
                    <ul className="text-sm space-y-1 text-zinc-300">
                        <li>Machine Learning</li>
                        <li>MERN stack</li>
                        <li>DSA</li>
                    </ul>
                </div>
                <div className='p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 border border-white/5 group'>
                    <img src={Ongoing} alt="Projects" className='invert w-10 h-10 mb-4 group-hover:scale-110 transition-transform' />
                    <h3 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">Ongoing Projects</h3>
                    <ul className="text-sm space-y-1 text-zinc-300">
                        <li>Precision Farmming Assistant</li>
                        <li>Real-Time Weather Data Fetching</li>
                        <li>Smart Shopping Assistant</li>
                    </ul>
                </div>
                <div className='p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 border border-white/5 group'>
                    <img src={Location} alt="Location" className='invert w-10 h-10 mb-4 group-hover:scale-110 transition-transform' />
                    <h3 className="text-accent font-bold mb-2 uppercase tracking-widest text-xs">Location</h3>
                    <p className="text-xs leading-relaxed text-zinc-300">
                        From Coimbatore, Tamil Nadu, India, I’m actively exploring remote learning, internships, and tech 
                        opportunities that challenge me to build and innovate.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
