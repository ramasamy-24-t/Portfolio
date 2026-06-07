export const projects = [
  {
    id: 'agricultural-rag-assistant',
    title: 'Precision Farming Assistant',
    emoji: '🌱',
    description: 'A retrieval‑augmented generation system built for the 36 Hours Hackathon that ingests agricultural PDFs, enriches chunks with GPT‑4o‑mini, stores embeddings in ChromaDB, and answers crop advisory questions via notebook chat and Flask REST API.',
    tags: ['Python', 'OpenAI API', 'ChromaDB', 'RAG', 'Hackathon'],
    github: 'https://github.com/ramasamy-24-t/Precision-Farming-Assistant',
    gradient: 'from-green-600/80 via-green-600/80 to-yellow-800/80'  
  },  
  {
    id: 'jobassistant-jgenie',
    title: 'JobAssistant (JGenie)',
    emoji: '💼',
    description:
    'Built an autonomous career assistant that integrates email monitoring, intelligent job matching, web scraping, AI-generated cover letters, Telegram notifications, and mock interview capabilities into a unified workflow powered by large language models.',    tags: ['FastAPI', 'Node.js', 'MongoDB', 'Groq LLM', 'Telegram Bot API'],
    tags: ['Flask', 'MongoDB', 'Playwright', 'Telegram Bot API', 'GoogleOAuth'],
    github: 'https://github.com/ramasamy-24-t/job_assistant',
    gradient: 'from-purple-600/80 via-pink-600/60 to-orange-500/80',
  },
  {
    id: 'aakash-ka-vaani',
    title: 'Weather Dashboard',
    emoji: '🌤️',
    description: 'Developed a full-stack MERN weather application with real-time weather tracking and an AI-powered Umbrella Man assistant using the Groq Cloud API. The chatbot analyzes weather conditions and provides contextual recommendations to help users make informed decisions.',
    tags: ['React Js', 'MongoDB', 'Express', 'Tailwind CSS', 'Groq Cloud API'],
    github: 'https://github.com/ramasamy-24-t/Aakash-Ka-Vaani',
    demo: 'https://aakash-ka-vaani-v1.vercel.app/',
    gradient: 'from-sky-400/80 via-blue-400/80 to-yellow-400/80',
  },  
  {
    id: 'isl',
    title: 'Indian Sign Language Translation',
    emoji: '🤟',
    description:
      'Real-time Indian Sign Language gesture recognition via camera, with multi-language translation and audio output using MediaPipe, scikit-learn, and Tkinter.',
    tags: ['Python', 'Scikitlearn', 'OpenCV', 'Mediapipe', 'Random Forest'],
    github: 'https://github.com/ramasamy-24-t/Indian-Sign-Language-Detection',
    demo: null,
    gradient: 'from-violet-600/80 via-purple-700/60 to-indigo-900/80',
  },
  {
    id: 'gesture-keyboard',
    title: 'Gesture-Controlled Keyboard',
    emoji: '🖐️',
    description:
      'Control keyboard input with hand gestures from your webcam. MediaPipe tracks finger positions and Python automation simulates arrow keys and spacebar.',
    tags: ['Python', 'OpenCV', 'Mediapipe'],
    github: 'https://github.com/ramasamy-24-t/gesture-controlled-keyboard',
    demo: null,
    gradient: 'from-emerald-600/80 via-teal-700/60 to-cyan-900/80',
  },
  {
    id: 'face-sketch',
    title: 'Face Detection & Sketch Overlay',
    emoji: '😉',
    description:
      'OpenCV mini project for real-time face detection with confidence scores and a Canny edge sketch overlay on the live feed.',
    tags: ['Python', 'OpenCV', 'Haarcascade'],
    github: 'https://github.com/ramasamy-24-t/face-detect-sketch',
    demo: null,
    gradient: 'from-rose-600/80 via-orange-700/60 to-amber-900/80',
  },
];
