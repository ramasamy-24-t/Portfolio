import PythonIcon from '../assets/svg/python.svg';
import cppIcon from '../assets/svg/cpp.png';
import skillSetIcon from '../assets/svg/Skill Set.svg'
export default function Skills(){
    return (
    <>
        <div className='w-full flex flex-col xl:flex-row items-center justify-center bg-bg-dark  gap-10 py-10 lg:pt-26'>
            <div className='flex-shrink-0'>
                <a>
                    <img src={skillSetIcon} className='h-82' />
                </a>
            </div>
            <div className="flex flex-col p-6 md:p-8 md:mr-2 items-center bg-bg-dark">
                <div className='flex flex-col lg:flex-row gap-6 bg-white/15 backdrop-blur-lg border-white/10 rounded-2xl justify-center items-start p-8 max-w-7xl'>
                    <div className="w-full lg:min-w-2/3">
                        <div>
                            <div className="text-accent font-medium text-center text-3xl">Core Engineering</div>
                            <div className="flex flex-col gap-4">
                                <div className="flex mt-6 flex-row gap-4 items-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all">
                                    <div className='flex items-center'>
                                        <img src={PythonIcon} className="w-10 h-10" alt="Python Icon"/>
                                    </div>
                                    <div>
                                        <div className='font-medium text-2xl text-white'>Python</div>
                                        <div className='text-accent'>Numpy, Pandas, Scikitlearn, OpenCV, Mediapipe</div>
                                    </div>
                                </div>

                                <div className="flex mt-6 flex-row gap-4 items-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all">
                                    <div className='flex items-center'>
                                        <img src={cppIcon} className="w-10 h-10" alt="Cpp Icon"/>
                                    </div>
                                    <div>
                                        <div className='font-medium text-2xl text-white'>C++</div>
                                        <div className='text-accent'>DSA & Competitive Programming</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:min-w-1/3 w-full">
                        <div className="text-accent font-medium text-center text-3xl mb-6">System & Cloud</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">HTML5/CSS3</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">Amazon EC2</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">Tailwind CSS</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">React.js</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">Mongo DB</div>
                        <div className="text-text-muted text-center bg-white/10 backdrop-blur-lg border-white/10 rounded-2xl p-1.5 m-4 hover:bg-accent hover:text-white">Java</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

