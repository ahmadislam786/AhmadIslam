import React, { useState } from "react";
import { ExternalLink, Github as GitHub } from "lucide-react";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
}

const Projects: React.FC = () => {
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Neural Language Translator",
      description:
        "A transformer-based neural machine translation system capable of translating between 10 languages with state-of-the-art accuracy.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["PyTorch", "Transformers", "NLP", "Python", "FastAPI"],
      github: "#",
      demo: "#",
      category: "NLP",
    },
    {
      id: 2,
      title: "Computer Vision for Retail Analytics",
      description:
        "Computer vision system that analyzes in-store customer behavior, tracks product interactions, and provides insights to optimize store layouts.",
      image:
        "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: [
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "Python",
        "React",
      ],
      github: "#",
      demo: "#",
      category: "Computer Vision",
    },
    {
      id: 3,
      title: "Healthcare Predictive Analytics",
      description:
        "ML system that predicts patient readmission risks using medical history, demographics, and treatment data to help hospitals improve care.",
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Scikit-learn", "XGBoost", "Python", "Flask", "SQL"],
      github: "#",
      category: "Machine Learning",
    },
    {
      id: 4,
      title: "Intelligent Recommendation Engine",
      description:
        "A hybrid recommendation system using collaborative filtering and content-based approaches to provide personalized product recommendations.",
      image:
        "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: [
        "PyTorch",
        "Recommender Systems",
        "Python",
        "FastAPI",
        "Redis",
      ],
      demo: "#",
      category: "Recommender Systems",
    },
  ];

  // Filter state
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "NLP",
    "Computer Vision",
    "Machine Learning",
    "Recommender Systems",
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <h2 className="section-title ai-gradient-text mb-16">
          Featured Projects
        </h2>
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-sm border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                ${
                  filter === category
                    ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-slate-800/60 text-slate-200 hover:bg-slate-700/60"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md group hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all shadow"
                        >
                          <GitHub size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all shadow"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-slate-700/60 text-cyan-300 rounded-full border border-cyan-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
