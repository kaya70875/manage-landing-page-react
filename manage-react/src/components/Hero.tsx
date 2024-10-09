import illustration from '../assets/illustration-intro.svg'
import './Hero.css'
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <motion.div className="hero-wrapper"
    initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}>
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
    </motion.div>
  )
}
