import CardProjects from "@/app/components/tools/cards/projects";
import data from "./data.json";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex justify-center">
        <div className="lg:w-1/2 w-4/5 ">
          <div className="contain-card dark:containD mt-8 ">
            <div className="flex justify-center  text-[#07061b] dark:text-[#5ce1e6] font-orbitron text-3xl">
              <h1 className="py-4 ">Mes projets</h1>
            </div>
            <div className="flex justify-center py-4">
              <div className="flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">
                  {data.map((project) => {
                    return (
                      <div key={project.id}>
                        <CardProjects
                          title={project.title}
                          image={project.image}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
