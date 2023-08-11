import Header from "@/app/components/layouts/header";
import HomePage from "./home";
import Footer from "@/app/components/layouts/footer";
import ParticlesProvider from "./components/context/particlesProvider";
import ReturnToTop from "./components/tools/returnToTop";

export default function Home() {
  return (
    <ParticlesProvider>
      <Header />
      <HomePage />
      <Footer />
      <ReturnToTop />
    </ParticlesProvider>
  );
}
