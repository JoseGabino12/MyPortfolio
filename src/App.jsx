import Presentation from './components/Presentation'
import Contact from './components/Contact'
import Scholarship from './components/Scholarship'

const App = () => {
  return (
    <main className='bg-black text-white'>
      <Presentation />
      <Scholarship />
      <Contact />
    </main>
  )
}

export default App
