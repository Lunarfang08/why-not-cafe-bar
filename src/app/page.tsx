import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Vibe } from "@/components/Vibe";
import { Menu } from "@/components/Menu";
import { LiveMusic } from "@/components/LiveMusic";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Vibe />
      <Menu />
      <LiveMusic />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  );
}
