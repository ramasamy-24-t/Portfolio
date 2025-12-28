import Ram from '../assets/svg/Ram.jpeg'
import Focus from '../assets/Icons/focus.svg'
import Location from '../assets/Icons/location.svg'
import Ongoing from '../assets/Icons/ongoing.svg'

export default function Home(){
    return (<div className="min-h-screen w-full flex flex-col md:flex-row gap-4 md:gap-2 p-5 text-white">
        <div className="flex flex-col justify-around items-center bg-white/10 backdrop-blur-lg rounded-2xl min-w-1/3 p-8 md:p-12 ml-4">
            <div className='p-6'>
                <img src={Ram} className='rounded-2xl w-55 h-55'/>
            </div>
            <div>
                <h1 className='text-center font-mono text-2xl'>Ramasamy T</h1>
                <h2 className='text-center text-1.5xl text-accent'>Developer</h2>
                <div className='flex flex-wrap justify-center gap-3 mt-6'>
                    <div>
                        <a 
                            href="https://www.linkedin.com/in/ramasamy-24-t" 
                            target="_blank" 
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-[#051afbc7] hover:border-[#0077B5] hover:text-white transition-all duration-300 font-bold group/btn shadow-lg"
                        >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="mailto:rsamy2426@gmail.com" 
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-accent hover:border-accent hover:text-bg-dark transition-all duration-300 font-bold group/btn shadow-lg"
                        >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://github.com/ramasamy-24-t" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-[#000305] hover:border-white/40 hover:text-white transition-all duration-300 font-bold group/btn shadow-lg"
                        >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col pl-4 min-h-full mw-2/3 justify-around flex-wrap">
            <div className='flex flex-col'>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-14 md-py-350">
                    <h1 className='text-5xl leading-20 text-center'>Hi there, this is <span className='text-accent text-6xl'>Ramasamy T</span></h1>
                    <p className='text-center text-text-muted font-mono leading-8'>At the intersection of AI and modern web technologies, I’m on a journey of learning, designing, and building systems that embody clarity, efficiency, and innovation.</p>
                    
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-6 w-full">
                    <div className='flex-1 p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 duration-500'>
                        <img src={Focus} className='invert w-10 h-10 mb-4' />
                        <h3 className="text-accent font-bold mb-2">Currently Focusing on</h3>
                        <ul className="text-md space-y-1 text-zinc-300">
                            <li>Machine Learning</li>
                            <li>MERN stack</li>
                            <li>DSA</li>
                        </ul>
                    </div>
                    <div className='flex-1 p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 duration-500'>
                        <img src={Ongoing} className='invert w-10 h-10 mb-4' />
                        <h3 className="text-accent font-bold mb-2">Ongoing Projects</h3>
                        <ul className="text-md space-y-1 text-zinc-300">
                            <li>Precision Farmming Assistant</li>
                            <li>Real-Time Weather Data Fetching</li>
                            <li>Smart Shopping Assistant</li>
                        </ul>
                    </div>
                    <div className='flex-1 p-6 bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 duration-500'>
                        <img src={Location} className='invert w-10 h-10 mb-4' />
                        <h3 className="text-accent font-bold mb-2">Location</h3>
                        <p className="text-sm leading-relaxed text-zinc-300">
                            From Coimbatore, Tamil Nadu, India, I’m actively exploring remote learning, internships, and tech opportunities that challenge me to learn, build, and innovate.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}