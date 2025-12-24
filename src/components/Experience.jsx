import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Dehix",
            role: "Full Stack Developer Intern",
            period: "Nov 2025 – Present",
            location: "Remote",
            description: [
                "Developed and maintained production-ready features using JavaScript, Node.js, React, and MongoDB, improving application reliability.",
                "Fixed high-priority bugs, optimized backend logic, and enhanced REST APIs to ensure stable and seamless user experience.",
                "Designed and implemented gamification modules including badges, levels, streaks, leaderboard, and rewards to increase user engagement.",
                "Collaborated with team members, participated in code reviews, followed clean code practices and Git workflows.",
                "Contributed to testing, debugging, and performance improvements across backend and frontend features."
            ]
        }
    ];

    const styles = {
        timeline: {
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 0'
        },
        item: {
            background: 'var(--bg-card)',
            padding: '40px',
            borderRadius: '20px',
            marginBottom: '30px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            transition: 'var(--transition)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '10px'
        },
        role: {
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            fontWeight: '600'
        },
        company: {
            color: 'var(--primary)',
            fontSize: '1.2rem',
            marginBottom: '5px'
        },
        period: {
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontStyle: 'italic'
        },
        list: {
            listStyle: 'none',
            padding: 0
        },
        listItem: {
            position: 'relative',
            paddingLeft: '25px',
            marginBottom: '15px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
        }
    };

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div style={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={styles.item} className="experience-card">
                            <div style={styles.header}>
                                <div>
                                    <h3 style={styles.role}>{exp.role}</h3>
                                    <div style={styles.company}>{exp.company}</div>
                                </div>
                                <div style={styles.period}>{exp.period} | {exp.location}</div>
                            </div>
                            <ul style={styles.list}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={styles.listItem} className="exp-bullet">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .experience-card:hover {
                    border-color: var(--primary);
                    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
                }
                .exp-bullet::before {
                    content: '▹';
                    position: absolute;
                    left: 0;
                    color: var(--primary);
                }
            `}</style>
        </section>
    );
};

export default Experience;
