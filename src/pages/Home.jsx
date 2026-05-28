import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Technologies from '../sections/Technologies';
import Stats from '../sections/Stats';
import Blogs from '../sections/Blogs';
import heroImage from '../assets/images/topq.png';

export default function Home() {
  return (
    <main className="home-page">
      <Hero imageSrc={heroImage} />
      <Services />
      <Technologies />
      <Stats />
      <Blogs />
    </main>
  );
}
