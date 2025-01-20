import Link from 'next/link'

const articles = [
  {
    title: 'Coming soon',
    //description: 'Learn the fundamentals of data structures and their importance in computer science.',
    //link: '/learn/data-structures-intro',
  },
  // Add more articles as needed
]

export default function Learn() {
  return (
    <section id="learn" className="py-20">
      <div className="bg-black text-white rounded-lg p-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8">Learn Computer Science</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <Link href={article.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Start learning
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}