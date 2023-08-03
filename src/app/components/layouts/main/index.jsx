import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="mt-28">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
