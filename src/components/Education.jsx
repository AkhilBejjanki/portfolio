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
        },
        {
            name: "Introduction to Generative AI",
            issuer: "Google Cloud Skills",
            link: "https://www.skills.google/public_profiles/c5061153-441a-4d76-acaa-ade42343f534/badges/12479343"
        }
    ];

    return (
        <section id="education">
            <div className="container">

                {/* GRID */}
                <div className="edu-grid">

                    {/* LEFT — EDUCATION */}
                    <div>
                        <h2 className="section-title edu-title">Education</h2>

                        <div className="edu-box equal-box">
                            <h3 className="edu-degree">
                                {education.degree}
                            </h3>

                            <p className="edu-inst">
                                {education.institution}
                            </p>

                            <p className="edu-meta">
                                {education.period} | {education.gpa}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — CERTIFICATIONS */}
                    <div>
                        <h2 className="section-title edu-title">Certifications</h2>

                        <div className="edu-box equal-box">
                            {certifications.map((cert, i) => (
                                <a
                                    key={i}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-row"
                                >
                                    <div className="cert-text">
                                        <div className="cert-name">{cert.name}</div>
                                        <div className="cert-issuer">{cert.issuer}</div>
                                    </div>

                                    <div className="cert-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
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
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* STYLES */}
            <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-top: 30px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .edu-box {
          background: var(--bg-card);
          padding: 40px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* FORCE BOTH BOXES SAME HEIGHT */
        .equal-box {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .edu-degree {
          color: var(--primary);
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .edu-inst {
          color: var(--text-primary);
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        .edu-meta {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* CERTIFICATION ROW */
        .cert-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          background: rgba(255,255,255,0.06);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 12px;
          text-decoration: none;
          transition: var(--transition);
        }

        .cert-row:hover {
          border-color: var(--primary);
          background: rgba(0,229,255,0.12);
          transform: translateX(6px);
        }

        .cert-text {
          display: flex;
          flex-direction: column;
        }

        .cert-name {
          color: var(--text-primary);
          font-weight: 500;
        }

        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .cert-icon {
          min-width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .cert-row:hover .cert-icon svg {
          transform: scale(1.1);
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .equal-box {
            min-height: auto;
          }

          .edu-box {
            padding: 26px;
          }

          .cert-row {
            padding: 12px 14px;
          }
        }
      `}</style>
        </section>
    );
};

export default Education;
