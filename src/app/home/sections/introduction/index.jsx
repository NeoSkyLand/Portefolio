const Introduction = () => {
  return (
    <section className="">
      <div className="w-full h-screen bg-[url('https://images7.alphacoders.com/654/654644.jpg')] bg-no-repeat bg-cover ">
        <div>
          <h1 className=" text-fuchsia-300 flex justify-center items-center pt-80 pl-10 lg:pl-20 text-4xl">
            BIENVENUE SUR LE PORTEFOLIO
          </h1>
          <h1 className=" text-fuchsia-300 flex justify-center items-center pt-20 pl-10 lg:pl-20 text-4xl">
            DE LUCAS MARCHAND-PORET
          </h1>
        </div>
      </div>
<div>

      <h1 className="flex justify-center py-4">
              A propos
            </h1>
</div>
      <div className="grid grid-cols-2 bg-[#2b69e3] p-4">
        <div className=" rounded-full justify-center flex pt-6">
          <img
            src="https://img.freepik.com/premium-photo/3d-low-poly-plexus-design-with-bright-colours-generative-ai_881377-3790.jpg"
            alt="Photo"
            width={100}
            height={100}
            />
            </div>
        <div className=" flex justify-center pt-6">
          <div className=" contain border  rounded-xl w-3/4 lg:w-1/2">
            
            <p className="flex justify-center text-sm px-8 pb-4">
              Bonjour je m'appelle Lucas Marchand-Poret j'ai 25ans. Je suis
              Devellopeur web et web mobile en sorti de formation.{" "}
            </p>
        </div>
          </div>
        </div>
    </section>
  );
};
export default Introduction;
