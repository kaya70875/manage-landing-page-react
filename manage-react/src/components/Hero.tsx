import illustration from '../assets/illustration-intro.svg'
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero-wrapper">
        <section className="hero-left">
            <header className="hero-header">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            </header>
            <button className="primary-button">Get Started</button>
        </section>

        <section className="hero-right">
            <img src={illustration} alt="hero-illustration" />
        </section>
    </div>
  )
}
