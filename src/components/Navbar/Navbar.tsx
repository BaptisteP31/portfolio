import './Navbar.css';
import { NavItem } from './NavItem';
import { useState, useEffect } from 'react';

const links = [
    {
        "name": "Home",
        "link": "index.html"
    },
    {
        "name": "About",
        "link": "about.html"
    }
]

export function Navabar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 0;

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <p>
                Baptiste Paqueriaud
            </p>
            <ul>
                {links.map((link) => NavItem({name:link.name, link:link.link}))}
            </ul>
        </div>
    )
}

