import React from "react";
import { Code, Cpu, Database, Globe, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems and implementing machine learning algorithms to solve complex problems.",
  },
  {
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    title: "NLP",
    description:
      "Developing Natural Language Processing models and algorithms to understand and generate human language.",
  },
  {
    icon: <Database className="w-8 h-8 text-blue-400" />,
    title: "Web Scraping",
    description:
      "Extracting data from websites and web applications using various web scraping techniques.",
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    title: "Cloud Solutions",
    description:
      "Deploying and managing applications on cloud platforms with focus on scalability and security.",
  },
  {
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
    title: "System Architecture",
    description:
      "Designing robust and maintainable system architectures for complex applications.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: "Performance Optimization",
    description:
      "Optimizing application performance and implementing efficient solutions.",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title ai-gradient-text">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm a Passionate Machine Learning & AI Engineer with a strong
            concept of Machine Learning and AI. I'm a quick learner and I'm
            always looking for new challenges and opportunities to learn and
            grow.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md flex items-start gap-4 hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-slate-900/70 border border-slate-700 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md text-center hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold ai-gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
