import CardTimeline from "@/app/components/tools/cards/timeline";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="flex justify-center">
<div className="contain-card dark:containD  mt-8 lg:w-1/2 w-4/5">

      <div className="flex justify-center items-center py-4 text-[#07061b] dark:text-[#5ce1e6] font-orbitron text-3xl">
        <h1>Mon Parcours</h1>
      </div>
      <div className="flex justify-center items-center py-4 font-handjetRegular text-2xl">
        <CardTimeline />
      </div>
      </div>
</div>
    </section>
  );
};

export default Timeline;
