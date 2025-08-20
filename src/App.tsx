import './App.css'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import About from './components/modules/About'
import { Hero } from './components/modules/Hero'
import Project from './components/modules/Project'
import Skills from './components/modules/Skills'
import SkillsLogoMarquee from './components/modules/SkillsMarquee'
import Testimonial from './components/modules/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='mt-10'>
        <SkillsLogoMarquee />
      </div>
      <About />
      <Skills/>
      <Project/>
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
