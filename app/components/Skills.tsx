import React from 'react'

const skills = [
  "Built web applications using DJANGO",
  "Integrated deep learning models in FLASK",
  "worked extensively with tensorflow, pandas, numpy, scikit learn",
  "Used database tech like PostgreSQL to integrate with web applications"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="bg-black text-white rounded-lg p-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-gray-800 text-white rounded-lg cursor-default transition-all duration-300 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-center"
              tabIndex={0}
              role="button"
              aria-label={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}