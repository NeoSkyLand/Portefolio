import CardProjects from "@/app/components/tools/cards/projects";
import data from "./data.json";

const Projects = () => {
  return (
    <section>
      <div className="flex justify-center pt-4">
        <div className="contain border border-red-500 rounded-xl w-3/4 lg:w-1/2">
          <div className="flex justify-center">
            <h1 className="flex justify-center items-center pt-4">
              Mes Projets
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-2">
              {data.map((project) => {
                return (
                  <CardProjects title={project.title} image={project.image} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
