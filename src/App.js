
import './App.css';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Project from './components/project/Project';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/Services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
    <Header />

    <main className="main">
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Project />
    <Testimonials />
    <Contact />
    </main>

    <Footer />
    <ScrollUp />
   
    
    </>
  
  );
}

export default App;
