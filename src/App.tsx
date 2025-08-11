import './App.css'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import About from './components/modules/About'
import { Hero } from './components/modules/Hero'
import SkillsLogoMarquee from './components/modules/SkillsMarquee'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='mt-10'>
        <SkillsLogoMarquee />
      </div>
      <About/>
      <Footer/>
    </>
  )
}

export default App
