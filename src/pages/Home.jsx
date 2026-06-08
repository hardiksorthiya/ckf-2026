import Hero from '../sections/home/Hero';
import Services from '../sections/home/Services';
import Technologies from '../sections/home/Technologies';
import Stats from '../sections/home/Stats';
import Blogs from '../sections/home/Blogs';
import Process from '../sections/home/Process';
import Cta from '../sections/home/Cta';
import Contact from '../sections/home/Contact';


export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Services />
      <Technologies />
      <Stats />
      <Process />
      <Blogs />
      <Contact />
      <Cta />
    </main>
  );
}
