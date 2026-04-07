import {
  Hero,
  ComparisonTable,
  PlatformCards,
  UseCases,
  Sources,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformCards />
      <ComparisonTable />
      <UseCases />
      <Sources />
      <Footer />
    </main>
  );
}
