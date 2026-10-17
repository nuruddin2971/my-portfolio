import SmoothScroll from './components/SmoothScroll';
import TopAppBar from './components/TopAppBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#080d1a] text-on-surface selection:bg-tertiary/30 selection:text-slate-900 relative">
        {/* Navigation Bar */}
        <TopAppBar />

        {/* Main Content Sections */}
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
