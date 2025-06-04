import React from "react";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

// Interface for experience items
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "work" | "education";
}

const Experience: React.FC = () => {
  // Experience data
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "AI Engineer",
      company: "Upwork",
      location: "online",
      period: "2022 - Since",
      description:
        "Designed and deployed machine learning and deep learning models for real-world applications including NLP, computer vision, and data analytics. Specialized in automating workflows, training custom models, and building end-to-end AI pipelines. Collaborated with clients globally to deliver impactful AI solutions using TensorFlow, PyTorch, OpenAI API, and web scraping techniques.",
      type: "work",
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "Upwork",
      location: "online",
      period: "2023 - Since",
      description:
        "Developed and fine-tuned machine learning models for tasks such as classification, regression, clustering, and recommendation systems. Focused on data preprocessing, feature engineering, model evaluation, and performance optimization. Delivered scalable ML solutions using Python, Scikit-learn, Pandas, and deployment tools like Docker and CI/CD pipelines for clients across various industries.",
      type: "work",
    },
    {
      id: 3,
      title: "AI Research Intern",
      company: "Prodigy Infotech",
      location: "India",
      period: "Summer 2024",
      description:
        "Worked on research-driven AI projects focusing on deep learning, computer vision, and natural language processing. Conducted experiments, built prototype models, and documented findings to support real-world AI applications. Gained hands-on experience with TensorFlow, OpenCV, and NLP libraries while collaborating with mentors on innovative research ideas.",
      type: "work",
    },
    {
      id: 4,
      title: "B.S. in Artificial Intelligence",
      company: "Fast University",
      location: "Islamabad, PK",
      period: "2022 - 2026",
      description:
        "Specialized in artificial intelligence and machine learning. Thesis focused on improving sample efficiency in deep reinforcement learning.Pursuing a Bachelor's degree with a specialization in Artificial Intelligence and Machine Learning. Academic focus includes deep learning, computer vision, and natural language processing. Final-year thesis centers on enhancing sample efficiency in deep reinforcement learning.",
      type: "education",
    },
  ];

  return (
    <section
      id="experience"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <h2 className="section-title ai-gradient-text mb-16">
          Experience & Education
        </h2>
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 opacity-60 rounded-full"></div>
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 border-4 border-slate-950 z-10 shadow-lg"></div>
                {/* Content card */}
                <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300">
                  <div className="flex items-center mb-4 text-cyan-400">
                    {exp.type === "work" ? (
                      <Briefcase className="mr-2" />
                    ) : (
                      <GraduationCap className="mr-2" />
                    )}
                    <span className="text-sm font-medium">
                      {exp.type === "work" ? "Work Experience" : "Education"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-white">
                    {exp.title}
                  </h3>
                  <h4 className="text-base mb-1 text-emerald-400 font-semibold">
                    {exp.company}
                  </h4>
                  <div className="flex items-center mb-4 text-sm text-slate-400">
                    <span className="mr-3">{exp.location}</span>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
