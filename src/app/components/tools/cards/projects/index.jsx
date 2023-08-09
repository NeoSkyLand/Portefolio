import Image from "next/image";
const CardProjects = ({ image, title }) => {
  return (
    <>
      <div className="p-8">
        

        <div className="border rounded p-2">

        <Image src={image} width={100} height={100} alt=""  className="flex justify-center"/>
        <h1 className="flex justify-center">{title}</h1>
      </div>
        </div>
    </>
  );
};

export default CardProjects;
