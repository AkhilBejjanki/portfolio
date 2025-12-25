import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-wrapper">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--bg-secondary)',
          marginTop: '50px'
        }}
      >
        <p>
          © {new Date().getFullYear()} Bejjanki Akhil Krishna. All rights reserved.
        </p>
      </footer>

      {/* Responsive Safe Styles */}
      <style>
        {`
          .main-wrapper {
            padding-top: 80px; /* header offset */
          }

          @media (max-width: 768px) {
            .main-wrapper {
              padding-top: 70px;
            }
          }

          @media (max-width: 480px) {
            .main-wrapper {
              padding-top: 60px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
