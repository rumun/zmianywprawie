import { Header } from "@/components/header";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { WhatYouGet } from "@/components/what-you-get";
import { SampleReport } from "@/components/sample-report";
import { Trial } from "@/components/trial";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <About />
        <HowItWorks />
        <WhatYouGet />
        <SampleReport />
        <Trial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
