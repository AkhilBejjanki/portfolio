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
            padding: '20px 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
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
            gap: '30px'
        },
        link: {
            color: 'var(--text-secondary)',
            fontWeight: '500',
            position: 'relative'
        }
    };

    return (
        <header style={styles.header}>
            <div className="container" style={styles.nav}>
                <div style={styles.logo}>
                    Akhil<span style={styles.logoAccent}>.dev</span>
                </div>
                <nav>
                    <ul style={styles.menu}>
                        {['Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} style={styles.link} className='nav-link'>
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
