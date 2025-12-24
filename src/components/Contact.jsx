import React from 'react';

const Contact = () => {
    const styles = {
        container: {
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
        },
        text: {
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontSize: '1.1rem'
        },
        email: {
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            display: 'block'
        }
    };

    return (
        <section id="contact" style={{ padding: '100px 20px' }}>
            <div className="container" style={styles.container}>
                <h2 className="section-title">Get In Touch</h2>
                <p style={styles.text}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    my inbox is always open!
                </p>

                <a href="mailto:akhilbejjanki02@gmail.com" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Say Hello
                </a>

                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <a href="https://github.com/AkhilBejjanki" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }} className="hover-icon">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/bejjankiakhilkrishna" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }} className="hover-icon">
                        LinkedIn
                    </a>
                </div>
            </div>
            <style jsx>{`
                .hover-icon:hover {
                    color: var(--primary) !important;
                }
            `}</style>
        </section>
    );
};

export default Contact;
