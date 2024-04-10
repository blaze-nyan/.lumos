const Button = ({ setAppear }) => {
  return (
    <div>
      <button
        className="w-30 px-4 py-2 bg-slate-800 rounded-lg text-white mt-4"
        onClick={() => setAppear((prev) => !prev)}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
