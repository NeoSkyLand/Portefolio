import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
const CardProjects = ({ image, title, link}) => {
  return (
    <>
        {/* <Link href={link}> */}
      <div className="p-8">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className="flex justify-center"
          />
        <h1 className="flex justify-center">{title}</h1>
      </div>
          {/* </Link> */}
    </>
  );
};
  CardProjects.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
  };

export default CardProjects;
