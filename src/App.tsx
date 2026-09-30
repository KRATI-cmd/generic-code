import { Header } from "./components/layout/Header";
import { MobileStickyBar } from "./components/layout/MobileStickyBar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Gallery } from "./components/sections/Gallery";
import { Process } from "./components/sections/Process";
import { ServiceAreas } from "./components/sections/ServiceAreas";
import { Testimonials } from "./components/sections/Testimonials";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
