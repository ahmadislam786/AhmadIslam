import React from "react";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Hi, I'm <span className="ai-gradient-text">Ahmad Islam</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-200 font-semibold">
                Machine Learning & AI Engineer
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                I specialize in crafting intelligent machine learning and AI
                solutions that tackle real-world challenges. If you're seeking
                an ML or AI engineer who brings passion and precision, you're in
                the right place.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="btn btn-primary text-base px-8 py-3 rounded-full shadow-md animate-pulse-glow"
              >
                Get in Touch
              </a>
              <div className="flex items-center space-x-2 ml-2">
                <a
                  href="https://github.com/ahmadislam786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all shadow"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmadislam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all shadow"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mirzaahmad370/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-blue-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all shadow"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-slate-800/60 border-4 border-cyan-500/30 shadow-2xl flex items-center justify-center overflow-hidden animate-float">
              {/* Replace with your image */}
              <img
                src="/ahmad.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
