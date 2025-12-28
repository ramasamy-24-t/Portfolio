import linkedinIcon from '../assets/Icons/linkedin.svg'
import githubIcon from '../assets/Icons/github.svg'
import leetcodeIcon from '../assets/Icons/leetcode.png'
import codechefIcon from '../assets/Icons/codechef.png'
import codeforcesIcon from '../assets/Icons/codeforces.png'

function Platforms() {
    const codingData = [
        { 
            name: "LeetCode", 
            icon: leetcodeIcon, 
            rating: "1606", 
            rank: "2,29,088", 
            url: "https://leetcode.com/u/ramasamy-24-t/", 
            glow: "hover:shadow-[0_0_30px_rgba(255,161,22,0.2)]",
            borderColor: "hover:border-[#FFA116]/50"
        },
        { 
            name: "CodeChef", 
            icon: codechefIcon, 
            rating: "1442", 
            rank: "41,077", 
            url: "https://www.codechef.com/users/kit28aiml049",
            glow: "hover:shadow-[0_0_30px_rgba(91,70,56,0.2)]",
            borderColor: "hover:border-[#5B4638]/50"
        },
        { 
            name: "Codeforces", 
            icon: codeforcesIcon, 
            rating: "1086", 
            rank: "92,675", 
            url: "https://codeforces.com/profile/ramasamy-24-t",
            glow: "hover:shadow-[0_0_30px_rgba(31,138,203,0.2)]",
            borderColor: "hover:border-[#1F8ACB]/50"
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-bg-dark p-6 md:p-12">
            
            <div className="text-center mb-16">
                <h1 className="text-5xl font-mono text-white mb-4 tracking-tight">
                    Coding <span className="text-accent">Platforms</span>
                </h1>
                <p className="text-zinc-400 font-mono italic">Where logic meets competitive spirit</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
                {codingData.map((platform) => (
                    <a 
                        key={platform.name}
                        href={platform.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center transition-all duration-500 hover:-translate-y-2 cursor-pointer ${platform.glow} ${platform.borderColor}`}
                    >
                        <img src={platform.icon} className="h-16 mb-6 bg-white p-2 rounded-2xl group-hover:scale-110 transition-transform duration-300" alt={platform.name} />
                        

                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Max Rating</span>
                                <span className="text-accent font-mono text-xl">{platform.rating}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Global Rank</span>
                                <span className="text-white font-mono">{platform.rank}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-center text-white text-sm uppercase tracking-[0.3em] font-bold mb-8">Social Connect</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a 
                        href="https://linkedin.com/in/ramasamy-24-t" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-4 py-4 px-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#0077B5]/10 hover:border-[#0077B5] transition-all group"
                    >
                        <img src={linkedinIcon} className="h-6 invert group-hover:invert-0 transition-all" alt="LinkedIn" />
                        <span className="font-bold text-zinc-400 group-hover:text-white">LinkedIn</span>
                    </a>

                    <a 
                        href="https://github.com/ramasamy-24-t" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-4 py-4 px-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white transition-all group"
                    >
                        <img src={githubIcon} className="h-6 invert group-hover:invert-0 transition-all" alt="GitHub" />
                        <span className="font-bold text-zinc-400 group-hover:text-white">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Platforms;