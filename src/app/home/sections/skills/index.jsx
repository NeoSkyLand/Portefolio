import CardSkills from "@/app/components/tools/cards/skills";
import data from "./data.json";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex justify-center">

      <div className="contain-card dark:containD mx-4 p-4 mt-8 lg:w-1/2 w-3/4">

      <div className="flex justify-center items-center py-4 text-[#07061b] dark:text-[#5ce1e6] font-orbitron text-3xl">
        <h1>Mes Compétences</h1>
      </div>
      <div className="flex justify-center py-4">
        <div className="">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 font-handjetRegular text-[#611a8d] dark:text-[#ebc5f5] text-2xl">
              {data.map((skill) => {
                return(
                  <div key={skill.id}>

                  <CardSkills  image={skill.image} />
                  </div>
                ) 
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

export default Skills;
