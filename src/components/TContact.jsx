import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-bg-dark">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-5xl font-mono text-white mb-4">Get in <span className="text-accent">Touch</span></h1>
        <p className="text-zinc-400">Open to collaborations, opportunities, and questions.</p>
      </div>

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-accent font-semibold uppercase tracking-wider ml-1">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder='Enter your name'
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-accent font-semibold uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Enter your email'
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-accent font-semibold uppercase tracking-wider ml-1">Message</label>
            <textarea 
              name="message" 
              rows="5"
              placeholder='Drop me a message—I’d love to connect.'
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "sending"}
            className={`mt-4 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95
              ${status === "sending" ? "bg-zinc-600 cursor-not-allowed" : "bg-accent text-bg-dark hover:bg-white hover:text-black"}
            `}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 font-medium text-center animate-fade-in">✓ Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 font-medium text-center animate-fade-in">✕ Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}