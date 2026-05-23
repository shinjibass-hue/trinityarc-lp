import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import CompanyInfo from "@/components/CompanyInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
