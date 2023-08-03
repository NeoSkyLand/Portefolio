import CardSkills from "@/app/components/tools/cards/skills";
import data from "./data.json";

const Skills = () => {
  return (
    <section className="">
      <div className="flex justify-center">
        <h1>Mes Compétences</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2">
          {data.map((skill) => {
            return (
              <CardSkills title={skill.title} image={skill.image} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
