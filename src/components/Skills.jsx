import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "MVC Architecture"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Pinecone", "Chroma"]
        },
        {
            title: "Tools & Cloud",
            skills: ["Git", "GitHub", "Docker", "AWS (Basic)", "Postman", "Vercel"]
        },
        {
            title: "Languages",
            skills: ["JavaScript", "Python", "SQL"]
        }
    ];

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
        },
        card: {
            background: 'var(--bg-card)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'var(--transition)'
        },
        categoryTitle: {
            color: 'var(--primary)',
            marginBottom: '20px',
            fontSize: '1.4rem'
        },
        skillList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
        },
        skillTag: {
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '8px 16px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'var(--transition)'
        }
    };

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div style={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <div key={index} style={styles.card} className="skill-card">
                            <h3 style={styles.categoryTitle}>{category.title}</h3>
                            <div style={styles.skillList}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} style={styles.skillTag} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .skill-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--primary);
                    box-shadow: 0 10px 30px rgba(0, 229, 255, 0.1);
                }
                .skill-tag:hover {
                    background: rgba(0, 229, 255, 0.1);
                    color: var(--primary);
                    border-color: var(--primary);
                }
            `}</style>
        </section>
    );
};

export default Skills;
