import Hero from '../sections/Hero';
import heroImage from '../assets/images/topq.png';

export default function Home() {
  return (
    <main className="home-page">
      <Hero imageSrc={heroImage} />
    </main>
  );
}
