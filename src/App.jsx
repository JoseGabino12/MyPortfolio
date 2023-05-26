import Presentation from './components/Presentation'
import Nav from './components/Nav'
import Scholarship from './components/Scholarship'
import Experience from './components/Additional'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='bg-gradient-to-r from-[#110c3a] to-[#cc9ea2] text-white bg-origin-border'>
      <Nav />
      <Presentation />
      <Scholarship />
      <Experience />
      <Contact />
    </main>
  )
}

export default App
