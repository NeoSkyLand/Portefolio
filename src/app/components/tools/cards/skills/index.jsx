import Image from "next/image";
import PropTypes from "prop-types";

const CardSkills = ({ title, image }) => {
  return (
    <div>
      <Image src={image} width={50} height={50} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

CardSkills.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default CardSkills;
