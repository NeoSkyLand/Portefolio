import CardSkills from "@/app/components/tools/cards/skills";
import data from "./data.json";

const Skills = () => {
  return (
    <section className="">
      <div className="flex justify-center pt-4">
        <div className="contain border border-red-500 w-3/4 rounded-2xl lg:w-1/2">
          <div className="flex justify-center pt-4">
            <h1>Mes Compétences</h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-4">
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
