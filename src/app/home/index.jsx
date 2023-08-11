import Main from "@/app/components/layouts/main";
import Introduction from "./sections/introduction";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Timeline from "./sections/timeline";
import Contact from "./sections/contact";
import ParticlesBg from "@/app/components/tools/particles";

const HomePage = () => {
  return (
    <Main>
      <Introduction />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <ParticlesBg />
    </Main>
  );
};

export default HomePage;
