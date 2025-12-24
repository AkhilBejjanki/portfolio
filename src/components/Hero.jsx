import React from 'react';

const Hero = () => {
    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        },
        content: {
            maxWidth: '800px',
            zIndex: 2
        },
        greeting: {
            color: 'var(--primary)',
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'block'
        },
        title: {
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #fff, #999)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        subtitle: {
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
        },
        description: {
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '3rem',
            maxWidth: '600px'
        },
        actions: {
            display: 'flex',
            gap: '20px'
        }
    };

    return (
        <section style={styles.section} id="home">
            <div className="container">
                <div style={styles.content}>
                    <span style={styles.greeting} className="fade-in">Hi, my name is</span>
                    <h1 style={{ ...styles.title, animationDelay: '0.1s' }} className="fade-in">Bejjanki Akhil Krishna.</h1>
                    <h2 style={{ ...styles.subtitle, animationDelay: '0.2s' }} className="fade-in">I build things for the web.</h2>

                    <p style={{ ...styles.description, animationDelay: '0.3s' }} className="fade-in">
                        Full Stack Developer specializing in building exceptional digital experiences.
                        Currently creating production-ready features and gamification systems at
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}> Dehix</span>.
                    </p>

                    <div style={{ ...styles.actions, animationDelay: '0.4s' }} className="fade-in">
                        <a href="#projects" className="btn btn-primary">Check out my work</a>
                        <a href="mailto:akhilbejjanki02@gmail.com" className="btn btn-outline">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
