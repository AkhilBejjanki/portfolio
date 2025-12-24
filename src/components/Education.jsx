import React from 'react';

const Education = () => {
    const education = {
        degree: "B.Tech in Electrical and Electronics Engineering",
        institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
        period: "2021 – 2024",
        gpa: "CGPA: 7.38 / 10.0"
    };

    const certifications = [
        {
            name: "Python Programming Certification",
            issuer: "HackerRank",
            link: "https://www.hackerrank.com/certificates/30d0f1ddacf7"
        },
        {
            name: "SQL Certification",
            issuer: "HackerRank",
            link: "https://www.hackerrank.com/certificates/10cf23a1b963"
        }
    ];

    const styles = {
        wrapper: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '50px',
            marginTop: '40px'
        },
        card: {
            background: 'var(--bg-card)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            height: '100%'
        },
        degree: {
            color: 'var(--primary)',
            fontSize: '1.3rem',
            marginBottom: '10px'
        },
        institution: {
            fontSize: '1.1rem',
            marginBottom: '5px',
            color: 'var(--text-primary)'
        },
        meta: {
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '20px'
        },
        certItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            padding: '10px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'var(--transition)'
        },
        certLink: {
            display: 'block',
            textDecoration: 'none'
        }
    };

    return (
        <section id="education">
            <div className="container">
                <div style={styles.wrapper}>
                    {/* Education Column */}
                    <div>
                        <h2 className="section-title" style={{ marginBottom: '40px', display: 'block', textAlign: 'left', left: 0, transform: 'none' }}>Education</h2>
                        <div style={styles.card}>
                            <h3 style={styles.degree}>{education.degree}</h3>
                            <div style={styles.institution}>{education.institution}</div>
                            <div style={styles.meta}>
                                {education.period} | {education.gpa}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h2 className="section-title" style={{ marginBottom: '40px', display: 'block', textAlign: 'left', left: 0, transform: 'none' }}>Certifications</h2>
                        <div style={styles.card}>
                            {certifications.map((cert, index) => (
                                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" style={styles.certLink}>
                                    <div style={styles.certItem} className="cert-item">
                                        <div style={{ flex: 1 }}>
                                            <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{cert.name}</div>
                                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer}</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .cert-item:hover {
                    background: rgba(0, 229, 255, 0.1) !important;
                    transform: translateX(10px);
                }
            `}</style>
        </section>
    );
};

export default Education;
