import CardProjects from "@/app/components/tools/cards/projects";
import data from "./data.json";

const Projects = () => {
  return (
    <section>
      <div className="flex justify-center text-[#60e2e7]">
        <h1 className="py-4 ">Mes projets</h1>
      </div>
      <div className="flex justify-center py-8 bg-[#2b69e3] dark:bg-[#1b262c]">
        <div className="contain border border-red-500 rounded-xl w-3/4 lg:w-1/2">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-2 text-[#df00df]">
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
