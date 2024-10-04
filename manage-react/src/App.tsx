import './App.css'
import Article from './components/Article'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Article />
      </main>
    </div>
  )
}

export default App
