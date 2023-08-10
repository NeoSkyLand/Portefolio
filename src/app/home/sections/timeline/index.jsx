import CardTimeline from "@/app/components/tools/cards/timeline";

const Timeline = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center py-4 text-[#60e2e7]">
        <h1>Mon Parcours</h1>
      </div>
      <div className="flex justify-center items-center bg-[#2b69e3] dark:bg-[#1b262c]">
        <div className="contain lg:flex hidden border rounded-2xl w-3/4 border-red-500 lg:w-1/2">

        <CardTimeline />
        </div>
        </div>
        <div className="lg:hidden flex">

        <div>
          <ul>
            <li>7 juin 2023 au 23 Fevrier 2024:Formation Devellopeur Web et Web Mobile avec OnlineFormapro sur Meaux (77)</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
        </div>
    </section>
  );
};

export default Timeline;
