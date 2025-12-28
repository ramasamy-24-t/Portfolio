export default function Projects(){
    return (
    <div className="min-h-screen text-text-muted p-5 flex flex-col w-full justify-center items-center gap-1 p-10/">
            <h1 className="text-5xl text-white font-mono">Projects</h1>
            <p className="font-mono">Where I turned ideas into working models</p>
        <div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-150 my-8 hover:border-accent hover:border-1">
                <div className="flex justify-center m-3">
                    <h2 className="text-3xl text-accent">🤟 Indian Sing Language Translation</h2>
                </div>
                <p className="text-center">This project enables real-time recognition of Indian Sign Language gestures through a camera feed, 
                    providing instant translation to multiple Indian languages with audio output. 
                    The application uses MediaPipe for pose estimation, scikit-learn for classification, 
                    and offers a user-friendly GUI built with Tkinter.</p>
                <div className="flex flex-wrap gap-2 m-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Python</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Scikitlearn</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">OpenCV</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Mediapipe</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Random Forest</div>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/ramasamy-24-t/Indian-Sign-Language-Detection" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold group/btn">
                        View on Github
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-150 my-8 hover:border-accent hover:border-1">
                <div className="flex justify-center m-3">
                    <h2 className="text-3xl text-accent">🖐️ Gesture-Controlled Keyboard</h2>
                </div>
                <p className="text-center">This project lets you control your keyboard using hand gestures captured via your webcam. It uses MediaPipe to detect finger positions and simulates keypresses like arrows or spacebar using Python automation.</p>
                <div className="flex flex-wrap gap-2 m-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Python</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">OpenCV</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Mediapipe</div>
                    
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/ramasamy-24-t/gesture-controlled-keyboard" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold group/btn">
                        View on Github
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-150 my-8 hover:border-accent hover:border-1">
                <div className="flex justify-center m-3">
                    <h2 className="text-3xl text-accent">😉 Face Detection & Sketch Overlay</h2>
                </div>
                <p className="text-center">This is a simple OpenCV mini project that performs real-time face detection with a confidence score, along with a Canny edge sketch overlay.</p>
                <div className="flex flex-wrap gap-2 m-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Python</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">OpenCV</div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-accent transition-all duration-500 hover:text-white">Haarcascade</div>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/ramasamy-24-t/face-detect-sketch" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold group/btn">
                        View on Github
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
        
    
    )
}