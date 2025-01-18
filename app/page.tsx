import Navbar from './components/Navbar'
import About from './components/About'
import ImageCarousel from './components/ImageCarousel'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogposts from './components/Blogposts'
import Learn from './components/Learn'


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <About />
          </div>
          <div className="w-full md:w-1/2">
            <ImageCarousel />
          </div>
        </div>
        <Projects />
        <Skills />
        <Blogposts />
        <Learn />
      </div>
    </main>
  )
}