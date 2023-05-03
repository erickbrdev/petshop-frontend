import Available from "../components/Available";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Description from "../components/Description";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Description />

      <Gallery />

      <Available />

      <Services />

      <Contact />

      <About />

      <Footer />
    </main>
  );
}
