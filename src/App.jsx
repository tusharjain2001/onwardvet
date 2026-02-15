import Features from "./components/Features";
import BookADemo from "./components/BookADemo";
import Hero from "./components/landing";
import Navbar from "./components/Navbar";
import LaunchBanner from "./components/LaunchBanner";

function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Features />
      <LaunchBanner />
      <BookADemo />
    </div>
  );
}

export default App;
