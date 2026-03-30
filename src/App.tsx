import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { ParallaxBanner } from './components/sections/ParallaxBanner';
import { GamesShowcase } from './components/sections/GamesShowcase';
import { About } from './components/sections/About';
import { Credentials } from './components/sections/Credentials';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Stats />
      <ParallaxBanner />
      <GamesShowcase />
      <About />
      <Credentials />
      <Footer />
    </div>
  );
}

export default App;
