import gsap from 'gsap'
import Navbar from './component/Navbar'
import HeroSection from './section/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import MessageSection from './section/MessageSection'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
     
      <div className='h-dvh border-red-400 border-2'>

      </div>
    </main> 
  )
}

export default App
