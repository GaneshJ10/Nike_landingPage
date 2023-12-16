const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-red-600 hover:saturate-125 transition-transform ease-in-out duration-150 hover:scale-110
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
