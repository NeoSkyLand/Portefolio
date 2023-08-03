import Main from "@/app/components/layouts/main";
import Introduction from "./sections/introduction";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Timeline from "./sections/timeline";
import Contact from "./sections/contact";

const HomePage = () => {
  return (
    <Main>
      <Introduction />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </Main>
  );
};

export default HomePage;
