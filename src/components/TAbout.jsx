import aboutIcon from '../assets/svg/about.svg';
import educationIcon from '../assets/svg/Education.png';
import schoolIcon from '../assets/svg/school.svg';
function About() {
  return (
    <div className='min-h-screen w-full lg:p-5 flex justify-center items-center p-6 bg-bg-dark'>
        <div className="flex flex-col justify-center items-center gap-16 max-w-6xl">
            <div className="bg-cover ">
                <div>
                    <div className="text-center font-mono text-zinc-50 text-6xl">About me</div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center justify-center mt-10 gap-10'>
                    <div className="flex flex-shrink-0 justify-center ">
                        <img src={aboutIcon} className="h-44 md:h-56 lg:h-64 object-contain"/>
                    </div>
                    <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20">
                        <p className="text-text-muted leading-relaxed p-4">
                            Hi, I’m <span className="text-accent font-medium leading-relaxed"> Ramasamy T </span>, an aspiring Machine Learning Engineer and a 2nd-year Artificial Intelligence & Machine Learning student. 
                            I focus on building strong foundations in AI, with particular interest in machine learning algorithms, data handling, and applying these concepts through full-stack development. 
                            Alongside my academic learning, I actively practice Competitive Programming to strengthen my problem-solving skills, logical thinking, and algorithmic efficiency. 
                            I also place strong importance on clear and effective communication, as I believe the ability to explain ideas, share insights, 
                            and collaborate well with others is essential for building practical and impactful AI solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col-reverse md:flex-row md:items-center justify-center mt-10 gap-10'>
                    <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20">
                        <div className='flex justify-between items-start mb-4'>
                            <div>
                                <h2 className='font-bold text-white text-2xl'>KIT-CBE</h2>
                                <p className='text-accent font-medium'>B.E. in Artificial Intelligence & Machine Learning</p>
                            </div>
                            <span className='text-text-muted text-sm whitespace-nowrap'>2024-2028</span>
                        </div>
                        <div className='space-y-4 text-white/80 leading-relaxed mb-2'>
                            <p>
                                <strong className="text-white">Current Status:</strong> Pursuing a Bachelor of Engineering as a <span className="text-accent">second-year student</span>, maintaining a focus on the mathematical and logical foundations of AI.
                            </p>
                            <p>
                                <strong className="text-white">Relevant Coursework:</strong> Actively mastering Data Structures & Algorithms (DSA), Linear Algebra, Probability & Statistics, and Object-Oriented Programming (OOP).
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-white/80 '>
                            <div>
                                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-1">Technical Focus</h4>
                                <p className="text-sm">Bridging theory with ML algorithm development and Full-Stack integration.</p>
                            </div>
                            <div>
                                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-1">Logic & Efficiency</h4>
                                <p className="text-sm">Consistent practice in Competitive Programming to sharpen problem-solving.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-center">
                        <img src={educationIcon} className="h-44 md:h-56 lg:h-64 object-contain"/>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row md:items-center justify-center mt-10 gap-10'>
                    <div className="flex flex-shrink-0 justify-center">
                        <img src={schoolIcon} className="h-44 md:h-56 lg:h-64 object-contain"/>
                    </div>
                    <div className="bg-white/15 backdrop-blur-lg border border-white/10 rounded-2xl p-7 hover:border-white/20">
                        <div className='flex justify-between items-start mb-4'>
                            <div>
                                <h2 className='font-bold text-white text-2xl'>SJSVM Hr. Sec. School-CBE &nbsp;</h2>
                            </div>
                            <span className='text-text-muted text-sm whitespace-nowrap'>2021-2024</span>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-white/80'>
                            <div>
                                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-1">HSC</h4>
                                <p>Percentage: 93.3% </p>
                                <p>Score: 560/600</p>
                                <p>Completed with specialization in Science and Mathematics.</p>
                            </div>
                            <div>
                                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-1">SSLC</h4>
                                <p>Percentage: 94.4% </p>
                                <p>Score: 472/500</p>                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;