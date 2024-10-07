import './Navbar.css';
import Logo from '../assets/logo.svg';
import hamburgerImg from '../assets/icon-hamburger.svg';

export default function Navbar() {
  return (
    <nav>
        <section className="logo">
            <img src={Logo} alt="logo" />
        </section>

        <section className="links">
            <ul className="list-items">
                <li className="list-item">
                    <a href="#">Pricing</a>
                </li>

                <li className="list-item">
                    <a href="#">Product</a>
                </li>

                <li className="list-item">
                    <a href="#">About Us</a>
                </li>

                <li className="list-item">
                    <a href="#">Careers</a>
                </li>

                <li className="list-item">
                    <a href="#">Community</a>
                </li>
            </ul>
        </section>
        <div className="hamburger-menu">
            <img src={hamburgerImg} />
        </div>
        <button className="primary-button" data-name='nav'>Get Started</button>

    </nav>
  )
}
