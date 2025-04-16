
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PropertyGallery from '@/components/PropertyGallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PropertyGallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
