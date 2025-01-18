//import Link from 'next/link' #use this when theres a blogpost Link
const blogposts = [
  {
    title: 'Coming soon',
    //excerpt: 'Learn techniques to improve the performance of your database queries when dealing with large datasets.',
    //link: '/blog/optimizing-database-queries',
  },
  // Add more blog posts as needed
]

export default function Blogposts() {
  return (
    <section id="blogposts" className="py-20">
      <div className="bg-black text-white rounded-lg p-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
        <div className="space-y-8">
          {blogposts.map((post, index) => (
            <div key={index} className="border-b border-gray-800 pb-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              {/*
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={post.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Read more
              </Link>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}