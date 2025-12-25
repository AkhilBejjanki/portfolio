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
        socialContainer: {
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
        }
    };

    return (
        <section id="contact" style={{ padding: '100px 20px' }}>
            <div className="container" style={styles.container}>
                <h2 className="section-title">Get In Touch</h2>

                <p style={styles.text} className="contact-text">
                    I’m currently open to new opportunities and collaborations. If you’d like to connect, feel free to reach out
                </p>

                <a
                    href="mailto:akhilbejjanki02@gmail.com"
                    className="btn btn-primary"
                    style={{ marginTop: '20px' }}
                >
                    Say Hello
                </a>

                <div style={styles.socialContainer}>
                    <a
                        href="https://github.com/AkhilBejjanki"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
                        className="hover-icon"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bejjankiakhilkrishna"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
                        className="hover-icon"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Responsive CSS */}
            <style>
                {`
          .hover-icon:hover {
            color: var(--primary) !important;
          }

          @media (max-width: 768px) {
            #contact {
              padding: 80px 18px !important;
            }

            .contact-text {
              font-size: 1rem !important;
              margin-bottom: 30px !important;
            }
          }

          @media (max-width: 480px) {
            #contact {
              padding: 70px 14px !important;
            }

            .contact-text {
              font-size: 0.95rem !important;
            }

            .hover-icon {
              font-size: 1.3rem !important;
            }
          }
        `}
            </style>
        </section>
    );
};

export default Contact;
