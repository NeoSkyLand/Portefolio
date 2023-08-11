import CardProjects from "@/app/components/tools/cards/projects";
import data from "./data.json";

const Projects = () => {
  return (
    <section id="projects" className="contain mx-4 p-4 mt-8">
      <div className="flex justify-center text-[#a6eff1]">
        <h1 className="py-4 ">Mes projets</h1>
      </div>
      <div className="flex justify-center py-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {data.map((project) => {
              return (
                <CardProjects title={project.title} image={project.image} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
