import Header from './components/Header';
import Hero from './components/Hero';
import Rules from './components/Rules';
import ConfessionForm from './components/ConfessionForm';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Rules />
        <ConfessionForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
