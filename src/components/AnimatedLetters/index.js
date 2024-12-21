//import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`inline-block opacity-0 animate-bounce-in ${
            letterClass === "text-animate-hover"
              ? "hover:animate-none hover:text-orange-500"
              : ""
          }`}
          style={{
            animationDelay: `${(i + idx) / 12}s`, // Tailwind requires inline style for dynamic delays
            animationFillMode: "forwards",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;



