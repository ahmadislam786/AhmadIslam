import React from "react";
const skills = [
  {
    category: "Machine Learning",
    items: [
      { name: "Python", level: 90 },
      { name: "Scikit-learn", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Keras", level: 80 },
      { name: "Pandas", level: 90 },
      { name: "Numpy", level: 90 },
      { name: "Model Evaluation & Tuning", level: 85 },
    ],
  },
  {
    category: "Deep Learning & Neural Networks",
    items: [
      { name: "CNN", level: 85 },
      { name: "RNN/LSTMs", level: 80 },
      { name: "Transformers", level: 80 },
      { name: "Backpropagation & Optimizers", level: 85 },
      { name: "Activation Functions", level: 85 },
      { name: "Loss Functions", level: 90 },
    ],
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "OpenAI API/GPT", level: 85 },
      { name: "Hugging Face Transformers", level: 85 },
      { name: "spaCy", level: 80 },
      { name: "NLTK", level: 75 },
      { name: "Text Classification", level: 85 },
      { name: "Sentiment Analysis", level: 85 },
      { name: "Text Summarization", level: 75 },
    ],
  },
  {
    category: "Computer Vision",
    items: [
      { name: "OpenCV", level: 90 },
      { name: "Image Classification", level: 80 },
      { name: "Object Detection (YOLO,SSD)", level: 80 },
      { name: "Face Recognition", level: 75 },
      { name: "Data Augmentation", level: 80 },
      { name: "Image Processin", level: 80 },
    ],
  },
  {
    category: "MLOps & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 85 },
      { name: "AWS / GCP/ Azure", level: 80 },
      { name: "MLflow / Weights & Biases", level: 80 },
      { name: "FastAPI / Flask", level: 80 },
    ],
  },
  {
    category: "Web Scraping",
    items: [
      { name: "BeautifulSoup", level: 90 },
      { name: "Selenium", level: 85 },
      { name: "Request / HTTP APIs", level: 85 },
      { name: "Data Cleaning & Preprocessin", level: 80 },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Project Management",
  "Agile Methodologies",
  "Technical Writing",
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="section relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      data-aos="fade-up"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/30 via-slate-900/60 to-blue-900/30" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title ai-gradient-text">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional
            capabilities
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 bg-slate-800/60 border border-cyan-500/20 shadow-xl backdrop-blur-md hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 shadow-md"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-6 text-center text-white">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 bg-slate-800/60 border border-cyan-500/20 shadow-md backdrop-blur-md text-center hover:border-emerald-400/40 hover:shadow-emerald-500/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-slate-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
