import CardSkills from "@/app/components/tools/cards/skills";
import data from "./data.json";

const Skills = () => {
  return (
    <section id="skills" className="contain mx-4 p-4 mt-8">
      <div className="flex justify-center items-center py-4 text-[#a6eff1]">
        <h1>Mes Compétences</h1>
      </div>
      <div className="flex justify-center py-4">
        <div className="">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {data.map((skill) => {
                return <CardSkills title={skill.title} image={skill.image} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
