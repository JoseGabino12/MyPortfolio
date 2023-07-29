import Presentation from './components/Presentation'
import Nav from './components/Nav'
import Scholarship from './components/Scholarship'
import Experience from './components/Additional'
import Contact from './components/Contact'

import { useScrollPosition } from './hooks/useScrollPosition'

const App = () => {
  const scrollPosition = useScrollPosition()

  // Calculate the percentage of scroll position for the gradient
  const gradientPosition = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100

  return (
    <main className='text-white'>

      <div className='snap-mandatory snap-x flex flex-col' style={{ background: `linear-gradient(${gradientPosition}deg, #110c3a 0%, #cc9ea2)` }}>
        <Nav />
        <Presentation />
        <Scholarship />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}

export default App
