type Props = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (value: string) => void;
  disabled?: boolean;
};

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
  disabled = false,
}: Props) => {
  // const buttonRef = useRef();
  return (
    <div
      className="grid gap-3 pb-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))" }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            className={`keyboard-button ${isActive ? "active" : ""} ${
              isInActive ? "inactive" : ""
            } bg-gray-100 py-6 uppercase font-bold text-2xl border-2 border-black`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
