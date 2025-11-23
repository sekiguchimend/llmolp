import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <main className="space-y-0">
      </main>

      <Footer />
    </div>
  );
}

export default App;