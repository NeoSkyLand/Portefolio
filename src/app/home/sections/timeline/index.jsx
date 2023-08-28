import CardTimeline from "@/app/components/tools/cards/timeline";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="flex justify-center">
<div className="contain mx-4 p-4 mt-8 lg:w-1/2">

      <div className="flex justify-center items-center py-4 text-[#07061b] dark:text-[#5ce1e6] font-tiltprismRegular">
        <h1>Mon Parcours</h1>
      </div>
      <div className="flex justify-center items-center py-4 font-handjetRegular">
        <CardTimeline />
      </div>
      </div>
</div>
    </section>
  );
};

export default Timeline;
