import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: scrolled ? '15px 0' : '20px 0',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
            willChange: 'background-color, backdrop-filter, padding'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px'
        },
        logoAccent: {
            color: 'var(--primary)'
        },
        menu: {
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    };

    return (
        <header style={styles.header}>
            <div className="container" style={styles.nav}>
                <a href="#home" style={{ ...styles.logo, cursor: 'pointer', transition: 'var(--transition)' }}>
                    Akhil<span style={styles.logoAccent}>.dev</span>
                </a>
                <nav>
                    <ul style={styles.menu}>
                        {['Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className='nav-link'>
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li style={{ marginLeft: '10px' }}>
                            <a href="#contact" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
