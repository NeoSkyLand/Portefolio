import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
