import './App.css'
import Article from './components/Article'
import Comments from './components/Comments'
import Flag from './components/Flag'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'
import CommentsMobile from './components/mobile/CommentsMobile';

function App() {

  const isMobile = window.matchMedia('(max-width: 470px)').matches;

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Article />
        {isMobile ? (<CommentsMobile />) : (<Comments />)}
        <Flag />
      </main>
      <Footer />
    </div>
  )
}

export default App
