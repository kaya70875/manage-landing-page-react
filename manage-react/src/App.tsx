import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
