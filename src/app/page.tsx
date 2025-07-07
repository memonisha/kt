import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Research />
      {/* More sections will go here */}
    </main>
  );
}
