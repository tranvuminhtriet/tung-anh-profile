import React from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type Education = {
  institution: string;
  degree: string;
  year: string;
};

const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Frontend Developer",
    period: "2021 - Present",
    description:
      "Built and maintained responsive web apps using React, TypeScript, and Tailwind.",
  },
  {
    company: "Web Studio",
    role: "Junior Developer",
    period: "2019 - 2021",
    description:
      "Assisted in building client websites, optimized performance and accessibility.",
  },
];

const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "B.Sc. in Computer Science",
    year: "2015 - 2019",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10 border border-gray-100">
        {/* Header */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Doan Vo Tung Anh
          </h1>
          <p className="text-lg text-gray-500 mt-1">Frontend Developer</p>
          <p className="text-sm text-gray-600 mt-2">
            📧 john@example.com | 🌐 johndoe.dev | 📍 San Francisco, CA
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
            Skills
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Next.js",
              "Node.js",
              "Figma",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
            Experience
          </h2>
          <div className="space-y-6 mt-4">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                <p className="text-sm text-gray-500">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-1 text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
            Education
          </h2>
          <div className="space-y-4 mt-4">
            {education.map((edu) => (
              <div key={edu.institution}>
                <h3 className="text-lg font-bold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-500">
                  {edu.institution} • {edu.year}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
