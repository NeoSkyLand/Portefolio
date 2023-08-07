import Image from "next/image";
import PropTypes from "prop-types";

const CardSkills = ({ title, image }) => {
  return (
    <div className="p-8">
      <Image src={image} width={100} height={100} alt="Skills" />
      <h1 className="flex justify-center">{title}</h1>
    </div>
  );
};

CardSkills.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default CardSkills;
