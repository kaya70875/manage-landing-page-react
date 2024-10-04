import './App.css'
import Article from './components/Article'
import Comments from './components/Comments'
import Flag from './components/Flag'
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
        <Comments />
        <Flag />
      </main>
    </div>
  )
}

export default App
