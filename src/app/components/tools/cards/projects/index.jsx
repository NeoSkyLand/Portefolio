import Image from "next/image";
const CardProjects = (image, title) => {
    return (
        <>
        <div>
      <Image src={image} width={50} height={50} alt="" />
      <h1>{title}</h1>
    </div>
        </>
    )
}

export default CardProjects;