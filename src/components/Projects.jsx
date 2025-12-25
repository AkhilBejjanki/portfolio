import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Subscription Tracker API",
            description:
                "A secure backend system to manage user subscriptions with CRUD operations. Implemented role-based access, authentication, and validation ensuring consistent data operations.",
            tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Postman", "JWT"],
            links: {
                github: "https://github.com/AkhilBejjanki/subscription-tracker-api",
                demo: "https://subscription-tracker-5z66.onrender.com/"
            }
        },
        {
            title: "React Movies Web Application",
            description:
                "Responsive movie browsing application with dynamic UI components. Integrates external APIs for real-time data and features efficient state management and responsive design.",
            tech: ["React.js", "Tailwind CSS", "API Integration", "Vite"],
            links: {
                github: "https://github.com/AkhilBejjanki/movies-react",
                demo: "https://movies-one-flax.vercel.app/"
            }
        }
    ];

    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "40px"
        },
        card: {
            background: "var(--bg-card)",
            padding: "35px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            transition: "var(--transition)"
        },
        content: {
            marginBottom: "20px"
        },
        projectHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
        },
        folderIcon: {
            color: "var(--primary)",
            fontSize: "2.5rem"
        },
        externalLinks: {
            display: "flex",
            gap: "15px"
        },
        title: {
            fontSize: "1.5rem",
            marginBottom: "15px",
            color: "var(--text-primary)"
        },
        description: {
            color: "var(--text-secondary)",
            marginBottom: "20px",
            fontSize: "1rem",
            lineHeight: "1.6"
        },
        techList: {
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "auto",
            listStyle: "none"
        },
        techItem: {
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            fontFamily: "monospace"
        }
    };

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title project-title-main">Projects</h2>

                <div style={styles.grid} className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            className="project-card project-card-box"
                        >
                            <div style={styles.content}>
                                <div style={styles.projectHeader}>
                                    <div style={styles.folderIcon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>

                                    <div style={styles.externalLinks}>
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-hover"
                                            aria-label="GitHub"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>

                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-hover"
                                            aria-label="Live Demo"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <h3 style={styles.title} className="project-title">
                                    {project.title}
                                </h3>

                                <p style={styles.description} className="project-desc">
                                    {project.description}
                                </p>
                            </div>

                            <ul style={styles.techList}>
                                {project.tech.map((item, i) => (
                                    <li key={i} style={styles.techItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive styles */}
            <style>
                {`
          .project-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary);
            box-shadow: 0 15px 30px -10px rgba(0,0,0,0.5);
          }

          .project-card:hover .project-title {
            color: var(--primary);
          }

          .link-hover:hover {
            color: var(--primary) !important;
          }

          /* Tablet */
          @media (max-width: 768px) {
            .projects-grid {
              gap: 20px !important;
            }

            .project-card-box {
              padding: 26px !important;
            }

            .project-title-main {
              font-size: 2rem !important;
            }

            .project-desc {
              font-size: 0.95rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 480px) {
            .projects-grid {
              grid-template-columns: 1fr !important;
            }

            .project-card-box {
              padding: 20px !important;
            }

            .project-title {
              font-size: 1.3rem !important;
            }

            .project-desc {
              font-size: 0.9rem !important;
            }
          }
        `}
            </style>
        </section>
    );
};

export default Projects;
