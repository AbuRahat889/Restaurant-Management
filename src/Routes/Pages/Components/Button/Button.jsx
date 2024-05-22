const Button = ({text}) => {
  return (
    <div>
      <div className="text-center my-5 mt-5">
        <button className="px-5 py-1 h-auto border-black border-b-4 rounded-xl text-2xl">
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
