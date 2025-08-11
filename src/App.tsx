import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/modules/Hero'
import SkillsLogoMarquee from './components/modules/SkillsMarquee'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='mt-10'>
        <SkillsLogoMarquee />
      </div>
    </>
  )
}

export default App
