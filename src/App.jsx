import MyInfo from './components/MyInfo'
import Contact from './components/Contact'

const App = () => {

  return (
    <div className='h-screen p-5'>
      <div className="grid grid-rows-3 h-full">
        <MyInfo />
        <Contact />
      </div>
    </div>
  )
}

export default App
