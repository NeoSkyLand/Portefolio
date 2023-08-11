import CardTimeline from "@/app/components/tools/cards/timeline";

const Timeline = () => {
  return (
    <section id="timeline" className="contain mx-4 p-4 mt-8">
      <div className="flex justify-center items-center py-4 text-[#a6eff1]">
        <h1>Mon Parcours</h1>
      </div>
      <div className="flex justify-center items-center py-4">
        <CardTimeline />
      </div>
    </section>
  );
};

export default Timeline;
