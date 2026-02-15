import Features from "./components/Features";
import BookADemo from "./components/BookADemo";
import Footer from "./components/Footer";
import Hero from "./components/landing";
import Navbar from "./components/Navbar";
import LaunchBanner from "./components/LaunchBanner";

import logo from "./assets/logo.svg";
import dog from "./assets/dog.svg";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <LaunchBanner />
      <BookADemo />
      <Footer
        logoSrc={logo}
        dogSrc={dog}
        igIconSrc={instagram}
        xIconSrc={twitter}
        fbIconSrc={facebook}
      />
    </div>
  );
}

export default App;
