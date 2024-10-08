import './Navbar.css';
import Logo from '../assets/logo.svg';
import hamburgerImg from '../assets/icon-hamburger.svg';
import hamburgerClose from '../assets/icon-close.svg';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        const nav = document.querySelector('.links');
        const background = document.querySelector('.app');
        nav?.classList.toggle('active');

        if(nav?.classList.contains('active')) {
            setIsOpen(true);
            background?.classList.add('blur');
        } else {
            background?.classList.remove('blur');
            setIsOpen(false);
        }
    }
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
            <button className='hamburger-button' onClick={handleClick}>
                {isOpen ? (
                    <img src={hamburgerClose} alt="hamburger-close" />
                ) : (
                    <img src={hamburgerImg} alt="hamburger-open" />
                )}
            </button>
        </div>
        <button className="primary-button" data-name='nav'>Get Started</button>

    </nav>
  )
}
