const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-56 border border-green-300 rounded-lg"
    />
  );
};

export default Input;
