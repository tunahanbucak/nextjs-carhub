import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";

export default async function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <HomePage />
    </main>
  );
}
