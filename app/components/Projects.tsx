import Link from 'next/link'

const projects = [
  {
    title: 'Coming soon',
    //description: 'A React-based dashboard for visualizing complex datasets.',
    //github: 'https://github.com/yourusername/data-dashboard',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="bg-black text-white rounded-lg p-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              {/*
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                View on GitHub
              </Link>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}