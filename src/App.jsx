import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTop from "./components/ScrollTop";
import WhyChoose from "./components/WhyChoose";
import Occasions from "./components/Occasions";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Occasions />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </>
  );
}

export default App;