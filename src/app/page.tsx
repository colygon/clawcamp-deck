import {
  Hero,
  CategoryNav,
  SandboxSection,
  OrchestrationSection,
  ManagedSection,
  CloudHostingSection,
  GpuComputeSection,
  MasterTable,
  Sources,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryNav />
      <SandboxSection />
      <OrchestrationSection />
      <ManagedSection />
      <CloudHostingSection />
      <GpuComputeSection />
      <MasterTable />
      <Sources />
      <Footer />
    </main>
  );
}
