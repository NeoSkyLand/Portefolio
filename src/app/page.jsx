import Header from "@/app/components/layouts/header";
import HomePage from "./home";
import Footer from "@/app/components/layouts/footer";
import ParticlesBg from "@/app/components/tools/particles";
import Aos from "./components/tools/aos";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <ParticlesBg/>
      
    </>
  );
}
