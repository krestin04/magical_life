import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NewsBanners from './components/NewsBanners';
import AboutSection from './components/AboutSection';
import TeachersSection from './components/TeachersSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <NewsBanners />
        <AboutSection />
        <TeachersSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
